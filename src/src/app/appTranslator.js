import { createTranslator, negociateLocale } from '@gandi/react-translate';
import url from 'url';
import { fetchTranslations } from '../services/locale';

const defaultLocale = 'en';
const availableLocales = ['fr', 'en'];
const urlLocale = url.parse(document.location.href, true).path.substr(1, 2);
const userBrowserLocales = window.navigator.languages || [(window.navigator.language || window.navigator.userLanguage)];
const locale = negociateLocale([urlLocale, ...userBrowserLocales], availableLocales, defaultLocale);
const translatorParams = {
  locale,
  defaultLocale
};
const translator = createTranslator(translatorParams);

fetchTranslations(locale)
  .then(translations => translator.translator.registerTranslations(locale, translations));

export default translator;
