#!/bin/bash
# Verifica configurazione del server MCP "21st" (Magic MCP).
# Eseguire in una NUOVA sessione di Claude Code, dopo aver impostato
# la variabile d'ambiente API_KEY_21ST nell'ambiente cloud.

echo "==================================================="
echo " Verifica MCP 21st"
echo "==================================================="

# 1) La variabile d'ambiente e' iniettata nella sessione?
echo ""
echo "[1] Variabile API_KEY_21ST"
if [ -n "$API_KEY_21ST" ]; then
  echo "    OK - presente (lunghezza ${#API_KEY_21ST}, valore mascherato)"
  KEY_OK=1
else
  echo "    MANCANTE - non impostata in questa sessione"
  KEY_OK=0
fi

# 2) Il server risulta registrato e autenticato?
echo ""
echo "[2] Stato server registrati (claude mcp list)"
claude mcp list 2>&1 | sed 's/^/    /'

# 3) Test diretto dell'endpoint con la chiave (solo se presente)
if [ "$KEY_OK" = "1" ]; then
  echo ""
  echo "[3] Handshake HTTP verso https://21st.dev/api/mcp"
  code=$(curl -s -o /dev/null -w "%{http_code}" -X POST https://21st.dev/api/mcp \
    -H "x-api-key: ${API_KEY_21ST}" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json, text/event-stream" \
    -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"verify","version":"1.0"}}}')
  echo "    HTTP status: $code"
  case "$code" in
    200|202) echo "    OK - la chiave e' accettata e il server risponde";;
    401|403) echo "    AUTH FALLITA - chiave errata o non valida";;
    *)       echo "    Risposta inattesa (controllare rete/policy o formato)";;
  esac
else
  echo ""
  echo "[3] Salto il test HTTP: nessuna chiave in sessione."
fi

echo ""
echo "==================================================="
echo " Fine verifica"
echo "==================================================="
