import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ToDoList/', // Add this line for GitHub Pages deployment
  plugins: [
    react(),
    tailwindcss()
  ],
})
