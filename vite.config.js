import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import glsl from 'vite-plugin-glsl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Import .glsl / .vert / .frag files as strings for R3F shader materials.
    glsl({
      include: ['**/*.glsl', '**/*.vert', '**/*.frag'],
      warnDuplicatedImports: true,
      compress: false,
      watch: true,
    }),
  ],
})
