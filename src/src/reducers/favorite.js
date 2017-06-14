import { getItemCount, FETCH_FAVORITE_ITEMS, RECEIVE_FAVORITE_ITEMS } from '../actions/favorite'

export const FAVORITE_NOT_LOADED = 0;
export const FAVORITE_LOADING = 1;
export const FAVORITE_LOADED = 2;

const initialState = {
  itemCount: getItemCount(),
  itemLoadState: FAVORITE_NOT_LOADED,
  items: []
};

export function favorite(state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVORITE_ITEMS:
      return {
        ...state,
        itemLoadState: FAVORITE_LOADING
      };

    case RECEIVE_FAVORITE_ITEMS:
      return {
        ...state,
        itemLoadState: FAVORITE_LOADED,
        items: action.data
      };

    default:
      return state;
  }
}
