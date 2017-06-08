import Cookie from 'js-cookie';
import fetch from 'isomorphic-fetch';

const cookieNames = ['cdc_cart_items_count', 'CartItemsCount'];
export function getItemCount() {
  return cookieNames
    .map(name => Cookie.get(name))
    .map(data => +(data || 0))
    .reduce((a, b) => a + b, 0);
}

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export function fetchCartItems(dispatch) {
  const apis = ['/fixtures/cart-cdc.json', '/fixtures/cart-pcd.json'];

  dispatch({type: FETCH_CART_ITEMS});
  Promise
    .all(apis.map(url => fetch(url)))
    .then(responses => responses.map(response => response.json()))
    .then(promises => Promise.all(promises))
    .then(data => dispatch({
      type: RECEIVE_CART_ITEMS,
      data
    }));
}
