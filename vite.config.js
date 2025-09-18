import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/cedit-site/', // 🔑 importantissimo per GitHub Pages
})
