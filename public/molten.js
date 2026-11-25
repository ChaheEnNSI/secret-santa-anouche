// Or en fusion calculé pixel par pixel sur la carte graphique (shader WebGL) :
// le métal monte dans chaque lettre, sa surface ondule, il rougeoie et bouillonne,
// puis refroidit en or poli avec un vrai relief éclairé.
const MAX = 12;   // nombre maximal de lettres
const ABOVE = 120; // la toile dépasse de 120 px au-dessus de la carte, pour le filet qui tombe de la louche

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying vec2 vUv;
uniform sampler2D uGlyph;  // rouge : forme nette des lettres ; vert : numéro de la lettre
uniform sampler2D uSoft;   // forme adoucie, qui sert de carte de hauteur pour le relief et le halo
uniform vec2 uRes;
uniform vec2 uBand;        // haut et bas de la ligne de texte, en pixels
uniform float uTime;
uniform float uPx;
uniform vec4 uState[12];   // par lettre : niveau de remplissage, chaleur, opacité
uniform vec2 uRange[12];   // par lettre : zone horizontale (pour le halo)
uniform vec4 uPour;        // filet d'or : x, haut, bas, intensité

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return v;
}
// Couleur d'un métal selon sa température : rouge sombre, orange, jaune, blanc.
vec3 ramp(float t) {
  vec3 c = mix(vec3(0.5, 0.07, 0.0), vec3(1.0, 0.40, 0.04), smoothstep(0.0, 0.4, t));
  c = mix(c, vec3(1.0, 0.74, 0.20), smoothstep(0.35, 0.7, t));
  c = mix(c, vec3(1.0, 0.97, 0.82), smoothstep(0.7, 1.0, t));
  return c * (0.85 + 0.75 * t);
}

void main() {
  vec2 p = vec2(vUv.x, 1.0 - vUv.y) * uRes;
  vec4 g = texture2D(uGlyph, vUv);
  float cov = g.r;
  float idx = floor(g.g / max(cov, 0.001) * 12.75);
  vec4 st = vec4(0.0);
  for (int i = 0; i < 12; i++) {
    if (cov > 0.03) { if (abs(float(i) - idx) < 0.5) st = uState[i]; }
    else if (p.x >= uRange[i].x && p.x < uRange[i].y) st = uState[i];
  }
  float fill = st.x;
  float heat = st.y;
  float alpha = st.z;

  // Surface du liquide : elle monte avec le remplissage et ondule tant que ça coule.
  float lvl = mix(uBand.y, uBand.x, fill);
  float amp = (1.0 - smoothstep(0.9, 1.04, fill)) * uPx;
  float wave = (sin(p.x / uPx * 0.42 + uTime * 9.0) * 1.7 + sin(p.x / uPx * 1.1 - uTime * 14.0) * 0.8) * amp;
  float surf = lvl + wave;
  float inLiquid = smoothstep(surf - uPx, surf + uPx, p.y);
  float body = cov * inLiquid * alpha;

  // Relief : la normale de la surface vient de la pente de la forme adoucie.
  vec2 e = 1.5 / uRes;
  float sC = texture2D(uSoft, vUv).r;
  float sx = texture2D(uSoft, vUv + vec2(e.x, 0.0)).r - texture2D(uSoft, vUv - vec2(e.x, 0.0)).r;
  float sy = texture2D(uSoft, vUv + vec2(0.0, e.y)).r - texture2D(uSoft, vUv - vec2(0.0, e.y)).r;
  vec3 n = normalize(vec3(-sx * 9.0, -sy * 9.0, 1.0));

  // Métal brûlant : courants qui remontent, liseré éblouissant à la surface.
  float conv = fbm(vec2(p.x, p.y + uTime * 22.0 * uPx) / (9.0 * uPx));
  float men = exp(-abs(p.y - surf) / (2.2 * uPx)) * (1.0 - smoothstep(0.98, 1.06, fill));
  float t = clamp(heat * (0.5 + 0.55 * conv) + men * 0.45 * heat, 0.0, 1.0);
  vec3 hot = ramp(t);

  // Or refroidi : lumière sur le relief, éclat, reflet d'ambiance.
  vec3 L = normalize(vec3(-0.45, 0.6, 0.65));
  float diff = max(dot(n, L), 0.0);
  float spec = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 26.0);
  float band = 0.5 + 0.5 * sin((n.x * 1.6 + n.y * 2.4 + vUv.y * 5.0) * 3.14159);
  vec3 gold = vec3(0.86, 0.63, 0.20) * (0.5 + 0.75 * diff) + vec3(1.0, 0.93, 0.72) * (spec * 0.9 + band * 0.18);
  vec3 col = mix(gold, hot, smoothstep(0.0, 0.4, heat));

  // Halo de chaleur autour du métal.
  float below = smoothstep(surf - 6.0 * uPx, surf + 6.0 * uPx, p.y);
  vec3 glow = vec3(1.0, 0.46, 0.08) * smoothstep(0.02, 0.6, sC) * (1.0 - cov) * below * heat * alpha * 0.8;

  // Filet d'or qui tombe de la louche, et éclat au point de chute.
  float sxo = uPour.x + sin(p.y / uPx * 0.16 + uTime * 21.0) * 1.1 * uPx;
  float d = abs(p.x - sxo) / uPx;
  float inY = step(uPour.y, p.y) * step(p.y, uPour.z);
  float wd = 1.6 + 0.5 * sin(p.y / uPx * 0.5 - uTime * 30.0);
  float core = smoothstep(wd + 0.8, wd - 0.4, d) * inY * uPour.w;
  float halo = exp(-d * 0.32) * inY * uPour.w * 0.55;
  float splash = exp(-length((p - vec2(uPour.x, uPour.z)) / uPx) * 0.16) * uPour.w;
  vec3 stream = vec3(1.0, 0.95, 0.7) * core * 1.25 + vec3(1.0, 0.5, 0.1) * (halo + splash * 0.7);

  gl_FragColor = vec4(col * body + glow + stream, clamp(body + core, 0.0, 1.0));
}`;

function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
}

// host : la carte ; spans : les emplacements des lettres (avec data-ch). Renvoie null si le téléphone ne sait pas faire.
export function createMolten(host, spans) {
  if (!spans.length || spans.length > MAX) return null;
  const canvas = document.createElement('canvas');
  canvas.className = 'molten';
  host.append(canvas);
  let gl = null;
  try { gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: true }); } catch { gl = null; }
  const vs = gl && compile(gl, gl.VERTEX_SHADER, VERT);
  const fsh = gl && compile(gl, gl.FRAGMENT_SHADER, FRAG);
  if (!gl || !vs || !fsh) { canvas.remove(); return null; }
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fsh);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.remove(); return null; }
  gl.useProgram(prog);

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const hb = host.getBoundingClientRect();
  const ox = hb.left, oy = hb.top - ABOVE;
  const W = Math.max(2, Math.round(hb.width * dpr));
  const H = Math.max(2, Math.round((hb.height + ABOVE) * dpr));
  canvas.width = W;
  canvas.height = H;
  gl.viewport(0, 0, W, H);

  // Position exacte des lettres : bord gauche de chaque case, et ligne de base mesurée dans la page.
  const fontPx = parseFloat(getComputedStyle(spans[0]).fontSize) || 50;
  const probe = document.createElement('span');
  probe.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline';
  spans[0].append(probe);
  const baseline = probe.getBoundingClientRect().top;
  probe.remove();
  const rects = spans.map((sp) => sp.getBoundingClientRect());
  const band = { top: baseline - fontPx * 0.8, bottom: baseline + fontPx * 0.27 };

  const font = `italic 600 ${fontPx * dpr}px Fraunces, Georgia, serif`;
  const mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; };
  const sharp = mk(), soft = mk();
  const c1 = sharp.getContext('2d'), c2 = soft.getContext('2d');
  [c1, c2].forEach((c) => { c.fillStyle = '#000'; c.fillRect(0, 0, W, H); c.font = font; c.textBaseline = 'alphabetic'; c.textAlign = 'left'; });
  c2.shadowColor = '#fff';
  c2.shadowBlur = 4.5 * dpr;
  c2.shadowOffsetX = 30000;
  c2.fillStyle = '#fff';
  spans.forEach((sp, i) => {
    const x = (rects[i].left - ox) * dpr, y = (baseline - oy) * dpr;
    c1.fillStyle = `rgb(255, ${10 + 20 * i}, 0)`;
    c1.fillText(sp.dataset.ch, x, y);
    c2.fillText(sp.dataset.ch, x - 30000, y); // seule l'ombre floue retombe dans l'image
    c2.fillText(sp.dataset.ch, x - 30000, y);
  });

  const tex = (unit, source, name) => {
    const t = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(gl.getUniformLocation(prog, name), unit);
  };
  tex(0, sharp, 'uGlyph');
  tex(1, soft, 'uSoft');

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);

  const U = (name) => gl.getUniformLocation(prog, name);
  gl.uniform2f(U('uRes'), W, H);
  gl.uniform2f(U('uBand'), (band.top - oy) * dpr, (band.bottom - oy) * dpr);
  gl.uniform1f(U('uPx'), dpr);
  const ranges = new Float32Array(MAX * 2);
  spans.forEach((sp, i) => {
    const left = i === 0 ? -1e5 : (rects[i - 1].right + rects[i].left) / 2;
    const right = i === spans.length - 1 ? 1e5 : (rects[i].right + rects[i + 1].left) / 2;
    ranges[i * 2] = (left - ox) * dpr;
    ranges[i * 2 + 1] = (right - ox) * dpr;
  });
  gl.uniform2fv(U('uRange[0]'), ranges);
  const uState = U('uState[0]'), uPour = U('uPour'), uTime = U('uTime');

  const fill = new Float32Array(MAX);
  const heat = new Float32Array(MAX).fill(1);
  const alpha = new Float32Array(MAX).fill(1);
  const state = new Float32Array(MAX * 4);
  const pour = [0, 0, 0, 0];
  let alive = true;
  const t0 = performance.now();
  function frame() {
    if (!alive) return;
    for (let i = 0; i < MAX; i++) { state[i * 4] = fill[i]; state[i * 4 + 1] = heat[i]; state[i * 4 + 2] = alpha[i]; }
    gl.uniform4fv(uState, state);
    gl.uniform4f(uPour, pour[0], pour[1], pour[2], pour[3]);
    gl.uniform1f(uTime, (performance.now() - t0) / 1000);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  return {
    fill, heat, alpha, band,
    // Hauteur de la surface du métal dans la lettre i (coordonnées de l'écran).
    levelY(i) { return band.bottom - Math.min(1, fill[i]) * (band.bottom - band.top); },
    // Filet d'or : position x, haut, bas (coordonnées de l'écran) et intensité de 0 à 1.
    setPour(x, yTop, yBottom, w) { pour[0] = (x - ox) * dpr; pour[1] = (yTop - oy) * dpr; pour[2] = (yBottom - oy) * dpr; pour[3] = w; },
    destroy() {
      alive = false;
      canvas.remove();
      try { gl.getExtension('WEBGL_lose_context')?.loseContext(); } catch { /* sans gravité */ }
    },
  };
}
