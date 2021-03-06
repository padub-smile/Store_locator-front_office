import url from 'url';
import R from 'ramda';

import {
  CHANGE_TRAVEL_MODE,
  CLOSE_ITINERARY_DETAILS,
  FETCH_ITINERARY,
  MAP_IS_READY,
  MARKERS_UPDATED,
  OPEN_ITINERARY_DETAILS,
  RECEIVE_POINTS_OF_SALE,
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_FILTERS,
  SEARCH,
  SELECT_POINTS_OF_SALE,
  SET_CURRENT_ADDRESS,
  TOGGLE_CATEGORY_FILTER,
  TOGGLE_ITINERARY,
  UPDATE_FILTERS
} from '../actions/pointOfSale'
import { TRAVEL_MODES } from 'ui-kit/src/components/Itinerary/Itinerary';

export const MAP_NOT_READY = 0;
export const MAP_READY = 1;

const parsedUrl = url.parse(window.location.href, true);
let selectedId = parsedUrl.query.shop;
let filtersSelected = parsedUrl.query.filters;

const initialState = {
  allItems: [],
  categoryOpen: null,
  currentAddress: '',
  directionsDisplay: new window.google.maps.DirectionsRenderer(),
  items: [],
  itinerary: null,
  isItineraryVisible: false,
  isItineraryDetailsOpen: false,
  isMapReady: MAP_NOT_READY,
  filters: {},
  filtersSelected: filtersSelected ? filtersSelected.split(',') : [],
  markers: [],
  searchCount: 0,
  searchPosition: null,
  searchResultsDior: [],
  searchResultsOther: [],
  searchViewport: null,
  searchValue: selectedId ? null : 'France',
  selectedId: null,
  travelMode: Object.keys(TRAVEL_MODES)[0],
  zoom: null
};

export function pointOfSale(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TRAVEL_MODE:
      return {
        ...state,
        travelMode: action.data
      };

    case CLOSE_ITINERARY_DETAILS:
      return {
        ...state,
        isItineraryDetailsOpen: false
      };

    case FETCH_ITINERARY:
      return {
        ...state,
        itinerary: action.data
      };

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

    case OPEN_ITINERARY_DETAILS:
      return {
        ...state,
        isItineraryDetailsOpen: true
      };

    case RECEIVE_POINTS_OF_SALE:
      if (selectedId) {
        state.selectedId = selectedId;
        selectedId = null;
      }
      return {
        ...state,
        allItems: action.data.items,
        items: filterItems(state.filtersSelected, action.data.items)
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
      if (filtersSelected) {
        action.data.universes
          .forEach((univers, index) => {
            if (univers.subUniverses.filter(subUnivers => subUnivers.id === state.filtersSelected[0]).length) {
              state.categoryOpen = index;
            }
          });
      }
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

    case SET_CURRENT_ADDRESS:
      return {
        ...state,
        currentAddress: action.data,
        searchValue: action.data
      };

    case TOGGLE_CATEGORY_FILTER:
      return {
        ...state,
        categoryOpen: action.data
      };

    case TOGGLE_ITINERARY:
      return {
        ...state,
        isItineraryVisible: action.state,
        itinerary: action.state ? state.itinerary : null,
        selectedId: action.id
      };

    case UPDATE_FILTERS:
      return {
        ...state,
        filtersSelected: action.data,
        items: filterItems(action.data, state.allItems)
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

function filterItems(filters, items) {
  if (filters && filters.length > 0) {
    return items
      .filter(item => item[3] && item[3].length > 0 && R.intersection(item[3], filters).length > 0);
  }
  return items;
}
