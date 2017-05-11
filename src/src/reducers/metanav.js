import { RECEIVE_METANAV } from '../actions/metanav'

const initialState = {
  data: {}
};

export function metanav(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_METANAV:
      return {
        ...state,
        data: action.data
      };

    default:
      return state;
  }
}
