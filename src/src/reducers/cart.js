import { getItemCount, FETCH_CART_ITEMS, RECEIVE_CART_ITEMS } from '../actions/cart';

export const NOT_LOADED = 0;
export const LOADING = 1;
export const LOADED = 2;

const initialState = {
  itemCount: getItemCount(),
  itemLoadState: NOT_LOADED,
  items: []
};

export function cart(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return {
        ...state,
        itemLoadState: LOADING
      };

    case RECEIVE_CART_ITEMS:
      return {
        ...state,
        itemLoadState: LOADED,
        items: action.data
      };

    default:
      return state;
  }
}
