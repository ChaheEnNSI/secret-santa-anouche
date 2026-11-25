// Test de bout en bout contre le serveur local (wrangler dev, port 8787).
const BASE = process.env.BASE || 'http://127.0.0.1:8787';
let fail = 0;
const t = (label, ok, extra = '') => { if (!ok) fail++; console.log(`${ok ? 'ok  ' : 'FAIL'} ${label} ${extra}`); };
const dev = () => crypto.randomUUID();
const call = async (path, { method = 'GET', body, token, device } = {}) => {
  const headers = { 'content-type': 'application/json' };
  if (token) headers.authorization = `Bearer ${token}`;
  if (device) headers['x-device'] = device;
  const res = await fetch(BASE + '/api/' + path, { method, headers, body: body && JSON.stringify(body) });
  return { status: res.status, data: await res.json() };
};
const enter = (name, device) => call('enter', { method: 'POST', body: { name }, device });
const reveal = (token, device) => call('reveal', { method: 'POST', token, device });

const st = await call('state');
const names = st.data.people.map((p) => p.name);
t('11 participants', names.length === 11);
t('seulement le prénom et « a pioché » (jamais qui a pioché qui)', st.data.people.every((p) => Object.keys(p).sort().join() === 'drawn,name' && typeof p.drawn === 'boolean'));
t('prénom inconnu refusé', (await enter('Bob', dev())).status === 404);
t('sans identifiant de téléphone refusé', (await enter(names[0])).status === 400);

// Les 10 personnes, chacune sur son téléphone, en même temps.
const phones = Object.fromEntries(names.map((n) => [n, dev()]));
const results = await Promise.all(names.map(async (name) => {
  const e = await enter(name, phones[name]);
  const r = await reveal(e.data.token, phones[name]);
  return { name, target: r.data.target, code: r.data.code, token: e.data.token };
}));
const pairs = Object.fromEntries(results.map((r) => [r.name, r.target]));
t('chacun a un nom', results.every((r) => r.target));
t('personne ne se tire', results.every((r) => r.name !== r.target));
t('chacun reçoit exactement une fois', new Set(results.map((r) => r.target)).size === names.length);
t('pas de réciproque', results.every((r) => pairs[r.target] !== r.name));
let cur = names[0]; const seen = new Set([cur]);
for (let i = 0; i < names.length; i++) { cur = pairs[cur]; seen.add(cur); }
t('une seule grande boucle', seen.size === names.length && cur === names[0]);
t('code personnel fourni', results.every((r) => /^[A-Z0-9]{4}$/.test(r.code)));

// Un téléphone qui a pioché ne peut pas piocher pour quelqu'un d'autre.
const A = names[0], B = names[1];
const cheat = await enter(B, phones[A]);
t('un téléphone = un seul prénom', cheat.status === 403 && cheat.data.reason === 'device');
// Un autre téléphone ne peut pas prendre un prénom déjà utilisé.
const stranger = dev();
const steal = await enter(A, stranger);
t('un prénom = un seul téléphone', steal.status === 409 && steal.data.reason === 'claimed');
t('jeton inutilisable ailleurs', (await reveal(results[0].token, stranger)).status === 401);
t('faux jeton refusé', (await reveal('Tm91bsOp.AAAA', phones[A])).status === 401);
const again = await enter(A, phones[A]);
const r2 = await reveal(again.data.token, phones[A]);
t('même résultat en revenant', r2.data.target === pairs[A] && r2.data.firstTime === false);

// Récupération sur un nouveau téléphone avec le code personnel.
const newPhone = dev();
t('mauvais code refusé', (await call('unlock', { method: 'POST', body: { name: A, code: 'ZZZZ' }, device: newPhone })).status === 401);
const un = await call('unlock', { method: 'POST', body: { name: A, code: results[0].code.toLowerCase() }, device: newPhone });
t('bon code accepté', un.status === 200);
t('nouveau téléphone voit le même tirage', (await reveal(un.data.token, newPhone)).data.target === pairs[A]);
t('ancien téléphone déconnecté', (await reveal(again.data.token, phones[A])).status === 401);
t('code refusé depuis un téléphone déjà utilisé', (await call('unlock', { method: 'POST', body: { name: A, code: results[0].code }, device: phones[B] })).status === 403);

// Après des tirages : ceux qui ont pioché sont marqués, et l'état ne contient jamais de cible.
const after = await call('state');
const drawnNames = after.data.people.filter((p) => p.drawn).map((p) => p.name);
t('ceux qui ont pioché sont marqués', drawnNames.length >= 1);
t('aucune cible dans l\'état public', !JSON.stringify(after.data).includes('target'));

console.log(fail ? `${fail} échec(s)` : 'OK');
process.exit(fail ? 1 : 0);
