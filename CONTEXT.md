# Personal Website

Armand Thuillart’s curricum vitae website.

## Language

**Draft**:
A post or venture marked `draft: true` in its frontmatter. Drafts are excluded from listings (the home page, the blog index, the RSS feed) but still reachable by direct URL.
_Avoid_: unpublished, hidden

**Locale**:
One of `en` (default) or `fr`. Every page is served under its locale prefix, such as `/fr/blog`.
_Avoid_: language version

**Post**:
A blog article, written as MDX under `src/content/blog/<locale>/`, shown at `/<locale>/blog/<slug>`.
_Avoid_: article, entry
