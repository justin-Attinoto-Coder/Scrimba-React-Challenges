import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'annoying-form': 'public/annoying-form.html',
        'fire-starter': 'public/fire-starter.html',
        'haunted-house-real-estate': 'public/haunted-house-real-estate.html',
        'legend-of-scrimba': 'public/legend-of-scrimba.html',
        'math-o-matic': 'public/math-o-matic.html',
        'mood-tracker': 'public/mood-tracker.html',
        'original-calculator': 'public/original-calculator.html',
        'photo-editor': 'public/photo-editor.html',
        'rpg-character-creator': 'public/rpg-character-creator.html',
        'rpg-name-input': 'public/rpg-name-input.html',
        'simple-food-restaurant': 'public/simple-food-restaurant.html',
        'top-100-colors': 'public/top-100-colors.html',
        'weird-wikipedia-articles': 'public/weird-wikipedia-articles.html'
      }
    }
  }
})
