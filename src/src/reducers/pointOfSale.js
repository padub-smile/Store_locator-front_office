import { RECEIVE_POINTS_OF_SALE } from '../actions/pointOfSale'

const initialState = {
  items: []
};

export function pointOfSale(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POINTS_OF_SALE:
      return {
        ...state,
        items: action.data.items
      };

    default:
      return state;
  }
}
