import { getCollection } from 'astro:content';

export const locales = ['en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];

export const names: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
};

const ui = {
  en: {
    about: 'About',
    allPosts: 'All posts',
    bioFounder: 'Founder & CEO of',
    bioPrevious: 'I previously founded and exited',
    bioWhen: 'in late 2025.',
    blog: 'Blog',
    description: 'Designer and developer.',
    language: 'Language',
    latestPosts: 'Latest posts',
    notFound: 'Page not found',
    notFoundText: 'The page you requested does not exist.',
    portrait: 'A portrait of Armand',
    ventures: 'Ventures',
  },
  es: {
    about: 'Sobre mí',
    allPosts: 'Todas las publicaciones',
    bioFounder: 'Fundador y director ejecutivo de',
    bioPrevious: 'Antes fundé y vendí',
    bioWhen: 'a finales de 2025.',
    blog: 'Blog',
    description: 'Diseñador y desarrollador.',
    language: 'Idioma',
    latestPosts: 'Últimas publicaciones',
    notFound: 'Página no encontrada',
    notFoundText: 'La página que buscas no existe.',
    portrait: 'Un retrato de Armand',
    ventures: 'Empresas',
  },
  fr: {
    about: 'À propos',
    allPosts: 'Tous les articles',
    bioFounder: 'Fondateur et PDG de',
    bioPrevious: 'J’ai auparavant fondé puis cédé',
    bioWhen: 'fin 2025.',
    blog: 'Blog',
    description: 'Designer et développeur.',
    language: 'Langue',
    latestPosts: 'Derniers articles',
    notFound: 'Page introuvable',
    notFoundText: 'La page que vous cherchez n’existe pas.',
    portrait: 'Un portrait d’Armand',
    ventures: 'Entreprises',
  },
} satisfies Record<Locale, Record<string, string>>;

export function getLocale(locale: string | undefined) {
  return locales.find((l) => l === locale) ?? 'en';
}

export function getTranslation(locale: string | undefined) {
  return (key: keyof (typeof ui)['en']) => ui[getLocale(locale)][key];
}

// English entries, each replaced by its translation when there is one.
export async function localized<C extends 'blog' | 'ventures'>(collection: C, locale: Locale) {
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

export const localeParams = () =>
  locales.map((locale) => ({ params: { locale } }));

export async function localizedPaths(collection: 'blog' | 'ventures') {
  const paths = await Promise.all(
    locales.map(async (locale) =>
      (await localized(collection, locale)).map(({ entry, slug }) => ({
        params: { locale, slug },
        props: { entry },
      })),
    ),
  );

  return paths.flat();
}
