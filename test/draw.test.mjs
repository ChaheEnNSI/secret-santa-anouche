// Simulation : 100 000 tirages avec les 10 vrais prénoms.
import { makeDraw, assertValid } from '../src/draw.js';
import { PEOPLE } from '../src/participants.js';

const names = PEOPLE.map((p) => p.name);
const RUNS = 100_000;
const counts = {}; // combien de fois chaque « A offre à B » sort
let errors = 0;

for (let i = 0; i < RUNS; i++) {
  const pairs = makeDraw(names);
  try {
    assertValid(names, pairs);
    // Contrôles indépendants de assertValid, recodés ici exprès.
    const receivers = Object.values(pairs);
    if (new Set(receivers).size !== names.length) throw new Error('doublon');
    for (const [g, r] of Object.entries(pairs)) {
      if (g === r) throw new Error('auto-tirage');
      if (pairs[r] === g) throw new Error('réciproque');
      counts[`${g}>${r}`] = (counts[`${g}>${r}`] || 0) + 1;
    }
    const seen = new Set([names[0]]);
    let cur = pairs[names[0]];
    while (cur !== names[0]) { seen.add(cur); cur = pairs[cur]; }
    if (seen.size !== names.length) throw new Error('plusieurs boucles');
  } catch (e) {
    errors++;
    if (errors < 5) console.error('ERREUR', e.message, pairs);
  }
}

// Équité : chaque personne doit pouvoir tirer chacune des 9 autres avec la même probabilité (1/9).
const values = Object.values(counts);
const expected = RUNS / (names.length - 1);
const maxGap = Math.max(...values.map((v) => Math.abs(v - expected) / expected));

// Exclusions : contrôle que le mécanisme fonctionne.
const excl = [['Nouné', 'Anouche'], ['Luca', 'Taline']];
let exclErrors = 0;
for (let i = 0; i < 10_000; i++) {
  const p = makeDraw(names, excl);
  if (p['Nouné'] === 'Anouche' || p['Anouche'] === 'Nouné' || p['Luca'] === 'Taline' || p['Taline'] === 'Luca') exclErrors++;
}

// Le contrôle doit bien détecter un tirage faux.
let detected = 0;
const bad = [
  { ...Object.fromEntries(names.map((n, i) => [n, names[(i + 1) % 10]])), [names[0]]: names[0] },
  Object.fromEntries(names.map((n, i) => [n, names[i % 2 ? i - 1 : i + 1]])),
  Object.fromEntries(names.map((n, i) => [n, names[i < 5 ? (i + 1) % 5 : 5 + ((i - 4) % 5)]])),
];
for (const b of bad) { try { assertValid(names, b); } catch { detected++; } }

console.log(`Tirages simulés : ${RUNS}`);
console.log(`Tirages invalides : ${errors}`);
console.log(`Paires possibles observées : ${values.length} / ${names.length * (names.length - 1)}`);
console.log(`Écart max à l'équité : ${(maxGap * 100).toFixed(2)} %`);
console.log(`Exclusions non respectées (10 000 tirages) : ${exclErrors}`);
console.log(`Tirages faux détectés par le contrôle : ${detected} / ${bad.length}`);
if (errors || exclErrors || detected !== bad.length || values.length !== 90) process.exit(1);
console.log('OK');
