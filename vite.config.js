import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CI-CD-test/',  // <-- set to your repo name
  plugins: [react()],
})
