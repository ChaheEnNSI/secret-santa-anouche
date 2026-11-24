// Génère index.html à la racine du dépôt : version « aperçu » pour GitHub Pages.
// Le serveur y est simulé par tools/demo.js (tirage fictif, réponse « noël »).
import { readFileSync, writeFileSync } from 'node:fs';

let html = readFileSync('public/index.html', 'utf8');
html = html
  .replace('href="styles.css"', 'href="public/styles.css"')
  .replace('href="favicon.svg"', 'href="public/favicon.svg"')
  .replaceAll('href="fonts/', 'href="public/fonts/')
  .replace('<script type="module" src="app.js"></script>', '<script src="tools/demo.js"></script>\n  <script type="module" src="public/app.js"></script>')
  .replace('<title>Secret Santa du 20 décembre</title>', '<title>Secret Santa (aperçu)</title>');
writeFileSync('index.html', `<!-- Fichier généré par tools/build-preview.mjs : ne pas modifier à la main. -->\n${html}`);
console.log('index.html généré');
