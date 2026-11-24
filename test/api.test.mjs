// Test de bout en bout contre le serveur local (wrangler dev, port 8787).
const BASE = process.env.BASE || 'http://127.0.0.1:8787';
let fail = 0;
const t = (label, ok, extra = '') => { if (!ok) fail++; console.log(`${ok ? 'ok  ' : 'FAIL'} ${label} ${extra}`); };
const call = async (path, { method = 'GET', body, token } = {}) => {
  const headers = { 'content-type': 'application/json' };
  if (token) headers.authorization = `Bearer ${token}`;
  const res = await fetch(BASE + '/api/' + path, { method, headers, body: body && JSON.stringify(body) });
  return { status: res.status, data: await res.json() };
};

const names = (await call('state')).data.people.map((p) => p.name);
t('10 participants', names.length === 10);
t('prénom inconnu refusé', (await call('enter', { method: 'POST', body: { name: 'Bob' } })).status === 404);
t('jeton absent refusé', (await call('reveal', { method: 'POST' })).status === 401);
t('faux jeton refusé', (await call('reveal', { method: 'POST', token: 'Tm91bsOp.AAAA' })).status === 401);

// Tout le monde entre et découvre son nom en même temps (test de concurrence).
const results = await Promise.all(names.map(async (name) => {
  const e = await call('enter', { method: 'POST', body: { name } });
  const r = await call('reveal', { method: 'POST', token: e.data.token });
  return { name, target: r.data.target, first: r.data.firstTime };
}));
const pairs = Object.fromEntries(results.map((r) => [r.name, r.target]));
t('chacun a un nom', results.every((r) => r.target));
t('personne ne se tire', results.every((r) => r.name !== r.target));
t('chacun reçoit exactement une fois', new Set(results.map((r) => r.target)).size === names.length);
t('pas de réciproque', results.every((r) => pairs[r.target] !== r.name));
let cur = names[0]; const seen = new Set([cur]);
for (let i = 0; i < names.length; i++) { cur = pairs[cur]; seen.add(cur); }
t('une seule grande boucle', seen.size === names.length && cur === names[0]);

const again = await call('enter', { method: 'POST', body: { name: names[0] } });
t('revenir signale « déjà tiré »', again.data.revealed === true);
const r2 = await call('reveal', { method: 'POST', token: again.data.token });
t('même résultat en revenant', r2.data.target === pairs[names[0]] && r2.data.firstTime === false);

const giver = names[0]; const receiver = pairs[giver];
const re = await call('enter', { method: 'POST', body: { name: receiver } });
await call('wishlist', { method: 'POST', token: re.data.token, body: { text: 'Un pull moche' } });
const seenBy = await call('reveal', { method: 'POST', token: again.data.token });
t('le Secret Santa voit les envies', seenBy.data.targetWishlist === 'Un pull moche');
const other = names.find((n) => n !== giver && n !== receiver);
const oe = await call('enter', { method: 'POST', body: { name: other } });
const oseen = await call('reveal', { method: 'POST', token: oe.data.token });
t('les autres ne les voient pas', oseen.data.targetWishlist !== 'Un pull moche');
t('compteur de tirages', (await call('state')).data.people.filter((p) => p.revealed).length === 10);

console.log(fail ? `${fail} échec(s)` : 'OK');
process.exit(fail ? 1 : 0);
