import { defineConfig } from 'vite'
import nunjucks from 'vite-plugin-nunjucks'

export default defineConfig({
  root: '.',
  plugins: [
    nunjucks({
      templatesDir: 'src/templates'
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})
