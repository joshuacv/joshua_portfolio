import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// NOTE ON URLs
// The repo is currently named `joshua_portfolio`, so the site publishes to
//   https://joshuacv.github.io/joshua_portfolio
// If you rename the repo to exactly `joshuacv.github.io`, delete the `base`
// line below and the site moves to https://joshuacv.github.io — nothing else
// needs to change, all internal links go through src/lib/url.ts.
export default defineConfig({
  site: 'https://joshuacv.github.io',
  base: '/joshua_portfolio',
  integrations: [mdx()],
});
