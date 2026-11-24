// Liste des participants (sans les réponses).
// Le dépôt est public : les vraies questions et réponses sont stockées dans le
// secret Cloudflare PEOPLE_JSON (même format que PEOPLE ci-dessous), jamais ici.
//
// answers : la réponse attendue, plus d'éventuelles variantes acceptées.
// ready   : false tant que la vraie question n'est pas renseignée.

export const EVENT = {
  date: '2026-12-20',
  label: 'Dimanche 20 décembre',
};

// Paires qui ne doivent pas se tirer entre elles (ex. ['Nouné', 'Anouche']). Vide = aucune.
export const EXCLUSIONS = [];

export const PEOPLE = [
  { name: 'Nouné', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
  { name: 'Anouche', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
  { name: 'Chahé', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
  { name: 'Lucas', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
  { name: 'Taline', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
  { name: 'Vanig', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
  { name: 'Gabjak', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
  { name: 'Antoine', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
  { name: 'Mika', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
  { name: 'Djiv', question: 'Question à venir', answers: ['À DÉFINIR'], ready: false },
];
