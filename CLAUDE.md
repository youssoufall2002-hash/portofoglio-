# CLAUDE.md

Questo file guida Claude Code nel lavorare su questo repository. Va aggiornato mano a mano che il progetto cresce.

## Cos'è questo progetto

`portofoglio-` è una raccolta di siti statici one-page realizzati per clienti reali (barbershop, ristoranti, ecc.), pensati per essere pubblicati velocemente su Netlify o GitHub Pages.

- `index.html` — sito per **Hermann Barbershop** (Bergamo). Tutto in un unico file (HTML + CSS + JS inline), nessuna dipendenza esterna a parte l'iframe di Google Maps.
- `industrial14/` — sito multi-pagina per il locale **Industrial14** (home, menu, galleria, contatti), con dati menu in `industrial14/data/menu.json`.
- `img/` — immagini del sito Hermann Barbershop.

## Come lavorare su questi siti

- Sono siti **statici**, senza build step: si aprono direttamente nel browser o si pubblicano così come sono.
- Prima di proporre stili, palette colori, font o layout, usa la skill `ui-ux-pro-max` (già installata in `.claude/skills/`).
- Mantieni ogni sito autonomo: non introdurre dipendenze esterne o framework se non richiesto esplicitamente.
- Le immagini vanno in formato WebP, sotto i 200 KB, con nomi file descrittivi (es. `hermann-barbershop-bergamo-taglio-01.webp`).

## Segreti e file da non committare

- Le chiavi/API vanno in `.env` (mai in chiaro nel codice).
- `.env` e tutto ciò che è elencato in `.gitignore` non va mai committato. Vedi `.claude/rules/` per la regola dettagliata che Claude deve seguire.

## Struttura `.claude/`

- `settings.json` — permessi e configurazione di Claude Code per questo progetto.
- `skills/` — skill disponibili (es. `ui-ux-pro-max`, `skill-creator`). Vedi `.claude/rules/skill-creator.md`: va usata sempre per creare/modificare skill.
- `agents/` — agenti dedicati a compiti isolati (da definire).
- `rules/` — regole che Claude deve rispettare lavorando su questo repo.

## Git

- Non pushare mai direttamente su `main`.
- Crea un branch (`feat/...` o `fix/...`), committa, pusha e apri una PR.
