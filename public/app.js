// Secret Santa : parcours et mise en scène.
import { startSnow, overlay, sound, reduceMotion } from './fx.js';

const $ = (sel) => document.querySelector(sel);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const rand = (a, b) => a + Math.random() * (b - a);

// ---------- Stockage local (protégé : certains navigateurs le bloquent) ----------
const store = {
  get: (k) => { try { return localStorage.getItem(`santa:${k}`); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(`santa:${k}`, v); } catch { /* ignoré */ } },
  del: (k) => { try { localStorage.removeItem(`santa:${k}`); } catch { /* ignoré */ } },
};

// ---------- Appels au serveur ----------
async function api(path, { method = 'GET', body } = {}) {
  const headers = { 'content-type': 'application/json' };
  const token = store.get('token');
  if (token) headers.authorization = `Bearer ${token}`;
  let res;
  try {
    res = await fetch(`/api/${path}`, { method, headers, body: body ? JSON.stringify(body) : undefined });
  } catch {
    throw Object.assign(new Error('Connexion impossible. Vérifie ton réseau et réessaie.'), { status: 0 });
  }
  let data = {};
  try { data = await res.json(); } catch { /* réponse vide */ }
  if (!res.ok) throw Object.assign(new Error(data.error || 'Une erreur est survenue. Réessaie.'), { status: res.status, data });
  return data;
}

const state = { people: [], event: null, selected: null, reveal: null, opening: false };

// ---------- Navigation entre écrans ----------
const screens = { home: $('#screen-home'), question: $('#screen-question'), gift: $('#screen-gift') };
let current = 'home';

function show(name, { push = true, animate = true } = {}) {
  if (name === current && !screens[name].hidden) return;
  Object.entries(screens).forEach(([key, el]) => { el.hidden = key !== name; });
  screens[name].classList.remove('is-entering');
  void screens[name].offsetWidth;
  if (!reduceMotion && animate) screens[name].classList.add('is-entering');
  window.scrollTo({ top: 0 });
  if (push) { try { history.pushState({ screen: name }, ''); } catch { /* cadre restreint */ } }
  current = name;
  if (name === 'gift') startGiftLoop();
}

window.addEventListener('popstate', (e) => {
  const target = e.state?.screen || 'home';
  if (target === 'home') goHome({ push: false });
  else show(target, { push: false });
});

// ---------- Décor : étoiles et relief ----------
(function makeStars() {
  const box = $('#stars');
  const n = window.innerWidth < 600 ? 55 : 90;
  let html = '';
  for (let i = 0; i < n; i++) {
    const s = rand(1, 2.4).toFixed(1);
    html += `<i style="left:${rand(0, 100).toFixed(2)}%;top:${rand(0, 100).toFixed(2)}%;width:${s}px;height:${s}px;animation-delay:${rand(-4, 0).toFixed(2)}s;animation-duration:${rand(2.4, 5).toFixed(2)}s"></i>`;
  }
  box.innerHTML = html;
})();

const root = document.documentElement;
let scrollRaf = 0;
let lastScroll = window.scrollY;
window.addEventListener('scroll', () => {
  if (scrollRaf) return;
  scrollRaf = requestAnimationFrame(() => {
    scrollRaf = 0;
    const y = window.scrollY;
    root.style.setProperty('--sc', y.toFixed(0));
    kickTags((y - lastScroll) * 0.05);
    lastScroll = y;
  });
}, { passive: true });
window.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return;
  root.style.setProperty('--px', ((e.clientX / window.innerWidth - 0.5) * 2).toFixed(3));
}, { passive: true });

// ---------- Guirlande : une ampoule par participant ----------
const BULB_COLORS = ['#f2c14e', '#e5484d', '#fff4dc', '#57b98a'];
const litNames = () => new Set(state.people.filter((p) => p.revealed).map((p) => p.name));

function drawGarland(lit = new Set()) {
  const svg = $('#garland');
  const w = Math.max(320, window.innerWidth);
  const h = svg.getBoundingClientRect().height || 84;
  const n = state.people.length || 10;
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  const sag = h * 0.42;
  const top = 6;
  const wire = `M -10 ${top} Q ${w * 0.25} ${top + sag * 2} ${w * 0.5} ${top + 4} Q ${w * 0.75} ${top + sag * 2} ${w + 10} ${top}`;
  svg.innerHTML = `<defs><filter id="halo" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="6"/></filter></defs><path class="garland__wire" d="${wire}"/>`;
  const path = svg.querySelector('path');
  const total = path.getTotalLength();
  const margin = total * 0.05;
  const step = (total - margin * 2) / (n - 1);
  let html = '';
  for (let i = 0; i < n; i++) {
    const p = path.getPointAtLength(margin + step * i);
    const person = state.people[i];
    const on = person && lit.has(person.name);
    html += `<g class="bulb${on ? ' is-lit' : ''}" data-index="${i}" style="--c:${BULB_COLORS[i % 4]};--d:${((i * 0.37) % 2.2).toFixed(2)}s" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})"><circle class="bulb__halo" cx="0" cy="14" r="13" filter="url(#halo)"/><rect class="bulb__cap" x="-3.5" y="0" width="7" height="6" rx="1.5"/><path class="bulb__glass" d="M0 5 C 6 7, 7 16, 0 23 C -7 16, -6 7, 0 5 Z"/></g>`;
  }
  svg.insertAdjacentHTML('beforeend', html);
}

async function lightGarland() {
  const lit = litNames();
  drawGarland(new Set());
  if (reduceMotion) { drawGarland(lit); return; }
  await wait(700);
  for (const bulb of document.querySelectorAll('.bulb')) {
    const person = state.people[Number(bulb.dataset.index)];
    if (person && lit.has(person.name)) { bulb.classList.add('is-lit'); await wait(150); }
  }
}

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => drawGarland(litNames()), 150);
});

// ---------- Accueil ----------
function parisToday() {
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

function renderCountdown() {
  if (!state.event) return;
  const [y, m, d] = state.event.date.split('-').map(Number);
  const [ty, tm, td] = parisToday().split('-').map(Number);
  const days = Math.round((Date.UTC(y, m - 1, d) - Date.UTC(ty, tm - 1, td)) / 86400000);
  $('#date-label').textContent = state.event.label;
  $('#countdown').textContent = days > 1 ? `Plus que ${days} jours` : days === 1 ? 'C\'est demain !' : days === 0 ? 'C\'est aujourd\'hui !' : 'C\'était le 20 décembre';
}

function renderProgress() {
  const total = state.people.length;
  const done = state.people.filter((p) => p.revealed).length;
  $('#progress').textContent =
    done === 0 ? 'Personne n\'a encore pioché. À toi de commencer !' :
    done === total ? 'Tout le monde a pioché. Rendez-vous le 20 décembre !' :
    done === 1 ? `1 sur ${total} a déjà pioché.` : `${done} sur ${total} ont déjà pioché.`;
}

// Étiquettes suspendues : petit moteur de balancier (ressort amorti).
const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>';
let swings = [];
let swingRaf = 0;
let swingLast = 0;

function swingStep(now) {
  const dt = Math.min(48, now - swingLast) / 16.67;
  swingLast = now;
  let moving = false;
  for (const s of swings) {
    s.v += (-0.012 * (s.a - s.base) - 0.045 * s.v) * dt;
    s.a += s.v * dt;
    s.a = Math.max(-35, Math.min(35, s.a));
    s.el.style.transform = `rotate(${s.a.toFixed(2)}deg)`;
    if (Math.abs(s.a - s.base) > 0.05 || Math.abs(s.v) > 0.01) moving = true;
  }
  swingRaf = moving ? requestAnimationFrame(swingStep) : 0;
}
function runSwings() {
  if (reduceMotion || swingRaf) return;
  swingLast = performance.now();
  swingRaf = requestAnimationFrame(swingStep);
}
function kickTags(amount) {
  if (!swings.length || current !== 'home' || !amount) return;
  swings.forEach((s, i) => { s.v += amount * (i % 2 ? 1 : -0.8) * (0.8 + (i % 3) * 0.15); });
  runSwings();
}

function renderTags({ drop = false } = {}) {
  const list = $('#tags');
  list.innerHTML = '';
  swings = [];
  state.people.forEach((person, index) => {
    const li = document.createElement('li');
    const pin = document.createElement('span');
    pin.className = 'pin';
    const swing = document.createElement('div');
    swing.className = 'swing';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tag';
    btn.dataset.name = person.name;
    const name = document.createElement('span');
    name.className = 'tag__name';
    name.textContent = person.name;
    btn.append(name);
    if (person.revealed) {
      const st = document.createElement('span');
      st.className = 'tag__state';
      st.innerHTML = `${STAR}<span>a déjà pioché</span>`;
      btn.append(st);
      btn.setAttribute('aria-label', `${person.name}, a déjà pioché`);
    }
    const s = { el: swing, base: rand(-2.5, 2.5), a: 0, v: 0 };
    s.a = drop && !reduceMotion ? s.base + (index % 2 ? 1 : -1) * rand(16, 26) : s.base;
    swing.style.transform = `rotate(${s.a.toFixed(2)}deg)`;
    swings.push(s);
    btn.addEventListener('pointerdown', () => { s.v += (index % 2 ? -1 : 1) * 1.6; runSwings(); });
    btn.addEventListener('click', () => selectName(person.name, btn));
    swing.append(btn);
    li.append(pin, swing);
    if (drop && !reduceMotion) li.animate([{ opacity: 0, transform: 'translateY(-26px)' }, { opacity: 1, transform: 'none' }], { duration: 650, delay: 250 + index * 70, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'backwards' });
    list.append(li);
  });
  if (drop) setTimeout(runSwings, 250);
}

async function loadState({ drop = false } = {}) {
  const data = await api('state');
  state.people = data.people;
  state.event = data.event;
  renderCountdown();
  renderProgress();
  renderTags({ drop });
}

async function goHome({ push = true } = {}) {
  show('home', { push });
  try { await loadState(); drawGarland(litNames()); } catch { /* on garde l'affichage précédent */ }
}

// ---------- Contrôle d'identité (scanner d'empreinte, pour rire) ----------
const check = $('#check');
const scanner = $('#scanner');
const scanStatus = $('#scan-status');
const checkDone = $('#check-done');
const HOLD_MS = reduceMotion ? 700 : 1900;
const SCAN_STEPS = ['Lecture de l\'empreinte…', 'Comparaison avec la liste des gentils…', 'Consultation de l\'historique des cadeaux…'];
const VERDICTS = [
  (n) => `Empreinte reconnue. ${n}, 98 % gentil, 2 % « je l'ai trouvé sur Vinted ».`,
  () => 'Identité confirmée. Aucune paire de chaussettes offerte à ce jour, bravo.',
  () => 'C\'est bien toi. Le Père Noël te fait confiance. Les lutins, moins.',
  () => 'Analyse terminée : statut « gentil », valable jusqu\'au 20 décembre, sous réserve.',
  () => 'Empreinte valide. Taux de chocolat détecté : élevé, mais dans les normes.',
  () => 'Profil vérifié. Cadeaux achetés à la station-service : aucun. Ne gâche pas tout.',
];

function setScan(text, kind = '') {
  scanStatus.textContent = text;
  scanStatus.className = `scan-status${kind ? ` is-${kind}` : ''}`;
}

let hold = { active: false, start: 0, raf: 0, done: false, busy: false, ticks: 0 };

function resetCheck(name) {
  hold = { active: false, start: 0, raf: 0, done: false, busy: false, ticks: 0 };
  check.classList.remove('is-verified', 'is-reset');
  check.style.setProperty('--p', 0);
  scanner.classList.remove('is-scanning', 'is-done');
  scanner.disabled = false;
  checkDone.hidden = true;
  setScan('Pose ton pouce ici et laisse-le appuyé');
  const person = state.people.find((p) => p.name === name);
  const warn = $('#check-warn');
  warn.hidden = !person?.revealed;
  if (person?.revealed) warn.textContent = `${name} a déjà ouvert son cadeau. Si c'est toi, scanne ton pouce pour le revoir. Sinon, repose ce téléphone : les lutins prennent des notes.`;
  $('#fineprint').textContent = `En continuant, tu certifies sur l'honneur être ${name}. Toute usurpation sera punie d'un cadeau acheté au tabac du coin.`;
}

function scanTick() {
  const p = Math.min(1, (performance.now() - hold.start) / HOLD_MS);
  check.style.setProperty('--p', p.toFixed(3));
  const step = SCAN_STEPS[Math.min(SCAN_STEPS.length - 1, Math.floor(p * SCAN_STEPS.length))];
  if (scanStatus.textContent !== step) setScan(step);
  const t = Math.floor(p * 12);
  if (t > hold.ticks) { hold.ticks = t; sound.tick(); }
  if (p >= 1) { finishScan(); return; }
  if (hold.active) hold.raf = requestAnimationFrame(scanTick);
}

function startHold(e) {
  if (hold.done || hold.busy || hold.active) return;
  e?.preventDefault?.();
  hold.active = true;
  hold.ticks = 0;
  hold.start = performance.now();
  check.classList.remove('is-reset');
  scanner.classList.add('is-scanning');
  sound.unlock();
  navigator.vibrate?.(12);
  scanTick();
}

function stopHold() {
  if (!hold.active || hold.done) return;
  hold.active = false;
  cancelAnimationFrame(hold.raf);
  scanner.classList.remove('is-scanning');
  check.classList.add('is-reset');
  check.style.setProperty('--p', 0);
  setScan('Trop rapide. Les lutins sont lents, laisse ton pouce appuyé.', 'error');
}

async function finishScan() {
  hold.active = false;
  hold.done = true;
  hold.busy = true;
  scanner.classList.remove('is-scanning');
  try {
    const data = await api('enter', { method: 'POST', body: { name: state.selected } });
    store.set('token', data.token);
    store.set('name', state.selected);
    state.reveal = null;
    scanner.classList.add('is-done');
    scanner.disabled = true;
    check.classList.add('is-verified');
    setScan(VERDICTS[Math.floor(Math.random() * VERDICTS.length)](state.selected), 'result');
    sound.seal();
    navigator.vibrate?.([20, 50, 30]);
    const r = scanner.getBoundingClientRect();
    overlay.sparkle(r.left + r.width / 2, r.top + r.height / 2, 26, r.width * 0.45);
    checkDone.hidden = false;
  } catch (err) {
    hold.done = false;
    check.classList.add('is-reset');
    check.style.setProperty('--p', 0);
    setScan(err.message, 'error');
  } finally {
    hold.busy = false;
  }
}

scanner.addEventListener('pointerdown', (e) => { scanner.setPointerCapture?.(e.pointerId); startHold(e); });
scanner.addEventListener('pointerup', stopHold);
scanner.addEventListener('pointercancel', stopHold);
scanner.addEventListener('lostpointercapture', stopHold);
scanner.addEventListener('contextmenu', (e) => e.preventDefault());
scanner.addEventListener('keydown', (e) => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) startHold(e); });
scanner.addEventListener('keyup', (e) => { if (e.key === ' ' || e.key === 'Enter') stopHold(); });
$('#enter-btn').addEventListener('click', () => openGiftScreen());

async function selectName(name, tagEl) {
  state.selected = name;
  if (store.get('token') && store.get('name') === name) { openGiftScreen(); return; }
  const qName = $('#q-name');
  qName.textContent = name;
  resetCheck(name);
  const nameEl = tagEl?.querySelector('.tag__name');
  if (nameEl && document.startViewTransition && !reduceMotion) {
    // Le prénom de l'étiquette glisse jusqu'au titre « Salut … ».
    nameEl.style.viewTransitionName = 'picked-name';
    const vt = document.startViewTransition(() => {
      nameEl.style.viewTransitionName = '';
      qName.style.viewTransitionName = 'picked-name';
      show('question', { animate: false });
    });
    vt.finished.finally(() => { qName.style.viewTransitionName = ''; });
  } else {
    await wait(reduceMotion ? 0 : 140);
    show('question');
  }
}

// ---------- Cadeau en 3D ----------
const gift = $('#gift');
const cube = $('#cube');
const reveal = $('#reveal');
const revealName = $('#reveal-name');
const after = $('#after');
const stage = $('#stage');
const flash = $('#flash');
const spin = { raf: 0, ry: -28, vel: 0, dragging: false, lastX: 0, moved: 0, t0: performance.now(), shaking: false };

function giftLoop(now) {
  if (current !== 'gift' || gift.hidden) { spin.raf = 0; return; }
  const t = (now - spin.t0) / 1000;
  if (!spin.dragging) {
    spin.ry += spin.vel;
    spin.vel *= 0.94;
    if (Math.abs(spin.vel) < 0.4) {
      const target = -28 + Math.sin(t * 0.8) * 16;
      const diff = ((target - spin.ry + 540) % 360) - 180;
      spin.ry += diff * 0.025;
    }
  }
  let rz = 0;
  if (spin.shaking) { rz = Math.sin(now / 28) * 6; spin.ry += Math.sin(now / 40) * 1.6; }
  cube.style.setProperty('--ry', `${spin.ry.toFixed(2)}deg`);
  cube.style.setProperty('--rz', `${rz.toFixed(2)}deg`);
  cube.style.setProperty('--bob', `${(Math.sin(t * 1.6) * 5).toFixed(2)}px`);
  spin.raf = requestAnimationFrame(giftLoop);
}
function startGiftLoop() {
  if (spin.raf || reduceMotion) return;
  spin.raf = requestAnimationFrame(giftLoop);
}

gift.addEventListener('pointerdown', (e) => {
  if (gift.classList.contains('is-open')) return;
  spin.dragging = true;
  spin.lastX = e.clientX;
  spin.moved = 0;
  spin.vel = 0;
  gift.classList.add('is-dragging');
  gift.setPointerCapture?.(e.pointerId);
  sound.unlock();
});
gift.addEventListener('pointermove', (e) => {
  if (!spin.dragging) return;
  const dx = e.clientX - spin.lastX;
  spin.lastX = e.clientX;
  spin.moved += Math.abs(dx);
  spin.ry += dx * 0.7;
  spin.vel = dx * 0.7;
});
function endDrag() {
  if (!spin.dragging) return false;
  spin.dragging = false;
  gift.classList.remove('is-dragging');
  return true;
}
gift.addEventListener('pointerup', () => { if (endDrag() && spin.moved < 8) openGift(); });
gift.addEventListener('pointercancel', endDrag);
gift.addEventListener('click', (e) => { if (e.detail === 0) openGift(); }); // clavier

function resetGift() {
  gift.hidden = false;
  gift.classList.remove('is-open', 'is-gone', 'is-dragging');
  stage.classList.remove('is-opened', 'is-named');
  reveal.hidden = true;
  reveal.classList.remove('is-in', 'is-named', 'is-tilting');
  revealName.textContent = '';
  after.hidden = true;
  $('#gift-title').textContent = 'Ton cadeau t\'attend';
  $('#gift-hint').hidden = false;
  $('#gift-hint').textContent = 'Fais-le tourner du doigt, puis touche-le pour l\'ouvrir.';
  spin.ry = -28; spin.vel = 0; spin.shaking = false;
  state.opening = false;
}

async function openGiftScreen() {
  resetGift();
  show('gift');
  startGiftLoop();
  const me = state.people.find((p) => p.name === store.get('name'));
  if (me?.revealed) {
    try { state.reveal = await api('reveal', { method: 'POST' }); showResultInstantly(state.reveal); } catch (err) { handleRevealError(err); }
  }
}

function handleRevealError(err) {
  spin.shaking = false;
  state.opening = false;
  if (err.status === 401) { store.del('token'); store.del('name'); goHome(); return; }
  $('#gift-hint').textContent = err.message;
}

// Position finale (sans les transformations en cours) du prénom dans la carte.
function finalNameRect() {
  const s = stage.getBoundingClientRect();
  return {
    left: s.left + reveal.offsetLeft + revealName.offsetLeft,
    top: s.top + reveal.offsetTop + revealName.offsetTop,
    width: revealName.offsetWidth,
    height: revealName.offsetHeight,
  };
}

async function openGift() {
  if (state.opening || gift.classList.contains('is-open')) return;
  state.opening = true;
  sound.unlock();
  spin.shaking = true;
  $('#gift-hint').textContent = 'Ça bouge…';
  let data;
  try {
    [data] = await Promise.all([state.reveal ? Promise.resolve(state.reveal) : api('reveal', { method: 'POST' }), wait(reduceMotion ? 0 : 900)]);
  } catch (err) { handleRevealError(err); return; }
  state.reveal = data;
  const me = state.people.find((p) => p.name === data.name);
  if (me) me.revealed = true;
  spin.shaking = false;

  if (reduceMotion) { showResultInstantly(data); return; }

  // 1. Le couvercle s'envole, la lumière jaillit.
  $('#gift-hint').textContent = '';
  gift.classList.add('is-open');
  stage.classList.add('is-opened');
  sound.whoosh();
  navigator.vibrate?.(30);
  const g = gift.getBoundingClientRect();
  const ox = g.left + g.width / 2;
  const oy = g.top + 118;
  overlay.sparkle(ox, oy, 46, 70);
  await wait(450);

  // 2. La carte arrive, les étincelles tourbillonnent puis forment le prénom.
  revealName.textContent = data.target;
  reveal.hidden = false;
  const rect = finalNameRect();
  const fontSize = parseFloat(getComputedStyle(revealName).fontSize) || 50;
  setTimeout(() => { gift.classList.add('is-gone'); reveal.classList.add('is-in'); }, 650);
  sound.rise(2.5);
  $('#gift-title').textContent = 'Et tu as pioché…';
  await overlay.formText({ text: data.target, font: `italic 600 ${fontSize}px Fraunces`, rect, ox, oy, swirl: 1.1, converge: 1.4 });

  // 3. Éclat, prénom en or, feu d'artifice.
  flash.classList.remove('is-on');
  void flash.offsetWidth;
  flash.classList.add('is-on');
  sound.boom();
  sound.chime();
  navigator.vibrate?.([25, 60, 35]);
  reveal.classList.add('is-named');
  stage.classList.add('is-named');
  overlay.fadeText();
  gift.hidden = true;
  const r = reveal.getBoundingClientRect();
  overlay.burst(r.left + r.width / 2, r.top + r.height * 0.45, 120, 0.8);
  const W = window.innerWidth;
  [[0.22, 0.2, 'gold', 150], [0.78, 0.16, 'red', 450], [0.5, 0.1, 'white', 800], [0.3, 0.12, 'gold', 1150]].forEach(([fx, fy, tone, delay]) => {
    setTimeout(() => { overlay.firework(W * fx, window.innerHeight * fy + 60, tone); sound.pop(); }, delay);
  });
  finishReveal(data);
}

function showResultInstantly(data) {
  revealName.textContent = data.target;
  gift.hidden = true;
  reveal.hidden = false;
  reveal.classList.add('is-in', 'is-named');
  stage.classList.add('is-opened', 'is-named');
  finishReveal(data);
}

function finishReveal() {
  $('#gift-title').textContent = 'C\'est pioché !';
  $('#gift-hint').hidden = true;
  after.hidden = false;
  state.opening = false;
}

// Carte qui s'incline quand on la touche ou la survole.
function tiltCard(e) {
  if (reduceMotion || !reveal.classList.contains('is-named')) return;
  const r = reveal.getBoundingClientRect();
  const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
  reveal.style.setProperty('--ry', `${((px - 0.5) * 16).toFixed(2)}deg`);
  reveal.style.setProperty('--rx', `${((0.5 - py) * 12).toFixed(2)}deg`);
  reveal.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
  reveal.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
  reveal.classList.add('is-tilting');
}
const untilt = () => reveal.classList.remove('is-tilting');
reveal.addEventListener('pointermove', tiltCard);
reveal.addEventListener('pointerdown', tiltCard);
reveal.addEventListener('pointerleave', untilt);
reveal.addEventListener('pointercancel', untilt);
reveal.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') untilt(); });

// ---------- Son ----------
const soundBtn = $('#sound');
function renderSound(on) {
  soundBtn.setAttribute('aria-pressed', String(on));
  soundBtn.setAttribute('aria-label', on ? 'Son activé, toucher pour couper' : 'Son coupé, toucher pour activer');
}
renderSound(sound.on);
sound.onChange(renderSound);
soundBtn.addEventListener('click', () => sound.toggle());

// ---------- Actions diverses ----------
document.addEventListener('click', (e) => {
  const action = e.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  if (action === 'home') goHome();
  if (action === 'replay') {
    const data = state.reveal;
    resetGift();
    state.reveal = data;
    startGiftLoop();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  if (action === 'logout') {
    store.del('token');
    store.del('name');
    state.reveal = null;
    goHome();
  }
});

// ---------- Démarrage ----------
startSnow($('#snow'));
try { history.replaceState({ screen: 'home' }, ''); } catch { /* cadre restreint */ }

(async function init() {
  try {
    await loadState({ drop: true });
  } catch (err) {
    $('#progress').textContent = err.message;
    drawGarland();
    return;
  }
  lightGarland();
  const name = store.get('name');
  if (store.get('token') && state.people.some((p) => p.name === name)) {
    state.selected = name;
    openGiftScreen();
  }
})();
