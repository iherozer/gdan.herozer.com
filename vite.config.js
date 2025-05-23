import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  "base": '/',
  "root": 'src',
  "build": {
    "outDir": '../dist',
    "emptyOutDir": true,
    "rollupOptions": {
      "input": {
        "main": path.resolve(__dirname, 'src/index.html'),
        "timer": path.resolve(__dirname, 'src/timer.html'),
        "raised": path.resolve(__dirname, 'src/raised.html'),
      }
    }
  }
})
