// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://renkaidev-wev.pages.dev', // Cambia esto por tu dominio personalizado en Cloudflare
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});