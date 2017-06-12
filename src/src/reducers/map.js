import { MAP_IS_READY, MARKERS_UPDATED, SEARCH } from '../actions/map'

export const MAP_NOT_READY = 0;
export const MAP_READY = 1;

const initialState = {
  center: null,
  isMapReady: MAP_NOT_READY,
  markers: [],
  searchLocation: null,
  searchValue: 'France',
  zoom: null
};

export function map(state = initialState, action) {
  switch (action.type) {
    case MAP_IS_READY:
      return {
        ...state,
        isMapReady: MAP_READY
      };

    case MARKERS_UPDATED:
      return {
        ...state,
        markers: action.markers,
        zoom: action.zoom,
        center: action.center
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
