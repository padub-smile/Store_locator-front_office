import { getItemCount, FETCH_FAVORITE_ITEMS, RECEIVE_FAVORITE_ITEMS } from '../actions/favorite'

export const NOT_LOADED = 0;
export const LOADING = 1;
export const LOADED = 2;

const initialState = {
  itemCount: getItemCount(),
  itemLoadState: NOT_LOADED,
  items: []
};

export function favorite(state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVORITE_ITEMS:
      return {
        ...state,
        itemLoadState: LOADING
      };

    case RECEIVE_FAVORITE_ITEMS:
      return {
        ...state,
        itemLoadState: LOADED,
        items: action.data
      };

    default:
      return state;
  }
}
