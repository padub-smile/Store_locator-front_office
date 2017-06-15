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
export const SEARCH = 'SEARCH';
export function search(dispatch, viewport, position = null) {
  dispatch({
    type: SEARCH,
    viewport,
    position
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
