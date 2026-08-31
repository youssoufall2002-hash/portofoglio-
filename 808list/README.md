# 808LIST — Sito web prenotazione lista

Sito one-page per **808LIST**, community **808.network_**.
Estetica underground/streetwear: nero (`#0a0a0a`) + rosso (`#e8342e`) + accenti bianchi,
stelle a 4 punte, cuore avvolto nel filo spinato, muscle car stilizzata (tutto in SVG inline).
Un solo font caricato da Google Fonts (Anton, per i titoli) — il resto usa lo stack di
sistema: nessuna libreria pesante, nessuna dipendenza esterna oltre a quella.

## Come si apre

Apri `index.html` in un browser. Tutto in un unico file (HTML + CSS + JS inline).
La Privacy Policy è un modal in-pagina (si apre dal form o dal footer), non una pagina separata.

## Sezioni

1. **Hero** — logo "808" con estrusione 3D, wordmark evento, badge "Lista aperta" / "Posti limitati", countdown live
2. **Night card** — data/ora, location, lineup DJ: un'unica card con divisori interni invece di sezioni separate
3. **Form prenotazione** — Nome e cognome, Email + ripeti email, Genere (Donna/Uomo), consenso privacy (apre il modal), messaggi di errore specifici per campo
4. **Conferma** — il form si trasforma in un messaggio "Sei in lista" col nome inserito
5. **Footer** — cuore col filo spinato, Instagram @808.network_, pulsante Privacy Policy, muscle car in filigrana
6. **Dock sticky** — scorciatoia fissa "Entra in lista" che sparisce non appena il form è stato visto una volta (non ricompare sopra il footer)

## Note tecniche

Animazione minimale e intenzionale: solo una coreografia di ingresso al primo scroll
(`IntersectionObserver` + delay scaglionati, classe `.anim`) e il pallino "lista aperta"
che pulsa — nessun movimento continuo in loop (niente loghi che ondeggiano, testo che
respira o sfondi animati), per restare leggibile e non "incasinato". Altri dettagli:
- estrusione tipografica 3D sui titoli (rampa di `text-shadow`, non un'immagine)
- validazione con messaggi specifici per errore (non un generico "compila il form")
- modal privacy con focus trap, chiusura via `Esc` e click fuori
- `@media (prefers-reduced-motion: reduce)` che azzera anche la coreografia di ingresso

## ⚠️ DA COMPLETARE — dati reali dell'evento

I dati dell'evento non erano disponibili: sono stati inseriti **segnaposto** ben visibili
(marcati con ⚠ anche nel codice, in una nota sotto la lineup). Cerca e sostituisci in `index.html`:

| Cosa | Dove | Segnaposto attuale |
|---|---|---|
| Nome serata | `.word2` (sotto il logo "808") | "Summer Takeover" |
| Data (testo) | `.night .date` | "Sabato 19 Set 2026" |
| Ora (testo) | `.night .time` | "Dalle 23:00" |
| Data/ora (countdown) | `<script>` → `EVENT_DATE` | `2026-09-19T23:00:00+02:00` |
| Location | `.night .venue` / `.addr` | "Location da confermare" / "Milano" |
| DJ / lineup | `.bill` | "DJ Set #1/#2/#3" + ruoli |

Nel modal privacy (`#privacy`): sostituisci il testo `<span class="todo">...</span>` con
ragione sociale ed email reali del titolare, poi fai revisionare l'intero testo da un
legale prima di pubblicare.

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

Il form invia un JSON con `nome`, `email`, `genere`, `data_invio`.

## Countdown

Il countdown è calcolato lato client con `Date` nativo (nessuna libreria). Aggiorna
`EVENT_DATE` in `index.html` con la data/ora reali dell'evento (formato ISO,
es. `2026-09-19T23:00:00+02:00`).

## Come pubblicarlo online

Sito statico: solo `index.html`, nessuna dipendenza server.

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
- [ ] Lineup DJ reale (nomi, ruoli, eventuali link Instagram)
- [ ] `FORM_ENDPOINT` collegato a un servizio reale (email/Sheet)
- [ ] Privacy Policy completata con dati reali e revisionata da un legale
- [ ] Testato su iPhone e Android (form, countdown, dock sticky, modal privacy)
- [ ] Link Instagram verificato (@808.network_)
