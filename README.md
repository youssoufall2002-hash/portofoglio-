# Hermann Barbershop — Sito web

Sito one-page (una sola pagina, 6 sezioni) per **Hermann Barbershop**, barbershop a **Bergamo**.
Costruito su template per parrucchieri/barber: veloce, responsive, ottimizzato per mobile e SEO locale.

## Come si apre

Apri `index.html` in un browser. È tutto in un unico file (HTML + CSS + JS inline),
nessuna dipendenza esterna a parte l'iframe della mappa Google.

## Sezioni

1. **Hero** — titolo, sottotitolo, pulsanti WhatsApp + Chiama
2. **Servizi** — listino con prezzi indicativi
3. **Galleria** — 6 riquadri per le foto (da Instagram)
4. **Il salone** — chi siamo + 3 punti di forza
5. **Recensioni** — 3 riquadri (segnaposto)
6. **Contatti** — indirizzo, telefono, WhatsApp, orari, mappa

In più: barra fissa in basso su mobile (📞 Chiama + 💬 WhatsApp), banner cookie,
dati strutturati `HairSalon` (schema.org), meta SEO.

## ⚠️ DA COMPLETARE con i dati reali del salone

I dati pubblici non erano disponibili: sono stati inseriti **segnaposto** da sostituire.
Cerca e sostituisci nel file `index.html`:

| Segnaposto attuale | Sostituire con |
|---|---|
| ~~telefono~~ | ✅ Inserito: **388 258 9071** |
| ~~indirizzo~~ | ✅ Inserito: **Via Casalino 2c, Bergamo** |
| `24100` | CAP corretto (verificare) |
| Prezzi del listino | Prezzi reali (o togliere i numeri se preferisce) |
| ~~orari~~ | ✅ Inseriti da Google: Lun–Ven 09:30–19:00, Sab 08:30–19:00, Dom chiuso |
| ~~recensioni~~ | ✅ Inserita l'unica recensione reale (Denis R., 5,0★). Aggiungerne altre quando ci saranno |
| Riquadri **Galleria** | 6–9 foto vere da Instagram (`img/hermann-barbershop-bergamo-taglio-01.jpg`, ecc.) |
| `src` dell'iframe mappa | Punta già a "Via Casalino 2c, Bergamo"; per precisione al pin, incolla l'iframe reale da Google Maps |
| Link Privacy/Cookie | Pagina o testo di privacy e cookie policy |

Instagram già collegato: [@barber_hermann](https://www.instagram.com/barber_hermann/).

## Immagini

Per la galleria: esporta le foto in **WebP sotto i 200 KB**, formato verticale/quadrato,
nomi file descrittivi tipo `hermann-barbershop-bergamo-taglio-01.webp`.
Sostituisci ogni `<div class="shot">…</div>` con `<img src="img/…" alt="Taglio uomo — Hermann Barbershop Bergamo">`.

## Checklist di messa online

- [ ] Sostituiti tutti i segnaposto qui sopra
- [ ] Dominio `.it` registrato (es. `hermannbarbershop.it`)
- [ ] Online in HTTPS
- [ ] Testato su iPhone e Android (pulsanti chiama/WhatsApp funzionanti)
- [ ] Mappa corretta
- [ ] Scheda Google Business aggiornata e collegata al sito
- [ ] Privacy e cookie policy inserite
