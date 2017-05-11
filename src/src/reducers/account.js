import { getIsConnected } from '../actions/account'

const initialState = {
  isConnected: getIsConnected()
};

export function account(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
