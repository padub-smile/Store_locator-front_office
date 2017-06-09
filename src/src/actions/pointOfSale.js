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
