import { getItemCount } from '../actions/cart'

const initialState = {
  itemCount: getItemCount()
};

export function cart(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
