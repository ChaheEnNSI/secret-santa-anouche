// Secret Santa : interface.
const $ = (sel) => document.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

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

// ---------- État ----------
const state = {
  people: [],
  event: null,
  selected: null,
  reveal: null, // { name, target, myWishlist, targetWishlist }
  opening: false,
};

// ---------- Navigation entre écrans ----------
const screens = {
  home: $('#screen-home'),
  question: $('#screen-question'),
  gift: $('#screen-gift'),
};
let current = 'home';

function show(name, { push = true, animate = true } = {}) {
  if (name === current && !screens[name].hidden) return;
  const swap = () => {
    Object.entries(screens).forEach(([key, el]) => { el.hidden = key !== name; });
    screens[name].classList.remove('is-entering');
    void screens[name].offsetWidth;
    if (!reduceMotion && animate) screens[name].classList.add('is-entering');
    window.scrollTo({ top: 0 });
  };
  swap();
  if (push) { try { history.pushState({ screen: name }, ''); } catch { /* cadre restreint */ } }
  current = name;
}

window.addEventListener('popstate', (e) => {
  const target = e.state?.screen || 'home';
  if (target === 'home') goHome({ push: false });
  else show(target, { push: false });
});

// ---------- Guirlande ----------
const BULB_COLORS = ['#f2c14e', '#e5484d', '#fff4dc', '#57b98a'];

function drawGarland(litNames = new Set()) {
  const svg = $('#garland');
  const w = Math.max(320, window.innerWidth);
  const h = svg.getBoundingClientRect().height || 84;
  const n = state.people.length || 10;
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  const sag = h * 0.42;
  const top = 6;
  const wire = `M -10 ${top} Q ${w * 0.25} ${top + sag * 2} ${w * 0.5} ${top + 4} Q ${w * 0.75} ${top + sag * 2} ${w + 10} ${top}`;
  svg.innerHTML = `
    <defs><filter id="halo" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="6"/></filter></defs>
    <path class="garland__wire" d="${wire}"/>`;
  const path = svg.querySelector('path');
  const total = path.getTotalLength();
  const margin = total * 0.05;
  const step = (total - margin * 2) / (n - 1);
  const frag = [];
  for (let i = 0; i < n; i++) {
    const p = path.getPointAtLength(margin + step * i);
    const person = state.people[i];
    const lit = person && litNames.has(person.name);
    const color = BULB_COLORS[i % BULB_COLORS.length];
    frag.push(`
      <g class="bulb${lit ? ' is-lit' : ''}" data-index="${i}" style="--c:${color};--d:${(i * 0.37) % 2.2}s" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})">
        <circle class="bulb__halo" cx="0" cy="14" r="13" filter="url(#halo)"/>
        <rect class="bulb__cap" x="-3.5" y="0" width="7" height="6" rx="1.5"/>
        <path class="bulb__glass" d="M0 5 C 6 7, 7 16, 0 23 C -7 16, -6 7, 0 5 Z"/>
      </g>`);
  }
  svg.insertAdjacentHTML('beforeend', frag.join(''));
}

// Allume les ampoules une à une au chargement (une par personne ayant déjà tiré).
async function lightGarland() {
  const lit = new Set(state.people.filter((p) => p.revealed).map((p) => p.name));
  drawGarland(new Set());
  if (reduceMotion) { drawGarland(lit); return; }
  await wait(500);
  const bulbs = [...document.querySelectorAll('.bulb')];
  for (const bulb of bulbs) {
    const person = state.people[Number(bulb.dataset.index)];
    if (person && lit.has(person.name)) {
      bulb.classList.add('is-lit');
      await wait(140);
    }
  }
}

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => drawGarland(new Set(state.people.filter((p) => p.revealed).map((p) => p.name))), 150);
});

// ---------- Accueil ----------
function parisToday() {
  const parts = new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  return parts; // AAAA-MM-JJ
}

function renderCountdown() {
  if (!state.event) return;
  const [y, m, d] = state.event.date.split('-').map(Number);
  const [ty, tm, td] = parisToday().split('-').map(Number);
  const days = Math.round((Date.UTC(y, m - 1, d) - Date.UTC(ty, tm - 1, td)) / 86400000);
  $('#date-label').textContent = state.event.label;
  $('#countdown').textContent =
    days > 1 ? `Plus que ${days} jours` :
    days === 1 ? 'C\'est demain !' :
    days === 0 ? 'C\'est aujourd\'hui !' : 'C\'était le 20 décembre';
}

function renderProgress() {
  const total = state.people.length;
  const done = state.people.filter((p) => p.revealed).length;
  $('#progress').textContent =
    done === 0 ? 'Personne n\'a encore découvert son nom. À toi de commencer !' :
    done === total ? 'Tout le monde a découvert son nom. Rendez-vous le 20 décembre !' :
    done === 1 ? `1 sur ${total} a déjà découvert son nom.` :
    `${done} sur ${total} ont déjà découvert leur nom.`;
}

const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>';

function renderTags() {
  const list = $('#tags');
  list.innerHTML = '';
  state.people.forEach((person, index) => {
    const li = document.createElement('li');
    li.style.setProperty('--i', index);
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
      st.innerHTML = `${STAR}<span>a déjà tiré</span>`;
      btn.append(st);
      btn.setAttribute('aria-label', `${person.name}, a déjà tiré`);
    }
    btn.addEventListener('click', () => selectName(person.name, btn));
    li.append(btn);
    list.append(li);
  });
}

async function loadState() {
  const data = await api('state');
  state.people = data.people;
  state.event = data.event;
  renderCountdown();
  renderProgress();
  renderTags();
}

async function goHome({ push = true } = {}) {
  show('home', { push });
  try {
    await loadState();
    drawGarland(new Set(state.people.filter((p) => p.revealed).map((p) => p.name)));
  } catch { /* on garde l'affichage précédent */ }
}

// ---------- Question ----------
const answerForm = $('#answer-form');
const answerInput = $('#answer');
const answerBtn = $('#answer-btn');
const answerStatus = $('#answer-status');
let unlockTimer;

function setStatus(el, text, kind = '') {
  el.textContent = text;
  el.className = `status${kind ? ` is-${kind}` : ''}`;
}

function setLoading(btn, loading, label) {
  btn.classList.toggle('is-loading', loading);
  btn.disabled = loading;
  if (label) btn.querySelector('.btn__label').textContent = label;
}

async function selectName(name, tagEl) {
  state.selected = name;
  // Déjà identifié sur ce téléphone : on va directement au cadeau.
  if (store.get('token') && store.get('name') === name) {
    openGiftScreen();
    return;
  }
  const qName = $('#q-name');
  qName.textContent = name;
  $('#q-notme').textContent = `Tu n'es pas ${name} ? Reviens en arrière.`;
  $('#q-text').textContent = 'Chargement de ta question…';
  answerForm.classList.remove('is-verified');
  answerInput.value = '';
  answerInput.disabled = true;
  answerBtn.disabled = true;
  setStatus(answerStatus, '');

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
    tagEl?.classList.add('is-pulled');
    await wait(reduceMotion ? 0 : 160);
    tagEl?.classList.remove('is-pulled');
    show('question');
  }
  try {
    const data = await api(`question?name=${encodeURIComponent(name)}`);
    // Espace insécable avant « ? ! : ; » (typographie française).
    $('#q-text').textContent = data.question.replace(/ ([?!:;])/g, '\u202f$1');
    answerInput.disabled = false;
    answerBtn.disabled = false;
    // Sur ordinateur, on place le curseur directement dans le champ.
    if (window.matchMedia('(pointer: fine)').matches) answerInput.focus();
  } catch (err) {
    $('#q-text').textContent = 'Question indisponible';
    setStatus(answerStatus, err.message, 'error');
  }
}

answerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  sound.unlock();
  const answer = answerInput.value.trim();
  answerInput.classList.remove('is-wrong');
  if (!answer) {
    setStatus(answerStatus, 'Écris ta réponse avant de valider.', 'error');
    answerInput.focus();
    return;
  }
  setLoading(answerBtn, true, 'Vérification…');
  setStatus(answerStatus, '');
  try {
    const data = await api('verify', { method: 'POST', body: { name: state.selected, answer } });
    store.set('token', data.token);
    store.set('name', state.selected);
    setLoading(answerBtn, false, 'Vérifier');
    setStatus(answerStatus, 'C\'est bien toi !', 'ok');
    answerInput.blur();
    answerForm.classList.add('is-verified');
    sound.seal();
    navigator.vibrate?.(20);
    await wait(reduceMotion ? 300 : 1100);
    state.reveal = null;
    openGiftScreen();
  } catch (err) {
    setLoading(answerBtn, false, 'Vérifier');
    setStatus(answerStatus, err.message, 'error');
    if (err.status === 401) {
      void answerInput.offsetWidth;
      answerInput.classList.add('is-wrong');
      answerInput.select();
    }
    if (err.status === 429 && err.data?.lockedFor) {
      answerBtn.disabled = true;
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(() => { answerBtn.disabled = false; setStatus(answerStatus, ''); }, err.data.lockedFor);
    }
  }
});

// ---------- Cadeau ----------
const gift = $('#gift');
const reveal = $('#reveal');
const after = $('#after');
const track = $('#reel-track');
const stage = $('#stage');

function resetGift() {
  gift.hidden = false;
  gift.classList.remove('is-open', 'is-shaking');
  reveal.hidden = true;
  reveal.classList.remove('is-in', 'is-landed');
  track.style.transition = 'none';
  track.style.transform = 'none';
  track.innerHTML = '';
  after.hidden = true;
  stage.classList.remove('is-opened', 'is-landed');
  reveal.classList.remove('is-tilting');
  $('#gift-title').textContent = 'Ton cadeau t\'attend';
  $('#gift-hint').hidden = false;
  $('#gift-hint').textContent = 'Touche le paquet pour l\'ouvrir.';
  state.opening = false;
}

async function openGiftScreen() {
  resetGift();
  show('gift');
  const name = store.get('name');
  const me = state.people.find((p) => p.name === name);
  // Déjà tiré auparavant : on affiche directement le résultat, sans rejouer l'ouverture.
  if (me?.revealed) {
    try {
      state.reveal = await api('reveal', { method: 'POST' });
      showResultInstantly(state.reveal);
    } catch (err) { handleRevealError(err); }
  }
}

function handleRevealError(err) {
  gift.classList.remove('is-shaking');
  state.opening = false;
  if (err.status === 401) {
    store.del('token');
    store.del('name');
    goHome();
    return;
  }
  $('#gift-hint').textContent = err.message;
}

gift.addEventListener('click', async () => {
  if (state.opening || gift.classList.contains('is-open')) return;
  state.opening = true;
  sound.unlock();
  gift.classList.add('is-shaking');
  $('#gift-hint').textContent = 'Ça bouge…';
  try {
    const [data] = await Promise.all([state.reveal ? Promise.resolve(state.reveal) : api('reveal', { method: 'POST' }), wait(reduceMotion ? 0 : 900)]);
    state.reveal = data;
    const me = state.people.find((p) => p.name === data.name);
    if (me) me.revealed = true;
    await playOpening(data);
  } catch (err) {
    handleRevealError(err);
  }
});

function buildReel(data) {
  const others = state.people.map((p) => p.name).filter((n) => n !== data.name);
  const seq = [];
  const length = reduceMotion ? 1 : 34;
  let last = data.target;
  for (let i = 0; i < length - 1; i++) {
    let pick;
    do { pick = others[Math.floor(Math.random() * others.length)]; } while (pick === last && others.length > 1);
    seq.push(pick);
    last = pick;
  }
  if (seq[seq.length - 1] === data.target) seq[seq.length - 1] = others.find((n) => n !== data.target);
  seq.push(data.target);
  track.innerHTML = '';
  seq.forEach((n, i) => {
    const el = document.createElement('div');
    el.className = `reel__item${i === seq.length - 1 ? ' is-target' : ''}`;
    el.textContent = n;
    if (i !== seq.length - 1) el.setAttribute('aria-hidden', 'true');
    track.append(el);
  });
  return seq.length;
}

async function playOpening(data) {
  gift.classList.remove('is-shaking');
  $('#gift-hint').textContent = '';
  const count = buildReel(data);
  const itemH = parseFloat(getComputedStyle(reveal).getPropertyValue('--rh')) || 74;

  if (reduceMotion) {
    showOnlyTarget(data.target);
    gift.hidden = true;
    reveal.hidden = false;
    reveal.classList.add('is-in', 'is-landed');
    finishReveal(data);
    return;
  }

  gift.classList.add('is-open');
  stage.classList.add('is-opened');
  sound.pop();
  navigator.vibrate?.(30);
  const rect = gift.getBoundingClientRect();
  setTimeout(() => {
    confetti.burst(rect.left + rect.width / 2, rect.top + rect.height * 0.35, 150);
    confetti.sparkle(rect.left + rect.width / 2, rect.top + rect.height * 0.4, 40, rect.width * 0.5);
  }, 180);

  await wait(650);
  reveal.hidden = false;
  void reveal.offsetWidth;
  reveal.classList.add('is-in');
  await wait(450);
  gift.hidden = true;

  // Roulette : les prénoms défilent puis ralentissent jusqu'au bon.
  const duration = 4200;
  const distance = -(count - 1) * itemH;
  track.style.transition = 'none';
  track.style.transform = 'none';
  const spin = track.animate(
    [
      { transform: 'translateY(0)', easing: 'cubic-bezier(0.45, 0, 0.9, 0.6)' },
      { transform: `translateY(${distance * 0.35}px)`, offset: 0.22, easing: 'linear' },
      { transform: `translateY(${distance * 0.72}px)`, offset: 0.5, easing: 'cubic-bezier(0.1, 0.5, 0.2, 1)' },
      { transform: `translateY(${distance - itemH * 0.18}px)`, offset: 0.93, easing: 'ease-in-out' },
      { transform: `translateY(${distance}px)` },
    ],
    { duration, fill: 'forwards' },
  );
  sound.ticks(duration);
  await spin.finished.catch(() => {});

  // On ne garde que le bon prénom dans la roulette.
  spin.cancel();
  showOnlyTarget(data.target);
  reveal.classList.add('is-landed');
  stage.classList.add('is-landed');
  sound.chime();
  navigator.vibrate?.([25, 60, 35]);
  const r = reveal.getBoundingClientRect();
  confetti.burst(r.left + r.width / 2, r.top + r.height * 0.45, 110, 0.75);
  confetti.sparkle(r.left + r.width / 2, r.top + r.height * 0.5, 34, r.width * 0.45);
  await wait(700);
  finishReveal(data);
}

function showOnlyTarget(name) {
  track.style.transition = 'none';
  track.style.transform = 'none';
  track.innerHTML = '';
  const el = document.createElement('div');
  el.className = 'reel__item is-target';
  el.textContent = name;
  track.append(el);
}

function showResultInstantly(data) {
  showOnlyTarget(data.target);
  gift.hidden = true;
  reveal.hidden = false;
  reveal.classList.add('is-in', 'is-landed');
  stage.classList.add('is-opened', 'is-landed');
  finishReveal(data);
}

// Inclinaison de la carte quand on la touche ou la survole.
function tiltCard(e) {
  if (reduceMotion || !reveal.classList.contains('is-landed')) return;
  const r = reveal.getBoundingClientRect();
  const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
  reveal.style.setProperty('--ry', `${((px - 0.5) * 16).toFixed(2)}deg`);
  reveal.style.setProperty('--rx', `${((0.5 - py) * 12).toFixed(2)}deg`);
  reveal.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
  reveal.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
  reveal.classList.add('is-tilting');
}
function untiltCard() { reveal.classList.remove('is-tilting'); }
reveal.addEventListener('pointermove', tiltCard);
reveal.addEventListener('pointerdown', tiltCard);
reveal.addEventListener('pointerleave', untiltCard);
reveal.addEventListener('pointercancel', untiltCard);
reveal.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') untiltCard(); });

function finishReveal(data) {
  $('#gift-title').textContent = 'C\'est tiré !';
  $('#gift-hint').hidden = true;
  const de = /^[aeiouyàâäéèêëîïôöûüh]/i.test(data.target) ? 'd\'' : 'de ';
  $('#target-wish-title').textContent = `Les idées cadeaux ${de}${data.target}`;
  const wishEl = $('#target-wish');
  if (data.targetWishlist) {
    wishEl.textContent = data.targetWishlist;
    wishEl.classList.remove('is-empty');
  } else {
    wishEl.textContent = `${data.target} n'a pas encore écrit d'idées. Reviens voir un peu plus tard.`;
    wishEl.classList.add('is-empty');
  }
  $('#my-wish').value = data.myWishlist || '';
  setStatus($('#wish-status'), '');
  after.hidden = false;
  after.classList.remove('is-entering');
  void after.offsetWidth;
  if (!reduceMotion) after.classList.add('is-entering');
  state.opening = false;
}

// ---------- Liste d'envies ----------
$('#wish-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = e.submitter || $('#wish-form .btn');
  const status = $('#wish-status');
  btn.disabled = true;
  try {
    const text = $('#my-wish').value.trim();
    await api('wishlist', { method: 'POST', body: { text } });
    if (state.reveal) state.reveal.myWishlist = text;
    setStatus(status, 'Enregistré', 'ok');
  } catch (err) {
    setStatus(status, err.message, 'error');
  } finally {
    btn.disabled = false;
  }
});

// ---------- Actions diverses ----------
document.addEventListener('click', (e) => {
  const action = e.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  if (action === 'home') goHome();
  if (action === 'replay') {
    const data = state.reveal;
    resetGift();
    state.reveal = data;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  if (action === 'logout') {
    store.del('token');
    store.del('name');
    state.reveal = null;
    goHome();
  }
});

// ---------- Neige ----------
function startSnow(canvas) {
  const ctx = canvas.getContext('2d');
  let w, h, dpr, flakes = [];
  const make = (y) => {
    const r = Math.random() ** 2 * 2.6 + 0.6;
    return { x: Math.random() * w, y: y ?? Math.random() * h, r, vy: 0.25 + r * 0.32, sway: Math.random() * Math.PI * 2, amp: 0.2 + Math.random() * 0.6, a: 0.25 + r / 4.5 };
  };
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(120, (w * h) / 7000));
    flakes = Array.from({ length: count }, () => make());
  };
  resize();
  window.addEventListener('resize', resize);
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const f of flakes) {
      ctx.globalAlpha = f.a;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = '#f7f2e7';
      ctx.fill();
    }
  };
  if (reduceMotion) { draw(); return; }
  let last = performance.now();
  const tick = (now) => {
    const dt = Math.min(48, now - last) / 16.67;
    last = now;
    for (const f of flakes) {
      f.sway += 0.012 * dt;
      f.y += f.vy * dt;
      f.x += Math.sin(f.sway) * f.amp * 0.5 * dt + 0.08 * dt;
      if (f.y > h + 5) Object.assign(f, make(-5));
      if (f.x > w + 5) f.x = -5;
    }
    draw();
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// ---------- Confettis ----------
const confetti = (() => {
  const canvas = $('#confetti');
  const ctx = canvas.getContext('2d');
  const colors = ['#e9c46a', '#f7e4a6', '#d13a4e', '#f7f2e7', '#57b98a'];
  let parts = [];
  let running = false;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);
  let last = 0;
  const frame = (now) => {
    const dt = Math.min(48, now - last) / 16.67;
    last = now;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    parts = parts.filter((p) => p.life > 0);
    for (const p of parts) {
      p.vy += p.g * dt;
      p.vx *= p.drag ** dt;
      p.vy *= p.drag ** dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      p.life -= dt;
      ctx.save();
      ctx.globalAlpha = Math.min(1, p.life / 40);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.spark) {
        const r = p.w * (0.55 + 0.45 * Math.sin(p.life * 0.25 + p.phase));
        ctx.shadowColor = '#f7e4a6';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        for (let k = 0; k < 8; k++) {
          const a = (k * Math.PI) / 4;
          const rad = k % 2 ? r * 0.3 : r;
          ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
        }
        ctx.closePath();
        ctx.fill();
      } else if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill(); }
      else { ctx.scale(1, Math.cos(p.rot * 2)); ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); }
      ctx.restore();
    }
    if (parts.length) requestAnimationFrame(frame);
    else { running = false; ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); }
  };
  return {
    burst(x, y, count = 120, power = 1) {
      if (reduceMotion) return;
      for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.25;
        const speed = (5 + Math.random() * 9) * power;
        parts.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.3,
          w: 5 + Math.random() * 6,
          h: 8 + Math.random() * 8,
          round: Math.random() < 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 90 + Math.random() * 70,
          g: 0.16,
          drag: 0.985,
        });
      }
      start();
    },
    // Étincelles dorées qui montent doucement en scintillant.
    sparkle(x, y, count = 30, spread = 120) {
      if (reduceMotion) return;
      for (let i = 0; i < count; i++) {
        parts.push({
          x: x + (Math.random() - 0.5) * spread * 2,
          y: y + (Math.random() - 0.5) * spread * 0.6,
          vx: (Math.random() - 0.5) * 1.6,
          vy: -0.6 - Math.random() * 2.2,
          rot: 0,
          vr: (Math.random() - 0.5) * 0.04,
          w: 4 + Math.random() * 6,
          spark: true,
          phase: Math.random() * 6,
          color: Math.random() < 0.6 ? '#f7e4a6' : '#fff6dc',
          life: 80 + Math.random() * 80,
          g: -0.012,
          drag: 0.975,
        });
      }
      start();
    },
  };
  function start() {
    if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
  }
})();

// ---------- Sons (générés, aucun fichier audio) ----------
const sound = (() => {
  let ctx = null;
  let on = store.get('sound') !== 'off';
  const btn = $('#sound');
  const render = () => {
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Son activé, toucher pour couper' : 'Son coupé, toucher pour activer');
  };
  render();
  btn.addEventListener('click', () => { on = !on; store.set('sound', on ? 'on' : 'off'); render(); if (on) { unlock(); chime(); } });

  function unlock() {
    try {
      ctx ||= new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
    } catch { ctx = null; }
  }
  // Clochette : quelques harmoniques qui s'éteignent doucement.
  function bell(t0, freq, dur, vol) {
    const out = ctx.createGain();
    out.gain.setValueAtTime(0.0001, t0);
    out.gain.exponentialRampToValueAtTime(vol, t0 + 0.008);
    out.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    out.connect(ctx.destination);
    [[1, 1], [2.756, 0.32], [5.404, 0.12]].forEach(([mult, amp]) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = freq * mult;
      g.gain.value = amp;
      o.connect(g).connect(out);
      o.start(t0);
      o.stop(t0 + dur + 0.05);
    });
  }
  function chime() {
    if (!on || !ctx) return;
    const t = ctx.currentTime + 0.02;
    [1046.5, 1318.5, 1568, 2093].forEach((f, i) => bell(t + i * 0.1, f, 1.9, 0.11));
  }
  function pop() {
    if (!on || !ctx) return;
    const t = ctx.currentTime;
    const len = Math.floor(ctx.sampleRate * 0.18);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 3;
    const src = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const g = ctx.createGain();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    filter.Q.value = 0.8;
    g.gain.value = 0.5;
    src.buffer = buf;
    src.connect(filter).connect(g).connect(ctx.destination);
    src.start(t);
    bell(t + 0.05, 784, 0.9, 0.06);
  }
  // Petits « tic » qui ralentissent pendant la roulette.
  function ticks(duration) {
    if (!on || !ctx) return;
    const t0 = ctx.currentTime;
    let t = 0;
    let gap = 0.05;
    while (t < duration / 1000 - 0.25) {
      const at = t0 + t;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'triangle';
      o.frequency.value = 2400;
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(0.035, at + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.04);
      o.connect(g).connect(ctx.destination);
      o.start(at);
      o.stop(at + 0.05);
      t += gap;
      gap *= 1.16;
    }
  }
  function seal() {
    if (!on || !ctx) return;
    const t = ctx.currentTime + 0.02;
    bell(t, 659.3, 1.2, 0.09);
    bell(t + 0.09, 987.8, 1.5, 0.08);
  }
  return { unlock, chime, pop, ticks, seal };
})();

// ---------- Démarrage ----------
startSnow($('#snow'));
try { history.replaceState({ screen: 'home' }, ''); } catch { /* cadre restreint */ }

(async function init() {
  try {
    await loadState();
  } catch (err) {
    $('#progress').textContent = err.message;
    drawGarland();
    return;
  }
  lightGarland();
  if (!reduceMotion) {
    const tags = $('#tags');
    tags.classList.add('is-dropping');
    setTimeout(() => tags.classList.remove("is-dropping"), 150 + state.people.length * 55 + 1000);
  }
  // Déjà identifié sur ce téléphone : on reprend là où la personne en était.
  const name = store.get('name');
  if (store.get('token') && state.people.some((p) => p.name === name)) {
    state.selected = name;
    openGiftScreen();
  }
})();
