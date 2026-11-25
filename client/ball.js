// Boule de Noël en 3D temps réel : verre miroir, fissures lumineuses, éclatement en morceaux.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, IcosahedronGeometry,
  MeshPhysicalMaterial, MeshStandardMaterial, MeshBasicMaterial, CanvasTexture, PMREMGenerator,
  Color, Vector3, Vector4, BufferGeometry, BufferAttribute, Points, ShaderMaterial, AdditiveBlending,
  DoubleSide, BackSide, SRGBColorSpace, ACESFilmicToneMapping, CylinderGeometry, TorusGeometry,
  LatheGeometry, PlaneGeometry, Vector2, Sprite, SpriteMaterial, RepeatWrapping, Ray, Sphere, Quaternion,
} from 'three';

const NS = 64;        // nombre de morceaux (et de cellules de fissures)
const NI = 8;         // nombre maximal de points d'impact
const FOV = 30;
const TAU = Math.PI * 2;
const rnd = (a, b) => a + Math.random() * (b - a);

// ---------- Textures peintes ----------
// Une teinte par participant (dans l'ordre de la liste).
const PALETTES = [
  ['#9c0c22', '#c0112b', '#8f0a1f'], // rouge
  ['#05402a', '#0b7d4c', '#053524'], // émeraude
  ['#0a1f5c', '#1b42ad', '#081a4d'], // bleu nuit
  ['#0b0b10', '#1d1d28', '#08080c'], // onyx
  ['#7a0f45', '#b81d6a', '#6a0c3b'], // framboise
  ['#7a2c06', '#c4530f', '#6a2505'], // cuivre
  ['#064a52', '#0d8c95', '#053d44'], // turquoise
  ['#3d0f52', '#6c1c8c', '#330c45'], // prune
  ['#cfcabd', '#f1ede4', '#c5bfb1'], // argent
  ['#2a5d7a', '#5ca6cd', '#234f69'], // glacier
];
function paintBauble(size = 2048, pal = PALETTES[0], label = '') {
  const W = size, H = size / 2;
  const mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; };
  const colorC = mk(), roughC = mk();
  const col = colorC.getContext('2d'), rgh = roughC.getContext('2d');

  // paillettes : motif de bruit utilisé pour la rugosité de la peinture dorée
  const noiseC = document.createElement('canvas');
  noiseC.width = noiseC.height = 128;
  const nctx = noiseC.getContext('2d');
  const nd = nctx.createImageData(128, 128);
  for (let i = 0; i < nd.data.length; i += 4) {
    const v = 50 + Math.random() * 130;
    nd.data[i] = nd.data[i + 1] = nd.data[i + 2] = v; nd.data[i + 3] = 255;
  }
  nctx.putImageData(nd, 0, 0);

  const red = col.createLinearGradient(0, 0, 0, H);
  red.addColorStop(0, pal[0]); red.addColorStop(0.5, pal[1]); red.addColorStop(1, pal[2]);
  col.fillStyle = red; col.fillRect(0, 0, W, H);
  rgh.fillStyle = 'rgb(20,20,20)'; rgh.fillRect(0, 0, W, H);

  const gold = col.createLinearGradient(0, 0, 0, H);
  gold.addColorStop(0, '#f6d47a'); gold.addColorStop(0.5, '#eebf52'); gold.addColorStop(1, '#f6d47a');
  const glitter = rgh.createPattern(noiseC, 'repeat');

  const both = (fn) => {
    col.fillStyle = gold; col.strokeStyle = gold; fn(col);
    rgh.fillStyle = glitter; rgh.strokeStyle = glitter; fn(rgh);
  };
  const s = W / 2048;
  const line = (y, t) => both((c) => c.fillRect(0, y * H - (t * s) / 2, W, t * s));
  line(0.335, 9); line(0.312, 3.5); line(0.665, 9); line(0.688, 3.5);
  line(0.185, 4); line(0.815, 4);

  const cells = 12, cw = W / cells;
  for (let i = 0; i < cells; i++) {
    const cx = (i + 0.5) * cw, cy = H / 2;
    if (label && i % 6 !== 0 && i % 6 !== 5) continue; // place réservée au prénom
    if (i % 2 === 0) {
      // flocon à six branches
      both((c) => {
        c.save(); c.translate(cx, cy); c.lineCap = 'round'; c.lineWidth = 6.5 * s;
        for (let k = 0; k < 6; k++) {
          c.rotate(Math.PI / 3);
          c.beginPath(); c.moveTo(0, 0); c.lineTo(0, -64 * s);
          c.moveTo(0, -30 * s); c.lineTo(-15 * s, -45 * s); c.moveTo(0, -30 * s); c.lineTo(15 * s, -45 * s);
          c.moveTo(0, -48 * s); c.lineTo(-10 * s, -58 * s); c.moveTo(0, -48 * s); c.lineTo(10 * s, -58 * s);
          c.stroke();
        }
        c.beginPath(); c.arc(0, 0, 9 * s, 0, TAU); c.fill();
        c.restore();
      });
    } else {
      // étoile à quatre branches et ses perles
      both((c) => {
        c.save(); c.translate(cx, cy);
        c.beginPath();
        for (let k = 0; k < 8; k++) {
          const a = (k / 8) * TAU, r = (k % 2 ? 9 : 40) * s;
          c.lineTo(Math.sin(a) * r, -Math.cos(a) * r);
        }
        c.closePath(); c.fill();
        [[-46, -46], [46, -46], [-46, 46], [46, 46]].forEach(([x, y]) => { c.beginPath(); c.arc(x * s, y * s, 6 * s, 0, TAU); c.fill(); });
        c.restore();
      });
    }
  }
  // le prénom, peint en or pailleté sur deux côtés de la boule
  if (label) {
    both((c) => {
      c.save();
      c.textAlign = 'center'; c.textBaseline = 'middle';
      let fs = 170 * s;
      c.font = `italic 600 ${fs}px Fraunces, Georgia, serif`;
      const w = c.measureText(label).width;
      if (w > 610 * s) { fs *= (610 * s) / w; c.font = `italic 600 ${fs}px Fraunces, Georgia, serif`; }
      c.fillText(label, 0.25 * W, H / 2 + 6 * s);
      c.fillText(label, 0.75 * W, H / 2 + 6 * s);
      c.restore();
    });
  }
  // guirlandes de perles au-dessus et en dessous du bandeau
  for (let x = 0; x < W; x += 23 * s) {
    const wave = Math.cos((x / cw) * TAU);
    const r = (4.5 + 2.5 * (0.5 - 0.5 * wave)) * s;
    both((c) => {
      c.beginPath(); c.arc(x, (0.262 + 0.026 * wave) * H, r, 0, TAU); c.fill();
      c.beginPath(); c.arc(x, (0.738 - 0.026 * wave) * H, r, 0, TAU); c.fill();
    });
  }
  // pétales autour des deux pôles
  const petals = 28;
  for (let i = 0; i < petals; i++) {
    const x = (i + 0.5) * (W / petals);
    both((c) => {
      c.beginPath(); c.moveTo(x - 9 * s, 0.168 * H); c.lineTo(x + 9 * s, 0.168 * H); c.lineTo(x + 2 * s, 0.03 * H); c.lineTo(x - 2 * s, 0.03 * H); c.closePath(); c.fill();
      c.beginPath(); c.moveTo(x - 9 * s, 0.832 * H); c.lineTo(x + 9 * s, 0.832 * H); c.lineTo(x + 2 * s, 0.97 * H); c.lineTo(x - 2 * s, 0.97 * H); c.closePath(); c.fill();
    });
  }
  return { colorC, roughC };
}

function radialTexture(stops) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  stops.forEach(([o, col]) => g.addColorStop(o, col));
  ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 256);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

// ---------- Environnement reflété (la nuit du site : lune, guirlande, fenêtre du chalet, neige) ----------
function buildEnvironment(renderer) {
  const env = new Scene();
  const domeGeo = new SphereGeometry(60, 48, 24);
  const pos = domeGeo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const top = new Color(0.012, 0.035, 0.05), mid = new Color(0.05, 0.13, 0.11), low = new Color(0.2, 0.26, 0.3);
  const c = new Color();
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / 60;
    if (y > 0) c.copy(mid).lerp(top, Math.min(1, y * 1.6)); else c.copy(mid).lerp(low, Math.min(1, -y * 2.2));
    colors.set([c.r, c.g, c.b], i * 3);
  }
  domeGeo.setAttribute('color', new BufferAttribute(colors, 3));
  env.add(new Mesh(domeGeo, new MeshBasicMaterial({ side: BackSide, vertexColors: true })));

  const glow = (geo, r, g, b, k, x, y, z) => {
    const m = new Mesh(geo, new MeshBasicMaterial({ color: new Color(r * k, g * k, b * k), side: DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0, 0); env.add(m); return m;
  };
  const bulb = new SphereGeometry(1, 12, 8);
  glow(new PlaneGeometry(20, 11), 1, 0.97, 0.9, 7, -14, 20, 20);      // grande lumière douce (reflet principal)
  glow(new PlaneGeometry(4, 22), 0.55, 0.78, 1, 3.5, 26, 6, -10);      // liseré froid
  glow(new SphereGeometry(3.2, 20, 12), 1, 0.95, 0.8, 11, 20, 22, -30); // lune
  glow(new PlaneGeometry(5, 5), 1, 0.58, 0.18, 9, 12, -9, 26);         // fenêtre du chalet
  const tones = [[1, 0.14, 0.1], [1, 0.72, 0.22], [0.16, 1, 0.42], [1, 0.94, 0.84]];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU + 0.2;
    const [r, g, b] = tones[i % 4];
    const m = glow(bulb, r, g, b, 16, Math.cos(a) * 30, 19 + Math.sin(i * 1.9) * 2.4, Math.sin(a) * 30);
    m.scale.setScalar(1.15);
  }
  for (let i = 0; i < 46; i++) {
    const a = rnd(0, TAU), e = rnd(0.25, 1.3);
    const m = glow(bulb, 1, 0.97, 0.9, 22, Math.cos(a) * Math.cos(e) * 50, Math.sin(e) * 50, Math.sin(a) * Math.cos(e) * 50);
    m.scale.setScalar(rnd(0.14, 0.3));
  }
  const pmrem = new PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.02).texture;
  pmrem.dispose();
  env.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); });
  return tex;
}

// ---------- Fissures (calculées dans le shader, cellules de Voronoï sur la sphère) ----------
function addCracks(material, uniforms) {
  material.customProgramCacheKey = () => 'boule-fissures';
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec3 aObj;\nvarying vec3 vObj;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvObj = aObj;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vObj;
        uniform vec3 uSeeds[${NS}];
        uniform vec4 uImpacts[${NI}];
        uniform float uGlow;
        uniform float uCharge;
        uniform float uTime;
        float crackCore = 0.0;
        float crackHalo = 0.0;
        float crackFlick = 1.0;
        float hash1(float n) { return fract(sin(n) * 43758.5453123); }
        void computeCracks() {
          vec3 p = normalize(vObj);
          vec3 q = normalize(p + 0.035 * sin(p.yzx * 17.0 + 1.3) * sin(p.zxy * 29.0 + 0.7) + 0.012 * sin(p.zxy * 71.0));
          float d1 = -2.0, d2 = -2.0, i1 = 0.0, i2 = 0.0;
          vec3 s1 = vec3(0.0), s2 = vec3(0.0);
          for (int i = 0; i < ${NS}; i++) {
            vec3 s = uSeeds[i];
            float d = dot(q, s);
            if (d > d1) { d2 = d1; s2 = s1; i2 = i1; d1 = d; s1 = s; i1 = float(i); }
            else if (d > d2) { d2 = d; s2 = s; i2 = float(i); }
          }
          float e = dot(q - 0.5 * (s1 + s2), normalize(s1 - s2));
          float h = hash1((i1 + 1.0) * (i2 + 1.0) * 0.731 + (i1 + i2) * 3.17);
          float m = 0.0;
          float star = 0.0;
          for (int k = 0; k < ${NI}; k++) {
            vec4 im = uImpacts[k];
            if (im.w <= 0.0) continue;
            float a = acos(clamp(dot(p, im.xyz), -1.0, 1.0));
            float wob = 0.14 * sin(dot(p, vec3(13.1, 7.7, 9.3)) + float(k) * 2.1) + 0.06 * sin(dot(p, vec3(-31.0, 23.0, 17.0)));
            m = max(m, 1.0 - smoothstep(im.w - 0.22, im.w, a + wob));
            // étoile d'impact : fines fissures qui rayonnent du point touché
            vec3 t1 = normalize(cross(im.xyz, vec3(0.31, 0.87, 0.38)));
            vec3 t2 = cross(im.xyz, t1);
            float phi = atan(dot(p, t1), dot(p, t2));
            float spokes = abs(sin(phi * 4.5 + float(k) * 1.7 + 0.5 * sin(phi * 3.0 + float(k))));
            float reach = min(0.5, im.w * 0.55) * (0.6 + 0.4 * hash1(floor(phi * 1.43 + float(k) * 7.0)));
            float sw = 0.0028 + 0.0055 * (1.0 - a / max(reach, 0.001));
            star = max(star, (1.0 - smoothstep(sw * 0.4, sw, a * spokes)) * (1.0 - smoothstep(reach * 0.8, reach, a)));
            star = max(star, 1.0 - smoothstep(0.008, 0.022, a));
          }
          float vis = m * smoothstep(h * 0.8 - 0.06, h * 0.8 + 0.04, uCharge + 0.12);
          float w = mix(0.0022, 0.0075, pow(1.0 - h, 1.5)) * (0.8 + 0.5 * uCharge);
          crackCore = max((1.0 - smoothstep(w * 0.45, w, e)) * vis, star);
          crackHalo = max(exp(-e * 105.0) * vis, star * 0.5);
          crackFlick = 0.82 + 0.18 * sin(uTime * 11.0 + h * 40.0) * sin(uTime * 3.7 + i1);
        }`)
      .replace('void main() {', 'void main() {\n  computeCracks();')
      .replace('#include <map_fragment>', `#include <map_fragment>
        if (!gl_FrontFacing) diffuseColor.rgb = vec3(0.82, 0.84, 0.88);
        diffuseColor.rgb *= 1.0 - 0.9 * crackCore;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += (vec3(1.0, 0.9, 0.62) * crackCore * 3.0 + vec3(1.0, 0.55, 0.14) * crackHalo * 0.9) * uGlow * crackFlick;`);
  };
}

// Points répartis sur la sphère, ni trop serrés ni trop réguliers.
function scatterSeeds(n) {
  const seeds = [];
  for (let i = 0; i < n; i++) {
    let best = null, bestD = -1;
    for (let k = 0; k < 5; k++) {
      const v = new Vector3().randomDirection();
      let d = 9;
      for (const s of seeds) d = Math.min(d, v.distanceToSquared(s));
      if (d > bestD) { bestD = d; best = v; }
    }
    seeds.push(best);
  }
  return seeds;
}

// Découpe la sphère en morceaux : chaque triangle rejoint la graine la plus proche.
function buildShards(seeds, material) {
  const ico = new IcosahedronGeometry(1, 26);
  const p = ico.attributes.position;
  const buckets = seeds.map(() => []);
  const a = new Vector3(), b = new Vector3(), c = new Vector3(), m = new Vector3();
  for (let i = 0; i < p.count; i += 3) {
    a.fromBufferAttribute(p, i); b.fromBufferAttribute(p, i + 1); c.fromBufferAttribute(p, i + 2);
    m.copy(a).add(b).add(c).normalize();
    let best = 0, bd = -2;
    for (let s = 0; s < seeds.length; s++) { const d = m.dot(seeds[s]); if (d > bd) { bd = d; best = s; } }
    buckets[best].push(a.clone().normalize(), b.clone().normalize(), c.clone().normalize());
  }
  ico.dispose();
  const shards = [];
  buckets.forEach((verts) => {
    if (!verts.length) return;
    const center = new Vector3();
    verts.forEach((v) => center.add(v));
    center.multiplyScalar(1 / verts.length);
    const n = verts.length;
    const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), obj = new Float32Array(n * 3), uv = new Float32Array(n * 2);
    for (let i = 0; i < n; i += 3) {
      const us = [];
      for (let k = 0; k < 3; k++) {
        const v = verts[i + k];
        pos.set([v.x - center.x, v.y - center.y, v.z - center.z], (i + k) * 3);
        nor.set([v.x, v.y, v.z], (i + k) * 3);
        obj.set([v.x, v.y, v.z], (i + k) * 3);
        let u = Math.atan2(v.z, -v.x) / TAU; if (u < 0) u += 1;
        us.push(u);
        uv[(i + k) * 2 + 1] = 1 - Math.acos(Math.max(-1, Math.min(1, v.y))) / Math.PI;
      }
      const wrap = Math.max(...us) - Math.min(...us) > 0.5;
      for (let k = 0; k < 3; k++) uv[(i + k) * 2] = wrap && us[k] < 0.5 ? us[k] + 1 : us[k];
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(pos, 3));
    g.setAttribute('normal', new BufferAttribute(nor, 3));
    g.setAttribute('aObj', new BufferAttribute(obj, 3));
    g.setAttribute('uv', new BufferAttribute(uv, 2));
    const mesh = new Mesh(g, material);
    mesh.visible = false;
    mesh.frustumCulled = false;
    shards.push({ mesh, center, vel: new Vector3(), axis: new Vector3(), spin: 0, size: Math.sqrt(n) * 0.55 });
  });
  return shards;
}

// ---------- Poussière d'or et éclats ----------
function makeDust(capacity) {
  const g = new BufferGeometry();
  const pos = new Float32Array(capacity * 3), size = new Float32Array(capacity), alpha = new Float32Array(capacity), col = new Float32Array(capacity * 3);
  g.setAttribute('position', new BufferAttribute(pos, 3));
  g.setAttribute('aSize', new BufferAttribute(size, 1));
  g.setAttribute('aAlpha', new BufferAttribute(alpha, 1));
  g.setAttribute('aColor', new BufferAttribute(col, 3));
  const mat = new ShaderMaterial({
    uniforms: { uScale: { value: 1 }, uCamZ: { value: 15 } },
    vertexShader: `
      attribute float aSize; attribute float aAlpha; attribute vec3 aColor;
      uniform float uScale; uniform float uCamZ;
      varying float vAlpha; varying vec3 vColor;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uScale * (uCamZ / max(0.5, -mv.z));
        vAlpha = aAlpha; vColor = aColor;
      }`,
    fragmentShader: `
      varying float vAlpha; varying vec3 vColor;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float core = smoothstep(1.0, 0.0, length(c) * 2.0);
        float a = pow(core, 2.4) + 0.7 * pow(core, 9.0);
        float star = max(0.0, 1.0 - abs(c.x) * abs(c.y) * 110.0) * core;
        gl_FragColor = vec4(vColor * (a + star * 0.55) * vAlpha, 0.0);
      }`,
    blending: AdditiveBlending, premultipliedAlpha: true, transparent: true, depthWrite: false,
  });
  const points = new Points(g, mat);
  points.frustumCulled = false;
  const P = Array.from({ length: capacity }, () => ({ life: 0, max: 1, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, size: 3, drag: 1, grav: 0, tw: 0, r: 1, g: 0.8, b: 0.4, fixed: false }));
  let cursor = 0;
  return {
    points, mat, P,
    emit(o) {
      for (let tries = 0; tries < capacity; tries++) {
        cursor = (cursor + 1) % capacity;
        if (!P[cursor].fixed && P[cursor].life <= 0) break;
      }
      Object.assign(P[cursor], { drag: 1.5, grav: 0, tw: rnd(0, TAU), r: 1, g: 0.8, b: 0.42, fixed: false }, o);
      P[cursor].max = P[cursor].life;
      return P[cursor];
    },
    clear() { P.forEach((q) => { q.life = 0; q.fixed = false; }); },
    update(dt, t) {
      let alive = 0;
      for (let i = 0; i < capacity; i++) {
        const q = P[i];
        if (q.life <= 0) { alpha[i] = 0; continue; }
        alive++;
        if (!q.fixed) {
          q.life -= dt;
          const k = Math.exp(-q.drag * dt);
          q.vx *= k; q.vy = q.vy * k + q.grav * dt; q.vz *= k;
          q.x += (q.vx + Math.sin(t * 1.3 + q.tw) * 0.08) * dt; q.y += q.vy * dt; q.z += q.vz * dt;
        }
        pos[i * 3] = q.x; pos[i * 3 + 1] = q.y; pos[i * 3 + 2] = q.z;
        const f = q.fixed ? 1 : Math.min(1, q.life / (q.max * 0.45)) * Math.min(1, (q.max - q.life) * 14);
        alpha[i] = f * (0.55 + 0.45 * Math.sin(t * 7 + q.tw * 3));
        size[i] = q.size;
        col[i * 3] = q.r; col[i * 3 + 1] = q.g; col[i * 3 + 2] = q.b;
      }
      g.attributes.position.needsUpdate = true; g.attributes.aSize.needsUpdate = true;
      g.attributes.aAlpha.needsUpdate = true; g.attributes.aColor.needsUpdate = true;
      return alive;
    },
  };
}

// ---------- La boule ----------
export function createBall({ canvas, anchor }) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch { return null; }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new Scene();
  scene.environment = buildEnvironment(renderer);
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 200);

  // Matière : verre miroir rouge, peinture dorée pailletée, vernis.
  const { colorC, roughC } = paintBauble(2048);
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const map = new CanvasTexture(colorC); map.colorSpace = SRGBColorSpace; map.wrapS = RepeatWrapping; map.anisotropy = aniso;
  const rough = new CanvasTexture(roughC); rough.wrapS = RepeatWrapping; rough.anisotropy = aniso;
  let toneKey = '0|';
  const seeds = scatterSeeds(NS);
  const uniforms = {
    uSeeds: { value: seeds },
    uImpacts: { value: Array.from({ length: NI }, () => new Vector4(0, 1, 0, 0)) },
    uGlow: { value: 1 }, uCharge: { value: 0 }, uTime: { value: 0 },
  };
  const glass = new MeshPhysicalMaterial({
    map, roughnessMap: rough, roughness: 1, metalness: 1, bumpMap: rough, bumpScale: 1.2,
    clearcoat: 1, clearcoatRoughness: 0.035, envMapIntensity: 1.25, side: DoubleSide,
  });
  addCracks(glass, uniforms);
  const goldMetal = new MeshStandardMaterial({ color: new Color(1, 0.74, 0.3), metalness: 1, roughness: 0.26, envMapIntensity: 1.3 });

  const pivot = new Group(), hang = new Group(), spinG = new Group();
  scene.add(pivot); pivot.add(hang); hang.add(spinG);
  const sphereGeo = new SphereGeometry(1, 96, 64);
  sphereGeo.setAttribute('aObj', sphereGeo.attributes.position.clone());
  const ballMesh = new Mesh(sphereGeo, glass);
  spinG.add(ballMesh);

  // Capuchon cannelé, anneau et fil.
  const stripes = document.createElement('canvas'); stripes.width = 64; stripes.height = 4;
  const sctx = stripes.getContext('2d');
  for (let x = 0; x < 64; x += 4) { sctx.fillStyle = x % 8 ? '#fff' : '#555'; sctx.fillRect(x, 0, 4, 4); }
  const stripeTex = new CanvasTexture(stripes); stripeTex.wrapS = RepeatWrapping; stripeTex.repeat.set(4, 1);
  const capMat = goldMetal.clone(); capMat.bumpMap = stripeTex; capMat.bumpScale = 2.5;
  const cap = new Mesh(new LatheGeometry([
    new Vector2(0.001, 1.185), new Vector2(0.15, 1.185), new Vector2(0.195, 1.15), new Vector2(0.2, 0.99),
    new Vector2(0.235, 0.965), new Vector2(0.24, 0.93), new Vector2(0.001, 0.93),
  ], 40), capMat);
  const ring = new Mesh(new TorusGeometry(0.085, 0.014, 10, 30), goldMetal);
  ring.position.y = 1.25;
  spinG.add(cap, ring);
  const fade = document.createElement('canvas'); fade.width = 4; fade.height = 64;
  const fctx = fade.getContext('2d');
  const fg = fctx.createLinearGradient(0, 0, 0, 64);
  fg.addColorStop(0, '#000'); fg.addColorStop(0.5, '#555'); fg.addColorStop(1, '#fff');
  fctx.fillStyle = fg; fctx.fillRect(0, 0, 4, 64);
  const STRING = 1.05;
  const string = new Mesh(new CylinderGeometry(0.009, 0.009, STRING, 6, 1, true),
    new MeshBasicMaterial({ color: new Color(1.2, 1.0, 0.6), alphaMap: new CanvasTexture(fade), transparent: true, depthWrite: false }));
  string.position.y = 1.32 + STRING / 2;
  hang.add(string);

  // Lueur derrière la boule, éclair central, onde de choc.
  const haloTex = radialTexture([[0, 'rgba(255,236,170,1)'], [0.25, 'rgba(255,205,110,0.55)'], [0.6, 'rgba(255,170,70,0.12)'], [1, 'rgba(255,160,60,0)']]);
  const halo = new Sprite(new SpriteMaterial({ map: haloTex, blending: AdditiveBlending, depthWrite: false, transparent: true, toneMapped: false, opacity: 0 }));
  const core = new Sprite(new SpriteMaterial({ map: haloTex, blending: AdditiveBlending, depthWrite: false, depthTest: false, transparent: true, toneMapped: false, opacity: 0 }));
  const ringTex = radialTexture([[0, 'rgba(255,240,200,0)'], [0.84, 'rgba(255,240,200,0)'], [0.93, 'rgba(255,236,180,0.55)'], [0.97, 'rgba(255,210,120,0.2)'], [1, 'rgba(255,200,100,0)']]);
  const wave = new Sprite(new SpriteMaterial({ map: ringTex, blending: AdditiveBlending, depthWrite: false, depthTest: false, transparent: true, toneMapped: false, opacity: 0 }));
  scene.add(halo, core, wave);

  const dust = makeDust(900);
  scene.add(dust.points);
  const shards = buildShards(seeds, glass);
  shards.forEach((s) => scene.add(s.mesh));

  // ---------- État ----------
  const S = {
    running: false, raf: 0, last: 0, t: 0, visible: false,
    W: 1, H: 1, ppu: 100, camZ: 15, L: 6, ax: 0, ay: 0, seen: false,
    thz: 0, thzV: 0, thx: 0, thxV: 0, spin: 0, spinV: 0.35, dragging: false,
    tapT: -10, charge: 0, glow: 0, shaking: false, kick: new Vector3(),
    impacts: [], shattered: false, shatterT: 0, shake: 0, done: null,
  };
  const motes = Array.from({ length: 12 }, (_, i) => {
    const q = dust.P[i];
    Object.assign(q, { fixed: true, life: 0, size: rnd(3.5, 6.5), tw: rnd(0, TAU), r: 1, g: 0.84, b: 0.5 });
    return { q, a: rnd(0, TAU), speed: rnd(0.5, 1.1), R: rnd(1.35, 1.75), y: rnd(-0.7, 0.8), tilt: rnd(-0.5, 0.5) };
  });

  try { renderer.initTexture(map); renderer.initTexture(rough); renderer.compile(scene, camera); } catch { /* sans gravité */ }

  const center = new Vector3(), tmp = new Vector3(), tmp2 = new Vector3();
  const ballCenter = () => hang.getWorldPosition(center);
  function toScreen(v) {
    tmp.copy(v).project(camera);
    return { x: (tmp.x * 0.5 + 0.5) * S.W, y: (-tmp.y * 0.5 + 0.5) * S.H };
  }

  function layout() {
    S.W = window.innerWidth; S.H = window.innerHeight;
    renderer.setSize(S.W, S.H, false);
    camera.aspect = S.W / S.H;
    camera.updateProjectionMatrix();
    dust.mat.uniforms.uScale.value = pr;
    follow();
  }
  // Place la caméra pour que la boule ait exactement la taille et la position demandées à l'écran.
  function follow() {
    const a = S.shattered ? null : anchor();
    if (a && a.r > 0) {
      S.ppu = a.r;
      S.ax = (a.x - S.W / 2) / S.ppu; S.ay = -(a.y - S.H / 2) / S.ppu;
      S.seen = true;
    }
    S.camZ = (S.H / S.ppu / 2) / Math.tan((FOV * Math.PI) / 360);
    camera.position.set(0, 0, S.camZ);
    dust.mat.uniforms.uCamZ.value = S.camZ;
  }
  window.addEventListener('resize', () => { if (S.visible) layout(); });

  function resetState() {
    Object.assign(S, { thz: -0.42, thzV: 0, thx: 0.1, thxV: 0, spin: -0.9, spinV: 0.35, dragging: false, tapT: -10, charge: 0, glow: 0, shaking: false, impacts: [], shattered: false, shatterT: 0, shake: 0 });
    S.kick.set(0, 0, 0);
    uniforms.uImpacts.value.forEach((v) => v.set(0, 1, 0, 0));
    uniforms.uCharge.value = 0;
    S.seen = false;
    camera.rotation.set(0, 0, 0);
    pivot.visible = false; ballMesh.visible = true;
    shards.forEach((s) => { s.mesh.visible = false; });
    dust.clear();
    motes.forEach((m) => { m.q.fixed = true; m.q.life = 1; });
    halo.material.opacity = 0; core.material.opacity = 0; wave.material.opacity = 0;
  }

  // Si le téléphone peine, on baisse la définition plutôt que de saccader.
  // Si la baisse ne change rien, la lenteur vient d'ailleurs : on rend la pleine définition.
  let pr = dpr, slowAvg = 0.016, frames = 0, tune = dpr > 1 ? 'measure' : 'off', before = 0;
  function setRatio(v) {
    pr = v;
    renderer.setPixelRatio(pr);
    renderer.setSize(S.W, S.H, false);
    dust.mat.uniforms.uScale.value = pr;
  }
  function watchSpeed(raw) {
    if (tune === 'off') return;
    frames++;
    slowAvg += (Math.min(0.2, raw) - slowAvg) * 0.08;
    if (tune === 'measure') {
      if (frames < 45) return;
      if (slowAvg > 0.03) { before = slowAvg; setRatio(Math.max(1, dpr * 0.7)); tune = 'check'; frames = 0; slowAvg = before * 0.6; }
      else if (frames > 240) tune = 'off';
    } else if (frames >= 70) {
      if (slowAvg > before * 0.85) setRatio(dpr);
      tune = 'off';
    }
  }

  function frame(now) {
    S.raf = S.running ? requestAnimationFrame(frame) : 0;
    const raw = (now - S.last) / 1000;
    const realDt = Math.max(0.001, Math.min(0.04, raw));
    S.last = now;
    watchSpeed(raw);
    step(realDt);
    if (!S.holdRender) renderer.render(scene, camera);
    if (S.shattered && S.shatterT > 1.2 && !S.flying && S.alive === 0) stop();
  }

  function step(realDt) {
    let dt = realDt;
    if (S.shattered) {
      const e = S.shatterT;
      const k = e < 0.17 ? 1 : e < 1.0 ? 0.04 : Math.min(1, 0.04 + ((e - 1.0) / 0.4) ** 2);
      dt = realDt * k;
      S.shatterT += realDt;
    }
    S.t += realDt;
    uniforms.uTime.value = S.t;

    if (!S.shattered) {
      follow();
      pivot.visible = !!S.seen;
      // Pendule amorti, bousculé par les coups.
      const w2 = 10.5, damp = 1.25;
      S.thzV += (-w2 * S.thz - damp * S.thzV + Math.sin(S.t * 0.7) * 0.03) * realDt;
      S.thxV += (-w2 * S.thx - damp * S.thxV) * realDt;
      S.thz += S.thzV * realDt; S.thx += S.thxV * realDt;
      if (!S.dragging) { S.spin += S.spinV * realDt; S.spinV += (0.35 - S.spinV) * (1 - Math.exp(-realDt * 1.6)); }
      pivot.position.set(S.ax, S.ay + S.L, 0);
      pivot.rotation.set(S.thx, 0, S.thz);
      hang.position.set(0, -S.L, 0);
      S.kick.multiplyScalar(Math.exp(-realDt * 9));
      const since = S.t - S.tapT;
      const pop = 1 - 0.06 * Math.exp(-since * 8) * Math.cos(since * 36);
      const jit = S.shaking ? 0.035 : 0.012 * S.charge * S.charge;
      spinG.position.set(S.kick.x + rnd(-jit, jit), S.kick.y + rnd(-jit, jit), S.kick.z);
      spinG.scale.setScalar(pop);
      spinG.rotation.set(Math.sin(S.t * 0.9) * 0.05, S.spin, 0);
      // Les fissures avancent.
      S.impacts.forEach((im, i) => {
        im.r += (im.target - im.r) * (1 - Math.exp(-realDt * 7));
        uniforms.uImpacts.value[i].w = im.r;
      });
      const targetGlow = S.impacts.length ? 0.9 + S.charge * 1.5 + (S.shaking ? 1.2 : 0) : 0;
      S.glow += (targetGlow - S.glow) * (1 - Math.exp(-realDt * 6));
      uniforms.uGlow.value = S.glow + Math.exp(-since * 6) * 1.6 * (S.impacts.length ? 1 : 0);
      ballCenter();
      halo.position.set(center.x, center.y, center.z - 1.3);
      halo.scale.setScalar(4.2 + S.charge * 1.6);
      halo.material.opacity = Math.min(1, 0.1 + S.charge * 0.55 + (S.shaking ? 0.25 : 0)) * (0.88 + 0.12 * Math.sin(S.t * 13));
      motes.forEach((m) => {
        m.a += m.speed * (1 + S.charge * 1.8) * realDt;
        const x = Math.cos(m.a) * m.R, z = Math.sin(m.a) * m.R;
        m.q.x = center.x + x; m.q.y = center.y + m.y + z * m.tilt + Math.sin(S.t * 1.7 + m.a) * 0.08; m.q.z = center.z + z;
      });
    } else {
      const e = S.shatterT;
      const camBottom = -S.H / S.ppu / 2 - 2.5;
      let flying = 0;
      shards.forEach((s) => {
        if (!s.mesh.visible) return;
        s.vel.y -= 13 * dt;
        s.vel.multiplyScalar(Math.exp(-0.25 * dt));
        s.mesh.position.addScaledVector(s.vel, dt);
        s.mesh.rotateOnWorldAxis(s.axis, s.spin * dt);
        if (s.mesh.position.y < camBottom || s.mesh.position.z > S.camZ - 0.6) s.mesh.visible = false; else flying++;
      });
      uniforms.uGlow.value = Math.max(0, 2.2 - e * 2.4);
      core.material.opacity = Math.max(0, 1 - e / 0.3);
      core.scale.setScalar(3 + e * 16);
      wave.material.opacity = Math.max(0, 0.8 - e / 0.45);
      wave.scale.setScalar(2 + (1 - Math.exp(-e * 7)) * 9);
      halo.material.opacity = Math.max(0, 0.6 - e * 0.5);
      S.shake = Math.max(0, 0.2 - e) * 0.7;
      const u = Math.min(1, Math.max(0, (e - 0.12) / 1.25));
      const sw = Math.sin(Math.PI * u * u * (3 - 2 * u));
      const o = 0.62 * sw * S.orbitDir, zoom = 1 - 0.17 * sw;
      const rx = -S.c.x * zoom, rz = (S.camZ - S.c.z) * zoom;
      camera.position.set(
        S.c.x + rx * Math.cos(o) + rz * Math.sin(o) + rnd(-S.shake, S.shake),
        S.c.y * (1 - zoom) + rnd(-S.shake, S.shake),
        S.c.z - rx * Math.sin(o) + rz * Math.cos(o),
      );
      camera.rotation.set(0, o, 0);
      S.flying = flying;
    }
    S.alive = dust.update(dt, S.t);
  }

  function start() {
    if (S.running) return;
    S.running = true; S.visible = true;
    canvas.hidden = false;
    layout();
    S.last = performance.now();
    S.raf = requestAnimationFrame(frame);
  }
  function stop() {
    S.running = false; S.visible = false;
    cancelAnimationFrame(S.raf); S.raf = 0;
    renderer.clear();
    canvas.hidden = true;
  }

  const ray = new Ray(), sphere = new Sphere(), ndc = new Vector3(), q = new Quaternion();
  return {
    start, stop,
    reset() { resetState(); layout(); },
    // Boule personnelle : teinte selon la personne, prénom peint dessus.
    setTone(i, label = '') {
      const key = `${i}|${label}`;
      if (key === toneKey) return;
      toneKey = key;
      const n = PALETTES.length;
      const p = paintBauble(2048, PALETTES[((i % n) + n) % n], label);
      map.image = p.colorC; rough.image = p.roughC;
      map.needsUpdate = true; rough.needsUpdate = true;
    },
    set holdRender(v) { S.holdRender = v; }, // pour filmer image par image
    // Pour les essais : avance la simulation sans attendre l'horloge, puis dessine une image.
    advance(seconds) { for (let t = 0; t < seconds; t += 1 / 60) step(1 / 60); renderer.render(scene, camera); },
    get shattered() { return S.shattered; },
    setDragging(v) { S.dragging = v; if (v) S.spinV = 0; },
    spinBy(dx) { const d = dx * 0.011; S.spin += d; S.spinV = d * 60; },
    setShaking(v) { S.shaking = v; },
    // Coup porté à l'écran en (x, y) : renvoie le point touché sur la boule, en pixels.
    tap(x, y, charge, last) {
      if (S.shattered) return null;
      ballCenter();
      ndc.set((x / S.W) * 2 - 1, -(y / S.H) * 2 + 1, 0.5).unproject(camera);
      ray.origin.copy(camera.position);
      ray.direction.copy(ndc).sub(camera.position).normalize();
      sphere.center.copy(center); sphere.radius = 1;
      const hit = new Vector3();
      if (!ray.intersectSphere(sphere, hit)) {
        ray.closestPointToPoint(center, hit);
        hit.sub(center).normalize().multiplyScalar(0.75);
        hit.z = Math.sqrt(Math.max(0.05, 1 - hit.x * hit.x - hit.y * hit.y));
        hit.normalize().add(center);
      }
      const n = hit.clone().sub(center).normalize();
      const local = ballMesh.worldToLocal(hit.clone()).normalize();
      S.charge = charge;
      uniforms.uCharge.value = charge;
      S.impacts.forEach((im) => { im.target = Math.min(Math.PI, im.target + 0.3 + charge * 0.35); });
      if (S.impacts.length < NI) {
        const i = S.impacts.length;
        S.impacts.push({ r: 0.02, target: 0.55 + charge * 1.1 });
        uniforms.uImpacts.value[i].set(local.x, local.y, local.z, 0.02);
      }
      if (last) S.impacts.forEach((im) => { im.target = Math.PI + 0.4; });
      S.tapT = S.t;
      const power = 0.9 + charge * 1.3;
      S.thzV = Math.max(-0.5, Math.min(0.5, S.thzV - n.x * power * 0.3 + rnd(-0.08, 0.08)));
      S.thxV = Math.max(-0.3, Math.min(0.3, S.thxV + n.z * power * 0.14));
      S.spinV += (n.x > 0 ? -1 : 1) * rnd(1.5, 3.5);
      S.kick.copy(n).multiplyScalar(-0.09);
      for (let i = 0; i < 34 + charge * 30; i++) {
        tmp2.randomDirection().multiplyScalar(rnd(0.5, 2.6)).addScaledVector(n, rnd(1.2, 4.2));
        dust.emit({ life: rnd(0.35, 0.95), x: hit.x, y: hit.y, z: hit.z, vx: tmp2.x, vy: tmp2.y, vz: tmp2.z, size: rnd(2, 6), grav: -6, drag: 2.2, r: 1, g: rnd(0.8, 0.98), b: rnd(0.5, 0.9) });
      }
      return toScreen(hit);
    },
    // La boule éclate. La promesse se résout quand les derniers éclats ont disparu.
    shatter() {
      if (S.shattered) return;
      ballCenter();
      spinG.updateWorldMatrix(true, false);
      spinG.getWorldQuaternion(q);
      const lastHit = S.impacts.length ? new Vector3().copy(uniforms.uImpacts.value[S.impacts.length - 1]).applyQuaternion(q) : new Vector3(0, 0, 1);
      shards.forEach((s) => {
        const dir = s.center.clone().applyQuaternion(q);
        s.mesh.position.copy(center).addScaledVector(dir, s.center.length());
        s.mesh.quaternion.copy(q);
        s.mesh.scale.setScalar(1);
        s.mesh.visible = true;
        const near = Math.max(0, dir.dot(lastHit));
        const speed = rnd(2.2, 6.5) * (1 + near * 0.8) * (0.7 + 6 / (6 + s.size));
        s.vel.copy(dir).multiplyScalar(speed);
        s.vel.y += rnd(0.5, 3.2);
        if (dir.z > 0.35 && Math.random() < 0.45) s.vel.z += rnd(4, 11); // quelques morceaux foncent vers toi
        s.axis.randomDirection();
        s.spin = rnd(2, 11) * (Math.random() < 0.5 ? -1 : 1);
      });
      pivot.visible = false;
      motes.forEach((m) => { m.q.fixed = false; m.q.life = rnd(0.6, 1.6); m.q.max = m.q.life; m.q.vx = rnd(-2, 2); m.q.vy = rnd(0, 3); m.q.vz = rnd(-2, 2); });
      for (let i = 0; i < 520; i++) {
        tmp2.randomDirection().multiplyScalar(rnd(0.4, 7) * (Math.random() < 0.25 ? 1.6 : 1));
        const warm = Math.random();
        dust.emit({
          life: rnd(1.4, 5.2), x: center.x + tmp2.x * 0.05, y: center.y + tmp2.y * 0.05, z: center.z + tmp2.z * 0.05,
          vx: tmp2.x, vy: tmp2.y + 0.8, vz: tmp2.z, size: rnd(2, 8.5), grav: rnd(-0.9, -0.15), drag: rnd(1.6, 3.2),
          r: 1, g: 0.72 + warm * 0.26, b: 0.3 + warm * 0.6,
        });
      }
      core.position.copy(center); wave.position.copy(center);
      S.c = center.clone(); S.orbitDir = Math.random() < 0.5 ? -1 : 1;
      S.shattered = true; S.shatterT = 0; S.flying = shards.length;
    },
    center() { ballCenter(); return toScreen(center); },
    // Sommet du capuchon, en pixels, pour y asseoir le lutin.
    capTop() {
      tmp2.set(0, 1.19, 0);
      hang.localToWorld(tmp2);
      const p = toScreen(tmp2);
      return { x: p.x, y: p.y, rot: (-S.thz * 180) / Math.PI };
    },
  };
}
