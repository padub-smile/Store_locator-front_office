import fetch from 'isomorphic-fetch';
import { DISPLAY_DESKTOP, DISPLAY_MOBILE } from '../reducers/shared';

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

export const DISPLAY_UPDATED = 'DISPLAY_UPDATED';
export function displayMobile(dispatch) {
  dispatch({
    type: DISPLAY_UPDATED,
    data: DISPLAY_MOBILE
  });
}
export function displayDesktop(dispatch) {
  dispatch({
    type: DISPLAY_UPDATED,
    data: DISPLAY_DESKTOP
  });
}
