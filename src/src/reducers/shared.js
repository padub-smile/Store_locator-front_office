import { FETCH_DATA, RECEIVE_DATA, DISPLAY_UPDATED } from '../actions/shared';

export const DISPLAY_MOBILE = 0;
export const DISPLAY_DESKTOP = 1;

const initialState = {
  isLoading: false,
  dataCdc: null,
  dataPcd: null,
  display: window.matchMedia('(min-width: 992px)').matches ? DISPLAY_DESKTOP : DISPLAY_MOBILE
};

export function shared(state = initialState, action) {
  switch (action.type) {
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

    case DISPLAY_UPDATED:
      return {
        ...state,
        display: action.data
      };

    default:
      return state;
  }
}
