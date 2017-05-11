import Cookie from 'js-cookie';

export function getItemCount() {
  const cookieName = 'cdc_wishlist_items_id';
  return Cookie.get(cookieName).split(',').length;
}
