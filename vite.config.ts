import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@tokens': r('./design-tokens/build'),
      '@components': r('./components'),
      '@patterns': r('./patterns'),
    },
  },
  // relative base so the build works at github.io/rough-draft-ds/ (and anywhere else)
  base: './',
  server: { port: 5240, strictPort: true },
});
