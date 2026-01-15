# La Confessione di Dio

**Un viaggio filosofico tra i teoremi di incompletezza di Gödel e la natura del divino**

[![Live Demo](https://img.shields.io/badge/Live-Demo-gold)](https://linzialessandro.github.io/la-confessione-di-dio)

## 📖 Descrizione

*La Confessione di Dio* è un saggio filosofico che esplora l'incontro tra logica formale e teologia, applicando i teoremi di incompletezza di Gödel alla concezione del divino. In questo libro, Dio stesso confessa la propria natura: un sistema formale costruito dal linguaggio umano, incapace di dimostrare la propria coerenza dall'interno.

## 🎨 Caratteristiche del Sito

- **Design Moderno**: Interfaccia dark mode con accenti oro e viola, ispirata al tema "cyber-teologico"
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Video Embed**: Musica contemplativa per accompagnare la lettura
- **Download PDF**: Accesso diretto al libro completo in formato PDF

## 🚀 Tecnologie

- **Vite** - Build tool e dev server
- **TypeScript** - Type-safe JavaScript
- **CSS Custom Properties** - Design system flessibile
- **HTML5** - Markup semantico con SEO ottimizzato

## 💻 Sviluppo Locale

### Prerequisiti

Assicurati di avere installato [Node.js](https://nodejs.org/) (v14 o superiore).

### Installazione

```bash
# Clona il repository
git clone https://github.com/linzialessandro/la-confessione-di-dio.git
cd la-confessione-di-dio

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

### Build di Produzione

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`.

### Preview Build

```bash
npm run preview
```

## 📁 Struttura del Progetto

```
.
├── index.html           # Entry point HTML
├── public/             
│   └── assets/          # Risorse statiche (PDF, immagini, favicon)
├── src/
│   ├── main.ts          # Logica applicazione e componenti
│   └── style.css        # Stili e design system
├── package.json
├── tsconfig.json
└── README.md
```

## 🌐 Deploy su GitHub Pages

Il sito è configurato per essere deployato su GitHub Pages.

### Opzione 1: Deploy Automatico (Consigliato)

Crea un file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

### Opzione 2: Deploy Manuale

```bash
# Installa gh-pages
npm install -D gh-pages

# Aggiungi script al package.json
"deploy": "gh-pages -d dist"

# Build e deploy
npm run build
npm run deploy
```

Vai su **Settings > Pages** nella tua repository GitHub e seleziona la branch `gh-pages` come source.

## 📄 Licenza

© 2026 Alessandro Linzi. Tutti i diritti riservati.

## 🔗 Link

- **Sito Live**: [https://linzialessandro.github.io/la-confessione-di-dio](https://linzialessandro.github.io/la-confessione-di-dio)
- **Autore**: [Alessandro Linzi](https://github.com/linzialessandro)

## 📧 Contatti

Per domande, suggerimenti o collaborazioni, sentiti libero di aprire una [issue](https://github.com/linzialessandro/la-confessione-di-dio/issues) su GitHub.

---

*"Un sistema formale la cui esistenza è definita dai limiti della logica stessa"*
