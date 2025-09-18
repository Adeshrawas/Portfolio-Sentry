import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// old config (works locally)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',   // ✅ works for local dev
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
