import fetch from 'isomorphic-fetch';

export const FETCH_DATA = 'FETCH_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export function fetchData(dispatch) {
  const apis = ['/fixtures/data-cdc.json', '/fixtures/data-pcd.json'];

  dispatch({type: FETCH_DATA});
  Promise
    .all(apis.map(url => fetch(url)))
    .then(responses => responses.map(response => response.json()))
    .then(promises => Promise.all(promises))
    .then(data => dispatch({
      type: RECEIVE_DATA,
      data
    }));
}
