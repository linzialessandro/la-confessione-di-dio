import { defineConfig } from 'vite'


export default defineConfig({

    base: '/la-confessione-di-dio/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                privacy: 'privacy.html'
            }
        }
    }
})
