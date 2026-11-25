#!/bin/sh
# Efface tous les tirages du site en ligne (phase de test uniquement).
# Le tirage, les prénoms réservés, les téléphones et la clé des sessions sont supprimés :
# tout le monde repart de zéro, et les anciens téléphones sont déconnectés.
set -e
# Garde-fou : les vrais tirages ne doivent jamais être effacés par erreur.
if [ "$1" != "--confirmer" ]; then
  echo "Rien n'a été effacé. Relancer avec --confirmer pour effacer TOUS les tirages du site en ligne."
  exit 1
fi
npx wrangler d1 execute secret-santa --remote --command "DELETE FROM meta; DELETE FROM claims; DELETE FROM devices; UPDATE people SET revealed_at = NULL, fails = 0, locked_until = 0;" > /dev/null
echo "Tirages effacés."
