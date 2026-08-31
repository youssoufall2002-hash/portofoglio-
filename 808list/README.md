# 808LIST — Sito web prenotazione lista

Sito one-page per **808LIST**, community **808.network_**.
Estetica underground/streetwear: nero (`#0a0a0a`) + rosso (`#e8342e`) + accenti bianchi,
stelle a 4 punte, cuore avvolto nel filo spinato, muscle car stilizzata (tutto in SVG inline,
nessuna immagine esterna, nessuna libreria pesante — solo HTML/CSS/JS vanilla).

## Come si apre

Apri `index.html` in un browser. Tutto in un unico file (HTML + CSS + JS inline).
`privacy.html` è la pagina Privacy Policy collegata dal footer e dal form.

## Sezioni

1. **Hero** — logo 808 con stelle, wordmark "LIST" stile adesivo, nome evento, data/ora/location, countdown live
2. **Badge** — "LISTA APERTA" / "POSTI LIMITATI" (adesivi ruotati)
3. **Lineup** — card DJ (nome + ruolo, avatar segnaposto)
4. **Form prenotazione** — Nome, Cognome, Genere (Donna/Uomo), Email + ripeti email, consenso privacy
5. **CTA** — "ENTRA IN LISTA" rosso, hover scale + glow
6. **Footer** — Instagram @808.network_, link Privacy Policy

## ⚠️ DA COMPLETARE — dati reali dell'evento

I dati dell'evento non erano disponibili: sono stati inseriti **segnaposto** ben visibili
(marcati con ⚠ anche nel codice). Cerca e sostituisci in `index.html`:

| Cosa | Dove | Segnaposto attuale |
|---|---|---|
| Nome serata | `<h1 class="event-name">` | "SUMMER TAKEOVER" |
| Data/ora (testo) | `.event-meta` | "Sab 19 Set 2026 · 23:00" |
| Data/ora (countdown) | `<script>` → `EVENT_DATE` | `2026-09-19T23:00:00+02:00` |
| Location | `.event-meta` | "Location da confermare · Milano" |
| DJ / lineup | sezione `#lineup` | "DJ Set #1/#2/#3" + avatar con iniziali |
| Foto DJ | `.dj-avatar` | sostituisci il `<div>` con `<img>` (foto quadrata, WebP < 200KB) |

In `privacy.html`: sostituisci `[Ragione sociale / nome del titolare]`, `[indirizzo]` e
`[email di contatto]`, poi fai revisionare il testo da un legale prima di pubblicare.

## Collegare il form (invio email / salvataggio dati)

Il form **funziona già in locale**: ogni invio viene salvato in `localStorage`
(chiave `808list_bookings`) come fallback demo, così puoi testare il flusso subito.

Per ricevere davvero le prenotazioni, apri `index.html`, cerca `FORM_ENDPOINT` nello
`<script>` finale e incolla l'URL del tuo servizio, ad esempio:

- **[Formspree](https://formspree.io)** (gratis, invio email) → `https://formspree.io/f/xxxxxxx`
- **Google Apps Script** collegato a un Google Sheet
- **EmailJS**

```js
var FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxx';
```

Il form invia un JSON con `nome`, `cognome`, `genere`, `email`, `data_invio`.

## Countdown

Il countdown è calcolato lato client con `Date` nativo (nessuna libreria). Aggiorna
`EVENT_DATE` in `index.html` con la data/ora reali dell'evento (formato ISO,
es. `2026-09-19T23:00:00+02:00`).

## Come pubblicarlo online

Sito statico: `index.html` + `privacy.html`, nessuna dipendenza server.

### Opzione 1 — Netlify
1. [netlify.com](https://www.netlify.com) → *Add new site* → *Import an existing project* → questo repo
2. Build command: (vuoto) · Publish directory: `808list`
3. Deploy → online in pochi minuti

### Opzione 2 — GitHub Pages
1. Settings → Pages → Source: Deploy from a branch → `main` → cartella `/ (root)`
2. Il progetto sarà raggiungibile su `https://youssoufall2002-hash.github.io/portofoglio-/808list/`

## Checklist di messa online

- [ ] Nome evento, data/ora, location reali inseriti
- [ ] Countdown (`EVENT_DATE`) aggiornato con data/ora reali
- [ ] Lineup DJ reale (nomi + foto)
- [ ] `FORM_ENDPOINT` collegato a un servizio reale (email/Sheet)
- [ ] Privacy Policy completata con dati reali e revisionata da un legale
- [ ] Testato su iPhone e Android (form, countdown, link Instagram)
- [ ] Link Instagram verificato (@808.network_)
