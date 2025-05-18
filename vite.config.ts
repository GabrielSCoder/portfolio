import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: "/porfolio",
  server: {
    host: '0.0.0.0',
    port: 8080,
  }
})