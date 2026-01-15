import './style.css'
const coverImage = import.meta.env.BASE_URL + 'assets/cover.png'
const pdfFile = import.meta.env.BASE_URL + 'assets/la-confessione-di-dio.pdf'



const app = document.querySelector<HTMLDivElement>('#app')!



const icons = {
  download: `<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
  </svg>`,



  video: `<svg class="video-placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>`,

  dialogue: `<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
  </svg>`,

  github: `<svg class="footer-link-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
  </svg>`,

  x: `<svg class="footer-link-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>`
}



function Hero() {
  return `
    <section class="hero">
      <div class="hero-content">
        <div class="cover-wrapper">
          <img 
            src="${coverImage}" 
            alt="La Confessione di Dio — Copertina" 
            class="cover-image"
          />
        </div>
        

        <header>
          <h1 class="title-main">La Confessione di Dio</h1>
          <p class="title-sub">Una visione divina sull'incompletezza</p>
          <p class="author">di Alessandro Linzi</p>
        </header>
        

        <p class="description">
          Cosa accade quando i teoremi di incompletezza di Gödel incontrano la teologia? 
          In questo saggio filosofico, Dio stesso confessa la propria natura: 
          un sistema formale costruito dal linguaggio umano, incapace di dimostrare 
          la propria coerenza dall'interno. Un viaggio tra logica, fede e i limiti 
          della conoscenza.
        </p>
        

        <div class="btn-group">
          <a href="${pdfFile}" download class="btn btn-primary">
            ${icons.download}
            Scarica il Libro
          </a>
        </div>
      </div>
    </section>
  `
}


function DialogueSection() {
  return `
    <section class="dialogue-section">
      <div class="dialogue-content">
        <h2 class="dialogue-title">Dialogo con Dio</h2>
        <p class="dialogue-subtitle">
          Vuoi entrare in conversazione diretta con Dio? Condividi la tua presenza online 
          e inizia un dialogo profondo attraverso l'intelligenza artificiale.
        </p>
        
        <p class="dialogue-description">
          Attraverso Google AI Studio, abbiamo creato un'esperienza unica che ti permette 
          di esplorare le domande fondamentali dell'esistenza in un dialogo personale e 
          illuminante. Accedi con il tuo account Google e lasciati guidare.
        </p>
        
        <div class="btn-group">
          <a 
            href="https://ai.studio/apps/drive/1PnKtnU24EHzuGQvP_AlGBVbrq0I2FjrV?fullscreenApplet=true" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-dialogue"
          >
            ${icons.dialogue}
            Inizia il Dialogo
          </a>
        </div>
      </div>
    </section>
  `
}



function VideoSection() {
  return `
    <section class="video-section">
      <div class="video-wrapper">
        <h2 class="video-title">Musica per la Riflessione</h2>
        <p class="video-subtitle">Un brano che accompagna i temi del libro</p>
        
        <div class="video-container">

          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/M6te4xieQDg?si=SEr5rwCnN7TQtqpp" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>
  `
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return `
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-title">La Confessione di Dio</p>
        <p class="footer-copyright">© ${currentYear} Alessandro Linzi. Tutti i diritti riservati.</p>
        
        <div class="footer-links">
          <a href="privacy.html" class="footer-link">
            Privacy
          </a>

          <a 
            href="https://github.com/linzialessandro/la-confessione-di-dio" 
            target="_blank" 
            rel="noopener noreferrer"
            class="footer-link"
          >
            ${icons.github}
            GitHub
          </a>
          
          <a 
            href="https://x.com/ALinzi41529" 
            target="_blank" 
            rel="noopener noreferrer"
            class="footer-link"
          >
            ${icons.x}
            X
          </a>
        </div>
      </div>
    </footer>
  `
}



function App() {
  return `
    <div class="app-wrapper">
      ${Hero()}
      ${DialogueSection()}
      ${VideoSection()}
      ${Footer()}
    </div>
  `
}


app.innerHTML = App()
