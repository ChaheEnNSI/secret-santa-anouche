// Secret Santa : parcours et mise en scène.
import { startSnow, overlay, sound, reduceMotion } from './fx.js';
import { makeElf } from './elf.js';

const $ = (sel) => document.querySelector(sel);
const elvesBox = document.querySelector('#elves');
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const rand = (a, b) => a + Math.random() * (b - a);

// ---------- Stockage local (protégé : certains navigateurs le bloquent) ----------
const store = {
  get: (k) => { try { return localStorage.getItem(`santa:${k}`); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(`santa:${k}`, v); } catch { /* ignoré */ } },
  del: (k) => { try { localStorage.removeItem(`santa:${k}`); } catch { /* ignoré */ } },
};

// Identifiant aléatoire de ce téléphone (un téléphone = un seul tirage).
function deviceKey() {
  let k = store.get('device');
  if (!k) {
    k = (crypto.randomUUID?.() || Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, '0')).join('')).replace(/[^A-Za-z0-9-]/g, '');
    store.set('device', k);
  }
  return k;
}

// ---------- Appels au serveur ----------
async function api(path, { method = 'GET', body } = {}) {
  const headers = { 'content-type': 'application/json', 'x-device': deviceKey() };
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

function leaveGift() {
  ball?.stop();
  if (sitter && sitter.parentNode === elvesBox) removeSitter();
}

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
  else leaveGift();
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
function drawGarland() {
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
    html += `<g class="bulb is-lit" data-index="${i}" style="--c:${BULB_COLORS[i % 4]};--d:${((i * 0.37) % 2.2).toFixed(2)}s" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})"><circle class="bulb__halo" cx="0" cy="14" r="13" filter="url(#halo)"/><rect class="bulb__cap" x="-3.5" y="0" width="7" height="6" rx="1.5"/><path class="bulb__glass" d="M0 5 C 6 7, 7 16, 0 23 C -7 16, -6 7, 0 5 Z"/></g>`;
  }
  svg.insertAdjacentHTML('beforeend', html);
}

// Chaque ampoule joue une note quand on la touche.
$('#garland').addEventListener('pointerdown', (e) => {
  const bulb = e.target.closest('.bulb');
  if (!bulb) return;
  sound.unlock();
  sound.note(Number(bulb.dataset.index));
  bulb.classList.remove('is-ping');
  void bulb.getBoundingClientRect();
  bulb.classList.add('is-ping');
  const r = bulb.getBoundingClientRect();
  overlay.sparkle(r.left + r.width / 2, r.top + r.height, 8, 10);
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(drawGarland, 150);
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

function renderMe() {
  const name = store.get('name');
  const mine = store.get('token') && state.people.some((p) => p.name === name);
  $('#picker').hidden = !!mine;
  $('#me').hidden = !mine;
  if (mine) {
    $('#me-name').textContent = name;
    const done = store.get('revealed') === '1';
    $('#me-text').textContent = done ? 'Tu as déjà pioché. Un téléphone, un seul tirage.' : 'Ton tirage t\'attend.';
    $('#me-btn').textContent = done ? 'Revoir qui j\'ai pioché' : 'Découvrir mon tirage';
  }
}
$('#me-btn').addEventListener('click', () => openGiftScreen());

// Étiquettes suspendues : petit moteur de balancier (ressort amorti).
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
    const s = { el: swing, base: rand(-2.5, 2.5), a: 0, v: 0 };
    s.a = drop && !reduceMotion ? s.base + (index % 2 ? 1 : -1) * rand(16, 26) : s.base;
    swing.style.transform = `rotate(${s.a.toFixed(2)}deg)`;
    swings.push(s);
    btn.addEventListener('pointerdown', () => { s.v += (index % 2 ? -1 : 1) * 1.6; runSwings(); });
    btn.addEventListener('click', async () => {
      if (btn.classList.contains('is-picked')) return;
      btn.classList.add('is-picked');
      sound.unlock();
      sound.note(index);
      await wait(reduceMotion ? 0 : 380);
      btn.classList.remove('is-picked');
      selectName(person.name, btn);
    });
    swing.append(btn);
    li.append(pin, swing);
    if (drop && !reduceMotion) li.animate([{ opacity: 0, transform: 'translateY(-26px)' }, { opacity: 1, transform: 'none' }], { duration: 650, delay: 250 + index * 70, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'backwards' });
    list.append(li);
  });
  if (drop) setTimeout(runSwings, 250);
}

async function loadState({ drop = false } = {}) {
  const data = await api('state');
  if (data.round && store.get('round') !== data.round) {
    // Les tirages ont été remis à zéro : on oublie l'ancienne session de ce téléphone.
    store.del('token'); store.del('name'); store.del('revealed');
    state.reveal = null;
    store.set('round', data.round);
  }
  state.people = data.people;
  state.event = data.event;
  renderCountdown();
  renderTags({ drop });
  renderMe();
}

async function goHome({ push = true } = {}) {
  show('home', { push });
  try { await loadState(); } catch { renderMe(); }
}

// ---------- Contrôle d'identité (scanner d'empreinte, pour rire) ----------
const check = $('#check');
const scanner = $('#scanner');
const scanStatus = $('#scan-status');
const checkDone = $('#check-done');
const HOLD_MS = reduceMotion ? 700 : 1900;
const SCAN_STEPS = ['Lecture de l\'empreinte…', 'Comparaison avec la liste des gentils…', 'Consultation de l\'historique des cadeaux…'];
const VERDICTS = [
  (n) => `Empreinte reconnue, c'est bien ${n}. Par contre ton doigt sent bizarre, lave-toi les mains avant d'emballer le cadeau.`,
  () => 'Identité confirmée. Le scanner a juste demandé qui avait mangé des chips avant de le toucher.',
  () => 'C\'est bien toi. On t\'a reconnu à l\'odeur.',
  () => 'Empreinte validée. L\'écran va devoir être désinfecté, mais c\'est validé.',
  () => 'Accès autorisé. Les lutins ont tous reculé d\'un pas en sentant ton doigt.',
  () => 'Vérifié. Ton doigt colle un peu, le Père Noël ne juge pas. Enfin, un peu quand même.',
];

function setScan(text, kind = '') {
  scanStatus.textContent = text;
  scanStatus.className = `scan-status${kind ? ` is-${kind}` : ''}`;
}

let hold = { active: false, start: 0, raf: 0, done: false, busy: false, ticks: 0 };

// Lutin qui renifle ton doigt pendant le scan.
const scanWrap = document.createElement('div');
scanWrap.className = 'scanwrap';
scanner.before(scanWrap);
scanWrap.append(scanner);
const sniffer = reduceMotion ? null : makeElf(0, 'sniffer pose-down look-left');
if (sniffer) scanWrap.append(sniffer);
let snifferTimer = 0;
function snifferMood(mood) {
  if (!sniffer) return;
  clearTimeout(snifferTimer);
  sniffer.className = 'elf sniffer';
  const add = (...c) => sniffer.classList.add(...c);
  if (mood === 'idle') add('pose-down', 'look-left');
  if (mood === 'sniff') add('pose-down', 'is-sniffing', 'is-leaning');
  if (mood === 'impatient') {
    add('pose-cross', 'is-tapping', 'look-right');
    snifferTimer = setTimeout(() => { if (!hold.active && !hold.done) snifferMood('idle'); }, 1800);
  }
  if (mood === 'yuck') add('pose-pinch', 'is-recoiling');
}
function stinkLines() {
  if (reduceMotion) return;
  const box = document.createElement('div');
  box.className = 'stink';
  box.innerHTML = '<svg viewBox="0 0 60 50"><path d="M12 46c-5-6 5-10 0-16s5-10 0-16"/><path d="M30 48c-5-6 5-10 0-16s5-10 0-16-5-8 0-12"/><path d="M48 46c-5-6 5-10 0-16s5-10 0-16"/></svg>';
  scanWrap.append(box);
  box.addEventListener('animationend', () => box.remove(), { once: true });
}

function resetCheck(name) {
  hold = { active: false, start: 0, raf: 0, done: false, busy: false, ticks: 0 };
  snifferMood('idle');
  check.classList.remove('is-verified', 'is-reset');
  check.style.setProperty('--p', 0);
  scanner.classList.remove('is-scanning', 'is-done');
  scanner.disabled = false;
  checkDone.hidden = true;
  setScan('Pose ton pouce ici et laisse-le appuyé');
  $('#check-warn').hidden = true;
  $('#unlock').hidden = true;
  $('#code-input').value = '';
  setUnlock('');
  $('#fineprint').textContent = `En continuant, tu certifies sur l'honneur être ${name}. Toute usurpation sera punie d'un cadeau acheté au tabac du coin.`;
}

function scanTick() {
  const p = Math.min(1, (performance.now() - hold.start) / HOLD_MS);
  check.style.setProperty('--p', p.toFixed(3));
  const step = SCAN_STEPS[Math.min(SCAN_STEPS.length - 1, Math.floor(p * SCAN_STEPS.length))];
  if (scanStatus.textContent !== step) setScan(step);
  const t = Math.floor(p * 12);
  if (t > hold.ticks) { hold.ticks = t; sound.tick(); if (t % 5 === 0) sound.sniff(); }
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
  snifferMood('sniff');
  sound.sniff();
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
  snifferMood('impatient');
}

async function finishScan() {
  hold.active = false;
  hold.done = true;
  hold.busy = true;
  scanner.classList.remove('is-scanning');
  try {
    const data = await api('enter', { method: 'POST', body: { name: state.selected } });
    signIn(data.token, state.selected);
    scanner.classList.add('is-done');
    scanner.disabled = true;
    check.classList.add('is-verified');
    setScan(VERDICTS[Math.floor(Math.random() * VERDICTS.length)](state.selected), 'result');
    sound.seal();
    snifferMood('yuck');
    stinkLines();
    setTimeout(() => sound.yuck(), 260);
    navigator.vibrate?.([20, 50, 30]);
    const r = scanner.getBoundingClientRect();
    overlay.sparkle(r.left + r.width / 2, r.top + r.height / 2, 26, r.width * 0.45);
    checkDone.hidden = false;
  } catch (err) {
    check.classList.add('is-reset');
    check.style.setProperty('--p', 0);
    const reason = err.data?.reason;
    if (reason === 'device') {
      // Ce téléphone a déjà servi pour quelqu'un d'autre : on le ramène à son propre tirage.
      setScan(err.message, 'error');
      scanner.disabled = true;
      store.set('name', err.data.name);
    } else if (reason === 'claimed') {
      setScan(err.message, 'error');
      scanner.disabled = true;
      $('#unlock').hidden = false;
    } else {
      hold.done = false;
      setScan(err.message, 'error');
    }
  } finally {
    hold.busy = false;
  }
}

function signIn(token, name) {
  store.set('token', token);
  store.set('name', name);
  store.del('revealed');
  state.reveal = null;
}

function setUnlock(text, kind = '') {
  const el = $('#unlock-status');
  el.textContent = text;
  el.className = `status${kind ? ` is-${kind}` : ''}`;
}

$('#unlock').addEventListener('submit', async (e) => {
  e.preventDefault();
  const code = $('#code-input').value.trim();
  if (!code) { setUnlock('Écris ton code à 4 caractères.', 'error'); return; }
  try {
    const data = await api('unlock', { method: 'POST', body: { name: state.selected, code } });
    signIn(data.token, state.selected);
    store.set('revealed', '1');
    setUnlock('Débloqué !', 'ok');
    sound.seal();
    await wait(500);
    openGiftScreen();
  } catch (err) {
    setUnlock(err.message, 'error');
  }
});

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
  if (store.get('token')) { renderMe(); return; }
  setTimeout(loadBall, 700); // la boule 3D se prépare pendant le contrôle d'identité
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

// ---------- Cadeau en 3D, qui résiste ----------
const gift = $('#gift');
const cube = $('#cube');
const reveal = $('#reveal');
const revealName = $('#reveal-name');
const after = $('#after');
const stage = $('#stage');
const flash = $('#flash');
const orbs = [...document.querySelectorAll('.orb')];
const spin = {
  raf: 0, ry: -28, vel: 0, dragging: false, lastX: 0, moved: 0, t0: performance.now(), shaking: false,
  taps: 0, needed: 6, tapAt: -9999, lift: 0, charge: 0, prefetch: null,
};
const TAP_LINES = ['Il s\'accroche !', 'Il tient bon…', 'Encore !', 'Il glisse…', 'Il perd l\'équilibre…', 'Presque !', 'Dernier coup !'];
const BALL_LINES = ['Le verre se fend…', 'Encore !', 'Ça craque de partout…', 'La lumière s\'échappe…', 'Elle va céder…', 'Presque !', 'Dernier coup !'];

// Boule de Noël en 3D temps réel. Si le téléphone ne sait pas l'afficher, on garde la boîte cadeau.
let ball = null;
let ballLoading = null;
const glCanvas = $('#gl');
function ballAnchor() {
  const r = gift.getBoundingClientRect();
  if (!r.width) return null;
  return { x: r.left + r.width / 2, y: r.top + 178, r: Math.min(112, r.width * 0.38) };
}
function loadBall() {
  if (reduceMotion) return Promise.resolve(null);
  ballLoading ||= Promise.resolve(document.fonts?.load('italic 600 100px Fraunces')).catch(() => null).then(() => import('./ball.js'))
    .then((m) => { ball = m.createBall({ canvas: glCanvas, anchor: ballAnchor }); return ball; })
    .catch(() => null);
  return ballLoading;
}
const ballMode = () => !!ball && gift.classList.contains('is-gl');
window.__santa = { get ball() { return ball; } }; // pour les essais automatiques
// Lutin têtu installé sur le couvercle : c'est lui qui empêche le cadeau de s'ouvrir.
let sitter = null;
function placeSitter() {
  sitter?.remove();
  sitter = null;
  if (reduceMotion) return;
  sitter = makeElf(1, 'sitter pose-cross is-tapping');
  if (ballMode()) { sitter.classList.add('sitter--ball'); sitter.style.opacity = 0; elvesBox.append(sitter); } else gift.append(sitter);
}
function removeSitter() {
  sitter?.remove();
  sitter = null;
}
function launchSitter() {
  if (!sitter) return;
  const el = sitter;
  sitter = null;
  // On le sort du cadeau (qui va disparaître) pour qu'il vole par-dessus tout.
  const r = el.getBoundingClientRect();
  const x = r.left + (r.width - 60) / 2, y = r.top + (r.height - 69) / 2;
  el.className = 'elf is-shocked is-flailing';
  el.style.transform = `translate(${x}px, ${y}px)`;
  elvesBox.append(el);
  const dir = x + 30 < window.innerWidth / 2 ? -1 : 1;
  sound.boing();
  el.animate([
    { transform: `translate(${x}px, ${y}px) rotate(0deg)` },
    { transform: `translate(${x + dir * 80}px, ${y - 200}px) rotate(${dir * 320}deg) scale(1.1)`, offset: 0.5 },
    { transform: `translate(${x + dir * 260}px, ${y - 90}px) rotate(${dir * 700}deg) scale(0.7)` },
  ], { duration: 1100, easing: 'cubic-bezier(0.25, 0.55, 0.45, 1)', fill: 'forwards' }).finished.then(() => el.remove()).catch(() => el.remove());
}

function giftLoop(now) {
  if (current !== 'gift' || gift.hidden) { spin.raf = 0; return; }
  const t = (now - spin.t0) / 1000;
  if (ballMode()) {
    if (sitter) {
      const c = ball.capTop();
      const d = now - spin.tapAt;
      const hop = d < 420 ? -Math.sin((Math.PI * d) / 420) * (10 + spin.taps * 2) : 0;
      const lean = c.rot + spin.charge * Math.sin(t * 6.5) * 9;
      sitter.style.transform = `translate(${(c.x - 30).toFixed(1)}px, ${(c.y - 60 + hop).toFixed(1)}px) rotate(${lean.toFixed(1)}deg)`;
      sitter.style.opacity = 1;
    }
    ball.setShaking(spin.shaking);
    spin.raf = requestAnimationFrame(giftLoop);
    return;
  }
  if (!spin.dragging) {
    spin.ry += spin.vel;
    spin.vel *= 0.93;
    if (Math.abs(spin.vel) < 0.4) {
      const target = -28 + Math.sin(t * 0.8) * 16;
      const diff = ((target - spin.ry + 540) % 360) - 180;
      spin.ry += diff * 0.025;
    }
  }
  // Coup sur la boîte : écrasement, saut, étirement, retombée avec rebond.
  const d = now - spin.tapAt;
  let jump = 0, sx = 1, sy = 1, rz = 0;
  const H = 16 + spin.taps * 3;
  if (d < 80) { const k = d / 80; sy = 1 - 0.2 * k; sx = 1 + 0.12 * k; }
  else if (d < 440) { const k = (d - 80) / 360; jump = -H * Math.sin(Math.PI * k); sy = 1 + 0.12 * Math.sin(Math.PI * k); sx = 1 - 0.06 * Math.sin(Math.PI * k); }
  else if (d < 600) { const k = Math.sin(Math.PI * (d - 440) / 160); sy = 1 - 0.13 * k; sx = 1 + 0.08 * k; }
  else if (d < 760) { const k = (d - 600) / 160; jump = -5 * Math.sin(Math.PI * k); }
  if (d < 900) rz = Math.sin(d / 38) * 9 * Math.exp(-d / 320);
  if (spin.shaking) { rz += Math.sin(now / 26) * 6; spin.ry += Math.sin(now / 40) * 1.8; }
  // Le couvercle se soulève un peu plus à chaque coup, la lumière monte.
  const bump = d < 500 ? Math.sin(Math.PI * Math.min(1, d / 500)) * 12 : 0;
  const lift = spin.lift + bump;
  const glow = Math.min(1, spin.charge * 0.9 + bump / 40);
  cube.style.setProperty('--ry', `${spin.ry.toFixed(2)}deg`);
  cube.style.setProperty('--rz', `${rz.toFixed(2)}deg`);
  cube.style.setProperty('--bob', `${(Math.sin(t * 1.6) * 5 + jump).toFixed(2)}px`);
  cube.style.setProperty('--sx', sx.toFixed(3));
  cube.style.setProperty('--sy', sy.toFixed(3));
  gift.style.setProperty('--lift', `${lift.toFixed(1)}px`);
  gift.style.setProperty('--ltilt', `${(Math.sin(d / 45) * 4 * Math.exp(-d / 300) * (spin.taps ? 1 : 0)).toFixed(2)}deg`);
  gift.style.setProperty('--glow', glow.toFixed(3));
  if (sitter) {
    // Il suit la boîte, saute plus haut qu'elle à chaque coup et vacille de plus en plus.
    const hop = d >= 80 && d < 440 ? jump * 0.8 : 0;
    const y = Math.sin(t * 1.6) * 5 + jump + hop - lift + 116 * (1 - sy);
    const lean = Math.sin(t * 2.1) * 3 + spin.charge * Math.sin(t * 6.5) * 11 + rz * 1.3;
    sitter.style.transform = `translate(0, ${y.toFixed(1)}px) rotate(${lean.toFixed(1)}deg)`;
  }
  // Lucioles qui tournent autour du cadeau, devant puis derrière.
  const cx = gift.clientWidth / 2;
  orbs.forEach((o, i) => {
    const a = t * (0.9 + spin.charge * 1.4) + (i / orbs.length) * Math.PI * 2;
    const R = 118 + Math.sin(t * 1.3 + i) * 10;
    const y = 160 + Math.sin(a) * 26 + Math.sin(t * 2 + i * 1.7) * 18 - 40;
    const z = Math.sin(a);
    const sc = 0.65 + (z + 1) * 0.35;
    o.style.transform = `translate3d(${(cx + Math.cos(a) * R).toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${sc.toFixed(2)})`;
    o.style.opacity = (0.35 + (z + 1) * 0.32).toFixed(2);
    o.style.zIndex = z > 0 ? 3 : 0;
  });
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
  if (ballMode()) ball.setDragging(true);
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
  if (ballMode() && spin.moved >= 8) ball.spinBy(dx);
});
function endDrag() {
  if (!spin.dragging) return false;
  spin.dragging = false;
  if (ballMode()) ball.setDragging(false);
  gift.classList.remove('is-dragging');
  return true;
}
gift.addEventListener('pointerup', (e) => { if (endDrag() && spin.moved < 8) tapGift(e); });
gift.addEventListener('pointercancel', endDrag);
gift.addEventListener('click', (e) => { if (e.detail === 0) tapGift(); }); // clavier

function renderTapDots() {
  $('#taps').innerHTML = Array.from({ length: spin.needed }, (_, i) => `<i class="${i < spin.taps ? 'is-on' : ''}"></i>`).join('');
}

function tapGift(e) {
  if (state.opening || gift.classList.contains('is-open')) return;
  sound.unlock();
  spin.taps += 1;
  spin.tapAt = performance.now();
  spin.charge = spin.taps / spin.needed;
  spin.lift = spin.charge * 16;
  spin.vel += (Math.random() < 0.5 ? -1 : 1) * rand(6, 11);
  stage.style.setProperty('--charge', spin.charge.toFixed(2));
  if (spin.taps === 1 && !state.reveal) spin.prefetch = api('reveal', { method: 'POST' }).catch((err) => err);
  renderTapDots();
  if (ballMode()) { tapBall(e); return; }
  sound.thump(spin.taps);
  if (sitter) {
    const base = `elf sitter${ballMode() ? ' sitter--ball' : ''}`;
    sitter.className = `${base} is-shocked is-flailing`;
    clearTimeout(sitter.t);
    sitter.t = setTimeout(() => { if (sitter) sitter.className = `${base} pose-cross${spin.taps >= spin.needed - 2 ? ' is-shifty' : ' is-tapping'}`; }, 520);
    if (spin.taps === 2) sound.squeak();
  }
  navigator.vibrate?.(12 + spin.taps * 5);
  // Onde au sol et étincelles qui s'échappent par le couvercle.
  const shock = document.createElement('span');
  shock.className = 'shock';
  gift.append(shock);
  shock.addEventListener('animationend', () => shock.remove());
  const g = gift.getBoundingClientRect();
  overlay.sparkle(g.left + g.width / 2, g.top + 120, 10 + spin.taps * 4, 50 + spin.taps * 6);
  if (spin.taps > spin.needed / 2) stage.animate([{ transform: 'translate(0,0)' }, { transform: 'translate(-4px,1px)' }, { transform: 'translate(4px,-1px)' }, { transform: 'translate(0,0)' }], { duration: 180 });
  const hint = $('#gift-hint');
  if (spin.taps >= spin.needed) { hint.textContent = ''; setTimeout(openGift, 260); return; }
  hint.textContent = spin.taps === 1 ? (sitter ? 'Un lutin s\'est installé dessus. Tape plusieurs fois pour le déloger.' : 'Il résiste ! Tape plusieurs fois pour le forcer.') : TAP_LINES[(spin.taps - 2) % TAP_LINES.length];
}

// Coup sur la boule : fissures à l'endroit touché, éclats, lumière qui s'échappe.
function tapBall(e) {
  const g = gift.getBoundingClientRect();
  const x = e?.clientX ?? g.left + g.width / 2 + rand(-40, 40);
  const y = e?.clientY ?? g.top + 178 + rand(-40, 40);
  const last = spin.taps >= spin.needed;
  const hit = ball.tap(x, y, spin.charge, last) || { x, y };
  sound.crack(spin.taps);
  navigator.vibrate?.(last ? [20, 30, 40] : 10 + spin.taps * 4);
  overlay.sparkle(hit.x, hit.y, 8 + spin.taps * 3, 30 + spin.taps * 5);
  if (sitter) {
    sitter.className = 'elf sitter sitter--ball is-shocked is-flailing';
    clearTimeout(sitter.t);
    sitter.t = setTimeout(() => { if (sitter) sitter.className = `elf sitter sitter--ball pose-cross${spin.taps >= spin.needed - 2 ? ' is-shifty' : ' is-tapping'}`; }, 520);
    if (spin.taps === 2) sound.squeak();
  }
  if (spin.taps > spin.needed / 2) stage.animate([{ transform: 'translate(0,0)' }, { transform: 'translate(-3px,1px)' }, { transform: 'translate(3px,-1px)' }, { transform: 'translate(0,0)' }], { duration: 160 });
  const hint = $('#gift-hint');
  if (last) { hint.textContent = ''; spin.shaking = true; setTimeout(openGift, 320); return; }
  hint.textContent = spin.taps === 1 ? (sitter ? 'Fissurée ! Un lutin s\'y accroche. Tape encore pour la briser.' : 'Fissurée ! Tape encore pour la briser.') : BALL_LINES[(spin.taps - 2) % BALL_LINES.length];
}

function resetGift() {
  gift.hidden = false;
  gift.classList.remove('is-open', 'is-gone', 'is-dragging');
  stage.classList.remove('is-opened', 'is-named');
  stage.style.setProperty('--charge', 0);
  reveal.hidden = true;
  reveal.classList.remove('is-in', 'is-named', 'is-tilting');
  reveal.querySelector('.pawstamp')?.remove();
  elvesBox.querySelectorAll('.dog, .woof, .rider, .impact-ring').forEach((el) => el.remove());
  revealName.textContent = '';
  after.hidden = true;
  gift.classList.toggle('is-gl', !!ball);
  stage.classList.toggle('is-gl', !!ball);
  gift.setAttribute('aria-label', ball ? 'Briser la boule de Noël' : 'Ouvrir le cadeau');
  $('#gift-title').textContent = ball ? 'Ton tirage est à l\'intérieur' : 'Ton cadeau t\'attend';
  $('#gift-hint').hidden = false;
  $('#gift-hint').textContent = ball ? 'Elle est à ton nom. Fais-la tourner du doigt, puis tape dessus pour la briser.' : 'Fais-le tourner du doigt, puis touche-le pour l\'ouvrir.';
  if (ball) {
    const me = store.get('name') || state.selected || '';
    ball.setTone(Math.max(0, state.people.findIndex((q) => q.name === me)), me);
    ball.reset(); ball.start();
  }
  Object.assign(spin, { ry: -28, vel: 0, shaking: false, taps: 0, needed: 5 + Math.floor(Math.random() * 4), tapAt: -9999, lift: 0, charge: 0, prefetch: null });
  renderTapDots();
  placeSitter();
  state.opening = false;
}

async function openGiftScreen() {
  const seen = store.get('revealed') === '1';
  // La boule 3D se charge pendant le contrôle d'identité ; on lui laisse un court délai si besoin.
  if (!seen && !ball) await Promise.race([loadBall(), wait(2500)]);
  resetGift();
  show('gift');
  startGiftLoop();
  if (seen) {
    loadBall(); // prête si la personne veut revoir la scène
    ball?.stop();
    removeSitter();
    try { state.reveal = await api('reveal', { method: 'POST' }); showResultInstantly(state.reveal); } catch (err) { handleRevealError(err); }
  }
}

function handleRevealError(err) {
  spin.shaking = false;
  ball?.setShaking(false);
  state.opening = false;
  if (err.status === 401) { store.del('token'); store.del('name'); store.del('revealed'); goHome(); return; }
  $('#gift-hint').textContent = err.message;
}

async function openGift() {
  if (state.opening || gift.classList.contains('is-open')) return;
  state.opening = true;
  sound.unlock();
  spin.shaking = true;
  let data;
  try {
    const pending = state.reveal ? Promise.resolve(state.reveal) : spin.prefetch ? spin.prefetch : api('reveal', { method: 'POST' });
    [data] = await Promise.all([pending, wait(reduceMotion ? 0 : 450)]);
    if (data instanceof Error) throw data;
  } catch (err) { handleRevealError(err); return; }
  state.reveal = data;
  store.set('revealed', '1');
  spin.shaking = false;

  if (reduceMotion) { showResultInstantly(data); return; }

  if (ballMode()) {
    // 1. La boule éclate : le lutin est projeté, les morceaux volent, la poussière d'or reste en l'air.
    launchSitter();
    const c = ball.center();
    gift.classList.add('is-open');
    stage.classList.add('is-opened');
    flash.classList.remove('is-on');
    void flash.offsetWidth;
    flash.classList.add('is-on');
    sound.shatter();
    navigator.vibrate?.([30, 40, 80]);
    ball.shatter();
    overlay.sparkle(c.x, c.y, 50, 120);
    await wait(1750);
  } else {
    // 1. Le lutin est éjecté, le couvercle s'envole, la lumière jaillit.
    launchSitter();
    gift.classList.add('is-open');
    stage.classList.add('is-opened');
    sound.whoosh();
    navigator.vibrate?.(40);
    const g = gift.getBoundingClientRect();
    const ox = g.left + g.width / 2;
    const oy = g.top + 118;
    overlay.sparkle(ox, oy, 60, 80);
    overlay.burst(ox, oy, 60, 0.7);
    await wait(450);
  }

  // 2. La carte se redresse, puis les lutins apportent les lettres une à une.
  prepareLetters(data.target);
  reveal.hidden = false;
  setTimeout(() => { gift.classList.add('is-gone'); reveal.classList.add('is-in'); }, 500);
  $('#gift-title').textContent = 'Et tu as pioché…';
  $('#gift-hint').textContent = 'Les lutins t\'apportent le prénom, lettre par lettre.';
  await wait(1700);
  gift.hidden = true;
  await deliverLetters();
  $('#gift-hint').textContent = 'Dernière vérification par le chien de la maison…';
  await dogValidate();
  $('#gift-hint').textContent = '';
  revealName.classList.remove('is-spelling');
  revealName.textContent = data.target;

  // 3. Éclat, prénom en or, feu d'artifice.
  flash.classList.remove('is-on');
  void flash.offsetWidth;
  flash.classList.add('is-on');
  sound.boom();
  sound.chime();
  navigator.vibrate?.([25, 60, 35]);
  // La mise en page se resserre : la carte glisse vers sa place au lieu de sauter.
  const before = reveal.getBoundingClientRect().top;
  reveal.classList.add('is-named');
  stage.classList.add('is-named');
  finishReveal(data);
  const dy = before - reveal.getBoundingClientRect().top;
  if (Math.abs(dy) > 2) reveal.animate([{ translate: `0 ${dy}px` }, { translate: '0 0' }], { duration: 750, easing: 'cubic-bezier(0.3, 1.25, 0.4, 1)' });
  const r = reveal.getBoundingClientRect();
  overlay.burst(r.left + r.width / 2, r.top + r.height * 0.45, 120, 0.8);
  const W = window.innerWidth;
  [[0.22, 0.2, 'gold', 150], [0.78, 0.16, 'red', 450], [0.5, 0.1, 'white', 800], [0.3, 0.12, 'gold', 1150], [0.7, 0.22, 'gold', 1500]].forEach(([fx, fy, tone, delay]) => {
    setTimeout(() => { overlay.firework(W * fx, window.innerHeight * fy + 60, tone); sound.pop(); }, delay);
  });
}

// ---------- Lutins livreurs de lettres ----------

// Trajet en petits bonds entre deux points (liste d'images clés pour l'animation).
function hopFrames(x0, y0, x1, y1, hops, height, lean) {
  const frames = [];
  const steps = hops * 10;
  for (let i = 0; i <= steps; i++) {
    const k = i / steps;
    const local = (k * hops) % 1;
    const y = y0 + (y1 - y0) * k - Math.sin(Math.PI * (i === steps ? 1 : local)) * height;
    const rot = Math.sin(Math.PI * 2 * local) * lean;
    frames.push({ transform: `translate(${(x0 + (x1 - x0) * k).toFixed(1)}px, ${y.toFixed(1)}px) rotate(${rot.toFixed(1)}deg)` });
  }
  return frames;
}

// Cases vides (invisibles) posées avant l'entrée de la carte, pour que rien ne bouge ensuite.
function prepareLetters(word) {
  revealName.classList.add('is-spelling');
  revealName.innerHTML = [...word].map((c) => `<span class="ch">${c.replace(/[<>&]/g, '')}</span>`).join('');
}

// Trajectoire en cloche entre deux points, avec rotation progressive.
function arcFrames(x0, y0, x1, y1, lift, r0, r1, n = 14) {
  const f = [];
  for (let i = 0; i <= n; i++) {
    const u = i / n;
    f.push({ transform: `translate(${(x0 + (x1 - x0) * u).toFixed(1)}px, ${(y0 + (y1 - y0) * u - lift * 4 * u * (1 - u)).toFixed(1)}px) rotate(${(r0 + (r1 - r0) * u).toFixed(1)}deg)` });
  }
  return f;
}

// Lettre plantée dans sa case : note de clochette, onde au pied de la lettre, la carte encaisse le choc.
function impactFx(x, y, i) {
  sound.note(i + 2);
  sound.thump(0);
  navigator.vibrate?.(10);
  overlay.sparkle(x, y - 22, 12, 24);
  const ring = document.createElement('i');
  ring.className = 'impact-ring';
  ring.style.setProperty('--x', `${x}px`);
  ring.style.setProperty('--y', `${y}px`);
  elvesBox.append(ring);
  ring.addEventListener('animationend', () => ring.remove(), { once: true });
  reveal.animate([{ translate: '0 0' }, { translate: '0 5px' }, { translate: '0 0' }], { duration: 170, easing: 'ease-out' });
}

// Chaque lutin arrive en vol plané, debout sur sa lettre, la plante dans sa case et repart en salto de l'autre côté.
function deliverLetters() {
  const fs = parseFloat(getComputedStyle(revealName).fontSize) || 50;
  const spans = [...revealName.querySelectorAll('.ch')];
  const rects = spans.map((sp) => sp.getBoundingClientRect());
  const W = window.innerWidth;
  const EW = 76, EH = 87;
  const last = spans.length - 1;
  const placed = spans.map((span, i) => new Promise((resolve) => {
    (async () => {
      await wait(i * 430);
      const r = rects[i];
      const cx = r.left + r.width / 2;
      const dir = i % 2 === 0 ? 1 : -1; // sens du vol : 1 = de gauche à droite
      const base = 'elf elf--big rider';
      const elf = makeElf(i % 2, 'elf--big rider is-flailing');
      elf.style.setProperty('--fs', `${fs}px`);
      elf.insertAdjacentHTML('afterbegin', `<span class="elf__board">${span.textContent}</span>`);
      elvesBox.append(elf);
      const board = elf.querySelector('.elf__board');
      const svg = elf.querySelector('.elf__svg');
      const squash = () => svg.animate([{ transform: 'scale(1, 1)' }, { transform: 'scale(1.22, 0.74)' }, { transform: 'scale(0.9, 1.12)' }, { transform: 'scale(1, 1)' }], { duration: 260, easing: 'ease-out' });
      const ix = cx - EW / 2, iy = r.top - EH + fs * 0.2; // position du lutin au moment de l'impact
      const sx = dir > 0 ? -EW - 40 : W + 40, sy = iy - rand(30, 110);
      const ex = dir > 0 ? W + 40 : -EW - 40, ey = iy + rand(40, 160);
      const crooked = i === last && spans.length > 1;
      try {
        // 1. Vol plané depuis le bord de l'écran, traînée d'étincelles derrière la lettre.
        sound.sweep('sine', 480, 920, 0.26, 0.028, 0.3);
        [260, 400, 520].forEach((ms) => setTimeout(() => {
          if (!elf.isConnected) return;
          const b = board.getBoundingClientRect();
          overlay.sparkle(b.left + b.width / 2, b.top + b.height / 2, 4, 10);
        }, ms));
        await elf.animate(arcFrames(sx, sy, ix, iy, rand(50, 90), dir * 18, 0), { duration: 600, easing: 'cubic-bezier(0.35, 0, 0.85, 0.75)', fill: 'forwards' }).finished;
        // 2. Impact : la lettre s'enfonce dans sa case, le lutin s'écrase puis se détend.
        board.style.visibility = 'hidden';
        span.classList.add('is-placed');
        if (crooked) {
          span.classList.add('is-crooked');
          span.animate([{ transform: 'scale(1.5, 0.5)' }, { transform: `rotate(${dir * 15}deg) translateY(5px)` }], { duration: 220, easing: 'ease-out', fill: 'forwards' });
        }
        impactFx(cx, r.bottom - 8, i);
        squash();
        if (crooked) {
          // La dernière lettre est restée de travers : il la regarde, puis saute dessus pour la redresser.
          elf.className = `${base} is-shocked pose-down`;
          sound.squeak();
          await wait(420);
          elf.className = `${base} is-flailing`;
          await elf.animate(arcFrames(ix, iy, ix, iy, 66, 0, 0), { duration: 460, easing: 'linear', fill: 'forwards' }).finished;
          span.animate([{ transform: `rotate(${dir * 15}deg) translateY(5px)` }, { transform: `rotate(${dir * -6}deg)` }, { transform: `rotate(${dir * 3}deg)` }, { transform: 'none' }], { duration: 400, easing: 'ease-out', fill: 'forwards' });
          impactFx(cx, r.bottom - 8, i + 1);
          squash();
        }
        resolve();
        elf.className = `${base} is-cheering`;
        await wait(120);
        // 3. Rebond en salto, sortie par l'autre côté.
        elf.className = base;
        await elf.animate(arcFrames(ix, iy, ex, ey, rand(90, 140), 0, dir * 360), { duration: 760, easing: 'linear', fill: 'forwards' }).finished;
      } catch {
        span.classList.add('is-placed');
        resolve();
      }
      elf.remove();
    })();
  }));
  return Promise.all(placed).then(() => wait(260));
}

// ---------- Le staffy noir de la maison : il vient vérifier le prénom et le valide d'un coup de patte ----------
const PAW = '<svg viewBox="0 0 40 40" aria-hidden="true"><g fill="#e9c46a"><ellipse cx="20" cy="26.5" rx="9.5" ry="8"/><ellipse cx="8.5" cy="16" rx="4" ry="5.2" transform="rotate(-22 8.5 16)"/><ellipse cx="16" cy="9.8" rx="4" ry="5.4" transform="rotate(-8 16 9.8)"/><ellipse cx="24.5" cy="9.8" rx="4" ry="5.4" transform="rotate(8 24.5 9.8)"/><ellipse cx="31.5" cy="16" rx="4" ry="5.2" transform="rotate(22 31.5 16)"/></g></svg>';
function dogSVG() {
  const K = '#17171b', D = '#0c0c0f', H = '#34343f';
  return `<svg class="dog__svg" viewBox="0 0 130 96" aria-hidden="true">
    <g class="dleg dleg-hf" stroke="${D}" stroke-width="9"><path d="M45 60L41 76L46 90"/><ellipse cx="48.5" cy="91" rx="6" ry="3.2" fill="${D}" stroke="none"/></g>
    <g class="dleg dleg-ff" stroke="${D}" stroke-width="9"><path d="M80 60V90"/><ellipse cx="82.5" cy="91" rx="6" ry="3.2" fill="${D}" stroke="none"/></g>
    <path class="dtail" d="M31 44C21 42 13 47 8 56C16 51 23 50 31 51Z" fill="${K}"/>
    <path d="M28 47C30 38 44 35 60 36C74 36 86 37 92 44C99 52 98 64 92 70C86 75 76 73 68 70C58 67 48 67 40 66C31 65 26 56 28 47Z" fill="${K}"/>
    <path d="M33 40C46 35.5 72 35 88 40.5" stroke="${H}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M93.5 49C98.5 54 97.5 64 92 69.5C88.5 64 89 55 93.5 49Z" fill="#efeae0"/>
    <path d="M74 45C82 47 86 55 83 63M35 50C41 52 45 58 42 64" stroke="${H}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <g class="dleg dleg-hn" stroke="${K}" stroke-width="10"><path d="M36 58L31 75L37 90"/><ellipse cx="39.5" cy="91" rx="6.5" ry="3.4" fill="${K}" stroke="none"/></g>
    <g class="dleg dleg-fn" stroke="${K}" stroke-width="10"><path d="M88 60V90"/><ellipse cx="90.5" cy="91" rx="6.5" ry="3.4" fill="${K}" stroke="none"/><path d="M93 92.4h4" stroke="#efeae0" stroke-width="2.6"/></g>
    <g class="dhead">
      <path d="M79 39C85 30 93 23 100 20L109 45C103 51 94 53 87 50Z" fill="${K}"/>
      <path d="M84.5 31.5L93 50" stroke="#b21f35" stroke-width="5" stroke-linecap="round"/>
      <circle cx="94.5" cy="52.5" r="3" fill="#e9c46a"/>
      <g class="djaw"><path d="M103 37L121 38.5C122 43 117 46.5 110.5 46.5C106 46.5 103 43 103 37Z" fill="${D}"/><path d="M111 40.5C111.5 47 117.5 48 118.5 41Z" fill="#e8798b"/></g>
      <ellipse cx="103" cy="27" rx="14.5" ry="13" fill="${K}"/>
      <circle cx="100" cy="35.5" r="9.5" fill="${K}"/>
      <path d="M105 23C114 21 124 24.5 126.5 30.5C127.5 35 124 38.5 119 39.5L105 40.5Z" fill="${K}"/>
      <path d="M92 20C97 14.5 108 14 114 19" stroke="${H}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M121.5 39C114 41.5 107 41.5 100.5 38" stroke="#000" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M96 31C97.5 35 100 37.5 103.5 38.5" stroke="${H}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <ellipse cx="125.2" cy="29.6" rx="3.3" ry="2.7" fill="#050506"/><circle cx="124.4" cy="28.6" r="0.9" fill="#8a8a96"/>
      <g class="deye"><circle cx="108.5" cy="25.5" r="2.5" fill="#6a3d1c"/><circle cx="108.9" cy="25.5" r="1.4" fill="#0a0605"/><circle cx="109.6" cy="24.7" r="0.7" fill="#fff"/></g>
      <path d="M104.5 21.5q4-2.2 7.5-0.4" stroke="${H}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path class="dear" d="M91 21C87.5 10 96 7.5 102 13C99 15 96.5 19 95.5 24Z" fill="${D}"/>
      <path d="M92.5 19.5C91 13 95.5 11 99.5 13.5" stroke="${H}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`;
}
function addStamp(left, animated) {
  reveal.querySelector('.pawstamp')?.remove();
  const el = document.createElement('span');
  el.className = `pawstamp${animated ? ' is-stamped' : ''}`;
  if (left != null) el.style.left = `${left}px`;
  el.innerHTML = PAW;
  reveal.append(el);
}
// La promesse se termine au coup de patte ; le chien finit sa sortie tout seul ensuite.
function dogValidate() {
  return new Promise((resolve) => {
    (async () => {
      const r = reveal.getBoundingClientRect();
      const W = window.innerWidth;
      const DW = 150, DH = 111, k = DW / 124;
      const dog = document.createElement('div');
      dog.className = 'dog is-running';
      dog.innerHTML = dogSVG();
      elvesBox.append(dog);
      const bubble = document.createElement('span');
      bubble.className = 'woof';
      // Dressé contre le bas de la carte, sa patte avant arrive pile sur le bord, à l'endroit du tampon.
      const stampX = r.left + Math.min(96, r.width * 0.27);
      const gy = Math.min(window.innerHeight - 4, r.bottom + 30);
      const x = stampX - 75 * k, y = gy - DH + 4 * k;
      const T = (xx, yy, extra = '') => ({ transform: `translate(${xx}px, ${yy}px) ${extra}` });
      const bark = (text) => {
        dog.classList.remove('is-barking');
        void dog.offsetWidth;
        dog.classList.add('is-barking');
        sound.bark();
        navigator.vibrate?.(14);
        bubble.textContent = text;
        bubble.remove();
        elvesBox.append(bubble);
      };
      bubble.style.left = `${x + 100 * k}px`;
      bubble.style.top = `${r.bottom - 54}px`;
      try {
        // Il déboule au galop et freine sous la carte.
        await dog.animate([T(-DW - 30, y), { ...T(x + 16, y), offset: 0.82 }, T(x, y)], { duration: 760, easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)', fill: 'forwards' }).finished;
        dog.className = 'dog';
        await wait(170);
        // Il se dresse sur la carte et renifle le prénom.
        dog.className = 'dog is-sniffing';
        await dog.animate([T(x, y, 'rotate(0deg)'), T(x, y - 5, 'rotate(-36deg)')], { duration: 240, easing: 'cubic-bezier(0.3, 1.4, 0.5, 1)', fill: 'forwards' }).finished;
        sound.sniff();
        await wait(560);
        bark('Wouf !');
        await wait(330);
        bark('Validé !');
        await wait(340);
        // Coup de patte : le tampon reste sur la carte.
        dog.classList.add('is-stamping');
        await wait(230);
        addStamp(stampX - r.left - 21, true);
        sound.seal();
        resolve();
        await wait(420);
        bubble.remove();
        dog.className = 'dog';
        await dog.animate([T(x, y - 5, 'rotate(-36deg)'), T(x, y, 'rotate(0deg)')], { duration: 190, easing: 'ease-in', fill: 'forwards' }).finished;
        // Deux petits bonds de joie, puis il repart au galop.
        await dog.animate([T(x, y), T(x + 6, y - 24, 'rotate(-9deg)'), T(x + 12, y), T(x + 18, y - 17, 'rotate(-6deg)'), T(x + 24, y)], { duration: 520, easing: 'linear', fill: 'forwards' }).finished;
        dog.className = 'dog is-running';
        await dog.animate([T(x + 24, y), T(W + 40, y)], { duration: 640, easing: 'cubic-bezier(0.5, 0, 0.9, 0.6)', fill: 'forwards' }).finished;
      } catch {
        resolve();
      }
      bubble.remove();
      dog.remove();
    })();
  });
}

function showResultInstantly(data) {
  revealName.textContent = data.target;
  addStamp(null, false);
  gift.hidden = true;
  reveal.hidden = false;
  reveal.classList.add('is-in', 'is-named');
  stage.classList.add('is-opened', 'is-named');
  finishReveal(data);
}

function finishReveal(data) {
  $('#gift-title').textContent = 'C\'est pioché !';
  $('#gift-hint').hidden = true;
  $('#my-code').textContent = data.code || '';
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
    Promise.race([loadBall(), wait(2500)]).then(() => {
      if (current !== 'gift') return;
      resetGift();
      state.reveal = data;
      startGiftLoop();
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }
});

// ---------- Démarrage ----------
startSnow($('#snow'));
try { history.replaceState({ screen: 'home' }, ''); } catch { /* cadre restreint */ }

// ---------- Lutin espion qui passe la tête au bord de l'écran ----------
const peek = { timer: 0, el: null, caught: 0 };
function schedulePeek(delay = rand(6000, 12000)) {
  clearTimeout(peek.timer);
  peek.timer = setTimeout(doPeek, delay);
}
async function doPeek() {
  if (reduceMotion || document.hidden || current !== 'home' || peek.el) { schedulePeek(); return; }
  const W = window.innerWidth, H = window.innerHeight;
  const left = Math.random() < 0.5;
  const y = rand(0.5, 0.8) * H;
  const el = makeElf(Math.random() < 0.5 ? 1 : 0, `peeker pose-down is-shifty ${left ? '' : 'is-right'}`);
  peek.el = el;
  const hide = left ? `translate(-70px, ${y}px) rotate(0deg)` : `translate(${W + 10}px, ${y}px) scaleX(-1) rotate(0deg)`;
  const show = left ? `translate(-26px, ${y}px) rotate(26deg)` : `translate(${W - 34}px, ${y}px) scaleX(-1) rotate(26deg)`;
  el.style.transform = hide;
  elvesBox.append(el);
  let caught = false;
  el.addEventListener('pointerdown', async () => {
    if (caught) return;
    caught = true;
    peek.caught += 1;
    sound.unlock();
    sound.squeak();
    navigator.vibrate?.(15);
    el.className = `elf peeker is-shocked is-flailing ${left ? '' : 'is-right'}`;
    const up = left ? `translate(-20px, ${y - 40}px) rotate(10deg)` : `translate(${W - 40}px, ${y - 40}px) scaleX(-1) rotate(10deg)`;
    await el.animate([{ transform: show }, { transform: up, offset: 0.35 }, { transform: hide }], { duration: 520, easing: 'ease-in', fill: 'forwards' }).finished.catch(() => {});
    el.remove(); peek.el = null; schedulePeek(rand(9000, 16000));
  });
  await el.animate([{ transform: hide }, { transform: show }], { duration: 520, easing: 'cubic-bezier(0.3, 1.4, 0.5, 1)', fill: 'forwards' }).finished.catch(() => {});
  await wait(rand(1800, 2600));
  if (caught) return;
  await el.animate([{ transform: show }, { transform: hide }], { duration: 300, easing: 'ease-in', fill: 'forwards' }).finished.catch(() => {});
  if (caught) return;
  el.remove(); peek.el = null; schedulePeek();
}

(async function init() {
  drawGarland();
  setTimeout(() => $('.title').classList.add('is-written'), 3600);
  try {
    await loadState({ drop: true });
  } catch (err) {
    $('#progress').textContent = err.message;
  }
  schedulePeek(4500);
  if (store.get('token')) loadBall();
})();
