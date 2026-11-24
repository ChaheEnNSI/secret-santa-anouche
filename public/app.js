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
    $('#me-text').textContent = done ? 'Tu as déjà pioché. Un téléphone, un seul tirage.' : 'Ton cadeau t\'attend.';
    $('#me-btn').textContent = done ? 'Revoir qui j\'ai pioché' : 'Ouvrir mon cadeau';
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
// Lutin têtu installé sur le couvercle : c'est lui qui empêche le cadeau de s'ouvrir.
let sitter = null;
function placeSitter() {
  sitter?.remove();
  sitter = null;
  if (reduceMotion) return;
  sitter = makeElf(1, 'sitter pose-cross is-tapping');
  gift.append(sitter);
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
gift.addEventListener('pointerup', () => { if (endDrag() && spin.moved < 8) tapGift(); });
gift.addEventListener('pointercancel', endDrag);
gift.addEventListener('click', (e) => { if (e.detail === 0) tapGift(); }); // clavier

function renderTapDots() {
  $('#taps').innerHTML = Array.from({ length: spin.needed }, (_, i) => `<i class="${i < spin.taps ? 'is-on' : ''}"></i>`).join('');
}

function tapGift() {
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
  sound.thump(spin.taps);
  if (sitter) {
    sitter.className = 'elf sitter is-shocked is-flailing';
    clearTimeout(sitter.t);
    sitter.t = setTimeout(() => { if (sitter) sitter.className = `elf sitter pose-cross${spin.taps >= spin.needed - 2 ? ' is-shifty' : ' is-tapping'}`; }, 520);
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

function resetGift() {
  gift.hidden = false;
  gift.classList.remove('is-open', 'is-gone', 'is-dragging');
  stage.classList.remove('is-opened', 'is-named');
  stage.style.setProperty('--charge', 0);
  reveal.hidden = true;
  reveal.classList.remove('is-in', 'is-named', 'is-tilting');
  revealName.textContent = '';
  after.hidden = true;
  $('#gift-title').textContent = 'Ton cadeau t\'attend';
  $('#gift-hint').hidden = false;
  $('#gift-hint').textContent = 'Fais-le tourner du doigt, puis touche-le pour l\'ouvrir.';
  Object.assign(spin, { ry: -28, vel: 0, shaking: false, taps: 0, needed: 5 + Math.floor(Math.random() * 4), tapAt: -9999, lift: 0, charge: 0, prefetch: null });
  renderTapDots();
  placeSitter();
  state.opening = false;
}

async function openGiftScreen() {
  resetGift();
  show('gift');
  startGiftLoop();
  if (store.get('revealed') === '1') {
    try { state.reveal = await api('reveal', { method: 'POST' }); showResultInstantly(state.reveal); } catch (err) { handleRevealError(err); }
  }
}

function handleRevealError(err) {
  spin.shaking = false;
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

  // 2. La carte se redresse, puis les lutins apportent les lettres une à une.
  prepareLetters(data.target);
  reveal.hidden = false;
  setTimeout(() => { gift.classList.add('is-gone'); reveal.classList.add('is-in'); }, 500);
  $('#gift-title').textContent = 'Et tu as pioché…';
  $('#gift-hint').textContent = 'Les lutins t\'apportent le prénom, lettre par lettre.';
  await wait(1700);
  gift.hidden = true;
  await deliverLetters();
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

async function deliverLetters() {
  const fontSize = parseFloat(getComputedStyle(revealName).fontSize) || 50;
  const spans = [...revealName.querySelectorAll('.ch')];
  const W = window.innerWidth, H = window.innerHeight;
  const EW = 60, EH = 69, HANDS = 15, PUSH = 24, PULL = 26;
  const trips = spans.map((span, i) => new Promise((resolve) => {
    setTimeout(async () => {
      const r = span.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const fromLeft = cx < W / 2 ? i % 3 !== 2 : i % 3 === 2;
      const elf = makeElf(i % 2, 'is-tiptoe is-shifty');
      elf.style.setProperty('--fs', `${fontSize}px`);
      elf.insertAdjacentHTML('afterbegin', `<span class="elf__letter">${span.textContent}</span>`);
      elvesBox.append(elf);
      const letter = elf.querySelector('.elf__letter');
      const lh = letter.offsetHeight || fontSize;
      const ax = cx - EW / 2;
      const ay = cy + PUSH - HANDS + lh / 2;
      const sx = fromLeft ? -EW - 20 : W + 20;
      const sy = Math.min(H - EH - 24, ay + rand(70, 170));
      const at = (x, y, extra = '') => `translate(${x}px, ${y}px) ${extra}`;
      try {
        // 1. Il arrive en douce, sur la pointe des pieds, en regardant partout.
        await elf.animate(hopFrames(sx, sy, ax, ay, 5, rand(8, 14), fromLeft ? 5 : -5), { duration: 1150, easing: 'cubic-bezier(0.45, 0, 0.75, 1)', fill: 'forwards' }).finished;
        elf.classList.remove('is-tiptoe', 'is-shifty');
        elf.classList.add('look-up');
        // 2. Il pousse la lettre dans sa case : elle s'écrase comme de la gelée.
        elf.animate([
          { transform: at(ax, ay, 'scale(1, 1)') },
          { transform: at(ax, ay + 5, 'scale(1.1, 0.86)'), offset: 0.3 },
          { transform: at(ax, ay - 12, 'scale(0.94, 1.08)'), offset: 0.65 },
          { transform: at(ax, ay, 'scale(1, 1)') },
        ], { duration: 380, easing: 'ease-out', fill: 'forwards' });
        await letter.animate([{ transform: 'translateX(-50%) translateY(0)' }, { transform: `translateX(-50%) translateY(-${PUSH}px)` }], { duration: 230, delay: 60, easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)', fill: 'forwards' }).finished;
        letter.style.visibility = 'hidden';
        span.classList.add('is-placed');
        sound.note(i + 2);
        navigator.vibrate?.(8);
        await wait(170);
        // 3. Ça colle : il tire pour décoller ses mains, un fil doré s'étire…
        elf.classList.remove('look-up');
        elf.classList.add('is-shocked');
        const top = r.top + r.height * 0.78;
        const handY = ay + HANDS - 4;
        const goo = document.createElement('div');
        goo.className = 'goo';
        goo.style.left = `${cx - 2.5}px`;
        goo.style.top = `${top}px`;
        goo.style.height = `${handY + PULL - top}px`;
        elvesBox.append(goo);
        sound.squish();
        const pullOpts = { duration: 430, easing: 'cubic-bezier(0.5, 0, 0.9, 0.6)', fill: 'forwards' };
        goo.animate([{ transform: `scaleY(${Math.max(0.05, (handY - top) / (handY + PULL - top))})` }, { transform: 'scaleY(1)' }], pullOpts);
        span.animate([{ transform: 'none' }, { transform: 'scale(0.93, 1.16) translateY(3px)' }], { ...pullOpts, fill: 'none' });
        await elf.animate([
          { transform: at(ax, ay, 'rotate(0deg)') },
          { transform: at(ax, ay + PULL * 0.6, `rotate(${fromLeft ? -6 : 6}deg)`), offset: 0.6 },
          { transform: at(ax, ay + PULL, `rotate(${fromLeft ? 5 : -5}deg) scale(1.04, 0.95)`) },
        ], pullOpts).finished;
        // 4. …et ça lâche d'un coup : la lettre tremblote, le lutin tombe à la renverse.
        goo.animate([{ transform: 'scaleY(1)', opacity: 1 }, { transform: 'scaleY(0)', opacity: 0.6 }], { duration: 140, easing: 'ease-in', fill: 'forwards' }).finished.then(() => goo.remove());
        span.animate([
          { transform: 'scale(0.93, 1.16)' }, { transform: 'scale(1.12, 0.88)' }, { transform: 'scale(0.97, 1.04)' }, { transform: 'none' },
        ], { duration: 420, easing: 'ease-out' });
        sound.plop();
        overlay.sparkle(cx, cy, 10, 16);
        resolve();
        await elf.animate([
          { transform: at(ax, ay + PULL) },
          { transform: at(ax + (fromLeft ? -10 : 10), ay + PULL + 14, `rotate(${fromLeft ? -24 : 24}deg) scale(1.1, 0.85)`), offset: 0.45 },
          { transform: at(ax + (fromLeft ? -12 : 12), ay + PULL + 6) },
        ], { duration: 360, easing: 'ease-out', fill: 'forwards' }).finished;
        elf.classList.remove('is-shocked');
        elf.classList.add('is-cheering');
        await wait(380);
        elf.classList.remove('is-cheering');
        elf.classList.add('is-walking');
        const fx = ax + (fromLeft ? -12 : 12);
        const ex = fromLeft ? -EW - 30 : W + 30;
        await elf.animate(hopFrames(fx, ay + PULL + 6, ex, sy - rand(0, 80), 3, rand(30, 46), fromLeft ? -8 : 8), { duration: 850, easing: 'linear', fill: 'forwards' }).finished;
      } catch {
        span.classList.add('is-placed');
        resolve();
      }
      elf.remove();
    }, i * 380);
  }));
  await Promise.all(trips);
  await wait(300);
}

function showResultInstantly(data) {
  revealName.textContent = data.target;
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
    resetGift();
    state.reveal = data;
    startGiftLoop();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
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
})();
