import { getFilters, getPointsOfSale, getSearchResults } from '../services/pointOfSale';

export const RECEIVE_POINTS_OF_SALE = 'RECEIVE_POINTS_OF_SALE';
export function fetchPointsOfSale(dispatch) {
  getPointsOfSale()
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_POINTS_OF_SALE,
      data: json
    }));
}

const REQUEST_MAX_ITEMS = 50;
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export function fetchSearchResults(dispatch, ids) {
  const requestIds = [];
  while (ids.length > 0) {
    requestIds.push(ids.splice(0, REQUEST_MAX_ITEMS));
  }

  const promises = requestIds
    .map(ids => getSearchResults(ids));

  Promise
    .all(promises)
    .then(responses => responses.map(response => response.json()))
    .then(promises => Promise.all(promises))
    .then(jsons => dispatch({
      type: RECEIVE_SEARCH_RESULTS,
      data: jsons.reduce((prev, json) => {
        prev.Count += json.Count;
        prev.Items = prev.Items.concat(json.Items);
        return prev;
      }, {Count: 0, Items: []})
    }));
}

export const RECEIVE_FILTERS = 'RECEIVE_FILTERS';
export function fetchFilters(dispatch) {
  getFilters()
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_FILTERS,
      data: json
    }));
}

export const SELECT_POINTS_OF_SALE = 'SELECT_POINTS_OF_SALE';
export function selectPointOfSale(dispatch, id) {
  dispatch({
    type: SELECT_POINTS_OF_SALE,
    data: id
  });
}

export const MAP_IS_READY = 'MAP_IS_READY';
export function mapIsReady(dispatch) {
  dispatch({type: MAP_IS_READY});
}

export const MARKERS_UPDATED = 'MARKERS_UPDATED';
export function updateVisibleMarkers(dispatch, markers, zoom) {
  dispatch({
    type: MARKERS_UPDATED,
    markers,
    zoom
  });
}

export const TOGGLE_ITINERARY = 'TOGGLE_ITINERARY';
export function toggleItinerary(dispatch, id, state) {
  dispatch({
    type: TOGGLE_ITINERARY,
    id,
    state
  });
}

export const CHANGE_TRAVEL_MODE = 'CHANGE_TRAVEL_MODE';
export function changeTravelMode(dispatch, mode) {
  dispatch({
    type: CHANGE_TRAVEL_MODE,
    data: mode
  });
}

export const SET_CURRENT_ADDRESS = 'SET_CURRENT_ADDRESS';
export function setCurrentAddress(dispatch, address) {
  dispatch({
    type: SET_CURRENT_ADDRESS,
    data: address
  });
}

export const FETCH_ITINERARY = 'FETCH_ITINERARY';
const directionsService = new window.google.maps.DirectionsService();
export function fetchItinerary(dispatch, origin, destination, travelMode) {
  var request = {origin, destination, travelMode};
  directionsService.route(request, function(response, status) {
    if (status === 'OK') {
      dispatch({
        type: FETCH_ITINERARY,
        data: response
      });
    }
  });
}

export const SEARCH = 'SEARCH';
const geocoder = new window.google.maps.Geocoder();
export function search(dispatch, viewport, position = null) {
  dispatch({
    type: SEARCH,
    viewport,
    position
  });
  if (position) {
    geocoder.geocode({'location': position}, (results, status) => {
      if (status === 'OK') {
        dispatch({
          type: SET_CURRENT_ADDRESS,
          data: results[0].formatted_address
        });
      }
    });
  }
}

export const OPEN_ITINERARY_DETAILS = 'OPEN_ITINERARY_DETAILS';
export function openItineraryDetails(dispatch) {
  dispatch({type: OPEN_ITINERARY_DETAILS});
}

export const CLOSE_ITINERARY_DETAILS = 'CLOSE_ITINERARY_DETAILS';
export function closeItineraryDetails(dispatch) {
  dispatch({type: CLOSE_ITINERARY_DETAILS});
}

export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export function updateFilters(dispatch, filters) {
  dispatch({
    type: UPDATE_FILTERS,
    data: filters
  });
}
