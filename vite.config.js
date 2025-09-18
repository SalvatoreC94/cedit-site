import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/cedit-site/', // 👈 IMPORTANTE per GitHub Pages
  plugins: [vue()]
})
