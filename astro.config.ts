import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [
    {
      cssVariable: '--font-fira-code',
      name: 'Fira Code',
      provider: fontProviders.fontsource(),
      weights: ['100 900'],
    },
    {
      cssVariable: '--font-inter',
      name: 'Inter',
      provider: fontProviders.fontsource(),
      weights: ['100 900'],
    },
  ],
  integrations: [mdx(), sitemap()],
  site: 'https://armandthuillart.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
