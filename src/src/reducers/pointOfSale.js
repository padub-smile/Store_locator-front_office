import { RECEIVE_POINTS_OF_SALE, RECEIVE_SEARCH_RESULTS, RECEIVE_FILTERS } from '../actions/pointOfSale'

const initialState = {
  items: [],
  filters: {},
  searchCount: 0,
  searchResults: []
};

export function pointOfSale(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POINTS_OF_SALE:
      return {
        ...state,
        items: action.data.items
      };

    case RECEIVE_SEARCH_RESULTS:
      return {
        ...state,
        searchCount: action.data.Count,
        searchResults: action.data.Items
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
