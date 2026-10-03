import rss from '@astrojs/rss';
import {
  getLocale,
  getTranslation,
  localeParams,
  localized,
} from '@lib/i18n';
import type { APIRoute } from 'astro';
import { getRelativeLocaleUrl } from 'astro:i18n';

export const getStaticPaths = localeParams;

export const GET: APIRoute = async ({ params, site }) => {
  const locale = getLocale(params.locale);
  const posts = (await localized('blog', locale)).filter(({ entry }) => !entry.data.draft);

  return rss({
    customData: `<language>${locale}</language>`,
    description: getTranslation(locale)('description'),
    items: posts.map(({ entry, slug }) => ({
      ...entry.data,
      link: getRelativeLocaleUrl(locale, `blog/${slug}`),
    })),
    site: site!.href,
    title: 'Armand Thuillart',
  });
};
