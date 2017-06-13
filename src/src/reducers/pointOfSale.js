import { RECEIVE_POINTS_OF_SALE, RECEIVE_SEARCH_RESULTS, RECEIVE_FILTERS, SELECT_POINTS_OF_SALE } from '../actions/pointOfSale'

const initialState = {
  items: [],
  filters: {},
  searchCount: 0,
  searchResults: [],
  selectedId: null
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
        searchResults: action.data.Items,
        selectedId: null
      };

    case RECEIVE_FILTERS:
      return {
        ...state,
        filters: action.data
      };

    case SELECT_POINTS_OF_SALE:
      return {
        ...state,
        selectedId: action.data
      };

    default:
      return state;
  }
}
