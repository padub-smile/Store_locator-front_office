import fetch from 'isomorphic-fetch'

export const RECEIVE_POINTS_OF_SALE = 'RECEIVE_POINTS_OF_SALE';
export function fetchPointsOfSale(dispatch) {
  fetch('/fixtures/pos_position.json')
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_POINTS_OF_SALE,
      data: json
    }));
}

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export function fetchSearchResults(dispatch, ids) {
  fetch(`/fixtures/pos_list.json?ids=${ids}`)
  //fetch(`https://51y3jl17xa.execute-api.eu-west-1.amazonaws.com/beta/PointOfSale?ids=${ids}`)
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_SEARCH_RESULTS,
      data: json
    }));
}

export const RECEIVE_FILTERS = 'RECEIVE_FILTERS';
export function fetchFilters(dispatch) {
  fetch('/fixtures/filters_list.json')
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_FILTERS,
      data: json
    }));
}
