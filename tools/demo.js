// Mode aperçu : le serveur est simulé dans le navigateur.
// Tirage fictif propre à chaque téléphone, rien n'est envoyé nulle part.
(() => {
  const NAMES = ['Nouné', 'Anouche', 'Chahé', 'Lucas', 'Taline', 'Vanig', 'Gabjak', 'Antoine', 'Mika', 'Djiv'];
  const store = {
    get: (k) => { try { return JSON.parse(localStorage.getItem(`demo:${k}`)); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(`demo:${k}`, JSON.stringify(v)); } catch { /* ignoré */ } },
  };
  const db = store.get('db') || { revealed: {}, wish: {}, draw: null };
  const save = () => store.set('db', db);
  const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  const makeDraw = () => {
    const a = NAMES.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    const pairs = {};
    a.forEach((g, i) => { pairs[g] = a[(i + 1) % a.length]; });
    return pairs;
  };
  const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });
  const realFetch = window.fetch.bind(window);

  window.fetch = async (input, init = {}) => {
    const url = new URL(typeof input === 'string' ? input : input.url, location.href);
    const at = url.pathname.indexOf('/api/');
    if (at === -1) return realFetch(input, init);
    const route = url.pathname.slice(at + 5);
    const body = init.body ? JSON.parse(init.body) : {};
    const token = String(init.headers?.authorization || '').replace('Bearer ', '');
    const me = NAMES.includes(token) ? token : null;
    await new Promise((r) => setTimeout(r, 120));

    if (route === 'state') {
      return json({ event: { date: '2026-12-20', label: 'Dimanche 20 décembre' }, people: NAMES.map((n) => ({ name: n })) });
    }
    if (route === 'enter') {
      if (!NAMES.includes(body.name)) return json({ error: 'Ce prénom ne fait pas partie de la liste.' }, 404);
      if (db.device && db.device !== body.name) return json({ error: `Ce téléphone a déjà servi à piocher pour ${db.device}. Un téléphone, un seul tirage.`, reason: 'device', name: db.device }, 403);
      db.device = body.name;
      save();
      return json({ ok: true, token: body.name });
    }
    if (route === 'reveal') {
      if (!me) return json({ error: 'Session expirée. Choisis ton prénom à nouveau.' }, 401);
      db.draw ||= makeDraw();
      const firstTime = !db.revealed[me];
      db.revealed[me] = true;
      save();
      const target = db.draw[me];
      return json({ name: me, target, firstTime, code: 'K7Q2' });
    }
    return json({ error: 'Page introuvable.' }, 404);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const bar = document.createElement('div');
    bar.className = 'demo-bar';
    bar.innerHTML = '<span>Aperçu : tirage fictif</span><button type="button">Tout effacer</button>';
    bar.querySelector('button').addEventListener('click', () => {
      try {
        Object.keys(localStorage).filter((k) => k.startsWith('demo:') || k.startsWith('santa:')).forEach((k) => localStorage.removeItem(k));
      } catch { /* ignoré */ }
      location.reload();
    });
    document.body.append(bar);
    const style = document.createElement('style');
    style.textContent = `
      .demo-bar{position:fixed;left:50%;bottom:calc(env(safe-area-inset-bottom) + 12px);transform:translateX(-50%);z-index:30;display:flex;align-items:center;gap:10px;padding:6px 6px 6px 14px;border-radius:999px;background:rgba(7,28,21,.82);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:inset 0 0 0 1px rgba(233,196,106,.35);font-size:12.5px;color:rgba(247,242,231,.85);white-space:nowrap}
      .demo-bar button{border:0;border-radius:999px;padding:6px 12px;background:rgba(233,196,106,.18);color:#e9c46a;font-size:12.5px;font-weight:600}
      .app{padding-bottom:calc(env(safe-area-inset-bottom) + 90px)}`;
    document.head.append(style);
  });
})();
