import fetch from 'isomorphic-fetch'

import { CART_CDC_URLS, CART_PDC_URLS } from '../settings/cart';

export function getCart() {
  const urls = [CART_CDC_URLS['development'], CART_PDC_URLS['development']];
  return Promise.all(urls.map(url => fetch(url)));
}
