# UIL Scuola Brindisi - Astro + Decap CMS

Questo progetto crea un sito statico con:

- Home aggiornabile da pannello `/admin`
- Notizie/avvisi aggiornabili da pannello `/admin`
- Pagine statiche: Servizi, Normativa, Campagne, Gli Speciali, Contatti
- Cartelle per immagini e documenti PDF
- Pubblicazione consigliata su Netlify

## Comandi principali

```bash
npm install
npm run dev
npm run build
```

## Pannello di amministrazione

Dopo la pubblicazione su Netlify, il pannello sarà raggiungibile da:

```text
https://tuosito.netlify.app/admin
```

Per usare Decap CMS su Netlify occorre abilitare:

1. Netlify Identity
2. Git Gateway
3. Invitare l'utente amministratore

## Dominio

Il dominio definitivo, ad esempio `uilscuolabrindisi.it`, può essere collegato in seguito senza rifare il sito.
