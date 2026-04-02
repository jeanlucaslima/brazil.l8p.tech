// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://airborne.day',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
