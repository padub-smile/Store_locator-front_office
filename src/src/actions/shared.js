import { getData } from '../services/shared';

export const FETCH_DATA = 'FETCH_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export function fetchData(dispatch) {
  dispatch({type: FETCH_DATA});
  getData()
    .then(responses => responses.map(response => response.json()))
    .then(promises => Promise.all(promises))
    .then(data => dispatch({
      type: RECEIVE_DATA,
      data
    }));
}

export const DISPLAY_TYPE_UPDATED = 'DISPLAY_TYPE_UPDATED';
export function updateDisplayType(dispatch, displayType) {
  dispatch({
    type: DISPLAY_TYPE_UPDATED,
    data: displayType
  });
}

export const DISPLAY_MODE_UPDATED = 'DISPLAY_MODE_UPDATED';
export function updateDisplayMode(dispatch, displayMode) {
  dispatch({
    type: DISPLAY_MODE_UPDATED,
    data: displayMode
  });
}
