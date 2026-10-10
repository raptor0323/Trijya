import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Allow deploying to GitHub Pages subpath via VITE_BASE env var
  // e.g. VITE_BASE=/repo-name/ npm run build
  base: process.env.VITE_BASE || '/',
})
