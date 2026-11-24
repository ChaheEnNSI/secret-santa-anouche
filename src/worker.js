import { EVENT, EXCLUSIONS, PEOPLE as CONFIG_PEOPLE } from './participants.js';
import { makeDraw, assertValid } from './draw.js';
import { checkAnswer } from './verify.js';

const MAX_FAILS = 5; // essais ratés avant blocage
const LOCK_MS = 10 * 60 * 1000; // durée du blocage : 10 minutes
const MAX_ANSWER = 80;
const MAX_WISHLIST = 600;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    try {
      return await handleApi(request, env, url);
    } catch (err) {
      console.error(err);
      return json({ error: 'Le serveur a eu un souci. Réessaie dans un instant.' }, 500);
    }
  },
};

// ---------- Outils ----------

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
}

// En local uniquement : fausse IA qui répond toujours NON, pour tester le blocage.
const FAKE_AI = { run: async () => ({ response: 'NON' }) };

// Les questions et réponses ne sont pas dans le code (le dépôt est public) :
// elles sont dans le secret Cloudflare PEOPLE_JSON, invisible depuis l'extérieur.
// Sans ce secret, on utilise la liste du fichier participants.js (questions « pas encore prêtes »).
let parsedPeople = null;
function people(env) {
  if (env.TEST_PEOPLE) return JSON.parse(env.TEST_PEOPLE); // tests en local uniquement
  if (env.PEOPLE_JSON) {
    if (!parsedPeople) parsedPeople = JSON.parse(env.PEOPLE_JSON);
    return parsedPeople;
  }
  return CONFIG_PEOPLE;
}

function findPerson(env, name) {
  return people(env).find((p) => p.name === name);
}

async function readBody(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

// ---------- Base de données (D1) ----------

let schemaReady = null;

async function ensureSchema(env) {
  if (!schemaReady) {
    const db = env.DB;
    const statements = [
      db.prepare('CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT NOT NULL)'),
      db.prepare(`CREATE TABLE IF NOT EXISTS people (
        name TEXT PRIMARY KEY,
        revealed_at INTEGER,
        wishlist TEXT NOT NULL DEFAULT '',
        fails INTEGER NOT NULL DEFAULT 0,
        locked_until INTEGER NOT NULL DEFAULT 0
      )`),
      ...people(env).map((p) => db.prepare('INSERT OR IGNORE INTO people (name) VALUES (?)').bind(p.name)),
    ];
    schemaReady = db.batch(statements).catch((err) => {
      schemaReady = null;
      throw err;
    });
  }
  await schemaReady;
}

// « INSERT OR IGNORE » puis relecture : si deux personnes arrivent en même
// temps, une seule valeur est enregistrée et tout le monde relit la même.
async function getOrCreateMeta(env, key, create) {
  const existing = await env.DB.prepare('SELECT v FROM meta WHERE k = ?').bind(key).first();
  if (existing) return existing.v;
  await env.DB.prepare('INSERT OR IGNORE INTO meta (k, v) VALUES (?, ?)').bind(key, create()).run();
  const stored = await env.DB.prepare('SELECT v FROM meta WHERE k = ?').bind(key).first();
  return stored.v;
}

async function getDraw(env) {
  const names = people(env).map((p) => p.name);
  const raw = await getOrCreateMeta(env, 'draw', () => JSON.stringify(makeDraw(names, EXCLUSIONS)));
  const pairs = JSON.parse(raw);
  assertValid(names, pairs, EXCLUSIONS); // garde-fou si la liste a changé après le tirage
  return pairs;
}

// ---------- Jeton de session (signé, pour ne pas reposer la question) ----------

function toB64url(bytes) {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromB64url(text) {
  const s = atob(text.replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(s, (c) => c.charCodeAt(0));
}

async function hmacKey(env) {
  const secret = await getOrCreateMeta(env, 'secret', () => {
    const bytes = new Uint8Array(32);
    crypto.getRandomValues(bytes);
    return toB64url(bytes);
  });
  return crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

async function makeToken(env, name) {
  const key = await hmacKey(env);
  const payload = new TextEncoder().encode(`v1:${name}`);
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, payload));
  return `${toB64url(new TextEncoder().encode(name))}.${toB64url(sig)}`;
}

async function readToken(env, request) {
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const [namePart, sigPart] = token.split('.');
  if (!namePart || !sigPart) return null;
  try {
    const name = new TextDecoder().decode(fromB64url(namePart));
    if (!findPerson(env, name)) return null;
    const key = await hmacKey(env);
    const ok = await crypto.subtle.verify('HMAC', key, fromB64url(sigPart), new TextEncoder().encode(`v1:${name}`));
    return ok ? name : null;
  } catch {
    return null;
  }
}

// ---------- Routes ----------

async function handleApi(request, env, url) {
  await ensureSchema(env);
  const route = `${request.method} ${url.pathname}`;

  if (route === 'GET /api/state') {
    const { results } = await env.DB.prepare('SELECT name, revealed_at FROM people').all();
    const revealed = new Set(results.filter((r) => r.revealed_at).map((r) => r.name));
    return json({
      event: EVENT,
      people: people(env).map((p) => ({ name: p.name, revealed: revealed.has(p.name) })),
    });
  }

  if (route === 'GET /api/question') {
    const person = findPerson(env, url.searchParams.get('name'));
    if (!person) return json({ error: 'Ce prénom ne fait pas partie de la liste.' }, 404);
    if (!person.ready) return json({ error: `La question de ${person.name} n'est pas encore prête. Reviens un peu plus tard.` }, 409);
    return json({ name: person.name, question: person.question });
  }

  if (route === 'POST /api/verify') {
    const body = await readBody(request);
    const person = findPerson(env, body.name);
    if (!person) return json({ error: 'Ce prénom ne fait pas partie de la liste.' }, 404);
    if (!person.ready) return json({ error: `La question de ${person.name} n'est pas encore prête.` }, 409);

    const answer = String(body.answer ?? '').trim();
    if (!answer) return json({ error: 'Écris ta réponse avant de valider.' }, 400);
    if (answer.length > MAX_ANSWER) return json({ error: `Ta réponse est trop longue (${MAX_ANSWER} caractères maximum).` }, 400);

    const row = await env.DB.prepare('SELECT fails, locked_until FROM people WHERE name = ?').bind(person.name).first();
    const now = Date.now();
    if (row.locked_until > now) {
      const minutes = Math.ceil((row.locked_until - now) / 60000);
      return json({ error: `Trop d'essais. Réessaie dans ${minutes} minute${minutes > 1 ? 's' : ''}.`, lockedFor: row.locked_until - now }, 429);
    }

    const result = await checkAnswer(env.AI || (env.FAKE_AI ? FAKE_AI : undefined), person, answer);
    if (result.ok === null) {
      return json({ error: 'La vérification ne répond pas pour le moment. Réessaie dans quelques secondes.' }, 503);
    }
    if (!result.ok) {
      const fails = row.fails + 1;
      if (fails >= MAX_FAILS) {
        await env.DB.prepare('UPDATE people SET fails = 0, locked_until = ? WHERE name = ?').bind(now + LOCK_MS, person.name).run();
        return json({ error: 'Trop d\'essais. Réessaie dans 10 minutes.', lockedFor: LOCK_MS }, 429);
      }
      await env.DB.prepare('UPDATE people SET fails = ? WHERE name = ?').bind(fails, person.name).run();
      const left = MAX_FAILS - fails;
      return json({ error: `Ce n'est pas la bonne réponse. Encore ${left} essai${left > 1 ? 's' : ''}.`, left }, 401);
    }

    await env.DB.prepare('UPDATE people SET fails = 0, locked_until = 0 WHERE name = ?').bind(person.name).run();
    return json({ ok: true, token: await makeToken(env, person.name), by: result.by });
  }

  if (route === 'POST /api/reveal') {
    const name = await readToken(env, request);
    if (!name) return json({ error: 'Session expirée. Choisis ton prénom à nouveau.' }, 401);
    const pairs = await getDraw(env);
    const target = pairs[name];
    const me = await env.DB.prepare('SELECT revealed_at, wishlist FROM people WHERE name = ?').bind(name).first();
    const firstTime = !me.revealed_at;
    if (firstTime) {
      await env.DB.prepare('UPDATE people SET revealed_at = ? WHERE name = ? AND revealed_at IS NULL').bind(Date.now(), name).run();
    }
    const them = await env.DB.prepare('SELECT wishlist FROM people WHERE name = ?').bind(target).first();
    return json({ name, target, firstTime, myWishlist: me.wishlist, targetWishlist: them.wishlist });
  }

  if (route === 'POST /api/wishlist') {
    const name = await readToken(env, request);
    if (!name) return json({ error: 'Session expirée. Choisis ton prénom à nouveau.' }, 401);
    const body = await readBody(request);
    const text = String(body.text ?? '').trim();
    if (text.length > MAX_WISHLIST) return json({ error: `${MAX_WISHLIST} caractères maximum.` }, 400);
    await env.DB.prepare('UPDATE people SET wishlist = ? WHERE name = ?').bind(text, name).run();
    return json({ ok: true });
  }

  return json({ error: 'Page introuvable.' }, 404);
}
