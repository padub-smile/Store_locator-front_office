import { getItemCount } from '../actions/favorite'

const initialState = {
  itemCount: getItemCount()
};

export function favorite(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
