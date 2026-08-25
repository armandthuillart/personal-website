import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const schema = z.object({
  date: z.coerce.date(),
  description: z.string(),
  draft: z.boolean(),
  image: z.string(),
  title: z.string(),
});

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.mdx',
  }),
  schema: () => schema,
});

const experience = defineCollection({
  loader: glob({
    base: './src/content/experience',
    pattern: '**/*.mdx',
  }),
  schema: () => schema,
});

export const collections = { blog, experience };
