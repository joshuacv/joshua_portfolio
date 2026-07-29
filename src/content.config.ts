import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    org: z.string(),
    role: z.string(),
    period: z.string(),
    /** Lower numbers sort first on the home page. */
    order: z.number(),
    /** One-paragraph pitch used on the index card. */
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    /**
     * Path under /public, e.g. "media/fastbots.mp4".
     * Nullable so an author can leave the key present but blank in frontmatter.
     */
    video: z.string().nullish().transform((v) => v ?? undefined),
    /** Poster frame for the full-width hero; also the fallback when no video exists. */
    poster: z.string().nullish().transform((v) => v ?? undefined),
    /**
     * Small image for the card in the home-page work list. Use when the only
     * available image is too low-resolution for the full-width hero.
     * Falls back to `poster` when unset.
     */
    thumbnail: z.string().nullish().transform((v) => v ?? undefined),
    /** Attribution shown under the card and hero media. */
    mediaCredit: z
      .object({ text: z.string(), href: z.string().optional() })
      .nullish()
      .transform((v) => v ?? undefined),
    /** Headline numbers. Keep to 2–4 or they stop reading as important. */
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    /** Draft entries are excluded from builds. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
