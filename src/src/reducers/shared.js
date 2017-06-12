import { DISPLAY_MODE_UPDATED, DISPLAY_TYPE_UPDATED, FETCH_DATA, RECEIVE_DATA } from '../actions/shared';

import { DISPLAY_MODE_MAP } from 'ui-kit/dist/FilterBlock/FilterBlock';

export const DISPLAY_MOBILE = 0;
export const DISPLAY_DESKTOP = 1;

const initialState = {
  dataCdc: null,
  dataPcd: null,
  displayType: window.matchMedia('(min-width: 992px)').matches ? DISPLAY_DESKTOP : DISPLAY_MOBILE,
  displayMode: DISPLAY_MODE_MAP,
  isLoading: false
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
        isLoading: true
      };

    case RECEIVE_DATA:
      return {
        ...state,
        dataCdc: action.data[0],
        dataPcd: action.data[1],
        isLoading: false
      };

    default:
      return state;
  }
}
