import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [
    {
      cssVariable: '--font-ibm-plex-mono',
      name: 'IBM Plex Mono',
      provider: fontProviders.google(),
    },
    {
      cssVariable: '--font-ibm-plex-serif',
      name: 'IBM Plex Serif',
      provider: fontProviders.google(),
    },
    {
      cssVariable: '--font-inter',
      name: 'Inter',
      provider: fontProviders.google(),
    },
  ],
  integrations: [mdx(), sitemap()],
  site: 'https://armandthuillart.com',
  vite: { plugins: [tailwindcss()] },
});
