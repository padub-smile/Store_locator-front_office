import fetch from 'isomorphic-fetch'

export const RECEIVE_METANAV = 'RECEIVE_METANAV';
export function fetchMetanav(dispatch) {
  fetch('/fixtures/metanav.json')
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_METANAV,
      data: json
    }));
}
