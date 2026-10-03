# personal-website

## 0.2.0

### Minor Changes

- [`dc15429`](https://github.com/armandthuillart/personal-website/commit/dc15429230e239552078ddf1b273f09d5af818fe) Thanks [@armandthuillart](https://github.com/armandthuillart)! - Add `en` (default), `fr` and `es` locales using Astro's i18n routing. Every page now lives under its locale prefix (for example `/en/blog/stack`), and `/` redirects to the visitor's preferred language on the server. A language select in the header switches locale. The home page, ventures and the "My life in 5 minutes" post are translated; other posts fall back to English. RSS is per locale.

### Patch Changes

- [`54ee402`](https://github.com/armandthuillart/personal-website/commit/54ee40214e6e5af1bee62704e1548338650f4328) Thanks [@armandthuillart](https://github.com/armandthuillart)! - Fix blog and venture cover images not rendering. Content collection frontmatter now uses Astro's `image()` schema helper so covers are resolved from `src/assets` and go through Astro's built-in image optimization, instead of pointing at a non-existent `public/images` folder. Also removed a stray `hidden` class that was hiding every cover thumbnail regardless of image source, and added `sharp` as a dev dependency so local image optimization actually runs at build time.

- [`dc15429`](https://github.com/armandthuillart/personal-website/commit/dc15429230e239552078ddf1b273f09d5af818fe) Thanks [@armandthuillart](https://github.com/armandthuillart)! - Remove page transitions. Navigation now uses regular full page loads instead of the Astro client router and view transitions.

- [`a0b4012`](https://github.com/armandthuillart/personal-website/commit/a0b4012b2a1f3b171ae1817242ce7c783004fda2) Thanks [@armandthuillart](https://github.com/armandthuillart)! - Revert README badge version fix for Astro and Vite+.

- [`b9034ae`](https://github.com/armandthuillart/personal-website/commit/b9034ae6e57f33a5c2d45d714cf1eafdac198799) Thanks [@armandthuillart](https://github.com/armandthuillart)! - Write the Dimsight and Crosspost venture pages.
