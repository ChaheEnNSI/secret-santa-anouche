// Liste des participants et date de l'échange.

export const EVENT = {
  date: '2026-12-20',
  label: 'Dimanche 20 décembre',
};

// Paires qui ne doivent pas se tirer entre elles (ex. ['Nouné', 'Anouche']). Vide = aucune.
export const EXCLUSIONS = [];

export const PEOPLE = ['Nouné', 'Anouche', 'Chahé', 'Lucas', 'Taline', 'Vanig', 'Gabjak', 'Antoine', 'Mika', 'Djiv']
  .map((name) => ({ name }));
