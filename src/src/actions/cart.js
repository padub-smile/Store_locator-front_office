import Cookie from 'js-cookie';

export function getItemCount() {
  const cookieName = 'cdc_cart_items_count';
  return +Cookie.get(cookieName);
}
