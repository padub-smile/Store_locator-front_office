import { RECEIVE_METANAV } from '../actions/metanav'

const initialState = {};

export function metanav(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_METANAV:
      return action.data;

    default:
      return state;
  }
}
