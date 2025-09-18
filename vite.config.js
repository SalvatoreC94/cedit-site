import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/', // 👈 importante per far funzionare il custom domain
  plugins: [vue()],
})
