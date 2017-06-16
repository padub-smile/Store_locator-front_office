import { createTranslator, negociateLocale } from '@gandi/react-translate';
import url from 'url';
import { fetchTranslations } from '../services/locale';

import { DEFAULT_LOCALE } from '../settings/locale';
const translations = require(`../../public/assets/locales/${DEFAULT_LOCALE}/translations.json`);

const availableLocales = ['fr', 'en'];
const urlLocale = url.parse(document.location.href, true).path.substr(1, 2);
const userBrowserLocales = window.navigator.languages || [(window.navigator.language || window.navigator.userLanguage)];
const locale = negociateLocale([urlLocale, ...userBrowserLocales], availableLocales, DEFAULT_LOCALE);
const translatorParams = {
  translations,
  locale,
  DEFAULT_LOCALE
};
const translator = createTranslator(translatorParams);

fetchTranslations(locale)
  .then(translations => translator.translator.registerTranslations(locale, translations));

export default translator;
