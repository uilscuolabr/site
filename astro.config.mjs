import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://uil-scuola-brindisi.netlify.app',
  integrations: [sitemap()]
});
