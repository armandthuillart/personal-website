import { isLocale, localeStore, type Locale } from '@lib/i18n';
import { defineMiddleware } from 'astro:middleware';
import Turndown from 'turndown';

const turndown = new Turndown({ headingStyle: 'atx' }).remove([
  'footer',
  'header',
  'script',
  'style',
  'title',
]);

export const onRequest = defineMiddleware(async (context, next) => {
  const { locale } = context.params;
  if (locale && !isLocale(locale)) return context.rewrite('/404');

  const response = await localeStore.run(context.currentLocale as Locale, next);
  if (!response.headers.get('Content-Type')?.startsWith('text/html')) return response;

  response.headers.append('Vary', 'Accept');
  if (!context.request.headers.get('Accept')?.includes('text/markdown')) return response;

  return new Response(turndown.turndown(await response.text()), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept',
    },
    status: response.status,
  });
});
