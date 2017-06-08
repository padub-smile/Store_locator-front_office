import { FETCH_DATA, RECEIVE_DATA } from '../actions/shared';

const initialState = {
  isLoading: false,
  dataCdc: null,
  dataPcd: null
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

    default:
      return state;
  }
}
