import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 開発中は Vite（5173）から Go（8080）へ転送し、ブラウザから見て同じオリジンにする
    // https://vite.dev/config/server-options#server-proxy
    proxy: {
      '/ws': {
        target: 'http://localhost:8080',
        ws: true,
      },
    },
  },
})
