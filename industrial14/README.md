# INDUSTRIAL 14 — Sito web

Sito **multi-pagina** per **INDUSTRIAL 14**, ristorante e pizzeria a
**Cisano Bergamasco (BG)**, Via Mura 2.
Stile **industrial** (nero/cemento, accento rame-arancio), font **Oswald + Inter**.

## Come si apre

Apri `industrial14/index.html` in un browser. Nessuna dipendenza esterna a parte
i font di Google e l'iframe della mappa.

Online (GitHub Pages): `https://youssoufall2002-hash.github.io/portofoglio-/industrial14/`

## Struttura (multi-pagina)

Stile e script sono condivisi in `style.css` e `script.js`, così le pagine
restano coerenti e leggere.

- **`index.html` (Home)** — copertina con logo, "Il locale", anteprima galleria,
  anteprima menù (categorie), recensioni, contatti rapidi
- **`menu.html` (Menù)** — menù completo: 86 voci in 12 categorie con prezzi
- **`galleria.html` (Galleria)** — 9 foto del locale e dei piatti
- **`contatti.html` (Contatti)** — indirizzo, telefono, orari, accessibilità, mappa
- **`style.css`** — foglio di stile condiviso
- **`script.js`** — anno footer, banner cookie, animazioni allo scroll

In più: menu di navigazione in alto (Home · Menù · Galleria · Contatti),
barra fissa in basso su mobile, banner cookie, dati strutturati
`Restaurant` (schema.org), meta SEO.

## Dati reali già inseriti

| Dato | Valore |
|---|---|
| Nome | **INDUSTRIAL 14** |
| Indirizzo | **Via Mura 2, 24034 Cisano Bergamasco (BG)** |
| Telefono | **035 039 0279** |
| Orari | Mar–Dom 11:30–14:30 · 17:30–24:00 (Ven/Sab fino all'01:00); Lun solo pranzo |
| Servizi | Happy hour · Sala da pranzo privata · Piatti vegani |
| Instagram | [@industrial14_cisano](https://www.instagram.com/industrial14_cisano/) |
| Facebook | [Industrial14 Cisano](https://www.facebook.com/p/Industrial14-Cisano-61581664965413/) |

## ⚠️ DA COMPLETARE (segnaposto nel file)

Cerca i commenti `SEGNAPOSTO` / `SOSTITUIRE` in `index.html`:

| Segnaposto | Sostituire con |
|---|---|
| `src` iframe mappa | Per il pin preciso, incolla l'iframe reale da Google Maps |
| Link Privacy/Cookie | Testo o pagina di privacy e cookie policy |

**Menu completo con prezzi**, **recensioni** reali da Google e **foto reali**
del locale sono già inseriti. Le immagini sono in `industrial14/img/`
(ingresso/insegna, sala, esterno, bar e piatti: pizze, hamburger, filetto).
Il sito è sostanzialmente completo.

## Immagini

Crea una cartella `industrial14/img/` ed esporta le foto in **WebP/JPG sotto i 250 KB**.
Sostituisci ogni `<div class="shot">…</div>` con
`<img src="img/nome-foto.webp" alt="Descrizione — INDUSTRIAL 14 Cisano Bergamasco">`.
