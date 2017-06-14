import { getItemCount, FETCH_CART_ITEMS, RECEIVE_CART_ITEMS } from '../actions/cart';

export const CART_NOT_LOADED = 0;
export const CART_LOADING = 1;
export const CART_LOADED = 2;

const initialState = {
  itemCount: getItemCount(),
  itemLoadState: CART_NOT_LOADED,
  items: []
};

export function cart(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return {
        ...state,
        itemLoadState: CART_LOADING
      };

    case RECEIVE_CART_ITEMS:
      return {
        ...state,
        itemLoadState: CART_LOADED,
        items: action.data
      };

    default:
      return state;
  }
}
