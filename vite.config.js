import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copy } from 'vite-plugin-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    copy({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'assets'
        }
      ]
    })
  ],
  base: '/lebaseton/',
})
