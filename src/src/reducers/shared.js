import { DISPLAY_MODE_UPDATED, DISPLAY_TYPE_UPDATED, FETCH_DATA, RECEIVE_DATA } from '../actions/shared';

import { DISPLAY_MODE_MAP } from 'ui-kit/dist/FilterBlock/FilterBlock';

export const DATA_NOT_LOADED = 0;
export const DATA_LOADING = 1;
export const DATA_LOADED = 2;
export const DISPLAY_TYPE_MOBILE = 0;
export const DISPLAY_TYPE_DESKTOP = 1;

const initialState = {
  dataCdc: null,
  dataLoadState: DATA_NOT_LOADED,
  dataPcd: null,
  displayType: window.matchMedia('(min-width: 992px)').matches ? DISPLAY_TYPE_DESKTOP : DISPLAY_TYPE_MOBILE,
  displayMode: DISPLAY_MODE_MAP
};

export function shared(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_MODE_UPDATED:
      return {
        ...state,
        displayMode: action.data
      };

    case DISPLAY_TYPE_UPDATED:
      return {
        ...state,
        displayType: action.data
      };

    case FETCH_DATA:
      return {
        ...state,
        dataLoadState: DATA_LOADING
      };

    case RECEIVE_DATA:
      return {
        ...state,
        dataCdc: action.data[0],
        dataPcd: action.data[1],
        dataLoadState: DATA_LOADED
      };

    default:
      return state;
  }
}
