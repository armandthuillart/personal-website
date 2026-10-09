import { localeStore, type Locale } from '@lib/i18n';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) =>
  localeStore.run(context.currentLocale as Locale, next),
);
