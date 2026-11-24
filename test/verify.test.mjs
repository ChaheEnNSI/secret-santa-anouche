import { closeEnough, parseVerdict, checkAnswer } from '../src/verify.js';

let fail = 0;
const t = (label, got, want) => {
  const ok = got === want;
  if (!ok) fail++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${label} -> ${got}`);
};

// Comparaison tolérante
t('accents/majuscules', closeEnough('BÉBÉ', 'bebe'), true);
t('petits mots', closeEnough("c'est mon chien Rex", 'Rex'), false); // trop de mots : laissé à l'IA
t('article', closeEnough('le Rex', 'Rex'), true);
t('faute de frappe', closeEnough('Erevan', 'Erevane'), true);
t('faute longue', closeEnough('Gyumri', 'Gumri'), true);
t('mauvaise réponse', closeEnough('Paris', 'Lyon'), false);
t('mot court exact requis', closeEnough('Rax', 'Rex'), false);
t('chiffres exacts', closeEnough('1999', '1998'), false);
t('chiffres ok', closeEnough('le 12', '12'), true);
t('espaces', closeEnough('saint etienne', 'Saint-Étienne'), true);
t('vide', closeEnough('', 'Rex'), false);
t('ponctuation seule', closeEnough('...', 'Rex'), false);

// Lecture de la réponse de l'IA
t('OUI simple', parseVerdict({ response: 'OUI' }), true);
t('NON simple', parseVerdict({ response: 'Non.' }), false);
t('format OpenAI', parseVerdict({ choices: [{ message: { content: 'OUI' } }] }), true);
t('réflexion masquée', parseVerdict({ response: '<think>peut-être oui</think>NON' }), false);
t('illisible', parseVerdict({ response: 'je ne sais pas' }), null);

// Chaîne complète avec une IA simulée
const person = { name: 'Test', question: 'Nom de ton chien ?', answers: ['Rex'] };
const fakeAi = (reply) => ({ run: async () => ({ response: reply }) });
const brokenAi = { run: async () => { throw new Error('panne'); } };
t('texte suffit', (await checkAnswer(brokenAi, person, 'rex')).ok, true);
t('IA dit oui', (await checkAnswer(fakeAi('OUI'), person, "c'est Rex mon toutou")).ok, true);
t('IA dit non', (await checkAnswer(fakeAi('NON'), person, 'Médor')).ok, false);
t('IA en panne', (await checkAnswer(brokenAi, person, 'Médor')).ok, null);

console.log(fail ? `${fail} échec(s)` : 'OK');
if (fail) process.exit(1);
