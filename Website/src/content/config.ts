import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    excerpt: z.string(),
    image: z.string(),
    date: z.string(), // or z.date() if you want to handle dates properly
  })
});

export const collections = { blog };
