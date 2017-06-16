export const DEFAULT_LOCALE = 'en';

export const LOCALE_TRANSLATIONS_URLS = {
  development: locale => `/assets/locales/${locale}/translations.json`,
  test: locale => `/assets/locales/${locale}/translations.json`,
  production: locale => `/assets/locales/${locale}/translations.json`
};
