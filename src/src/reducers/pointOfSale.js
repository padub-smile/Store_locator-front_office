import { RECEIVE_POINTS_OF_SALE, RECEIVE_FILTERS } from '../actions/pointOfSale'

const initialState = {
  items: [],
  filters: {}
};

export function pointOfSale(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POINTS_OF_SALE:
      return {
        ...state,
        items: action.data.items
      };

    case RECEIVE_FILTERS:
      return {
        ...state,
        filters: action.data
      };

    default:
      return state;
  }
}
