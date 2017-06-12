import { MAP_IS_READY, SEARCH } from '../actions/map'

export const MAP_NOT_READY = 0;
export const MAP_READY = 1;

const initialState = {
  isMapReady: MAP_NOT_READY,
  searchLocation: null,
  searchValue: 'France'
};

export function map(state = initialState, action) {
  switch (action.type) {
    case MAP_IS_READY:
      return {
        ...state,
        isMapReady: MAP_READY
      };

    case SEARCH:
      return {
        ...state,
        searchLocation: action.data
      };

    default:
      return state;
  }
}
