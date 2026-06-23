import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.mdx',
  }),
  schema: () =>
    z.object({
      draft: z.boolean().default(false),
      index: z.boolean().default(false),
      title: z.string(),
      date: z.coerce.date(),
    }),
});

export const collections = { blog };
