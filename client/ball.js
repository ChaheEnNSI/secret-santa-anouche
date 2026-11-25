// Boule de Noël en 3D temps réel : verre miroir, fissures lumineuses, éclatement en morceaux.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, IcosahedronGeometry,
  MeshPhysicalMaterial, MeshStandardMaterial, MeshBasicMaterial, CanvasTexture, PMREMGenerator,
  Color, Vector3, Vector4, BufferGeometry, BufferAttribute, Points, ShaderMaterial, AdditiveBlending,
  DoubleSide, BackSide, SRGBColorSpace, ACESFilmicToneMapping, CylinderGeometry, TorusGeometry,
  LatheGeometry, PlaneGeometry, Vector2, Sprite, SpriteMaterial, RepeatWrapping, Ray, Sphere, Quaternion, Euler,
  LineSegments, LineBasicMaterial,
} from 'three';

const NS = 64;        // nombre de morceaux (et de cellules de fissures)
const NI = 8;         // nombre maximal de points d'impact
const FOV = 30;
const TAU = Math.PI * 2;
const rnd = (a, b) => a + Math.random() * (b - a);

// ---------- Textures peintes ----------
// Une teinte par participant (dans l'ordre de la liste).
export const PALETTES = [
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
export function paintBauble(size = 2048, pal = PALETTES[0], label = '', labelScale = 1) {
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
      let fs = 170 * s * labelScale;
      c.font = `italic 600 ${fs}px Fraunces, Georgia, serif`;
      const w = c.measureText(label).width;
      if (w > 610 * s * labelScale) { fs *= (610 * s * labelScale) / w; c.font = `italic 600 ${fs}px Fraunces, Georgia, serif`; }
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

export function radialTexture(stops) {
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
export function buildEnvironment(renderer) {
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
function buildShards(seeds, material, edgeMaterial) {
  const THICK = 0.965; // rayon de la face intérieure : le verre a une épaisseur
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
    // bords libres de l'éclat (arêtes qui n'appartiennent qu'à un seul triangle)
    const key = (v) => `${v.x.toFixed(4)},${v.y.toFixed(4)},${v.z.toFixed(4)}`;
    const edges = new Map();
    for (let i = 0; i < n; i += 3) {
      for (let k = 0; k < 3; k++) {
        const v0 = verts[i + k], v1 = verts[i + ((k + 1) % 3)];
        const k0 = key(v0), k1 = key(v1);
        const id = k0 < k1 ? `${k0}|${k1}` : `${k1}|${k0}`;
        const e = edges.get(id);
        if (e) e.count++; else edges.set(id, { count: 1, a: v0, b: v1 });
      }
    }
    const rim = [...edges.values()].filter((e) => e.count === 1);
    const total = n * 2 + rim.length * 6;
    const pos = new Float32Array(total * 3), nor = new Float32Array(total * 3), obj = new Float32Array(total * 3), uv = new Float32Array(total * 2);
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
    // face intérieure (vue de l'intérieur, elle apparaît argentée comme une vraie boule)
    for (let i = 0; i < n; i++) {
      const v = verts[i], j = n + i;
      pos.set([v.x * THICK - center.x, v.y * THICK - center.y, v.z * THICK - center.z], j * 3);
      nor.set([v.x, v.y, v.z], j * 3);
      obj.set([v.x, v.y, v.z], j * 3);
      uv[j * 2] = uv[i * 2]; uv[j * 2 + 1] = uv[i * 2 + 1];
    }
    // tranches : un ruban de verre entre la face extérieure et la face intérieure
    let j = n * 2;
    const nn = new Vector3(), mid = new Vector3();
    rim.forEach(({ a: va, b: vb }) => {
      const ai = va.clone().multiplyScalar(THICK), bi = vb.clone().multiplyScalar(THICK);
      mid.copy(va).add(vb).multiplyScalar(0.5);
      nn.copy(vb).sub(va).cross(mid).normalize();
      if (nn.dot(mid.clone().sub(center)) < 0) nn.negate();
      [va, vb, ai, vb, bi, ai].forEach((v) => {
        pos.set([v.x - center.x, v.y - center.y, v.z - center.z], j * 3);
        nor.set([nn.x, nn.y, nn.z], j * 3);
        obj.set([mid.x, mid.y, mid.z], j * 3);
        uv[j * 2] = 0.5; uv[j * 2 + 1] = 0.5;
        j++;
      });
    });
    const g = new BufferGeometry();
    g.addGroup(0, n * 2, 0);
    g.addGroup(n * 2, rim.length * 6, 1);
    g.setAttribute('position', new BufferAttribute(pos, 3));
    g.setAttribute('normal', new BufferAttribute(nor, 3));
    g.setAttribute('aObj', new BufferAttribute(obj, 3));
    g.setAttribute('uv', new BufferAttribute(uv, 2));
    const mesh = new Mesh(g, [material, edgeMaterial]);
    mesh.visible = false;
    mesh.frustumCulled = false;
    shards.push({ mesh, center, vel: new Vector3(), axis: new Vector3(), spin: 0, size: Math.sqrt(n) * 0.55 });
  });
  return shards;
}

// ---------- Poussière d'or et éclats ----------
export function makeDust(capacity, ring = false) {
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
      if (ring) cursor = (cursor + 1) % capacity; // tampon circulaire : on écrase le plus ancien
      else for (let tries = 0; tries < capacity; tries++) {
        cursor = (cursor + 1) % capacity;
        if (!P[cursor].fixed && P[cursor].life <= 0) break;
      }
      Object.assign(P[cursor], { drag: 1.5, grav: 0, tw: rnd(0, TAU), r: 1, g: 0.8, b: 0.42, fixed: false, strobe: false, wob: 0.08 }, o);
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
          q.x += (q.vx + Math.sin(t * 1.3 + q.tw) * q.wob) * dt; q.y += q.vy * dt; q.z += q.vz * dt;
        }
        pos[i * 3] = q.x; pos[i * 3 + 1] = q.y; pos[i * 3 + 2] = q.z;
        const f = q.fixed ? 1 : Math.min(1, q.life / (q.max * 0.45)) * Math.min(1, (q.max - q.life) * 14);
        alpha[i] = f * (q.strobe ? (Math.sin(t * 46 + q.tw * 9) > 0.25 ? 1.25 : 0.06) : 0.55 + 0.45 * Math.sin(t * 7 + q.tw * 3));
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
export function createBall({ canvas, anchor, sound = {} }) {
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
  const fw = makeDust(9000, true);   // traînées et éclairs (tampon circulaire, vie courte)
  fw.mat.depthTest = false;
  scene.add(fw.points);
  const fwHeads = makeDust(1800);     // étincelles principales : jamais écrasées par leurs traînées
  fwHeads.mat.depthTest = false;
  scene.add(fwHeads.points);
  const edgeGlass = new MeshStandardMaterial({ color: 0xe6fff4, metalness: 0.15, roughness: 0.06, emissive: 0x9cc7b4, emissiveIntensity: 0.45, envMapIntensity: 2.2, side: DoubleSide });
  const shards = buildShards(seeds, glass, edgeGlass);
  shards.forEach((s) => scene.add(s.mesh));

  // ---------- Les lutins cachés dans la boule : projetés à l'éclatement, chacun avec une lettre ----------
  const crew = [];
  const loadImage = (svg) => new Promise((res, rej) => {
    const im = new Image();
    im.onload = () => res(im);
    im.onerror = rej;
    im.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  });
  async function prepareCrew(letters, svgs) {
    crew.forEach((c) => { scene.remove(c.sprite); c.sprite.material.map.dispose(); c.sprite.material.dispose(); });
    crew.length = 0;
    const imgs = await Promise.all(svgs.map(loadImage));
    ['', ...letters].forEach((ch, i) => {
      const cv = document.createElement('canvas');
      cv.width = 256; cv.height = 420;
      const c = cv.getContext('2d');
      c.drawImage(imgs[i % imgs.length], 0, 121, 256, 299);
      if (ch) {
        c.font = 'italic 600 150px Fraunces, Georgia, serif';
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.shadowColor = 'rgba(255, 214, 120, 0.95)'; c.shadowBlur = 24;
        c.fillStyle = '#f3cf7a';
        c.fillText(ch, 128, 106);
        c.shadowBlur = 0; c.globalAlpha = 0.35; c.fillStyle = '#fff6da';
        c.fillText(ch, 128, 104);
        c.globalAlpha = 1;
      }
      const tex = new CanvasTexture(cv);
      tex.colorSpace = SRGBColorSpace;
      const sprite = new Sprite(new SpriteMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false }));
      sprite.scale.set(0.72, 1.18, 1);
      sprite.visible = false;
      scene.add(sprite);
      crew.push({ sprite, vel: new Vector3(), spin: 0, guard: i === 0 });
    });
  }

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
    Object.assign(S, { thz: -0.09, thzV: 0, thx: 0.04, thxV: 0, spin: -0.9, spinV: 0.35, dragging: false, tapT: -10, charge: 0, glow: 0, shaking: false, impacts: [], shattered: false, shatterT: 0, shake: 0 });
    S.kick.set(0, 0, 0);
    uniforms.uImpacts.value.forEach((v) => v.set(0, 1, 0, 0));
    uniforms.uCharge.value = 0;
    S.seen = false;
    camera.rotation.set(0, 0, 0);
    pivot.visible = false; ballMesh.visible = true;
    shards.forEach((s) => { s.mesh.visible = false; });
    FW.on = false; FW.heads = []; FW.rockets = []; fw.clear(); fwHeads.clear(); canvas.style.zIndex = '';
    clearName();
    capFly.on = false;
    spinG.add(cap); spinG.add(ring);
    cap.position.set(0, 0, 0); cap.rotation.set(0, 0, 0); cap.scale.set(1, 1, 1);
    ring.position.set(0, 1.25, 0); ring.rotation.set(0, 0, 0); ring.scale.set(1, 1, 1);
    streaks.visible = false; SP.forEach((q) => { q.life = 0; });
    rays.material.opacity = 0; flare.material.opacity = 0;
    crew.forEach((c) => { c.sprite.visible = false; });
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
    if (!FW.on && !NAME.active && S.shattered && S.shatterT > 1.2 && !S.flying && S.alive === 0) stop();
  }

  // ---------- Étincelles en traînées (figées pendant le ralenti), rayons et reflet d'objectif ----------
  const NSTREAK = 260;
  const streakGeo = new BufferGeometry();
  const sPos = new Float32Array(NSTREAK * 6), sCol = new Float32Array(NSTREAK * 6);
  streakGeo.setAttribute('position', new BufferAttribute(sPos, 3));
  streakGeo.setAttribute('color', new BufferAttribute(sCol, 3));
  const streaks = new LineSegments(streakGeo, new LineBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, toneMapped: false }));
  streaks.frustumCulled = false;
  streaks.visible = false;
  scene.add(streaks);
  const SP = Array.from({ length: NSTREAK }, () => ({ p: new Vector3(), v: new Vector3(), life: 0, max: 1, warm: 1 }));
  function launchStreaks(from, bias) {
    SP.forEach((q) => {
      q.p.copy(from).add(tmp2.randomDirection().multiplyScalar(0.25));
      q.v.copy(tmp2.randomDirection()).multiplyScalar(rnd(5, 15)).addScaledVector(bias, rnd(0, 3));
      q.max = q.life = rnd(0.7, 1.5);
      q.warm = Math.random();
    });
    streaks.visible = true;
  }
  function stepStreaks(dt) {
    if (!streaks.visible) return;
    let alive = 0;
    SP.forEach((q, i) => {
      if (q.life > 0) {
        q.life -= dt;
        q.v.multiplyScalar(Math.exp(-2.4 * dt));
        q.v.y -= 6 * dt;
        q.p.addScaledVector(q.v, dt);
        alive++;
      }
      const f = Math.max(0, q.life / q.max);
      const len = 0.045;
      sPos.set([q.p.x, q.p.y, q.p.z, q.p.x - q.v.x * len, q.p.y - q.v.y * len, q.p.z - q.v.z * len], i * 6);
      const r = 1.3 * f, g = (0.85 + 0.15 * q.warm) * f, b = (0.45 + 0.5 * q.warm) * f;
      sCol.set([r, g, b, r * 0.15, g * 0.12, b * 0.1], i * 6);
    });
    streakGeo.attributes.position.needsUpdate = true;
    streakGeo.attributes.color.needsUpdate = true;
    if (!alive) streaks.visible = false;
  }
  const raysCanvas = document.createElement('canvas');
  raysCanvas.width = raysCanvas.height = 512;
  {
    const rc = raysCanvas.getContext('2d');
    rc.translate(256, 256);
    for (let i = 0; i < 28; i++) {
      rc.rotate(TAU / 28 + rnd(-0.05, 0.05));
      const len = rnd(140, 256), w = rnd(3, 11);
      const g = rc.createLinearGradient(0, 0, 0, -len);
      g.addColorStop(0, 'rgba(255,236,190,0.9)'); g.addColorStop(1, 'rgba(255,220,150,0)');
      rc.fillStyle = g;
      rc.beginPath(); rc.moveTo(-w, 0); rc.lineTo(0, -len); rc.lineTo(w, 0); rc.fill();
    }
  }
  const raysTex = new CanvasTexture(raysCanvas); raysTex.colorSpace = SRGBColorSpace;
  const rays = new Sprite(new SpriteMaterial({ map: raysTex, blending: AdditiveBlending, depthWrite: false, depthTest: false, transparent: true, toneMapped: false, opacity: 0 }));
  const flareCanvas = document.createElement('canvas');
  flareCanvas.width = 512; flareCanvas.height = 64;
  {
    const fc = flareCanvas.getContext('2d');
    const g = fc.createLinearGradient(0, 0, 512, 0);
    g.addColorStop(0, 'rgba(160,200,255,0)'); g.addColorStop(0.42, 'rgba(200,225,255,0.55)'); g.addColorStop(0.5, 'rgba(255,255,255,1)'); g.addColorStop(0.58, 'rgba(200,225,255,0.55)'); g.addColorStop(1, 'rgba(160,200,255,0)');
    fc.fillStyle = g;
    for (let y = 0; y < 64; y++) { fc.globalAlpha = Math.exp(-(((y - 32) / 9) ** 2)); fc.fillRect(0, y, 512, 1); }
  }
  const flareTex = new CanvasTexture(flareCanvas); flareTex.colorSpace = SRGBColorSpace;
  const flare = new Sprite(new SpriteMaterial({ map: flareTex, blending: AdditiveBlending, depthWrite: false, depthTest: false, transparent: true, toneMapped: false, opacity: 0 }));
  scene.add(rays, flare);
  // le capuchon doré et son anneau sautent en tournoyant
  const capFly = { on: false, v: new Vector3(), w: new Vector3(), vr: new Vector3(), wr: new Vector3() };

  // ---------- Le prénom en éclats de verre doré : une anamorphose ----------
  // Le prénom est peint en or sur une plaque de verre cachée dans la boule. À l'éclatement, la plaque se brise
  // en éclats placés à des profondeurs différentes : de tous les angles c'est un nuage de fragments, et c'est
  // seulement quand la caméra revient pile face à la boule que les éclats s'alignent et forment le prénom.
  const NAME = { group: new Group(), frags: [], plane: null, mat: null, tex: null, active: false, aligned: false, resolve: null, fly: null, textFrac: 0.8, Wp: 3 };
  scene.add(NAME.group);
  const C = new Vector3();
  function nameCanvas(text) {
    const c = document.createElement('canvas');
    c.width = 2048; c.height = 512;
    const x = c.getContext('2d');
    // la plaque de verre, à peine visible
    const rr = (x0, y0, w, h, r) => { x.beginPath(); x.moveTo(x0 + r, y0); x.arcTo(x0 + w, y0, x0 + w, y0 + h, r); x.arcTo(x0 + w, y0 + h, x0, y0 + h, r); x.arcTo(x0, y0 + h, x0, y0, r); x.arcTo(x0, y0, x0 + w, y0, r); x.closePath(); };
    rr(30, 60, 1988, 392, 140);
    x.fillStyle = 'rgba(235, 248, 255, 0.07)'; x.fill();
    x.lineWidth = 5; x.strokeStyle = 'rgba(255, 236, 190, 0.32)'; x.stroke();
    let fs = 330;
    x.font = `italic 600 ${fs}px Fraunces, Georgia, serif`;
    const w0 = x.measureText(text).width;
    if (w0 > 1700) { fs *= 1700 / w0; x.font = `italic 600 ${fs}px Fraunces, Georgia, serif`; }
    const tw = x.measureText(text).width;
    x.textAlign = 'center'; x.textBaseline = 'alphabetic';
    const by = 256 + fs * 0.33;
    const g = x.createLinearGradient(0, by - fs * 0.78, 0, by + fs * 0.1);
    g.addColorStop(0, '#fff6d6'); g.addColorStop(0.35, '#f6d47a'); g.addColorStop(0.7, '#c9902f'); g.addColorStop(1, '#f3cc6d');
    x.shadowColor = 'rgba(255, 196, 90, 0.9)'; x.shadowBlur = 46;
    x.fillStyle = g; x.fillText(text, 1024, by);
    x.shadowBlur = 0;
    x.fillText(text, 1024, by);
    return { canvas: c, textFrac: Math.min(1, tw / 2048) };
  }
  function clearName() {
    NAME.frags.forEach((f) => { NAME.group.remove(f.mesh); f.mesh.geometry.dispose(); });
    NAME.frags = [];
    if (NAME.plane) { NAME.group.remove(NAME.plane); NAME.plane.geometry.dispose(); NAME.plane = null; }
    NAME.mat?.dispose(); NAME.tex?.dispose(); NAME.planeMat?.dispose(); NAME.fragTex?.dispose(); NAME.fragTex = null;
    NAME.mat = NAME.tex = NAME.planeMat = null;
    NAME.active = NAME.aligned = false; NAME.fly = null; NAME.resolve = null;
  }
  function prepareName(text) {
    clearName();
    const { canvas: nc, textFrac } = nameCanvas(text);
    NAME.textFrac = textFrac;
    NAME.canvas = nc;
    const tex = new CanvasTexture(nc);
    tex.colorSpace = SRGBColorSpace;
    tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    NAME.tex = tex;
    NAME.mat = new MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 1.15, metalness: 0.7, roughness: 0.28, transparent: true, depthWrite: false, depthTest: false, side: DoubleSide, envMapIntensity: 1.4 });
    NAME.planeMat = new ShaderMaterial({
      uniforms: { uMap: { value: tex }, uShine: { value: -1 }, uAlpha: { value: 1 } },
      vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `uniform sampler2D uMap; uniform float uShine; uniform float uAlpha; varying vec2 vUv;
        void main() {
          vec4 c = texture2D(uMap, vUv);
          float band = exp(-pow((vUv.x - uShine) * 9.0 - (vUv.y - 0.5) * 2.5, 2.0));
          vec3 col = c.rgb * c.a + vec3(1.0, 0.95, 0.85) * band * c.a * 0.9;
          gl_FragColor = vec4(col * uAlpha, c.a * uAlpha);
        }`,
      transparent: true, depthWrite: false, depthTest: false, premultipliedAlpha: true,
    });
    NAME.ready = true;
  }
  // Découpe la plaque en éclats triangulaires irréguliers et les place en anamorphose.
  function breakName() {
    const camZ = S.camZ;
    C.set(0, 0, camZ);
    // largeur de la plaque : 86 % de la largeur visible à la profondeur de la boule
    const hh = Math.tan((FOV * Math.PI) / 360) * (camZ - center.z);
    const Wp = Math.min(2 * hh * camera.aspect * 0.86, 4.4);
    const Hp = Wp / 4;
    NAME.Wp = Wp;
    const cols = 11, rows = 3;
    const P = [];
    for (let j = 0; j <= rows; j++) for (let i = 0; i <= cols; i++) {
      const edge = i === 0 || j === 0 || i === cols || j === rows;
      P.push([(i / cols + (edge ? 0 : rnd(-0.32, 0.32) / cols)), (j / rows + (edge ? 0 : rnd(-0.3, 0.3) / rows))]);
    }
    const at = (i, j) => P[j * (cols + 1) + i];
    const tris = [];
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const a = at(i, j), b = at(i + 1, j), c = at(i + 1, j + 1), d = at(i, j + 1);
      if (Math.random() < 0.5) tris.push([a, b, c], [a, c, d]); else tris.push([a, b, d], [b, c, d]);
    }
    // Les éclats portent la trace des fissures ; la plaque réparée (à l'alignement) n'en a plus.
    const cracked = document.createElement('canvas');
    cracked.width = NAME.canvas.width; cracked.height = NAME.canvas.height;
    const cx2 = cracked.getContext('2d');
    cx2.drawImage(NAME.canvas, 0, 0);
    cx2.save();
    cx2.beginPath(); cx2.rect(30, 60, 1988, 392); cx2.clip();
    cx2.strokeStyle = 'rgba(255, 250, 235, 0.6)'; cx2.lineWidth = 3.5; cx2.lineJoin = 'round';
    tris.forEach((t) => { cx2.beginPath(); t.forEach(([u, v], k) => (k ? cx2.lineTo(u * 2048, v * 512) : cx2.moveTo(u * 2048, v * 512))); cx2.closePath(); cx2.stroke(); });
    cx2.restore();
    const fragTex = new CanvasTexture(cracked);
    fragTex.colorSpace = SRGBColorSpace;
    fragTex.anisotropy = NAME.tex.anisotropy;
    NAME.mat.map = fragTex; NAME.mat.emissiveMap = fragTex; NAME.mat.needsUpdate = true;
    NAME.fragTex = fragTex;
    const mid = new Vector3(S.ax, center.y, center.z); // centré sur l'écran, pas sur la boule qui se balance
    tris.forEach((t) => {
      const cu = (t[0][0] + t[1][0] + t[2][0]) / 3, cv = (t[0][1] + t[1][1] + t[2][1]) / 3;
      const pos = new Float32Array(9), uv = new Float32Array(6);
      t.forEach(([u, v], k) => {
        pos.set([(u - cu) * Wp, (cv - v) * Hp, 0], k * 3);
        uv.set([u, 1 - v], k * 2);
      });
      const g = new BufferGeometry();
      g.setAttribute('position', new BufferAttribute(pos, 3));
      g.setAttribute('uv', new BufferAttribute(uv, 2));
      g.computeVertexNormals();
      const mesh = new Mesh(g, NAME.mat);
      mesh.frustumCulled = false;
      // position sur la plaque (face à la caméra, centrée sur la boule)
      const flat = new Vector3(mid.x + (cu - 0.5) * Wp, mid.y + (0.5 - cv) * Hp, mid.z);
      // anamorphose : glissé le long de la ligne de visée, agrandi d'autant -> même image vue d'ici
      const sf = rnd(0.55, 1.5);
      const final = C.clone().add(flat.clone().sub(C).multiplyScalar(sf));
      const scatter = final.clone().add(tmp2.randomDirection().multiplyScalar(rnd(0.5, 1.4))).add(new Vector3(0, 0, rnd(-0.8, 0.8)));
      const qStart = new Quaternion().setFromEuler(new Euler(rnd(-3, 3), rnd(-3, 3), rnd(-3, 3)));
      mesh.position.copy(center);
      mesh.scale.setScalar(0.01);
      mesh.quaternion.copy(qStart);
      NAME.group.add(mesh);
      NAME.frags.push({ mesh, final, scatter, sf, qStart, spin: rnd(-2, 2) });
    });
    const pg = new PlaneGeometry(Wp, Hp);
    NAME.plane = new Mesh(pg, NAME.planeMat);
    NAME.plane.position.copy(mid);
    NAME.plane.visible = false;
    NAME.plane.frustumCulled = false;
    NAME.group.add(NAME.plane);
    NAME.active = true;
    NAME.aligned = false;
  }
  const qI = new Quaternion();
  const ALIGN = 1.37; // instant où la caméra est revenue pile face à la boule
  function nameStep(dt) {
    if (!NAME.active) return;
    const e = S.shatterT;
    if (!NAME.aligned) {
      NAME.frags.forEach((f) => {
        const m = f.mesh;
        if (e < 0.16) {
          const u = 1 - (1 - e / 0.16) ** 3;
          m.position.lerpVectors(center, f.scatter, u);
          m.scale.setScalar(0.01 + (f.sf - 0.01) * u);
        } else {
          const u0 = Math.min(1, Math.max(0, (e - 0.3) / (ALIGN - 0.3 - 0.02)));
          const u = u0 * u0 * (3 - 2 * u0);
          m.position.lerpVectors(f.scatter, f.final, u);
          m.scale.setScalar(f.sf);
          m.quaternion.slerpQuaternions(f.qStart, qI, u);
        }
      });
      if (e >= ALIGN) {
        // Alignement : le prénom apparaît, net, d'un seul coup.
        NAME.aligned = true;
        NAME.frags.forEach((f) => { f.mesh.position.copy(f.final); f.mesh.quaternion.identity(); });
        NAME.plane.visible = true;
        NAME.alignT = e;
        NAME.frags.forEach((f) => { f.mesh.visible = false; });
        core.position.copy(NAME.plane.position);
        core.material.opacity = 0.85; core.scale.setScalar(3.4);
        for (let i = 0; i < 140; i++) {
          const u = Math.random();
          dust.emit({ life: rnd(0.5, 1.4), x: NAME.plane.position.x + (u - 0.5) * NAME.Wp * NAME.textFrac, y: center.y + rnd(-0.25, 0.25), z: center.z + 0.2, vx: rnd(-0.6, 0.6), vy: rnd(-0.2, 1.4), vz: rnd(0, 0.6), size: rnd(2.5, 6.5), grav: -0.6, drag: 2.2, r: 1, g: rnd(0.82, 0.96), b: rnd(0.5, 0.85) });
        }
        sound.chime?.();
        sound.boom?.();
        NAME.resolve?.();
        NAME.resolve = null;
      }
      return;
    }
    // Aligné : reflet qui balaie le prénom, puis vol jusqu'au tableau.
    const k = e - NAME.alignT;
    core.material.opacity = Math.max(0, 0.85 - k * 2.2);
    core.scale.setScalar(3.4 + k * 3);
    NAME.planeMat.uniforms.uShine.value = -0.3 + ((k * 0.75) % 1.6);
    if (NAME.fly) {
      const f = NAME.fly;
      f.t += dt;
      const u0 = Math.min(1, f.t / f.dur);
      const u = u0 < 0.5 ? 4 * u0 ** 3 : 1 - (-2 * u0 + 2) ** 3 / 2;
      NAME.plane.position.lerpVectors(f.p0, f.p1, u);
      NAME.plane.scale.setScalar(f.s0 + (f.s1 - f.s0) * u);
      if (u0 >= 1 && !f.arrived) { f.arrived = true; f.resolve?.(); }
      if (f.arrived) {
        f.fade += dt;
        NAME.planeMat.uniforms.uAlpha.value = Math.max(0, 1 - f.fade / 0.35);
        if (f.fade > 0.4) { NAME.active = false; NAME.plane.visible = false; }
      }
    }
  }

  // ---------- Feu d'artifice final (dans le ciel, derrière la carte) ----------
  const FW = { on: false, t: 0, shells: [], heads: [], rockets: [] };
  const TONES = {
    gold: [[1, 0.82, 0.42], [1, 0.9, 0.62]],
    red: [[1, 0.25, 0.3], [1, 0.5, 0.45]],
    green: [[0.35, 1, 0.55], [0.6, 1, 0.7]],
    white: [[1, 0.97, 0.9], [0.85, 0.92, 1]],
    blue: [[0.45, 0.65, 1], [0.7, 0.85, 1]],
  };
  const pick = (tone) => { const c = TONES[tone] || TONES.gold; return c[Math.random() < 0.5 ? 0 : 1]; };
  // Formes : liste de points (x, y) dans le plan face à toi, vitesse proportionnelle à la position.
  function shapePoints(kind, n) {
    const pts = [];
    if (kind === 'heart') {
      for (let i = 0; i < n; i++) {
        const t = (i / n) * TAU;
        pts.push([16 * Math.sin(t) ** 3 / 17, (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 17]);
      }
    } else if (kind === 'ring') {
      for (let i = 0; i < n; i++) { const t = (i / n) * TAU; pts.push([Math.cos(t), Math.sin(t)]); }
    } else if (kind === 'star') {
      for (let i = 0; i < n; i++) {
        const t = (i / n) * 10, k = Math.floor(t), f = t - k;
        const r0 = k % 2 ? 0.42 : 1, r1 = k % 2 ? 1 : 0.42;
        const a0 = (k / 10) * TAU + Math.PI / 2, a1 = ((k + 1) / 10) * TAU + Math.PI / 2;
        const x0 = Math.cos(a0) * r0, y0 = Math.sin(a0) * r0, x1 = Math.cos(a1) * r1, y1 = Math.sin(a1) * r1;
        pts.push([x0 + (x1 - x0) * f, y0 + (y1 - y0) * f]);
      }
    } else if (kind === 'paw') {
      // La patte de Lino : un coussinet et quatre doigts.
      const blob = (cx, cy, rx, ry, m) => { for (let i = 0; i < m; i++) { const t = (i / m) * TAU; pts.push([cx + Math.cos(t) * rx, cy + Math.sin(t) * ry]); } };
      blob(0, -0.32, 0.5, 0.42, Math.round(n * 0.36));
      [[-0.66, 0.3], [-0.24, 0.66], [0.24, 0.66], [0.66, 0.3]].forEach(([x, y]) => blob(x, y, 0.2, 0.25, Math.round(n * 0.16)));
    }
    return pts;
  }
  function burst(x, y, z, kind, tone) {
    const scale = Math.abs(S.camZ - z) / S.camZ; // plus loin = plus grand dans le monde, même taille à l'écran
    const P = (o) => fw.emit(o);
    sound.pop?.();
    // éclair central
    for (let i = 0; i < 26; i++) {
      tmp2.randomDirection().multiplyScalar(rnd(0.2, 1.2) * scale);
      P({ life: rnd(0.15, 0.35), x, y, z, vx: tmp2.x, vy: tmp2.y, vz: tmp2.z, size: rnd(18, 30), drag: 4, r: 1, g: 0.95, b: 0.85, wob: 0 });
    }
    const add = (vx, vy, vz, o) => {
      const [r, g, b] = pick(tone).map((v) => v * 1.35); // plus de 1 : cœur des étincelles chauffé à blanc
      const q = fwHeads.emit({ life: rnd(1.5, 2.1), x, y, z, vx, vy, vz, size: rnd(10, 14), drag: 1.25, grav: -1.5 * scale, r, g, b, wob: 0, ...o });
      FW.heads.push({ q, trail: o?.trail ?? 0.32, every: o?.every ?? 1, k: 0, crackle: o?.crackle || false });
    };
    if (kind === 'peony' || kind === 'crackle') {
      const n = 170;
      for (let i = 0; i < n; i++) {
        tmp2.randomDirection().multiplyScalar(rnd(2.3, 2.6) * scale);
        add(tmp2.x, tmp2.y, tmp2.z, { crackle: kind === 'crackle' });
      }
    } else if (kind === 'willow') {
      for (let i = 0; i < 110; i++) {
        tmp2.randomDirection().multiplyScalar(rnd(1.9, 2.2) * scale);
        add(tmp2.x, tmp2.y + 0.4 * scale, tmp2.z, { life: rnd(2.8, 3.4), drag: 0.85, grav: -1.05 * scale, size: rnd(7, 9.5), trail: 0.95, every: 2, r: 1, g: 0.78, b: 0.36 });
      }
    } else {
      const pts = shapePoints(kind, kind === 'paw' ? 260 : 170);
      const k = (kind === 'paw' ? 2.2 : 2.0) * scale, tilt = kind === 'paw' ? rnd(-0.12, 0.12) : rnd(-0.2, 0.2);
      pts.forEach(([px, py]) => {
        const c = Math.cos(tilt), s2 = Math.sin(tilt);
        add((px * c - py * s2) * k, (px * s2 + py * c) * k, rnd(-0.15, 0.15) * scale, { drag: 1.9, grav: -0.3 * scale, life: rnd(2.3, 2.7), trail: 0.3, size: rnd(11, 14), ...(kind === 'paw' ? { r: 1.4, g: 1.15, b: 0.6 } : {}) });
      });
    }
  }
  function launch(xs, ys, z, kind, tone, delay) {
    // xs, ys : position d'explosion en fraction de l'écran (0 = gauche / haut).
    FW.rockets.push({ at: FW.t + delay, xs, ys, z, kind, tone, started: false });
  }
  function screenToWorld(xs, ys, z) {
    const dist = S.camZ - z;
    const hh = Math.tan((FOV * Math.PI) / 360) * dist;
    return { x: (xs - 0.5) * 2 * hh * camera.aspect, y: (0.5 - ys) * 2 * hh };
  }
  function fireworksStep(dt) {
    FW.t += dt;
    FW.rockets.forEach((r) => {
      if (r.done || FW.t < r.at) return;
      const end = screenToWorld(r.xs, r.ys, r.z);
      const start = screenToWorld(r.xs + rnd(-0.06, 0.06), 1.08, r.z);
      if (!r.started) { r.started = true; r.t0 = FW.t; r.dur = rnd(0.85, 1.1); sound.sweep?.('sine', 600, 1700, r.dur * 0.9, 0.025); }
      const u = Math.min(1, (FW.t - r.t0) / r.dur);
      const e = 1 - (1 - u) ** 2.2;
      const x = start.x + (end.x - start.x) * e, y = start.y + (end.y - start.y) * e;
      for (let i = 0; i < 2; i++) fw.emit({ life: rnd(0.25, 0.5), x: x + rnd(-0.03, 0.03), y, z: r.z, vx: rnd(-0.2, 0.2), vy: rnd(-0.8, -0.2), vz: 0, size: rnd(4.5, 7.5), drag: 2, grav: -0.6, r: 1, g: 0.78, b: 0.45, wob: 0 });
      fw.emit({ life: 0.06, x, y, z: r.z, vx: 0, vy: 0, vz: 0, size: 15, drag: 0, r: 1, g: 0.95, b: 0.8, wob: 0 });
      if (u >= 1) { r.done = true; burst(x, y, r.z, r.kind, r.tone); }
    });
    // Traînées : chaque étincelle laisse derrière elle une poussière qui s'éteint.
    FW.heads = FW.heads.filter((h) => {
      const q = h.q;
      if (q.life <= 0) {
        if (h.crackle) for (let i = 0; i < 3; i++) fw.emit({ life: rnd(0.35, 0.7), x: q.x, y: q.y, z: q.z, vx: rnd(-0.5, 0.5), vy: rnd(-0.5, 0.3), vz: 0, size: rnd(5, 8), drag: 2, grav: -0.5, r: 1, g: 1, b: 0.92, strobe: true, wob: 0 });
        if (h.crackle && Math.random() < 0.02) sound.crack?.(0);
        return false;
      }
      h.k += 1;
      if (h.k % h.every === 0) fw.emit({ life: h.trail * rnd(0.9, 1.35), x: q.x, y: q.y, z: q.z, vx: q.vx * 0.05, vy: q.vy * 0.05 - 0.05, vz: 0, size: q.size * 0.7, drag: 3, grav: -0.35, r: q.r, g: q.g * 0.92, b: q.b * 0.8, wob: 0 });
      return true;
    });
    const alive = fw.update(dt, S.t) + fwHeads.update(dt, S.t);
    if (FW.t > 2 && !FW.heads.length && FW.rockets.every((r) => r.done) && alive === 0) endFireworks();
  }
  function endFireworks() {
    FW.on = false;
    canvas.style.zIndex = '';
    stop();
  }

  function step(realDt) {
    if (FW.on) { S.t += realDt; fireworksStep(realDt); return; }
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
      const w2 = 10.5, damp = 1.7;
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
      crew.forEach((c) => {
        if (!c.sprite.visible) return;
        c.vel.y -= 11 * dt;
        c.vel.multiplyScalar(Math.exp(-0.5 * dt));
        c.sprite.position.addScaledVector(c.vel, dt);
        c.sprite.material.rotation += c.spin * dt;
        if (c.sprite.position.y < camBottom - 1 || c.sprite.position.z > S.camZ - 1.5) c.sprite.visible = false; else flying++;
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
      nameStep(realDt);
      stepStreaks(dt);
      if (capFly.on) {
        capFly.v.y -= 11 * dt; capFly.vr.y -= 11 * dt;
        cap.position.addScaledVector(capFly.v, dt); ring.position.addScaledVector(capFly.vr, dt);
        cap.rotation.x += capFly.w.x * dt; cap.rotation.y += capFly.w.y * dt; cap.rotation.z += capFly.w.z * dt;
        ring.rotation.x += capFly.wr.x * dt; ring.rotation.y += capFly.wr.y * dt; ring.rotation.z += capFly.wr.z * dt;
        if (cap.position.y < camBottom && ring.position.y < camBottom) capFly.on = false; else flying++;
        S.flying = flying;
      }
      rays.material.opacity = Math.max(0, 1 - e / 0.7) * 0.9;
      rays.scale.setScalar(2.5 + (1 - Math.exp(-e * 4)) * 7);
      rays.material.rotation = e * 0.25;
      flare.material.opacity = Math.max(0, 1 - e / 0.45);
      flare.scale.set(3 + e * 22, 0.55 + e * 0.6, 1);
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
    prepareCrew,
    // Feu d'artifice final, dans le ciel derrière la carte du prénom.
    fireworks() {
      FW.on = true; FW.t = 0; FW.heads = []; FW.rockets = [];
      fw.clear(); fwHeads.clear(); dust.clear();
      crew.forEach((c) => { c.sprite.visible = false; });
      shards.forEach((s) => { s.mesh.visible = false; });
      halo.material.opacity = 0; core.material.opacity = 0; wave.material.opacity = 0;
      pivot.visible = false;
      camera.rotation.set(0, 0, 0);
      camera.position.set(0, 0, S.camZ);
      // Autour de la carte : en haut, et dans le ciel libre sous la carte.
      const plan = [
        [0.22, 0.14, -4, 'peony', 'red', 0],
        [0.78, 0.12, -5, 'willow', 'gold', 0.3],
        [0.5, 0.8, -3, 'paw', 'gold', 0.8],
        [0.2, 0.64, -4, 'heart', 'red', 1.35],
        [0.8, 0.66, -4, 'ring', 'green', 1.7],
        [0.34, 0.16, -5, 'crackle', 'white', 2.15],
        [0.74, 0.84, -3, 'star', 'gold', 2.6],
        [0.5, 0.14, -6, 'willow', 'gold', 3.05],
        [0.3, 0.78, -5, 'crackle', 'gold', 3.5],
      ];
      plan.forEach((p) => launch(...p));
      start();
    },
    // Quelqu'un cogne de l'intérieur : la boule sursaute et un peu de poussière s'échappe.
    knock() {
      if (S.shattered) return;
      S.kick.set(rnd(-0.04, 0.04), rnd(-0.02, 0.04), 0.2);
      S.tapT = S.t - 0.02;
      S.thxV += 0.18;
      ballCenter();
      for (let i = 0; i < 10; i++) {
        tmp2.randomDirection();
        tmp2.z = Math.abs(tmp2.z);
        dust.emit({ life: rnd(0.3, 0.7), x: center.x + tmp2.x, y: center.y + tmp2.y, z: center.z + tmp2.z, vx: tmp2.x * 1.5, vy: tmp2.y * 1.5, vz: tmp2.z * 1.5, size: rnd(2, 4), grav: -3, drag: 2.5 });
      }
    },
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
      // Les lutins jaillissent en éventail, lettres mélangées, puis restent suspendus pendant le temps figé.
      const n = Math.max(1, crew.length - 1);
      const slots = Array.from({ length: n }, (_, i) => i).sort(() => Math.random() - 0.5);
      crew.forEach((c, i) => {
        c.sprite.visible = true;
        if (c.guard) {
          c.sprite.position.copy(center).add(tmp2.set(0, 1.5, 0.2));
          c.vel.set(rnd(-1.6, 1.6), 4.2, 1.8);
        } else {
          const dirs = [2.2, 0.95, -1.57, 2.6, 0.55, -2.1, -1.0];
          const a = dirs[(slots[i - 1]) % dirs.length] + rnd(-0.15, 0.15);
          const sp = rnd(8.5, 10.5);
          c.sprite.position.copy(center);
          c.vel.set(Math.cos(a) * sp * 0.8, Math.sin(a) * sp * 0.85 + 0.5, rnd(1.5, 3.5));
        }
        c.sprite.material.rotation = rnd(-0.55, 0.55);
        c.spin = rnd(-3.5, 3.5);
      });
      // capuchon et anneau : ils quittent la boule et sautent vers le haut en tournoyant
      scene.attach(cap); scene.attach(ring);
      capFly.on = true;
      capFly.v.set(rnd(-1.2, 1.2), rnd(4.5, 6), rnd(0.5, 2));
      capFly.w.set(rnd(-9, 9), rnd(-4, 4), rnd(-9, 9));
      capFly.vr.set(capFly.v.x + rnd(-1.5, 1.5), capFly.v.y + rnd(0.5, 2), capFly.v.z + rnd(0, 1));
      capFly.wr.set(rnd(-14, 14), rnd(-6, 6), rnd(-14, 14));
      launchStreaks(center, lastHit);
      rays.position.copy(center); flare.position.copy(center);
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
      if (NAME.ready) {
        NAME.ready = false;
        breakName();
        return new Promise((resolve) => { NAME.resolve = resolve; });
      }
      return Promise.resolve();
    },
    prepareName,
    // Le prénom aligné vole jusqu'au rectangle donné (coordonnées de l'écran), puis s'efface.
    flyName(rect) {
      if (!NAME.plane || !NAME.aligned) return Promise.resolve();
      const ppu = S.ppu;
      const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
      const p1 = new Vector3((cx - S.W / 2) / ppu, -(cy - S.H / 2) / ppu, NAME.plane.position.z);
      const s1 = Math.max(0.2, (rect.width * 0.94) / (NAME.Wp * NAME.textFrac * ppu));
      return new Promise((resolve) => {
        NAME.fly = { t: 0, dur: 0.55, p0: NAME.plane.position.clone(), p1, s0: NAME.plane.scale.x, s1, fade: 0, arrived: false, resolve };
      });
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
