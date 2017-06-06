import Cookie from 'js-cookie';

const cookieNames = ['cdc_cart_items_count', 'CartItemsCount'];

export function getItemCount() {
  return cookieNames
    .map(name => Cookie.get(name))
    .map(data => +data)
    .reduce((a, b) => a + b, 0);
}
