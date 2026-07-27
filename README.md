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
| ~~prezzi~~ | ✅ Rimossi su richiesta — mostrato solo l'elenco servizi, prezzi su preventivo |
| ~~orari~~ | ✅ Inseriti da Google: Lun–Ven 09:30–19:00, Sab 08:30–19:00, Dom chiuso |
| ~~recensioni~~ | ✅ Inserita l'unica recensione reale (Denis R., 5,0★). Aggiungerne altre quando ci saranno |
| ~~galleria~~ | ✅ Inserite 7 foto reali del salone (insegna, interno, team, 4 tagli) in `img/` |
| `src` dell'iframe mappa | Punta già a "Via Casalino 2c, Bergamo"; per precisione al pin, incolla l'iframe reale da Google Maps |
| Link Privacy/Cookie | Pagina o testo di privacy e cookie policy |

Instagram già collegato: [@barberr_hermann](https://www.instagram.com/barberr_hermann/).

## Immagini

Per la galleria: esporta le foto in **WebP sotto i 200 KB**, formato verticale/quadrato,
nomi file descrittivi tipo `hermann-barbershop-bergamo-taglio-01.webp`.
Sostituisci ogni `<div class="shot">…</div>` con `<img src="img/…" alt="Taglio uomo — Hermann Barbershop Bergamo">`.

## Come pubblicarlo online

Il sito è statico (solo `index.html` + cartella `img/`): si pubblica ovunque in pochi minuti.

### Opzione 1 — Netlify (consigliata, gratis anche con repo privato)
1. Vai su [netlify.com](https://www.netlify.com) e accedi con GitHub
2. *Add new site* → *Import an existing project* → scegli questo repo
3. Build command: **(vuoto)** · Publish directory: **`.`** (la root)
4. *Deploy* → il sito è online su un indirizzo tipo `hermann-barbershop.netlify.app`
5. Per il dominio: *Domain settings* → collega `hermannbarbershop.it`

### Opzione 2 — GitHub Pages (gratis se il repo è pubblico)
1. **Settings → General →** rendi il repo **Public** (serve un piano Pro per Pages su repo privati)
2. **Settings → Pages → Source: Deploy from a branch →** branch `main`, cartella `/ (root)`
3. Il sito sarà online su `https://youssoufall2002-hash.github.io/portofoglio-/`

> Nota: entrambe danno HTTPS automatico. Per un indirizzo professionale conviene
> registrare un dominio `.it` (es. su Aruba/Register) e collegarlo (Opzione 1 o 2).

## Checklist di messa online

- [ ] Sostituiti tutti i segnaposto qui sopra
- [ ] Dominio `.it` registrato (es. `hermannbarbershop.it`)
- [ ] Online in HTTPS
- [ ] Testato su iPhone e Android (pulsanti chiama/WhatsApp funzionanti)
- [ ] Mappa corretta
- [ ] Scheda Google Business aggiornata e collegata al sito
- [ ] Privacy e cookie policy inserite
