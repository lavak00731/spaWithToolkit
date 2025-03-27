import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // allows us to use vitest library methods in unit test without explicit imports
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',  // path to setup file
  },
})
