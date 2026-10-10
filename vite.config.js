import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   theme: {
    extend: {
      colors: {
        brandBlue: '#074B69', // Defines your custom theme color
      },
    },
  },
  plugins: [ tailwindcss(),react()],
})
