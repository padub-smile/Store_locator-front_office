import Cookie from 'js-cookie';

const cookieNames = ['cdc_wishlist_items_id', 'pcd_wishlist_items_id'];

export function getItemCount() {
  return cookieNames
    .map(name => Cookie.get(name))
    .map(data => data ? data.split(',').length : 0)
    .reduce((a, b) => a + b, 0);
}
