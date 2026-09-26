---
"personal-website": patch
---

Fix blog and venture cover images not rendering. Content collection frontmatter now uses Astro's `image()` schema helper so covers are resolved from `src/assets` and go through Astro's built-in image optimization, instead of pointing at a non-existent `public/images` folder. Also removed a stray `hidden` class that was hiding every cover thumbnail regardless of image source, and added `sharp` as a dev dependency so local image optimization actually runs at build time.
