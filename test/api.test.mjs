// Test de bout en bout contre le serveur local (wrangler dev, port 8787).
// Les 10 personnes passent, puis on vérifie le tirage obtenu.
const BASE = process.env.BASE || 'http://127.0.0.1:8787';
let fail = 0;
const t = (label, ok, extra = '') => { if (!ok) fail++; console.log(`${ok ? 'ok  ' : 'FAIL'} ${label} ${extra}`); };
const call = async (path, { method = 'GET', body, token } = {}) => {
  const headers = { 'content-type': 'application/json' };
  if (token) headers.authorization = `Bearer ${token}`;
  const res = await fetch(BASE + '/api/' + path, { method, headers, body: body && JSON.stringify(body) });
  return { status: res.status, data: await res.json() };
};

const state = await call('state');
const names = state.data.people.map((p) => p.name);
t('10 participants', names.length === 10);

// Mauvais prénom / mauvaise réponse / blocage
t('prénom inconnu refusé', (await call('question?name=Bob')).status === 404);
t('question sans les réponses', !('answers' in (await call('question?name=Nouné')).data));
const wrong = await call('verify', { method: 'POST', body: { name: 'Lucas', answer: 'mauvais' } });
t('mauvaise réponse refusée', wrong.status === 401 || wrong.status === 503, `(${wrong.status} ${wrong.data.error})`);
t('jeton absent refusé', (await call('reveal', { method: 'POST' })).status === 401);
t('faux jeton refusé', (await call('reveal', { method: 'POST', token: 'Tm91bsOp.AAAA' })).status === 401);
t('réponse tolérante (accents/tirets)', (await call('verify', { method: 'POST', body: { name: 'Anouche', answer: 'saint etienne' } })).status === 200);

// Blocage après 5 erreurs (seulement testable si l'IA est absente : 401 à chaque fois)
let lockedStatus = 0;
for (let i = 0; i < 6; i++) lockedStatus = (await call('verify', { method: 'POST', body: { name: 'Mika', answer: 'nope' + i } })).status;
t('blocage après 5 erreurs', lockedStatus === 429 || lockedStatus === 503, `(${lockedStatus})`);

// Tout le monde se connecte et découvre son nom, en parallèle (test de concurrence).
const results = await Promise.all(names.filter((n) => n !== 'Mika').map(async (name) => {
  const answer = name === 'Anouche' ? 'Saint-Étienne' : 'TEST';
  const v = await call('verify', { method: 'POST', body: { name, answer } });
  const r = await call('reveal', { method: 'POST', token: v.data.token });
  return { name, target: r.data.target, firstTime: r.data.firstTime };
}));
const pairs = Object.fromEntries(results.map((r) => [r.name, r.target]));
t('chacun a un nom', results.every((r) => r.target));
t('personne ne se tire', results.every((r) => r.name !== r.target));
t('aucun doublon de destinataire', new Set(results.map((r) => r.target)).size === results.length);
t('pas de réciproque', results.every((r) => pairs[r.target] !== r.name));

// Revoir son résultat : même nom, pas de nouveau tirage.
const v2 = await call('verify', { method: 'POST', body: { name: 'Nouné', answer: 'test' } });
const again = await call('reveal', { method: 'POST', token: v2.data.token });
t('même résultat en revenant', again.data.target === pairs['Nouné'] && again.data.firstTime === false);

// Liste d'envies visible par la bonne personne seulement.
const ans = (n) => (n === 'Anouche' ? 'Saint-Étienne' : 'test');
const giver = results.find((r) => r.target !== 'Mika').name;
const receiver = pairs[giver];
const rv = await call('verify', { method: 'POST', body: { name: receiver, answer: ans(receiver) } });
await call('wishlist', { method: 'POST', token: rv.data.token, body: { text: 'Un pull moche' } });
const gv = await call('verify', { method: 'POST', body: { name: giver, answer: ans(giver) } });
const seen = await call('reveal', { method: 'POST', token: gv.data.token });
t('le Secret Santa voit les envies', seen.data.targetWishlist === 'Un pull moche', `(${giver} -> ${receiver})`);
const other = results.find((r) => r.name !== giver && r.target !== receiver && r.target !== 'Mika');
const ov = await call('verify', { method: 'POST', body: { name: other.name, answer: ans(other.name) } });
const oseen = await call('reveal', { method: 'POST', token: ov.data.token });
t('les autres ne les voient pas', oseen.data.targetWishlist !== 'Un pull moche');

const final = await call('state');
t('compteur de tirages', final.data.people.filter((p) => p.revealed).length === 9);

console.log(fail ? `${fail} échec(s)` : 'OK');
process.exit(fail ? 1 : 0);
