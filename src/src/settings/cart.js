export const CART_CDC_COOKIE = 'cdc_cart_items_count';
export const CART_PCD_COOKIE = 'CartItemsCount';

export const CART_CDC_URLS = {
  development: '/fixtures/cart-cdc.json',
  test: '/fixtures/cart-cdc.json',
  production: 'https://wwws.dior.com/couture/ecommerce/checkout/cart/getjsoncartitems_V2'
};

export const CART_PDC_URLS = {
  development: '/fixtures/cart-pcd.json',
  test: '/fixtures/cart-pcd.json',
  production: 'http://www.dior.com/beauty/fr_fr/get-basket.json?cart=true'
};
