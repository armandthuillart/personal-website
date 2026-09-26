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

Posts live in `src/content/blog/`.

**Frontmatter (`src/content.config.ts`)**

- `title` (string)
- `description` (string)
- `icon` (string, optional)
- `date` (date, optional)
- `draft` (boolean, optional)

Posts with an `icon` and `date` (and `draft` not `true`) appear on the home page.

## Deploy

```bash
vp build
vp run deploy
```
