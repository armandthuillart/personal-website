# Personal Website

Armand Thuillart’s curricum vitae website.

## Language

**Post**:
A blog article, written as MDX under `src/content/blog/<locale>/`, shown at `/<locale>/blog/<slug>`.
_Avoid_: article, entry

**Draft**:
A post or venture marked `draft: true` in its frontmatter. Drafts are excluded from listings (the home page, the blog index, the RSS feed) but still reachable by direct URL.
_Avoid_: unpublished, hidden

**Locale**:
One of `en` (default) or `fr`. Every page is served under its locale prefix, such as `/fr/blog`.
_Avoid_: language version

**Venture**:
A piece of past work experience shown on the home page, written as MDX under `src/content/ventures/<locale>/`. Crosspost and Dimsight are ventures, not posts.
_Avoid_: work, experience, project, case study
