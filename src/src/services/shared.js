import fetch from 'isomorphic-fetch'

import { DATA_CDC_URLS, DATA_PDC_URLS } from '../settings/shared';

export function getData() {
  const urls = [DATA_CDC_URLS['development'], DATA_PDC_URLS['development']];
  return Promise.all(urls.map(url => fetch(url)));
}
