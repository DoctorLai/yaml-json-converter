import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: '/yaml-json-converter/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/test.setup.js",
  },
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    include: ['crypto-browserify']
  },
  resolve: {
    alias: {
      'crypto': 'crypto-browserify'
    }
  },
}))
