<div align="center">

# Armand Thuillart

[![Astro](https://img.shields.io/badge/Astro-^6.0-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite+](https://img.shields.io/badge/Vite+-0.1.20-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

Source code for [armandthuillart.com](https://armandthuillart.com). Built with Astro, Tailwind CSS, and MDX.

> [!NOTE]
> Use `vp` commands instead of `npm`, `pnpm`, or `bun`. Vite+ handles all dependencies, formatting, and tasks.

## Setup

```bash
vp install
vp dev
```

The site runs at `http://localhost:4321`.

## Commands

| Command         | Action               |
| --------------- | -------------------- |
| `vp dev`        | Start dev server     |
| `vp check`      | Check types          |
| `vp lint`       | Lint code            |
| `vp fmt`        | Format code          |
| `vp build`      | Build to `dist/`     |
| `vp preview`    | Test build           |
| `vp run deploy` | Deploy to Cloudflare |

## Content

Posts live in `src/content/blog/<locale>/`.

**Frontmatter (`src/content.config.ts`)**

- `title` (string)
- `description` (string)
- `icon` (string, optional)
- `date` (date, optional)
- `draft` (boolean, optional)

Posts with an `icon` and `date` (and `draft` not `true`) appear on the home page.

## Languages

Every page lives under its locale: `/en/` (default) or `/fr/`. UI strings are in `messages/<locale>.json`, grouped by namespace (`Header`, `Ventures`, ...) and read with `getTranslations(namespace)` from `src/lib/i18n.ts`; the locale of the current request is set by `src/middleware.ts`; `getPathname(path)` builds locale-prefixed links. Messages support `{name}` interpolation (`t(key, { name })`) and `<tag>rich text</tag>` (`t.rich(key, { tag })`, rendered with `set:html`).

Pages are rendered on demand (`@astrojs/cloudflare`). `/` redirects to the visitor's `Astro.preferredLocale`, or `/en/`, on the server.

Content is stored per locale, for example `src/content/blog/fr/bio.mdx`. To translate a post or venture, add a file with the same name under its locale folder; anything not translated falls back to the English one.

## Markdown for agents

Every page is rendered on demand. A request with `Accept: text/markdown` gets the page as markdown instead of HTML; browsers keep getting HTML. `src/middleware.ts` converts the rendered HTML (header and footer stripped). Posts are also available as raw markdown at `/<locale>/blog/<slug>.md`.

The sitemap cannot discover on-demand pages, so `astro.config.ts` builds its page list from the files in `src/content/`.

## Deploy

```bash
vp build
vp run deploy
```
