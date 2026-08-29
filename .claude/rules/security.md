# Regola: non committare segreti

- Non aggiungere mai ai commit il file `.env` o qualsiasi altro file/percorso elencato in `.gitignore`.
- Prima di ogni `git add` o `git commit`, verifica con `git status` cosa sta per essere incluso. Se compare `.env` o un file che dovrebbe essere ignorato, fermati e chiedi conferma invece di committarlo.
- Non stampare mai il contenuto di `.env` nei log, nei commit message o nelle risposte, a meno che l'utente lo chieda esplicitamente.
- Se un file di segreti risulta già tracciato da Git, segnalalo all'utente invece di rimuoverlo o modificarlo autonomamente.
