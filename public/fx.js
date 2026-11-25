// Effets visuels et sonores : neige interactive, confettis, feux d'artifice,
// prénom qui se forme en étincelles, sons générés (aucun fichier audio).

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const rand = (a, b) => a + Math.random() * (b - a);

// ---------- Pointeur partagé (la neige s'écarte sous le doigt) ----------
const pointer = { x: -9999, y: -9999, vx: 0, vy: 0, t: 0 };
function trackPointer(x, y) {
  const now = performance.now();
  const dt = Math.max(16, now - pointer.t);
  if (pointer.t && now - pointer.t < 120) {
    pointer.vx = ((x - pointer.x) / dt) * 16;
    pointer.vy = ((y - pointer.y) / dt) * 16;
  }
  pointer.x = x; pointer.y = y; pointer.t = now;
}
window.addEventListener('pointermove', (e) => trackPointer(e.clientX, e.clientY), { passive: true });
window.addEventListener('pointerdown', (e) => trackPointer(e.clientX, e.clientY), { passive: true });
window.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t) trackPointer(t.clientX, t.clientY); }, { passive: true });
window.addEventListener('touchend', () => { pointer.x = -9999; pointer.y = -9999; }, { passive: true });

// Petite tache lumineuse pré-dessinée (beaucoup plus rapide que des dégradés à chaque image).
function makeDot(size, inner, outer) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, inner);
  grad.addColorStop(0.35, inner);
  grad.addColorStop(1, outer);
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return c;
}

function fitCanvas(canvas, ctx) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(window.innerWidth * dpr);
  canvas.height = Math.round(window.innerHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

// ---------- Neige qui tient : elle s'accumule sur le haut des cartes, des boutons et sur chaque lettre du titre ----------
// Les éléments concernés portent l'attribut data-drift (data-drift="title" pour le titre en SVG).
// Un coup de doigt dessus la chasse en poudre.
function createDrifts(canvas) {
  const ctx = canvas.getContext('2d');
  const STEP = 2;
  const states = new WeakMap();
  const puffs = [];
  let els = [];
  let scanAt = 0;
  let W = 0, H = 0;
  const resize = () => { fitCanvas(canvas, ctx); W = window.innerWidth; H = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  // Profil du dessus de chaque lettre du titre : les lettres sont redessinées une à une en coulisses,
  // à leur place exacte dans le titre, et on relève le pixel le plus haut de chaque colonne.
  function titleProfile(svg, r) {
    const text = svg.querySelector('text');
    if (!text) return null;
    const family = getComputedStyle(text).fontFamily;
    const k = r.width / 620;
    const size = 122 * k;
    if (document.fonts?.check && !document.fonts.check(`600 ${Math.round(size)}px ${family}`)) return null;
    const cw = Math.ceil(size * 1.3), chh = Math.ceil(size * 1.3), ox = Math.round(size * 0.12), base = Math.round(size * 1.08);
    const c = document.createElement('canvas');
    c.width = cw; c.height = chh;
    const x = c.getContext('2d', { willReadFrequently: true });
    x.font = `600 ${size}px ${family}`;
    const n = Math.ceil(r.width / STEP);
    const surf = new Float32Array(n).fill(NaN);
    const str = text.textContent;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') continue;
      let ext;
      try { ext = text.getExtentOfChar(i); } catch { return null; }
      x.clearRect(0, 0, cw, chh);
      x.fillText(str[i], ox, base);
      const img = x.getImageData(0, 0, cw, chh).data;
      for (let px = 0; px < cw; px++) {
        let top = -1;
        for (let py = 0; py < chh; py++) if (img[(py * cw + px) * 4 + 3] > 150) { top = py; break; }
        if (top < 0) continue;
        const col = Math.floor((ext.x * k + px - ox) / STEP);
        if (col < 0 || col >= n) continue;
        const y = 112 * k - (base - top);
        if (Number.isNaN(surf[col]) || y < surf[col]) surf[col] = y;
      }
    }
    return surf;
  }
  function build(el, r, title) {
    const n = Math.max(2, Math.ceil(r.width / STEP));
    let surf;
    if (title) {
      surf = titleProfile(el, r);
      if (!surf) return null;
    } else {
      surf = new Float32Array(n);
      const rad = Math.min(parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0, r.height / 2, r.width / 2);
      for (let c = 0; c < n; c++) {
        const d = Math.min(c * STEP + STEP / 2, r.width - c * STEP - STEP / 2);
        surf[c] = d < rad ? rad - Math.sqrt(Math.max(0, rad * rad - (rad - d) ** 2)) : 0;
      }
    }
    const MAX = title ? 7 : 13;
    const h = new Float32Array(n), maxH = new Float32Array(n);
    // hauteur maximale : la neige s'arrondit vers les bords de chaque surface
    let start = -1;
    for (let c = 0; c <= n; c++) {
      const ok = c < n && !Number.isNaN(surf[c]);
      if (ok && start < 0) start = c;
      if (!ok && start >= 0) {
        for (let j = start; j < c; j++) {
          const d = Math.min(j - start, c - 1 - j) * STEP;
          maxH[j] = Math.min(MAX, (title ? 0.6 : 1.2) + d * (title ? 0.55 : 0.7));
        }
        start = -1;
      }
    }
    // une première couche déjà posée, irrégulière
    const p1 = rand(0, 6), p2 = rand(0, 6), base = title ? 2.4 : 3.6;
    for (let c = 0; c < n; c++) {
      if (!maxH[c]) continue;
      h[c] = Math.min(maxH[c], base + Math.sin(c * 0.09 + p1) * 1.1 + Math.sin(c * 0.23 + p2) * 0.6);
    }
    const glints = Array.from({ length: Math.ceil(n / 40) }, () => ({ c: Math.floor(rand(0, n)), ph: rand(0, 6.28) }));
    return { el, w: r.width, n, surf, h, maxH, title, glints, r };
  }
  function colliders(now) {
    if (now - scanAt > 400) { els = [...document.querySelectorAll('[data-drift]')]; scanAt = now; }
    const out = [];
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.width < 24 || r.bottom < -20 || r.top > H + 20) continue;
      const title = el.dataset.drift === 'title';
      if (title) {
        if (!el.closest('.title')?.classList.contains('is-written')) continue;
      } else if (Math.abs(r.width - el.offsetWidth) > 1.5 || Math.abs(r.height - el.offsetHeight) > 1.5) continue; // en pleine animation
      let st = states.get(el);
      if (!st || Math.abs(st.w - r.width) > 1) {
        st = build(el, r, title);
        if (!st) continue;
        states.set(el, st);
      }
      st.r = r;
      out.push(st);
    }
    return out;
  }
  let live = [];
  const api = {
    frame(now) { live = colliders(now); },
    // Un flocon (avant et après son déplacement) touche-t-il une surface ? Si oui il s'y dépose.
    land(x, y0, y1, size) {
      for (const st of live) {
        const r = st.r;
        if (x < r.left || x >= r.right) continue;
        const c = Math.floor((x - r.left) / STEP);
        const sf = st.surf[c];
        if (Number.isNaN(sf) || !st.maxH[c]) continue;
        const sy = r.top + sf - st.h[c];
        if (y0 < sy && y1 >= sy) {
          const amp = (st.title ? 0.8 : 1.3) + size * 0.8;
          for (let k = -5; k <= 5; k++) {
            const cc = c + k;
            if (cc < 0 || cc >= st.n || !st.maxH[cc]) continue;
            st.h[cc] = Math.min(st.maxH[cc], st.h[cc] + amp * Math.exp(-(k * k) / 7));
          }
          return true;
        }
      }
      return false;
    },
    blow(x, y, vx, vy) {
      for (const st of live) {
        const r = st.r;
        if (x < r.left - 24 || x > r.right + 24) continue;
        let total = 0;
        for (let c = 0; c < st.n; c++) {
          if (!st.h[c]) continue;
          const cx = r.left + c * STEP + STEP / 2;
          const top = r.top + st.surf[c] - st.h[c];
          if (Math.abs(cx - x) > 26 || y < top - 34 || y > r.top + st.surf[c] + 44) continue;
          const take = st.h[c] * 0.92;
          st.h[c] -= take;
          total += take;
          if (Math.random() < take * 0.22 && puffs.length < 260) {
            puffs.push({ x: cx, y: top + rand(0, 2), vx: vx * 0.035 + rand(-1.4, 1.4), vy: -rand(0.8, 3.2) + vy * 0.02, life: rand(0.5, 1.1), max: 1, r: rand(0.8, 2.2) });
            puffs[puffs.length - 1].max = puffs[puffs.length - 1].life;
          }
        }
        if (total > 3) sound.sniff?.(); // petit « pfff »
      }
    },
    update(dt) {
      for (const st of live) {
        const h = st.h, m = st.maxH;
        for (let c = 0; c < st.n - 1; c++) {
          if (!m[c] || !m[c + 1]) continue;
          const d = h[c] - h[c + 1];
          if (Math.abs(d) > 1.3) {
            const mv = (Math.abs(d) - 1.3) * 0.22 * Math.sign(d);
            h[c] -= mv; h[c + 1] += mv;
          }
        }
      }
      for (let i = puffs.length - 1; i >= 0; i--) {
        const p = puffs[i];
        p.life -= dt / 60;
        if (p.life <= 0) { puffs.splice(i, 1); continue; }
        p.vy += 0.09 * dt; p.vx *= 0.97 ** dt;
        p.x += p.vx * dt; p.y += p.vy * dt;
      }
    },
    draw(now) {
      ctx.clearRect(0, 0, W, H);
      for (const st of live) {
        const r = st.r, h = st.h, sf = st.surf;
        const X = (c) => r.left + c * STEP + STEP / 2;
        let start = -1;
        for (let c = 0; c <= st.n; c++) {
          const ok = c < st.n && st.maxH[c] > 0;
          if (ok && start < 0) start = c;
          if (ok || start < 0) continue;
          const end = c - 1;
          let peak = 0;
          for (let j = start; j <= end; j++) peak = Math.max(peak, h[j]);
          if (peak > 0.3) {
            ctx.beginPath();
            ctx.moveTo(X(start) - STEP / 2, r.top + sf[start] + 1);
            for (let j = start; j <= end; j++) ctx.lineTo(X(j), r.top + sf[j] - h[j]);
            ctx.lineTo(X(end) + STEP / 2, r.top + sf[end] + 1);
            for (let j = end; j >= start; j--) ctx.lineTo(X(j), r.top + sf[j] + 1.6);
            ctx.closePath();
            const g = ctx.createLinearGradient(0, r.top - 12, 0, r.top + 3);
            g.addColorStop(0, '#ffffff'); g.addColorStop(0.75, '#eef4fb'); g.addColorStop(1, '#c9d9e8');
            ctx.fillStyle = g;
            ctx.shadowColor = 'rgba(0, 18, 10, 0.45)'; ctx.shadowBlur = 3; ctx.shadowOffsetY = 1.2;
            ctx.fill();
            ctx.shadowColor = 'transparent';
          }
          start = -1;
        }
        // reflets qui scintillent à la surface
        for (const gl of st.glints) {
          if (h[gl.c] < 2) continue;
          const a = Math.max(0, Math.sin(now / 300 + gl.ph)) ** 6;
          if (a < 0.05) continue;
          ctx.globalAlpha = a;
          ctx.fillStyle = '#fff';
          const gx = X(gl.c), gy = r.top + sf[gl.c] - h[gl.c] + 1.2;
          ctx.fillRect(gx - 2.5, gy - 0.4, 5, 0.8);
          ctx.fillRect(gx - 0.4, gy - 2.5, 0.8, 5);
          ctx.globalAlpha = 1;
        }
      }
      for (const p of puffs) {
        ctx.globalAlpha = Math.min(1, p.life / p.max * 1.5) * 0.9;
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    },
  };
  // Doigt qui passe sur la neige : elle part en poudre.
  let last = null;
  window.addEventListener('pointerdown', (e) => { last = { x: e.clientX, y: e.clientY }; api.blow(e.clientX, e.clientY, 0, -20); }, { passive: true });
  window.addEventListener('pointermove', (e) => {
    if (!(e.buttons || e.pointerType === 'touch') || !last) return;
    api.blow(e.clientX, e.clientY, e.clientX - last.x, e.clientY - last.y);
    last = { x: e.clientX, y: e.clientY };
  }, { passive: true });
  window.addEventListener('pointerup', () => { last = null; }, { passive: true });
  return api;
}

// ---------- Neige en trois profondeurs ----------
export function startSnow(canvas, driftCanvas) {
  const drifts = driftCanvas && !reduceMotion ? createDrifts(driftCanvas) : null;
  const ctx = canvas.getContext('2d');
  const bokeh = makeDot(64, 'rgba(247,242,231,0.55)', 'rgba(247,242,231,0)');
  const soft = makeDot(16, 'rgba(247,242,231,0.95)', 'rgba(247,242,231,0)');
  let w = 0, h = 0, flakes = [];

  const make = (layer, y) => {
    const base = layer === 0 ? rand(0.6, 1.2) : layer === 1 ? rand(1.3, 2.4) : rand(5, 11);
    return {
      layer,
      x: rand(0, w), y: y ?? rand(0, h),
      r: base,
      vy: layer === 0 ? rand(0.25, 0.45) : layer === 1 ? rand(0.55, 0.95) : rand(1.2, 1.8),
      sway: rand(0, Math.PI * 2),
      amp: rand(0.2, 0.7),
      a: layer === 0 ? rand(0.35, 0.6) : layer === 1 ? rand(0.6, 0.95) : rand(0.25, 0.45),
      px: 0, py: 0, // poussée du doigt
    };
  };
  const resize = () => {
    fitCanvas(canvas, ctx);
    w = window.innerWidth; h = window.innerHeight;
    const area = (w * h) / 10000;
    const far = Math.round(Math.min(110, area * 1.1));
    const mid = Math.round(Math.min(70, area * 0.7));
    const near = w < 600 ? 7 : 12;
    flakes = [
      ...Array.from({ length: far }, () => make(0)),
      ...Array.from({ length: mid }, () => make(1)),
      ...Array.from({ length: near }, () => make(2)),
    ];
  };
  resize();
  window.addEventListener('resize', resize);

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const f of flakes) {
      ctx.globalAlpha = f.a;
      const x = f.x + f.px, y = f.y + f.py;
      if (f.layer === 2) ctx.drawImage(bokeh, x - f.r * 2, y - f.r * 2, f.r * 4, f.r * 4);
      else ctx.drawImage(soft, x - f.r * 1.6, y - f.r * 1.6, f.r * 3.2, f.r * 3.2);
    }
    ctx.globalAlpha = 1;
  };
  if (reduceMotion) { draw(); return; }

  let last = performance.now();
  let hidden = false;
  document.addEventListener('visibilitychange', () => { hidden = document.hidden; last = performance.now(); });
  const tick = (now) => {
    requestAnimationFrame(tick);
    if (hidden) return;
    const dt = Math.min(48, now - last) / 16.67;
    last = now;
    // Vent qui varie doucement, avec des rafales.
    const wind = Math.sin(now / 5200) * 0.35 + Math.sin(now / 1900) * 0.15 + Math.max(0, Math.sin(now / 9000)) ** 8 * 1.6;
    pointer.vx *= 0.9; pointer.vy *= 0.9;
    drifts?.frame(now);
    for (const f of flakes) {
      const yBefore = f.y + f.py;
      f.sway += 0.012 * dt;
      const depth = f.layer === 0 ? 0.5 : f.layer === 1 ? 1 : 1.6;
      f.y += f.vy * dt;
      f.x += (Math.sin(f.sway) * f.amp * 0.5 + wind * depth) * dt;
      // Le doigt repousse les flocons et les entraîne dans son mouvement.
      const dx = f.x + f.px - pointer.x, dy = f.y + f.py - pointer.y;
      const d2 = dx * dx + dy * dy;
      const R = f.layer === 2 ? 140 : 95;
      if (d2 < R * R && f.layer > 0) {
        const d = Math.sqrt(d2) || 1;
        const force = (1 - d / R) * 2.6 * depth;
        f.px += (dx / d) * force * dt + pointer.vx * 0.06 * depth;
        f.py += (dy / d) * force * dt + pointer.vy * 0.06 * depth;
      }
      f.px *= 0.96 ** dt; f.py *= 0.96 ** dt;
      // les flocons du plan du milieu se posent sur l'interface
      if (drifts && f.layer === 1 && drifts.land(f.x + f.px, yBefore, f.y + f.py, f.r)) { Object.assign(f, make(f.layer, -20)); continue; }
      if (f.y > h + 20) Object.assign(f, make(f.layer, -20));
      if (f.x > w + 20) f.x = -20;
      if (f.x < -20) f.x = w + 20;
    }
    draw();
    if (drifts) { drifts.update(dt); drifts.draw(now); }
  };
  requestAnimationFrame(tick);
}

// ---------- Calque de particules : confettis, étincelles, feux d'artifice, prénom ----------
export const overlay = (() => {
  const canvas = document.querySelector('#confetti');
  const ctx = canvas.getContext('2d');
  const glow = makeDot(32, 'rgba(255,240,200,1)', 'rgba(233,196,106,0)');
  const glowRed = makeDot(32, 'rgba(255,170,170,1)', 'rgba(209,58,78,0)');
  const glowWhite = makeDot(32, 'rgba(255,255,255,1)', 'rgba(255,255,255,0)');
  const colors = ['#e9c46a', '#f7e4a6', '#d13a4e', '#f7f2e7', '#57b98a'];
  let parts = [];
  let text = null; // particules du prénom
  let running = false;
  let last = 0;
  fitCanvas(canvas, ctx);
  window.addEventListener('resize', () => fitCanvas(canvas, ctx));

  function start() {
    if (running) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
  }

  function frame(now) {
    const dt = Math.min(48, now - last) / 16.67;
    last = now;
    const W = window.innerWidth, H = window.innerHeight;
    ctx.clearRect(0, 0, W, H);

    // Confettis, étincelles, feux d'artifice
    parts = parts.filter((p) => p.life > 0);
    for (const p of parts) {
      p.vy += p.g * dt;
      p.vx *= p.drag ** dt;
      p.vy *= p.drag ** dt;
      p.ox = p.x; p.oy = p.y;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      p.life -= dt;
      const alpha = Math.min(1, p.life / 40);
      if (p.kind === 'confetti') {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill(); }
        else { ctx.scale(1, Math.cos(p.rot * 2)); ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); }
        ctx.restore();
      } else {
        // étincelle / feu d'artifice : point lumineux avec traînée
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = alpha * (p.kind === 'spark' ? 0.6 + 0.4 * Math.sin(p.life * 0.3 + p.phase) : 1);
        if (p.trail) {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.w * 0.35;
          ctx.beginPath(); ctx.moveTo(p.ox, p.oy); ctx.lineTo(p.x, p.y); ctx.stroke();
        }
        const s = p.w * 3;
        ctx.drawImage(p.sprite, p.x - s / 2, p.y - s / 2, s, s);
        ctx.globalCompositeOperation = 'source-over';
      }
    }
    ctx.globalAlpha = 1;

    if (text) drawText(now);

    if (parts.length || text) requestAnimationFrame(frame);
    else { running = false; ctx.clearRect(0, 0, W, H); }
  }

  // ----- Prénom en étincelles -----
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
  function drawText(now) {
    const T = (now - text.t0) / 1000;
    const { swirl, converge } = text;
    ctx.globalCompositeOperation = 'lighter';
    for (const p of text.ps) {
      let x, y;
      if (T < swirl) {
        // tourbillon qui monte depuis l'ouverture du cadeau
        const k = T / swirl;
        const ang = p.a0 + T * p.spin;
        const r = p.r0 + k * p.rMax;
        x = text.ox + Math.cos(ang) * r;
        y = text.oy - k * p.rise + Math.sin(ang) * r * 0.35;
        p.sx = x; p.sy = y;
      } else {
        const k = Math.min(1, Math.max(0, (T - swirl - p.delay) / converge));
        const e = ease(k);
        // petite courbe pour éviter les trajets en ligne droite
        const bend = Math.sin(k * Math.PI) * p.bend;
        x = p.sx + (p.tx - p.sx) * e + bend;
        y = p.sy + (p.ty - p.sy) * e - bend * 0.6;
      }
      const tw = 0.65 + 0.35 * Math.sin(now / 90 + p.phase);
      ctx.globalAlpha = text.fade * tw;
      const s = p.size * (T < swirl ? 3.2 : 2.6);
      ctx.drawImage(p.sprite, x - s / 2, y - s / 2, s, s);
    }
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    if (text.fadingFrom) {
      text.fade = Math.max(0, 1 - (now - text.fadingFrom) / 600);
      if (text.fade <= 0) text = null;
    }
  }

  return {
    burst(x, y, count = 120, power = 1) {
      if (reduceMotion) return;
      for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.25;
        const speed = rand(5, 14) * power;
        parts.push({
          kind: 'confetti', x, y,
          vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          rot: rand(0, Math.PI), vr: rand(-0.15, 0.15),
          w: rand(5, 11), h: rand(8, 16), round: Math.random() < 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: rand(90, 160), g: 0.16, drag: 0.985,
        });
      }
      start();
    },
    sparkle(x, y, count = 30, spread = 120) {
      if (reduceMotion) return;
      for (let i = 0; i < count; i++) {
        parts.push({
          kind: 'spark',
          x: x + rand(-spread, spread), y: y + rand(-spread * 0.3, spread * 0.3),
          vx: rand(-0.8, 0.8), vy: rand(-2.8, -0.6), rot: 0, vr: 0,
          w: rand(2.5, 5), sprite: glow, phase: rand(0, 6),
          life: rand(80, 160), g: -0.012, drag: 0.975,
        });
      }
      start();
    },
    // Feu d'artifice : une gerbe de points lumineux avec traînées.
    firework(x, y, tone = 'gold') {
      if (reduceMotion) return;
      const sprite = tone === 'red' ? glowRed : tone === 'white' ? glowWhite : glow;
      const color = tone === 'red' ? 'rgba(239,107,124,0.8)' : tone === 'white' ? 'rgba(255,255,255,0.8)' : 'rgba(247,228,166,0.85)';
      const n = 70;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + rand(-0.05, 0.05);
        const sp = rand(3.2, 5.6);
        parts.push({
          kind: 'firework', x, y,
          vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, rot: 0, vr: 0,
          w: rand(2.2, 3.4), sprite, color, trail: true,
          life: rand(55, 85), g: 0.05, drag: 0.955,
        });
      }
      start();
    },
    // Fait naître un prénom à partir d'étincelles : tourbillon depuis (ox, oy),
    // puis chaque étincelle rejoint un point du texte dessiné dans `rect`.
    async formText({ text: word, font, rect, ox, oy, swirl = 1.15, converge = 1.35 }) {
      if (reduceMotion) return;
      try { await document.fonts.load(font, word); } catch { /* police par défaut */ }
      const W = Math.ceil(rect.width), H = Math.ceil(rect.height);
      const off = document.createElement('canvas');
      off.width = W; off.height = H;
      const c = off.getContext('2d');
      c.font = font;
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillStyle = '#fff';
      c.fillText(word, W / 2, H / 2 + H * 0.04);
      const data = c.getImageData(0, 0, W, H).data;
      const pts = [];
      const step = window.innerWidth < 600 ? 3 : 2;
      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          if (data[(y * W + x) * 4 + 3] > 140) pts.push([rect.left + x, rect.top + y]);
        }
      }
      const max = window.innerWidth < 600 ? 1100 : 1700;
      while (pts.length > max) pts.splice(Math.floor(Math.random() * pts.length), 1);
      const sprites = [glow, glow, glow, glowWhite];
      text = {
        t0: performance.now(), swirl, converge, ox, oy, fade: 1, fadingFrom: 0,
        ps: pts.map(([tx, ty]) => ({
          tx, ty,
          a0: rand(0, Math.PI * 2), spin: rand(3.5, 6.5) * (Math.random() < 0.5 ? -1 : 1),
          r0: rand(4, 26), rMax: rand(40, 150), rise: rand(80, 220),
          delay: rand(0, 0.35), bend: rand(-60, 60), size: rand(1.1, 2.2), phase: rand(0, 6),
          sprite: sprites[Math.floor(Math.random() * sprites.length)], sx: ox, sy: oy,
        })),
      };
      start();
      await new Promise((r) => setTimeout(r, (swirl + converge + 0.35) * 1000));
    },
    fadeText() { if (text) text.fadingFrom = performance.now(); },
  };
})();

// ---------- Sons générés ----------
export const sound = (() => {
  let ctx = null;
  let on = true;
  try { on = localStorage.getItem('santa:sound') !== 'off'; } catch { /* ignoré */ }
  const listeners = [];

  function unlock() {
    try {
      ctx ||= new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
    } catch { ctx = null; }
  }
  function ready() { return on && ctx; }

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
  function noise(dur) {
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    return src;
  }

  return {
    unlock,
    get on() { return on; },
    toggle() {
      on = !on;
      try { localStorage.setItem('santa:sound', on ? 'on' : 'off'); } catch { /* ignoré */ }
      listeners.forEach((f) => f(on));
      if (on) { unlock(); this.chime(); }
    },
    onChange(f) { listeners.push(f); },
    chime() {
      if (!ready()) return;
      const t = ctx.currentTime + 0.02;
      [1046.5, 1318.5, 1568, 2093].forEach((f, i) => bell(t + i * 0.1, f, 2.2, 0.11));
    },
    seal() {
      if (!ready()) return;
      const t = ctx.currentTime + 0.02;
      bell(t, 659.3, 1.2, 0.09);
      bell(t + 0.09, 987.8, 1.5, 0.08);
    },
    tick() {
      if (!ready()) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'triangle'; o.frequency.value = 1800;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.03, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      o.connect(g).connect(ctx.destination);
      o.start(t); o.stop(t + 0.06);
    },
    // Couvercle qui s'envole : souffle qui descend + petite clochette.
    whoosh() {
      if (!ready()) return;
      const t = ctx.currentTime;
      const src = noise(0.7);
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.Q.value = 1.2;
      f.frequency.setValueAtTime(2400, t);
      f.frequency.exponentialRampToValueAtTime(380, t + 0.6);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.35, t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.65);
      src.connect(f).connect(g).connect(ctx.destination);
      src.start(t);
      bell(t + 0.05, 784, 1, 0.05);
    },
    // Montée scintillante pendant le tourbillon d'étincelles.
    rise(dur = 2.4) {
      if (!ready()) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(220, t);
      o.frequency.exponentialRampToValueAtTime(880, t + dur);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.05, t + 0.4);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(ctx.destination);
      o.start(t); o.stop(t + dur + 0.05);
      for (let i = 0; i < 14; i++) bell(t + (i / 14) * dur * 0.95, 1400 + i * 90 + Math.random() * 200, 0.5, 0.018);
    },
    // Éclat final : grave + accord de clochettes.
    boom() {
      if (!ready()) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(140, t);
      o.frequency.exponentialRampToValueAtTime(48, t + 0.5);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.25, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
      o.connect(g).connect(ctx.destination);
      o.start(t); o.stop(t + 0.65);
    },
    // Coup sourd quand on tape sur le cadeau, plus fort à chaque fois.
    thump(level = 0) {
      if (!ready()) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(120 + level * 8, t);
      o.frequency.exponentialRampToValueAtTime(45, t + 0.22);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.22 + level * 0.02, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      o.connect(g).connect(ctx.destination);
      o.start(t); o.stop(t + 0.3);
      const scale = [523.3, 587.3, 659.3, 784, 880, 1046.5, 1174.7, 1318.5, 1568];
      bell(t + 0.02, scale[Math.min(scale.length - 1, level)], 0.9, 0.06);
    },
    // Note de xylophone (ampoules de la guirlande).
    note(i = 0) {
      if (!ready()) return;
      const scale = [523.3, 587.3, 659.3, 784, 880, 1046.5, 1174.7, 1318.5, 1568, 1760];
      bell(ctx.currentTime + 0.01, scale[i % scale.length], 1.4, 0.09);
    },
    // --- Verre ---
    crack(level = 1) { // coup sec sur le verre + petits tintements
      if (!ready()) return;
      const t = ctx.currentTime;
      const src = noise(0.07);
      const f = ctx.createBiquadFilter();
      f.type = 'highpass'; f.frequency.value = 2600;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.22 + level * 0.02, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
      src.connect(f).connect(g).connect(ctx.destination);
      src.start(t);
      for (let i = 0; i < 3 + Math.min(4, level); i++) {
        const d = Math.random() * 0.14;
        const freq = 2300 + Math.random() * 4200;
        this.sweep('sine', freq, freq * 0.98, 0.05 + Math.random() * 0.09, 0.035, d);
      }
      this.sweep('sine', 150 + level * 10, 60, 0.16, 0.16);
    },
    shatter() { // la boule éclate : souffle, pluie de tintements, coup sourd
      if (!ready()) return;
      const t = ctx.currentTime;
      const src = noise(0.7);
      const f = ctx.createBiquadFilter();
      f.type = 'highpass'; f.frequency.value = 1700;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.42, t);
      g.gain.exponentialRampToValueAtTime(0.05, t + 0.12);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
      src.connect(f).connect(g).connect(ctx.destination);
      src.start(t);
      for (let i = 0; i < 26; i++) {
        const d = Math.random() ** 1.7 * 1.3;
        const freq = 1700 + Math.random() * 5600;
        this.sweep('sine', freq, freq * (0.96 + Math.random() * 0.06), 0.06 + Math.random() * 0.3, 0.05 * (1 - d / 1.6), d);
      }
      this.sweep('sine', 120, 38, 0.5, 0.34);
    },
    knock() { this.sweep('sine', 190, 78, 0.07, 0.2); this.sweep('sine', 185, 76, 0.07, 0.17, 0.16); }, // toc-toc venu de l'intérieur
    pour(d = 0.8) { // or en fusion qui coule : souffle filtré qui monte
      if (!ready()) return;
      const t = ctx.currentTime;
      const src = noise(d);
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.Q.value = 1.4;
      f.frequency.setValueAtTime(500, t);
      f.frequency.exponentialRampToValueAtTime(1500, t + d);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.07, t + 0.08);
      g.gain.setValueAtTime(0.07, t + Math.max(0.1, d - 0.1));
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      src.connect(f).connect(g).connect(ctx.destination);
      src.start(t);
      this.sweep('sine', 220, 520, d, 0.035);
    },
    hiss() { // neige sur métal brûlant
      if (!ready()) return;
      const t = ctx.currentTime;
      const src = noise(0.5);
      const f = ctx.createBiquadFilter();
      f.type = 'highpass'; f.frequency.value = 3800;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.16, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
      src.connect(f).connect(g).connect(ctx.destination);
      src.start(t);
    },
    flaps(dur = 1.5, rate = 30) { // crépitement d'un tableau à volets qui défile
      if (!ready()) return;
      const t = ctx.currentTime;
      const n = Math.floor(dur * rate);
      for (let i = 0; i < n; i++) {
        const at = t + i / rate + Math.random() * 0.014;
        const src = noise(0.016);
        const f = ctx.createBiquadFilter();
        f.type = 'highpass'; f.frequency.value = 1700 + Math.random() * 900;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.045 + Math.random() * 0.03, at);
        g.gain.exponentialRampToValueAtTime(0.0001, at + 0.016);
        src.connect(f).connect(g).connect(ctx.destination);
        src.start(at);
      }
    },
    clack(soft = false) { // un volet se verrouille
      if (!ready()) return;
      const t = ctx.currentTime;
      const src = noise(0.05);
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.frequency.value = 1300; f.Q.value = 0.9;
      const g = ctx.createGain();
      g.gain.setValueAtTime(soft ? 0.09 : 0.24, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      src.connect(f).connect(g).connect(ctx.destination);
      src.start(t);
      this.sweep('square', 240, 120, 0.045, soft ? 0.025 : 0.07);
      if (!soft) this.sweep('sine', 1900, 1500, 0.09, 0.03);
    },
    bark() { // aboiement bref et grave
      if (!ready()) return;
      this.sweep('sawtooth', 340, 130, 0.12, 0.13);
      this.sweep('square', 210, 95, 0.11, 0.05, 0.01);
      const t = ctx.currentTime;
      const src = noise(0.09);
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 0.8;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.16, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
      src.connect(f).connect(g).connect(ctx.destination);
      src.start(t);
    },
    // --- Bruitages des lutins ---
    sweep(type, f0, f1, dur, vol, delay = 0) { // glissando simple
      if (!ready()) return;
      const t = ctx.currentTime + delay;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f0, t);
      o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(ctx.destination);
      o.start(t); o.stop(t + dur + 0.02);
    },
    squish() { this.sweep('sine', 320, 95, 0.38, 0.12); this.sweep('triangle', 160, 70, 0.3, 0.05, 0.04); },
    plop() { this.sweep('sine', 950, 180, 0.09, 0.16); },
    boing() { this.sweep('sine', 180, 720, 0.32, 0.1); this.sweep('sine', 720, 300, 0.25, 0.06, 0.3); },
    squeak() { this.sweep('sine', 1300, 2100, 0.07, 0.07); this.sweep('sine', 1500, 2400, 0.07, 0.06, 0.09); },
    yuck() { this.sweep('sawtooth', 210, 120, 0.32, 0.035); this.sweep('square', 140, 95, 0.28, 0.02, 0.05); },
    sniff() {
      if (!ready()) return;
      [0, 0.16].forEach((d) => {
        const t = ctx.currentTime + d;
        const src = noise(0.12);
        const f = ctx.createBiquadFilter();
        f.type = 'bandpass'; f.frequency.value = 2600; f.Q.value = 1.2;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.09, t + 0.04);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
        src.connect(f).connect(g).connect(ctx.destination);
        src.start(t);
      });
    },
    pop() { // petite détonation de feu d'artifice
      if (!ready()) return;
      const t = ctx.currentTime;
      const src = noise(0.25);
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass'; f.frequency.value = 900;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.25, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
      src.connect(f).connect(g).connect(ctx.destination);
      src.start(t);
    },
  };
})();
