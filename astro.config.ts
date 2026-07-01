import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [
    {
      cssVariable: '--font-newyork',
      name: 'New York',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/NewYork.woff2'],
            style: 'normal',
            weight: '100 900',
          },
        ],
      },
    },
    {
      cssVariable: '--font-sf-mono',
      name: 'SF Mono',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/SF-Mono.woff2'],
            style: 'normal',
            weight: '400',
          },
        ],
      },
    },
    {
      cssVariable: '--font-sf-pro',
      name: 'SF Pro',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/SF-Pro.woff2'],
            style: 'normal',
            weight: '100 900',
          },
        ],
      },
    },
  ],
  integrations: [mdx(), sitemap()],
  site: 'https://armandthuillart.com',
  vite: { plugins: [tailwindcss()] },
});
