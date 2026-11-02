import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // keep every asset as its own file so the CSP can stay at font-src 'self'
  build: { assetsInlineLimit: 0 },
})
