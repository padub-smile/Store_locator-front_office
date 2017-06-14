import Cookie from 'js-cookie';

import { CART_CDC_COOKIE, CART_PCD_COOKIE } from '../settings/cart';
import { getCart } from '../services/cart';

export function getItemCount() {
  return [CART_CDC_COOKIE, CART_PCD_COOKIE]
    .map(name => Cookie.get(name))
    .map(data => +(data || 0))
    .reduce((a, b) => a + b, 0);
}

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export function fetchCartItems(dispatch) {
  dispatch({type: FETCH_CART_ITEMS});
  getCart()
    .then(responses => responses.map(response => response.json()))
    .then(promises => Promise.all(promises))
    .then(data => dispatch({
      type: RECEIVE_CART_ITEMS,
      data
    }));
}
