// Sapin de Noël en 3D temps réel, sur l'accueil : une boule par participant, à sa couleur et à son nom.
// On fait tourner le sapin du doigt, on touche sa boule : elle se décroche et vient vers toi.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, InstancedMesh, PlaneGeometry, CylinderGeometry,
  SphereGeometry, TorusGeometry, LatheGeometry, ExtrudeGeometry, BoxGeometry, Shape, MeshStandardMaterial,
  MeshPhysicalMaterial, MeshBasicMaterial, CanvasTexture, Color, Vector2, Vector3, Object3D, Raycaster,
  Sprite, SpriteMaterial, AdditiveBlending, DoubleSide, SRGBColorSpace, ACESFilmicToneMapping, RepeatWrapping,
  BufferGeometry, BufferAttribute, Points, ShaderMaterial, CircleGeometry,
} from 'three';
import { paintBauble, PALETTES, buildEnvironment, radialTexture } from './ball.js';

const TAU = Math.PI * 2;
const rnd = (a, b) => a + Math.random() * (b - a);
const H = 4.05;                                  // hauteur du feuillage
const R = (y) => 1.62 * (1 - y / H) + 0.05;      // rayon du sapin à la hauteur y

// Rameau de sapin peint : tige, aiguilles des deux côtés, un peu de neige sur le dessus.
function paintBranch() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const x = c.getContext('2d');
  x.lineCap = 'round';
  const needles = (x0, y0, ang, len, n, size) => {
    for (let i = 0; i < n; i++) {
      const t = i / n;
      const px = x0 + Math.cos(ang) * len * t, py = y0 + Math.sin(ang) * len * t;
      const l = size * (1 - t * 0.45) * rnd(0.8, 1.15);
      for (const side of [-1, 1]) {
        const a = ang + side * rnd(0.85, 1.25);
        const light = side < 0 ? rnd(30, 70) : rnd(0, 35);
        x.strokeStyle = `rgb(${Math.round(16 + light * 0.25)}, ${Math.round(66 + light)}, ${Math.round(42 + light * 0.4)})`;
        x.lineWidth = rnd(3.2, 4.4);
        x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l); x.stroke();
      }
    }
  };
  // tige principale et rameaux secondaires
  x.strokeStyle = '#3d2a1a'; x.lineWidth = 5;
  x.beginPath(); x.moveTo(6, 128); x.quadraticCurveTo(260, 122, 500, 112); x.stroke();
  [[0.22, -0.55], [0.3, 0.6], [0.46, -0.5], [0.55, 0.55], [0.7, -0.45], [0.78, 0.45]].forEach(([t, a]) => {
    const px = 6 + t * 494, py = 128 - t * 14;
    needles(px, py, a, 150 * (1 - t * 0.6), 26, 34);
  });
  needles(6, 128, -0.03, 494, 92, 44);
  // neige posée sur les aiguilles du dessus
  for (let i = 0; i < 70; i++) {
    const t = Math.random();
    const px = 30 + t * 440, py = 128 - t * 14 - rnd(18, 50);
    const g = x.createRadialGradient(px, py, 0, px, py, rnd(6, 13));
    g.addColorStop(0, 'rgba(250,252,255,0.95)'); g.addColorStop(1, 'rgba(250,252,255,0)');
    x.fillStyle = g;
    x.fillRect(px - 14, py - 14, 28, 28);
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// Étiquette suspendue sous chaque boule : le prénom en grand, net, toujours tourné vers toi.
function paintTag(name) {
  const c = document.createElement('canvas');
  c.width = 640; c.height = 220;
  const x = c.getContext('2d');
  const r = 70, X0 = 14, Y0 = 34, W = 612, Hh = 172;
  x.beginPath();
  x.moveTo(X0 + r, Y0); x.arcTo(X0 + W, Y0, X0 + W, Y0 + Hh, r); x.arcTo(X0 + W, Y0 + Hh, X0, Y0 + Hh, r);
  x.arcTo(X0, Y0 + Hh, X0, Y0, r); x.arcTo(X0, Y0, X0 + W, Y0, r); x.closePath();
  const bg = x.createLinearGradient(0, Y0, 0, Y0 + Hh);
  bg.addColorStop(0, '#fffaf0'); bg.addColorStop(1, '#f1e4c6');
  x.fillStyle = bg;
  x.shadowColor = 'rgba(0,0,0,0.55)'; x.shadowBlur = 14; x.shadowOffsetY = 6;
  x.fill();
  x.shadowColor = 'transparent';
  x.lineWidth = 8; x.strokeStyle = '#c99a3c'; x.stroke();
  x.lineWidth = 2.5; x.strokeStyle = 'rgba(178,31,53,0.55)';
  x.beginPath(); x.roundRect?.(X0 + 14, Y0 + 14, W - 28, Hh - 28, r - 14); x.stroke();
  // œillet et fil
  x.fillStyle = '#e9c46a'; x.beginPath(); x.arc(320, Y0 + 2, 15, 0, Math.PI * 2); x.fill();
  x.fillStyle = '#5a3a1c'; x.beginPath(); x.arc(320, Y0 + 2, 7, 0, Math.PI * 2); x.fill();
  let fs = 122;
  x.font = `600 ${fs}px Fraunces, Georgia, serif`;
  const w = x.measureText(name).width;
  if (w > 540) { fs *= 540 / w; x.font = `600 ${fs}px Fraunces, Georgia, serif`; }
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillStyle = '#123d2c';
  x.fillText(name, 320, Y0 + Hh / 2 + 6);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// Petites lueurs (guirlande lumineuse) : points qui scintillent, cachés par les branches quand ils passent derrière.
function makeLights(positions, colors) {
  const n = positions.length / 3;
  const g = new BufferGeometry();
  const phase = new Float32Array(n);
  for (let i = 0; i < n; i++) phase[i] = Math.random() * TAU;
  g.setAttribute('position', new BufferAttribute(positions, 3));
  g.setAttribute('aColor', new BufferAttribute(colors, 3));
  g.setAttribute('aPhase', new BufferAttribute(phase, 1));
  const mat = new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uScale: { value: 1 }, uWave: { value: 0 } },
    vertexShader: `
      attribute vec3 aColor; attribute float aPhase;
      uniform float uTime; uniform float uScale; uniform float uWave;
      varying vec3 vColor; varying float vA;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float tw = 0.6 + 0.4 * sin(uTime * 2.2 + aPhase * 3.0) * sin(uTime * 0.9 + aPhase);
        float wave = exp(-pow(position.y - uWave, 2.0) * 6.0);
        vA = tw + wave * 1.6;
        gl_PointSize = (26.0 + wave * 18.0) * uScale * (9.0 / max(1.0, -mv.z));
        vColor = aColor;
      }`,
    fragmentShader: `
      varying vec3 vColor; varying float vA;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c) * 2.0;
        float core = smoothstep(0.32, 0.0, d);
        float halo = pow(max(0.0, 1.0 - d), 3.0) * 0.55;
        gl_FragColor = vec4((vColor * halo + vec3(1.0, 0.98, 0.92) * core) * vA, 0.0);
      }`,
    blending: AdditiveBlending, transparent: true, depthWrite: false, premultipliedAlpha: true,
  });
  const p = new Points(g, mat);
  p.frustumCulled = false;
  return p;
}

export function createTree({ canvas, people, onPick, sound = {} }) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch { return null; }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new Scene();
  scene.environment = buildEnvironment(renderer);
  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  const HOME = { pos: new Vector3(0, 2.3, 9.6), look: new Vector3(0, 2.18, 0) };
  camera.position.copy(HOME.pos);
  camera.lookAt(HOME.look);

  const tree = new Group();
  scene.add(tree);

  // ---------- Feuillage : des centaines de rameaux en volume ----------
  const branchTex = paintBranch();
  const branchGeo = new PlaneGeometry(1, 0.5);
  branchGeo.translate(0.5, 0, 0);
  const foliageMat = new MeshStandardMaterial({ map: branchTex, alphaTest: 0.42, side: DoubleSide, roughness: 0.82, metalness: 0, envMapIntensity: 0.75 });
  const COUNT = 1100;
  const foliage = new InstancedMesh(branchGeo, foliageMat, COUNT);
  const dummy = new Object3D();
  const col = new Color();
  let k = 0;
  while (k < COUNT) {
    const y = rnd(0.32, H - 0.05);
    if (Math.random() > Math.sqrt(R(y) / R(0.32))) continue; // plus de rameaux là où le sapin est large
    const r = R(y);
    const inner = Math.random() < 0.3;
    const len = (inner ? rnd(0.45, 0.7) : rnd(0.82, 1.08)) * r + 0.12;
    dummy.position.set(0, y + (inner ? 0 : rnd(-0.04, 0.04)), 0);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.set(len, Math.min(0.62, len * 0.6) / 0.5 * 0.5 * 2, 1);
    dummy.rotateY(rnd(0, TAU));
    dummy.rotateZ(-rnd(0.18, 0.5) - (1 - y / H) * 0.15);
    dummy.rotateX(-Math.PI / 2 + rnd(-0.75, 0.75));
    dummy.updateMatrix();
    foliage.setMatrixAt(k, dummy.matrix);
    const shade = inner ? rnd(0.42, 0.6) : rnd(0.78, 1.12);
    col.setRGB(shade * rnd(0.9, 1.05), shade, shade * rnd(0.88, 1.06));
    foliage.setColorAt(k, col);
    k++;
  }
  tree.add(foliage);

  // Tronc, neige au pied, cadeaux.
  const trunk = new Mesh(new CylinderGeometry(0.1, 0.16, 0.75, 14), new MeshStandardMaterial({ color: 0x4a2f1c, roughness: 0.9 }));
  trunk.position.y = 0.3;
  tree.add(trunk);
  const snowTex = radialTexture([[0, 'rgba(255,255,255,1)'], [0.55, 'rgba(240,246,255,0.85)'], [1, 'rgba(240,246,255,0)']]);
  const snow = new Mesh(new CircleGeometry(2.4, 48), new MeshStandardMaterial({ color: 0xf4f8ff, map: snowTex, transparent: true, depthWrite: false, roughness: 1 }));
  snow.rotation.x = -Math.PI / 2;
  snow.position.y = -0.02;
  scene.add(snow);
  const gifts = new Group();
  [[0.95, 0.42, 0.3, 0xb21f35, 0.2], [-0.95, 0.35, 0.55, 0x1f7a4c, -0.5], [0.15, 0.3, 1.1, 0xe9c46a, 0.9], [-0.35, 0.26, -0.95, 0x6c1c8c, 0.3], [1.2, 0.24, -0.6, 0x1b42ad, -0.2]].forEach(([x, s, z, c, ry]) => {
    const g = new Group();
    const box = new Mesh(new BoxGeometry(s * 1.2, s, s), new MeshStandardMaterial({ color: c, roughness: 0.45, metalness: 0.1 }));
    const ribbon = new MeshStandardMaterial({ color: c === 0xe9c46a ? 0xb21f35 : 0xe9c46a, metalness: 0.8, roughness: 0.3 });
    const r1 = new Mesh(new BoxGeometry(s * 1.22, s * 1.02, s * 0.16), ribbon);
    const r2 = new Mesh(new BoxGeometry(s * 0.16, s * 1.02, s * 1.02), ribbon);
    const bow = new Mesh(new TorusGeometry(s * 0.16, s * 0.05, 8, 16), ribbon);
    bow.position.y = s * 0.56; bow.rotation.y = 0.7;
    g.add(box, r1, r2, bow);
    g.position.set(x, s / 2, z);
    g.rotation.y = ry;
    gifts.add(g);
  });
  tree.add(gifts);

  // ---------- Guirlande lumineuse en spirale ----------
  const N = 150;
  const lp = new Float32Array(N * 3), lc = new Float32Array(N * 3);
  const palette = [[1, 0.86, 0.55], [1, 0.86, 0.55], [1, 0.72, 0.3], [1, 0.3, 0.32], [0.45, 1, 0.6]];
  for (let i = 0; i < N; i++) {
    const t = i / N;
    const y = 0.42 + t * 3.45;
    const a = t * TAU * 6.5;
    const r = R(y) * 0.9 + 0.04 + Math.sin(t * 160) * 0.02;
    lp.set([Math.cos(a) * r, y - Math.abs(Math.sin(t * 80)) * 0.05, Math.sin(a) * r], i * 3);
    lc.set(palette[i % palette.length], i * 3);
  }
  const lights = makeLights(lp, lc);
  tree.add(lights);

  // ---------- Étoile au sommet ----------
  const starShape = new Shape();
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * TAU + Math.PI / 2, r = i % 2 ? 0.12 : 0.29;
    if (i === 0) starShape.moveTo(Math.cos(a) * r, Math.sin(a) * r); else starShape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  starShape.closePath();
  const starGeo = new ExtrudeGeometry(starShape, { depth: 0.05, bevelEnabled: true, bevelThickness: 0.035, bevelSize: 0.03, bevelSegments: 3 });
  starGeo.center();
  const star = new Mesh(starGeo, new MeshStandardMaterial({ color: 0xffd47a, metalness: 1, roughness: 0.22, emissive: 0xffb84a, emissiveIntensity: 0.55, envMapIntensity: 1.4 }));
  star.position.y = H + 0.18;
  scene.add(star);
  const haloTex = radialTexture([[0, 'rgba(255,240,190,0.95)'], [0.3, 'rgba(255,210,120,0.4)'], [1, 'rgba(255,190,90,0)']]);
  const starHalo = new Sprite(new SpriteMaterial({ map: haloTex, blending: AdditiveBlending, transparent: true, depthWrite: false, toneMapped: false }));
  starHalo.scale.setScalar(1.25);
  starHalo.position.copy(star.position);
  scene.add(starHalo);
  const raysC = document.createElement('canvas'); raysC.width = raysC.height = 256;
  const rc = raysC.getContext('2d');
  rc.translate(128, 128);
  for (let i = 0; i < 16; i++) {
    rc.rotate(TAU / 16);
    const g = rc.createLinearGradient(0, 0, 0, -128);
    g.addColorStop(0, 'rgba(255,230,170,0.7)'); g.addColorStop(1, 'rgba(255,230,170,0)');
    rc.fillStyle = g;
    rc.beginPath(); rc.moveTo(-(i % 2 ? 2 : 4), 0); rc.lineTo(0, -(i % 2 ? 80 : 126)); rc.lineTo(i % 2 ? 2 : 4, 0); rc.fill();
  }
  const raysTex = new CanvasTexture(raysC); raysTex.colorSpace = SRGBColorSpace;
  const rays = new Sprite(new SpriteMaterial({ map: raysTex, blending: AdditiveBlending, transparent: true, depthWrite: false, toneMapped: false, opacity: 0.8 }));
  rays.scale.setScalar(1.5);
  rays.position.copy(star.position);
  scene.add(rays);

  // ---------- Les boules, une par personne ----------
  const goldMetal = new MeshStandardMaterial({ color: new Color(1, 0.74, 0.3), metalness: 1, roughness: 0.28, envMapIntensity: 1.3 });
  const capGeo = new LatheGeometry([new Vector2(0.001, 1.185), new Vector2(0.15, 1.185), new Vector2(0.195, 1.15), new Vector2(0.2, 0.99), new Vector2(0.235, 0.965), new Vector2(0.24, 0.93), new Vector2(0.001, 0.93)], 24);
  const ringGeo = new TorusGeometry(0.085, 0.016, 8, 20);
  const sphereGeo = new SphereGeometry(1, 48, 32);
  const stringMat = new MeshBasicMaterial({ color: new Color(1.1, 0.9, 0.55) });
  const BR = 0.3;
  const baubles = people.map((name, i) => {
    const n = people.length;
    const y = 0.66 + (i / Math.max(1, n - 1)) * 2.62;
    const theta = i * 2.39996 + 0.4;
    const rr = R(y) + 0.2;
    const hook = new Group();
    hook.position.set(Math.sin(theta) * rr, y + 0.42, Math.cos(theta) * rr);
    hook.rotation.y = theta;
    const swing = new Group();
    hook.add(swing);
    const p = paintBauble(1024, PALETTES[i % PALETTES.length], '', 1); // décor seul : le prénom est sur l'étiquette
    const map = new CanvasTexture(p.colorC); map.colorSpace = SRGBColorSpace; map.wrapS = RepeatWrapping; map.anisotropy = 4;
    const rough = new CanvasTexture(p.roughC); rough.wrapS = RepeatWrapping;
    const mat = new MeshPhysicalMaterial({ map, roughnessMap: rough, roughness: 1, metalness: 1, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.3 });
    const ball = new Group();
    ball.position.y = -0.42;
    const mesh = new Mesh(sphereGeo, mat);
    mesh.userData.index = i;
    const cap = new Mesh(capGeo, goldMetal);
    const ring = new Mesh(ringGeo, goldMetal);
    ring.position.y = 1.25;
    ball.add(mesh, cap, ring);
    // l'étiquette pend sous la boule (dans l'espace de la boule, d'où la division par BR)
    // l'étiquette passe devant les branches ; elle s'efface quand sa boule tourne derrière le sapin
    const tag = new Sprite(new SpriteMaterial({ map: paintTag(name), transparent: true, depthWrite: false, depthTest: false }));
    tag.scale.set(0.98 / BR, (0.98 * 220 / 640) / BR, 1);
    tag.position.y = -1 - (0.03 + 0.49 * 220 / 640) / BR;
    tag.center.set(0.5, 0.5);
    tag.renderOrder = 10;
    ball.add(tag);
    const thread = new Mesh(new CylinderGeometry(0.02, 0.02, 0.07 / BR, 4), stringMat);
    thread.position.y = -1 - 0.03 / BR;
    ball.add(thread);
    ball.scale.setScalar(BR);
    swing.add(ball);
    const string = new Mesh(new CylinderGeometry(0.006, 0.006, 0.07, 4), stringMat);
    string.position.y = -0.035;
    swing.add(string);
    tree.add(hook);
    return { name, hook, swing, ball, mesh, tag, rr, theta, phase: rnd(0, TAU), kick: 0 };
  });
  const pickables = baubles.map((b) => b.mesh);

  // ---------- Boucle ----------
  const S = { running: false, raf: 0, last: 0, t: 0, angle: 0.25, vel: 0.16, dragging: false, hold: false, picking: null, wave: -1 };
  function layout() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // La caméra recule si l'écran est étroit, pour que le sapin tienne en largeur.
    const fitW = 4.1 / (2 * Math.tan((30 * Math.PI) / 360) * camera.aspect);
    HOME.pos.z = Math.max(9.6, fitW);
    if (!S.picking) camera.position.copy(HOME.pos);
    camera.updateProjectionMatrix();
    lights.material.uniforms.uScale.value = dpr * (h / 440);
  }
  window.addEventListener('resize', () => { if (S.running) layout(); });

  const tmp = new Vector3();
  function step(dt) {
    S.t += dt;
    if (!S.dragging && !S.picking) {
      S.vel += (0.1 - S.vel) * (1 - Math.exp(-dt * 0.9)); // assez lent pour lire les étiquettes
      S.angle += S.vel * dt;
    }
    tree.rotation.y = S.angle;
    lights.material.uniforms.uTime.value = S.t;
    // une vague de lumière remonte le sapin de temps en temps
    S.wave = ((S.t * 0.55) % 3.2) * 1.6 - 0.6;
    lights.material.uniforms.uWave.value = S.wave;
    star.rotation.y = Math.sin(S.t * 0.7) * 0.55;
    rays.material.rotation = S.t * 0.15;
    starHalo.material.opacity = 0.75 + 0.25 * Math.sin(S.t * 3.1);
    baubles.forEach((b) => {
      if (b.free) return;
      b.kick *= Math.exp(-dt * 2.2);
      b.swing.rotation.z = Math.sin(S.t * 1.7 + b.phase) * 0.05 + Math.sin(S.t * 6) * b.kick;
      b.swing.rotation.x = Math.sin(S.t * 1.3 + b.phase * 2) * 0.04;
      // la boule pivote sur son fil pour garder son prénom tourné vers toi
      let yaw = (S.angle + b.theta) % TAU;
      if (yaw > Math.PI) yaw -= TAU;
      if (yaw < -Math.PI) yaw += TAU;
      b.ball.rotation.y = -yaw * 0.85 + Math.sin(S.t * 0.6 + b.phase) * 0.12;
      const facing = Math.cos(yaw); // 1 = face à toi, -1 = derrière le sapin
      b.tag.material.opacity = Math.min(1, Math.max(0, (facing + 0.05) / 0.45));
    });
    if (S.picking) S.picking.tick(dt);
  }
  function frame() {
    S.raf = S.running ? requestAnimationFrame(frame) : 0;
    const now = performance.now();
    const dt = Math.max(0.001, Math.min(0.04, (now - S.last) / 1000));
    S.last = now;
    step(dt);
    if (!S.hold) renderer.render(scene, camera);
  }

  // ---------- Toucher : faire tourner, choisir sa boule ----------
  const ray = new Raycaster();
  const ndc = new Vector2();
  let down = null;
  canvas.addEventListener('pointerdown', (e) => {
    if (S.picking) return;
    down = { x: e.clientX, y: e.clientY, last: e.clientX, t: performance.now(), moved: 0 };
    S.dragging = true;
    S.vel = 0;
    try { canvas.setPointerCapture(e.pointerId); } catch { /* ignoré */ }
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - down.last;
    down.last = e.clientX;
    down.moved += Math.abs(dx);
    const da = dx * 0.0095;
    S.angle += da;
    const now = performance.now();
    S.vel = da / Math.max(0.008, (now - down.t) / 1000);
    down.t = now;
  });
  const end = (e) => {
    if (!down) return;
    const tap = down.moved < 8 && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 10;
    down = null;
    S.dragging = false;
    S.vel = Math.max(-4, Math.min(4, S.vel));
    if (!tap) return;
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(pickables, false);
    const hit = hits.find((h) => { h.object.getWorldPosition(tmp); return tmp.z > -0.35; });
    if (!hit) { sound.note?.(Math.floor(Math.random() * 8)); return; }
    pick(baubles[hit.object.userData.index]);
  };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', () => { down = null; S.dragging = false; });

  // La boule choisie : le sapin tourne pour te la présenter, la caméra s'approche,
  // la boule se décroche et vient vers toi. onPick est appelé à la fin.
  function pick(b) {
    sound.unlock?.();
    sound.chime?.();
    b.kick = 0.25;
    let target = -b.theta;
    target += Math.round((S.angle - target) / TAU) * TAU;
    const a0 = S.angle;
    const camFrom = camera.position.clone();
    const lookFrom = HOME.look.clone();
    let t = 0;
    const worldBall = new Vector3();
    const look = new Vector3();
    S.picking = {
      tick(dt) {
        t += dt;
        const u = Math.min(1, t / 0.75);
        const e = u * u * (3 - 2 * u);
        S.angle = a0 + (target - a0) * e;
        tree.rotation.y = S.angle;
        tree.updateMatrixWorld();
        b.mesh.getWorldPosition(worldBall);
        // approche de la caméra
        const v = Math.min(1, Math.max(0, (t - 0.25) / 0.75));
        const ev = v * v * (3 - 2 * v);
        camera.position.lerpVectors(camFrom, tmp.copy(worldBall).add(new Vector3(0, 0.12, 1.85)), ev * 0.92);
        look.lerpVectors(lookFrom, worldBall, ev);
        camera.lookAt(look);
        // elle se décroche et vole vers toi
        if (t > 1.0 && !b.free) {
          b.free = true;
          sound.whoosh?.();
          b.swing.updateMatrixWorld();
          scene.attach(b.ball);
          b.fly = { p0: b.ball.position.clone(), s0: b.ball.scale.x, t0: t };
        }
        if (b.free) {
          const f = Math.min(1, (t - b.fly.t0) / 0.5);
          const ef = f * f;
          camera.getWorldDirection(tmp);
          const dest = camera.position.clone().addScaledVector(tmp, 0.6);
          b.ball.position.lerpVectors(b.fly.p0, dest, ef);
          b.ball.rotation.y += dt * 9;
          if (f >= 1 && !b.done) { b.done = true; onPick?.(b.name); }
        }
      },
    };
  }

  function reset() {
    S.picking = null;
    baubles.forEach((b) => {
      if (b.free) { b.swing.attach(b.ball); b.ball.position.set(0, -0.42, 0); b.ball.rotation.set(0, 0, 0); b.ball.scale.setScalar(BR); }
      b.free = false; b.done = false; b.fly = null;
    });
    camera.position.copy(HOME.pos);
    camera.lookAt(HOME.look);
  }

  try { renderer.compile(scene, camera); } catch { /* sans gravité */ }

  return {
    start() {
      if (S.running) return;
      S.running = true;
      layout();
      S.last = performance.now();
      S.raf = requestAnimationFrame(frame);
    },
    stop() { S.running = false; cancelAnimationFrame(S.raf); S.raf = 0; },
    reset,
    pickByName(name) { const b = baubles.find((x) => x.name === name); if (b) pick(b); },
    set holdRender(v) { S.hold = v; },
    advance(seconds) { for (let t = 0; t < seconds; t += 1 / 60) step(1 / 60); renderer.render(scene, camera); },
  };
}
