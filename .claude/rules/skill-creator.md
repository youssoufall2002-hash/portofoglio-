# Regola: uso obbligatorio di skill-creator

- Ogni volta che l'utente chiede di creare una **nuova skill** (o di modificare/migliorare/valutare una skill esistente in questo progetto), Claude deve sempre richiamare la skill `skill-creator` (installata in `.claude/skills/skill-creator/`) invece di scrivere `SKILL.md` e i file correlati a mano.
- Questo vale anche per richieste implicite tipo "trasforma questo in una skill" o "ottimizza la description di questa skill".
- Non saltare questo passaggio nemmeno per skill semplici: `skill-creator` garantisce struttura, frontmatter e (se richiesto) eval coerenti con lo standard Anthropic.
