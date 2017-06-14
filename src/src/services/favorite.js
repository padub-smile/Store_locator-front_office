import fetch from 'isomorphic-fetch'

import { FAVORITE_CDC_URLS, FAVORITE_PDC_URLS } from '../settings/favorite';

export function getFavorite() {
  const urls = [FAVORITE_CDC_URLS['development'], FAVORITE_PDC_URLS['development']];
  return Promise.all(urls.map(url => fetch(url)));
}
