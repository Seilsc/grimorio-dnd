import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // base relativa: funciona en GitHub Pages sea cual sea el nombre del repo
  base: './',
  plugins: [react()],
})
