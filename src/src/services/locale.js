import fetch from 'isomorphic-fetch'

import { LOCALE_TRANSLATIONS_URLS } from '../settings/locale';

export function fetchTranslations(locale) {
  return fetch(LOCALE_TRANSLATIONS_URLS['development'](locale))
    .then(response => response.json());
}
