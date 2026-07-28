#!/bin/bash
# ---------------------------------------------------------------------------
# Script di configurazione ("Setup script") per l'ambiente cloud di Claude Code.
#
# COME USARLO:
#   Copia il contenuto di questo file nel campo "Script di configurazione"
#   dell'ambiente cloud "Predefinito":
#     Claude Code  ->  chip ambiente "Predefinito"  ->  icona ingranaggio
#     ->  campo "Script di configurazione"
#   Lo script viene eseguito all'avvio di OGNI nuova sessione dell'ambiente,
#   quindi registra il server MCP "21st" per tutte le sessioni (qualsiasi repo).
#
# PREREQUISITO:
#   La variabile d'ambiente API_KEY_21ST deve essere impostata nello stesso
#   ambiente (campo "Variabili d'ambiente", formato .env):
#     API_KEY_21ST=la_tua_chiave_21st
# ---------------------------------------------------------------------------
set -e

# Registra (o ri-registra) il server MCP "21st" a livello utente.
# - "remove ... || true" rende lo script idempotente: nessun errore se esiste gia'.
# - Le virgolette singole mantengono ${API_KEY_21ST} LETTERALE nel config, cosi'
#   la chiave non viene mai scritta in chiaro: Claude Code la espande al load.
claude mcp remove 21st 2>/dev/null || true
claude mcp add --transport http --scope user 21st https://21st.dev/api/mcp \
  --header 'x-api-key: ${API_KEY_21ST}'

echo "[setup] server MCP 21st registrato."
