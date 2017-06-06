import Cookie from 'js-cookie';

export function getItemCount() {
  const cookieName = 'cdc_wishlist_items_id';
  const cookieData = Cookie.get(cookieName);
  return cookieData
    ? cookieData.split(',').length
    : 0;
}
