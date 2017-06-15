import R from 'ramda';

import {
  MAP_IS_READY,
  MARKERS_UPDATED,
  RECEIVE_POINTS_OF_SALE,
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_FILTERS,
  SEARCH,
  SELECT_POINTS_OF_SALE
} from '../actions/pointOfSale'

export const MAP_NOT_READY = 0;
export const MAP_READY = 1;

const initialState = {
  items: [],
  isMapReady: MAP_NOT_READY,
  filters: {},
  markers: [],
  searchCount: 0,
  searchPosition: null,
  searchResultsDior: [],
  searchResultsOther: [],
  searchViewport: null,
  searchValue: 'France',
  selectedId: null,
  zoom: null
};

export function pointOfSale(state = initialState, action) {
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
        zoom: action.zoom
      };

    case RECEIVE_POINTS_OF_SALE:
      return {
        ...state,
        items: action.data.items
      };

    case RECEIVE_SEARCH_RESULTS:
      if (state.searchPosition) {
        const lat = state.searchPosition.lat();
        const lng = state.searchPosition.lng();
        action.data.Items.forEach(item => item.distance = distanceInKm(item.lat, item.lng, lat, lng));
        action.data.Items.sort(sortByDistance);
      }
      const selectedItem = R.find(R.propEq('id', state.selectedId))(action.data.Items);
      return {
        ...state,
        searchCount: action.data.Count,
        searchResultsDior: action.data.Items.filter(item => item.typeParent === 'Dior'),
        searchResultsOther: action.data.Items.filter(item => item.typeParent !== 'Dior'),
        selectedId: selectedItem ? selectedItem.id : null
      };

    case RECEIVE_FILTERS:
      return {
        ...state,
        filters: action.data
      };

    case SEARCH:
      return {
        ...state,
        searchViewport: action.viewport,
        searchPosition: action.position
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

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function distanceInKm(lat1, lng1, lat2, lng2) {
  const earthRadiusKm = 6371;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLng = degreesToRadians(lng2 - lng1);

  const radLat1 = degreesToRadians(lat1);
  const radLat2 = degreesToRadians(lat2);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLng/2) * Math.sin(dLng/2) * Math.cos(radLat1) * Math.cos(radLat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return Math.abs(earthRadiusKm * c);
}

function sortByDistance(a, b) {
  return a.distance - b.distance;
}
