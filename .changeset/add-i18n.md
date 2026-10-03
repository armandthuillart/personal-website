---
"personal-website": minor
---

Add `en` (default), `fr` and `es` locales using Astro's i18n routing. Every page now lives under its locale prefix (for example `/en/blog/stack`), and `/` redirects to the visitor's preferred language on the server. A language select in the header switches locale. The home page, ventures and the "My life in 5 minutes" post are translated; other posts fall back to English. RSS is per locale.
