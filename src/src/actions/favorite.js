import Cookie from 'js-cookie';

import { FAVORITE_CDC_COOKIE, FAVORITE_PCD_COOKIE } from '../settings/favorite';
import { getFavorite } from '../services/favorite';

export function getItemCount() {
  return [FAVORITE_CDC_COOKIE, FAVORITE_PCD_COOKIE]
    .map(name => Cookie.get(name))
    .map(data => data ? data.split(',').length : 0)
    .reduce((a, b) => a + b, 0);
}

export const FETCH_FAVORITE_ITEMS = 'FETCH_FAVORITE_ITEMS';
export const RECEIVE_FAVORITE_ITEMS = 'RECEIVE_FAVORITE_ITEMS';
export function fetchFavoriteItems(dispatch) {
  dispatch({type: FETCH_FAVORITE_ITEMS});
  getFavorite()
    .then(responses => responses.map(response => response.json()))
    .then(promises => Promise.all(promises))
    .then(data => dispatch({
      type: RECEIVE_FAVORITE_ITEMS,
      data: [...data[0].data, ...data[1].data].splice(0, 5)
    }));
}
