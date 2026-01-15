import './style.css'

const licenseFile = import.meta.env.BASE_URL + 'LICENSE.txt'

const app = document.querySelector<HTMLDivElement>('#app')!

function PrivacyPage() {
    return `
    <div class="app-wrapper">
      <section class="section section-dark" style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <div class="container" style="max-width: 800px; text-align: center;">
          <header style="margin-bottom: var(--space-xl);">
            <h1 class="title-main" style="font-size: clamp(2rem, 5vw, 3.5rem);">Privacy Policy</h1>
            <p class="title-sub">Trasparenza e Fiducia</p>
          </header>
          
          <div class="description" style="margin: 0 auto; text-align: left; background: var(--color-bg-card); padding: var(--space-lg); border-radius: 8px; border: 1px solid rgba(201, 162, 39, 0.1);">
            <p style="margin-bottom: var(--space-md);">
              <strong>Nessun Tracciamento:</strong> Questo sito web è progettato per rispettare la tua privacy. Non utilizziamo cookie (né tecnici, né di profilazione) per tracciare gli utenti o raccogliere dati personali durante la navigazione su queste pagine.
            </p>
            
            <p style="margin-bottom: var(--space-md);">
              <strong>Servizi di Terze Parti:</strong> La sezione "Dialogo con Dio" utilizza <em>Google AI Studio</em>. Quando interagisci con tale servizio, stai lasciando questo sito e l'utilizzo dei tuoi dati sarà soggetto esclusivamente alla 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style="color: var(--color-gold); text-decoration: underline;">Privacy Policy di Google</a>.
            </p>

            <div style="margin-top: var(--space-xl); padding-top: var(--space-md); border-top: 1px solid rgba(255,255,255,0.1);">
              <h3 style="color: var(--color-gold-dim); margin-bottom: var(--space-sm); font-family: var(--font-display);">Licenza</h3>
              <p style="font-size: 0.95rem;">
                Questo progetto adotta un modello a doppia licenza: il <strong>codice sorgente</strong> del sito è Open Source sotto licenza <strong>MIT</strong>, mentre il <strong>libro "La Confessione di Dio"</strong> e le opere creative associate sono protetti da licenza <strong>Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)</strong>.
                <br>
                <a href="${licenseFile}" target="_blank" class="btn btn-primary" style="margin-top: var(--space-md); font-size: 0.8rem; padding: 0.5rem 1rem;">
                  Vedi File LICENSE
                </a>
              </p>
            </div>
          </div>

          <div style="margin-top: var(--space-xl);">
            <a href="./" class="footer-link" style="color: var(--color-gold);">
              ← Torna alla Home
            </a>
          </div>
        </div>
      </section>
    </div>
  `
}

app.innerHTML = PrivacyPage()
