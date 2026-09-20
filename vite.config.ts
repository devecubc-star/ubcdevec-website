import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base is "/" because public/CNAME pins this site to the ubcdevec.org root.
// If CNAME is ever removed, this must become "/ubcdevec-website/" or every
// built asset path will 404 on the default *.github.io project URL.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
