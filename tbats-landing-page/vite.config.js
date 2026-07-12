import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
          allowedHosts: true, // Crucial to prevent LocalTunnel from getting blocked
          host: true,         // Allows external connections
          cors: true          // Prevents cross-origin asset blocking
        }
})
