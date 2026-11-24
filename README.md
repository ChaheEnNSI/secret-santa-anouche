# Secret Santa — secret-santa-anouche.fr

Site du Secret Santa du dimanche 20 décembre. Chaque participant choisit son prénom, répond à sa question personnelle, puis ouvre un cadeau qui révèle la personne à qui il offre.

## Fonctionnement

- **Tirage** (`src/draw.js`) : une seule boucle aléatoire (A → B → C → … → A), calculée une fois pour tout le monde au premier cadeau ouvert. Personne ne se tire soi-même, chacun offre et reçoit exactement une fois, pas d'échange réciproque.
- **Vérification** (`src/verify.js`) : comparaison tolérante (accents, majuscules, petites fautes), puis IA Cloudflare Workers AI si la réponse est formulée autrement. 5 erreurs = blocage 10 minutes.
- **Données** : base D1 créée automatiquement au déploiement. Les réponses attendues restent sur le serveur (`src/participants.js`).

## Modifier les questions

Dans `src/participants.js`, pour chaque personne : `question`, `answers` (réponse + variantes) et `ready: true`.

## Commandes

```bash
npm install
npm test                                  # 100 000 tirages simulés + tests de vérification
npx wrangler dev -c wrangler.local.jsonc  # test local (sans IA)
npx wrangler deploy                       # mise en ligne
```

Repartir de zéro (efface le tirage et les listes d'envies) :

```bash
npx wrangler d1 execute secret-santa --remote --command "DELETE FROM meta WHERE k='draw'; UPDATE people SET revealed_at=NULL, wishlist=''"
```
