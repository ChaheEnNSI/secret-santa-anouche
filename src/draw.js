// Tirage au sort du Secret Santa.
//
// Principe : on mélange les prénoms au hasard, puis chaque personne offre
// à la suivante dans la liste mélangée, et la dernière offre à la première.
// On obtient une seule grande boucle : A -> B -> C -> ... -> A.
//
// Conséquences, garanties par construction (et revérifiées par assertValid) :
//   - personne ne se tire soi-même ;
//   - chacun offre exactement un cadeau et en reçoit exactement un ;
//   - pas d'échange réciproque (si A offre à B, B n'offre pas à A), dès 3 personnes ;
//   - personne ne peut « rester tout seul » à la fin, car tout est calculé d'un coup.

// Entier aléatoire uniforme dans [0, max[ via le générateur cryptographique.
// La boucle évite le biais du modulo.
export function randomInt(max) {
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  let x;
  do {
    crypto.getRandomValues(buf);
    x = buf[0];
  } while (x >= limit);
  return x % max;
}

// Mélange de Fisher-Yates : chaque ordre a exactement la même probabilité.
export function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// exclusions : liste de paires [A, B] qui ne doivent pas se tirer (dans un sens ou dans l'autre).
export function makeDraw(names, exclusions = []) {
  if (new Set(names).size !== names.length) throw new Error('Prénom en double dans la liste');
  if (names.length < 3) throw new Error('Il faut au moins 3 participants');
  const forbidden = new Set(exclusions.flatMap(([a, b]) => [`${a}>${b}`, `${b}>${a}`]));

  for (let attempt = 0; attempt < 20000; attempt++) {
    const order = shuffle(names);
    const pairs = {};
    order.forEach((giver, i) => {
      pairs[giver] = order[(i + 1) % order.length];
    });
    const respectsExclusions = Object.entries(pairs).every(([g, r]) => !forbidden.has(`${g}>${r}`));
    if (respectsExclusions) {
      assertValid(names, pairs, exclusions);
      return pairs;
    }
  }
  throw new Error('Impossible de respecter toutes les exclusions');
}

// Contrôle complet d'un tirage. Lève une erreur au moindre problème.
export function assertValid(names, pairs, exclusions = []) {
  const givers = Object.keys(pairs);
  const receivers = Object.values(pairs);
  const set = new Set(names);

  if (givers.length !== names.length || !givers.every((g) => set.has(g))) {
    throw new Error('Tirage invalide : la liste des personnes qui offrent ne correspond pas');
  }
  if (new Set(receivers).size !== names.length || !receivers.every((r) => set.has(r))) {
    throw new Error('Tirage invalide : quelqu\'un reçoit deux cadeaux ou aucun');
  }
  for (const g of givers) {
    if (pairs[g] === g) throw new Error(`Tirage invalide : ${g} se tire soi-même`);
    if (pairs[pairs[g]] === g) throw new Error(`Tirage invalide : échange réciproque ${g} <-> ${pairs[g]}`);
  }
  for (const [a, b] of exclusions) {
    if (pairs[a] === b || pairs[b] === a) throw new Error(`Tirage invalide : exclusion ${a} / ${b} non respectée`);
  }
  // Une seule boucle : en suivant les flèches depuis n'importe qui, on doit
  // passer par tout le monde avant de revenir au départ.
  let current = names[0];
  for (let step = 1; step <= names.length; step++) {
    current = pairs[current];
    if (current === names[0] && step !== names.length) {
      throw new Error('Tirage invalide : plusieurs petites boucles au lieu d\'une seule');
    }
  }
  if (current !== names[0]) throw new Error('Tirage invalide : la boucle ne se referme pas');
  return true;
}
