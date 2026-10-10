import { AsyncLocalStorage } from 'node:async_hooks';

import { getCollection } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';

import en from '../messages/en.json';
import fr from '../messages/fr.json';

type Chunks = (chunks: string) => string;

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

const messages: Record<Locale, typeof en> = { en, fr };
export const localeStore = new AsyncLocalStorage<Locale>();

export const getLocale = () => localeStore.getStore() ?? 'en';
export const getPathname = (path = '', locale = getLocale()) => getRelativeLocaleUrl(locale, path);
export const getStaticLocalePaths = () => locales.map((locale) => ({ params: { locale } }));

export function getTranslations<N extends keyof typeof en>(namespace: N, locale = getLocale()) {
  const strings: Record<string, string> = messages[locale][namespace];

  function t(key: keyof (typeof en)[N], values: Record<string, string | number> = {}) {
    return strings[key as string].replace(/\{(\w+)\}/g, (_, name) => String(values[name]));
  }
  t.rich = (key: keyof (typeof en)[N], tags: Record<string, Chunks>, values = {}) => {
    return t(key, values).replace(/<(\w+)>(.*?)<\/\1>/gs, (_, tag, chunks) => tags[tag](chunks));
  };

  return t;
}

export async function getCollectionByLocale<C extends 'blog' | 'ventures'>(
  collection: C,
  locale = getLocale(),
) {
  const entries = await getCollection(collection);

  return entries
    .filter((entry) => entry.id.startsWith('en/'))
    .map((en) => {
      const slug = en.id.slice('en/'.length);

      return {
        entry: entries.find((entry) => entry.id === `${locale}/${slug}`) ?? en,
        slug,
      };
    });
}

export async function getStaticPathsByLocale(collection: 'blog' | 'ventures') {
  const paths = [];

  for (const locale of locales) {
    for (const { entry, slug } of await getCollectionByLocale(collection, locale)) {
      paths.push({ params: { locale, slug }, props: { entry } });
    }
  }

  return paths;
}
