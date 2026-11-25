import { EVENT, EXCLUSIONS, PEOPLE as CONFIG_PEOPLE } from './participants.js';
import { makeDraw, assertValid } from './draw.js';


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

function people(env) {
  return env.TEST_PEOPLE ? JSON.parse(env.TEST_PEOPLE) : CONFIG_PEOPLE; // TEST_PEOPLE : tests en local
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
      // Un prénom est « réservé » par le premier téléphone qui passe le contrôle d'identité.
      db.prepare(`CREATE TABLE IF NOT EXISTS claims (
        name TEXT PRIMARY KEY,
        key_hash TEXT NOT NULL,
        code TEXT NOT NULL,
        fails INTEGER NOT NULL DEFAULT 0,
        locked_until INTEGER NOT NULL DEFAULT 0,
        at INTEGER NOT NULL
      )`),
      // Un téléphone ne peut servir qu'à un seul prénom.
      db.prepare('CREATE TABLE IF NOT EXISTS devices (key_hash TEXT PRIMARY KEY, name TEXT NOT NULL)'),
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

// Identifiant du téléphone : une clé aléatoire gardée dans le navigateur, dont on ne stocke que l'empreinte.
async function deviceHash(request) {
  const key = (request.headers.get('x-device') || '').trim();
  if (!/^[A-Za-z0-9-]{16,80}$/.test(key)) return null;
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`santa:${key}`));
  return toB64url(new Uint8Array(digest));
}

async function makeToken(env, name, keyHash) {
  const key = await hmacKey(env);
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`v2:${name}:${keyHash}`)));
  return `${toB64url(new TextEncoder().encode(name))}.${toB64url(sig)}`;
}

async function readToken(env, request, keyHash) {
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const [namePart, sigPart] = token.split('.');
  if (!namePart || !sigPart || !keyHash) return null;
  try {
    const name = new TextDecoder().decode(fromB64url(namePart));
    if (!findPerson(env, name)) return null;
    const key = await hmacKey(env);
    const ok = await crypto.subtle.verify('HMAC', key, fromB64url(sigPart), new TextEncoder().encode(`v2:${name}:${keyHash}`));
    return ok ? name : null;
  } catch {
    return null;
  }
}

const CODE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
function newCode() {
  const bytes = new Uint8Array(4);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => CODE_CHARS[b % CODE_CHARS.length]).join('');
}

// ---------- Routes ----------

async function handleApi(request, env, url) {
  await ensureSchema(env);
  const route = `${request.method} ${url.pathname}`;

  // La liste des prénoms, et qui a déjà pioché (jamais qui a pioché qui).
  if (route === 'GET /api/state') {
    // « round » change quand les tirages sont effacés : les téléphones oublient alors leur ancienne session.
    const round = await getOrCreateMeta(env, 'round', () => crypto.randomUUID().slice(0, 8));
    const rows = await env.DB.prepare('SELECT name FROM people WHERE revealed_at IS NOT NULL').all();
    const drawn = new Set((rows.results || []).map((r) => r.name));
    return json({ event: EVENT, round, people: people(env).map((p) => ({ name: p.name, drawn: drawn.has(p.name) })) });
  }

  // Entrée après le « contrôle d'identité » (pour rire).
  // Règles : un téléphone = un seul prénom ; un prénom = un seul téléphone (sauf code personnel).
  if (route === 'POST /api/enter') {
    const keyHash = await deviceHash(request);
    if (!keyHash) return json({ error: 'Ton navigateur bloque une fonction nécessaire. Essaie avec un autre navigateur.' }, 400);
    const body = await readBody(request);
    const person = findPerson(env, body.name);
    if (!person) return json({ error: 'Ce prénom ne fait pas partie de la liste.' }, 404);

    const device = await env.DB.prepare('SELECT name FROM devices WHERE key_hash = ?').bind(keyHash).first();
    if (device && device.name !== person.name) {
      return json({ error: `Ce téléphone a déjà servi à piocher pour ${device.name}. Un téléphone, un seul tirage.`, reason: 'device', name: device.name }, 403);
    }
    let claim = await env.DB.prepare('SELECT key_hash FROM claims WHERE name = ?').bind(person.name).first();
    if (!claim) {
      await env.DB.batch([
        env.DB.prepare('INSERT OR IGNORE INTO claims (name, key_hash, code, at) VALUES (?, ?, ?, ?)').bind(person.name, keyHash, newCode(), Date.now()),
      ]);
      claim = await env.DB.prepare('SELECT key_hash FROM claims WHERE name = ?').bind(person.name).first();
    }
    if (claim.key_hash !== keyHash) {
      return json({ error: 'Ce prénom est déjà utilisé sur un autre téléphone. Si c\'est bien toi, entre ton code personnel.', reason: 'claimed' }, 409);
    }
    await env.DB.prepare('INSERT OR IGNORE INTO devices (key_hash, name) VALUES (?, ?)').bind(keyHash, person.name).run();
    return json({ ok: true, token: await makeToken(env, person.name, keyHash) });
  }

  // Récupération sur un nouveau téléphone grâce au code personnel affiché sous le tirage.
  if (route === 'POST /api/unlock') {
    const keyHash = await deviceHash(request);
    if (!keyHash) return json({ error: 'Ton navigateur bloque une fonction nécessaire. Essaie avec un autre navigateur.' }, 400);
    const body = await readBody(request);
    const person = findPerson(env, body.name);
    if (!person) return json({ error: 'Ce prénom ne fait pas partie de la liste.' }, 404);
    const device = await env.DB.prepare('SELECT name FROM devices WHERE key_hash = ?').bind(keyHash).first();
    if (device && device.name !== person.name) {
      return json({ error: `Ce téléphone a déjà servi à piocher pour ${device.name}.`, reason: 'device', name: device.name }, 403);
    }
    const claim = await env.DB.prepare('SELECT code, fails, locked_until FROM claims WHERE name = ?').bind(person.name).first();
    if (!claim) return json({ error: 'Rien à débloquer pour ce prénom.' }, 404);
    const now = Date.now();
    if (claim.locked_until > now) return json({ error: 'Trop d\'essais. Réessaie dans une heure.' }, 429);
    const code = String(body.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (code !== claim.code) {
      const fails = claim.fails + 1;
      const lock = fails >= 8 ? now + 3600 * 1000 : 0;
      await env.DB.prepare('UPDATE claims SET fails = ?, locked_until = ? WHERE name = ?').bind(lock ? 0 : fails, lock, person.name).run();
      return json({ error: 'Ce code ne correspond pas.' }, 401);
    }
    await env.DB.batch([
      env.DB.prepare('DELETE FROM devices WHERE name = ?').bind(person.name),
      env.DB.prepare('UPDATE claims SET key_hash = ?, fails = 0, locked_until = 0 WHERE name = ?').bind(keyHash, person.name),
      env.DB.prepare('INSERT OR REPLACE INTO devices (key_hash, name) VALUES (?, ?)').bind(keyHash, person.name),
    ]);
    return json({ ok: true, token: await makeToken(env, person.name, keyHash) });
  }

  if (route === 'POST /api/reveal') {
    const keyHash = await deviceHash(request);
    const name = await readToken(env, request, keyHash);
    if (!name) return json({ error: 'Session expirée. Choisis ton prénom à nouveau.' }, 401);
    const claim = await env.DB.prepare('SELECT key_hash, code FROM claims WHERE name = ?').bind(name).first();
    if (!claim || claim.key_hash !== keyHash) return json({ error: 'Session expirée. Choisis ton prénom à nouveau.' }, 401);
    const pairs = await getDraw(env);
    const me = await env.DB.prepare('SELECT revealed_at FROM people WHERE name = ?').bind(name).first();
    const firstTime = !me.revealed_at;
    if (firstTime) {
      await env.DB.prepare('UPDATE people SET revealed_at = ? WHERE name = ? AND revealed_at IS NULL').bind(Date.now(), name).run();
    }
    return json({ name, target: pairs[name], firstTime, code: claim.code });
  }

  return json({ error: 'Page introuvable.' }, 404);
}
