import Cookie from 'js-cookie';

const cookieNames = ['cdc_wishlist_items_id', 'pcd_wishlist_items_id'];
export function getItemCount() {
  return cookieNames
    .map(name => Cookie.get(name))
    .map(data => data ? data.split(',').length : 0)
    .reduce((a, b) => a + b, 0);
}

export const FETCH_FAVORITE_ITEMS = 'FETCH_FAVORITE_ITEMS';
export const RECEIVE_FAVORITE_ITEMS = 'RECEIVE_FAVORITE_ITEMS';
export function fetchFavoriteItems(dispatch) {
  const apis = ['/fixtures/favorite-cdc.json', '/fixtures/favorite-pcd.json'];

  dispatch({type: FETCH_FAVORITE_ITEMS});
  Promise
    .all(apis.map(url => fetch(url)))
    .then(responses => responses.map(response => response.json()))
    .then(promises => Promise.all(promises))
    .then(data => dispatch({
      type: RECEIVE_FAVORITE_ITEMS,
      data: [...data[0].data, ...data[1].data].splice(0, 5)
    }));
}
