export const FAVORITE_CDC_COOKIE = 'cdc_wishlist_items_id';
export const FAVORITE_PCD_COOKIE = 'pcd_wishlist_items_id';

export const FAVORITE_CDC_URLS = {
  development: '/fixtures/favorite-cdc.json',
  test: '/fixtures/favorite-cdc.json',
  production: 'https://www.dior.com/couture/fr_fr/ws/v1/wishlistDetails?limit=5'
};

export const FAVORITE_PDC_URLS = {
  development: '/fixtures/favorite-pcd.json',
  test: '/fixtures/favorite-pcd.json',
  production: 'https://wws.dior.com/beauty/fr_fr/ws/v1/wishlistDetails.html?market=FR'
};
