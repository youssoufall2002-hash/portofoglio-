# INDUSTRIAL 14 — Sito web

Sito statico per **INDUSTRIAL 14**, pizzeria napoletana + burger + griglieria +
birreria a **Cisano Bergamasco (BG)**, Via Mura 2.
HTML + CSS + JS **vanilla**, nessun framework, pronto per **GitHub Pages**.

Estetica **industriale contemporanea**: fondo scuro (`#111`), metallo grafite,
un solo accento **ambra** (`#FFB400`), titoli condensati uppercase (**Oswald**),
testo in **Inter**, griglia visibile, linee 1px, micro-animazioni.

## Come si apre

Apri `index.html` in un browser. Nessuna dipendenza esterna a parte i font di
Google e l'iframe della mappa. Online (GitHub Pages):
`https://youssoufall2002-hash.github.io/portofoglio-/industrial14/`

## Struttura

Sito **single page** (una pagina, 5 sezioni) + **pagina menù separata**.

- **`index.html`** — Hero · Il locale · Cosa mangi · Galleria (con lightbox) · Contatti
- **`menu.html`** — menù completo per categorie con i prezzi
- **`style.css`** — foglio di stile unico con variabili CSS
- **`script.js`** — navbar hamburger, reveal on scroll, lightbox, giorno corrente
- **`img/`** — foto del locale e dei piatti · **`favicon.png`** — icona "14"

In più: navbar hamburger mobile-first, barra "Chiama ora" fissa in basso su
mobile, dati strutturati `Restaurant` (schema.org), meta SEO con
"pizzeria Cisano Bergamasco", lazy loading immagini.

## Dati reali già inseriti

| Dato | Valore |
|---|---|
| Nome | **INDUSTRIAL 14** |
| Indirizzo | **Via Mura 2, 24034 Cisano Bergamasco (BG)** |
| Telefono | **+39 035 039 0279** |
| Orari | Pranzo 11:30–14:30 tutti i giorni · Cena 17:30–24:00 (mar–dom), ven/sab fino all'01:00; lunedì solo pranzo |
| Instagram | [@industrial14_cisano](https://www.instagram.com/industrial14_cisano/) |
| Recensioni | 4,5/5 su Google (73 recensioni) |

## Immagini

Le foto reali sono in `img/`. Per sostituirle mantieni lo **stesso nome file**
oppure aggiorna l'attributo `src`. Nel codice ogni immagine da sostituire è
marcata con il commento `<!-- SOSTITUIRE con foto reale -->`.
Esporta in **WebP/JPG sotto i 250 KB**, con `alt` descrittivo.

## ⚠️ Da completare (segnaposto nel codice)

| Segnaposto | Sostituire con |
|---|---|
| `src` iframe mappa | Per il pin preciso, incolla l'iframe reale da Google Maps |
| Prezzi menù | Verificare/aggiornare i prezzi in `menu.html` (fa fede il listino in sala) |

## Pubblicazione su GitHub Pages

**Settings → Pages → Source: Deploy from a branch →** branch `main`, cartella
`/ (root)`. Il sito sarà online su
`https://youssoufall2002-hash.github.io/portofoglio-/industrial14/`.
