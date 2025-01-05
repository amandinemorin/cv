import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteStaticCopy({
      targets: [
        {
          src: 'data/**/*', // Tous les fichiers dans le dossier data
          dest: 'data',    // Destination dans le dossier dist
        },
      ],
    }),react()],
  base: "/cv/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});