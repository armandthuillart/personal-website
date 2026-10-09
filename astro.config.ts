import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  adapter: cloudflare(),
  fonts: [
    {
      cssVariable: '--font-ibm-plex-mono',
      name: 'IBM Plex Mono',
      provider: fontProviders.google(),
    },
    {
      cssVariable: '--font-ibm-plex-sans',
      name: 'IBM Plex Sans',
      provider: fontProviders.google(),
    },
    {
      cssVariable: '--font-ibm-plex-serif',
      name: 'IBM Plex Serif',
      provider: fontProviders.google(),
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: true },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://armandthuillart.com/',
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  site: 'https://armandthuillart.com',
  vite: { plugins: [tailwindcss()] },
});
