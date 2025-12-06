import { defineConfig } from 'astro/config';
import { setDefaultResultOrder } from 'node:dns';

setDefaultResultOrder('ipv4first');

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      /*
      host: '127.0.0.1',
      */
      proxy: {
        '/api/webhook': {
          target: 'https://n8n.queensautoservices.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/webhook/, '')
        }
      }
    }
  }
});