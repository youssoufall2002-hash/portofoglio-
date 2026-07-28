#!/usr/bin/env bash
# Verifica che il sito pubblicato e le sue risorse rispondano con HTTP 200.
#
# Uso:
#   ./verify-http.sh                 # usa l'URL GitHub Pages di default
#   ./verify-http.sh https://tuo-dominio.it/
#
# Esce con codice 0 se tutto risponde 200, altrimenti 1.

set -u

BASE="${1:-https://youssoufall2002-hash.github.io/portofoglio-}"
BASE="${BASE%/}"

fail=0

check() {
  local url="$1"
  local code
  code="$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 20 "$url")"
  if [ "$code" = "200" ]; then
    printf '  \033[32mOK\033[0m   %s  %s\n' "$code" "$url"
  else
    printf '  \033[31mFAIL\033[0m %s  %s\n' "$code" "$url"
    fail=1
  fi
}

echo "Verifica HTTP 200 su: $BASE"
echo

# Pagina principale
check "$BASE/"
check "$BASE/index.html"

# Risorse immagine referenziate in index.html
script_dir="$(cd "$(dirname "$0")" && pwd)"
if [ -f "$script_dir/index.html" ]; then
  while IFS= read -r asset; do
    check "$BASE/$asset"
  done < <(grep -oE 'img/[^"'"'"' )]+' "$script_dir/index.html" | sort -u)
fi

echo
if [ "$fail" -eq 0 ]; then
  echo "Tutte le risorse rispondono HTTP 200."
else
  echo "Alcune risorse NON rispondono HTTP 200."
fi
exit "$fail"
