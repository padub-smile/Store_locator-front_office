import { getIsConnected, getName } from '../actions/account'

const initialState = {
  isConnected: getIsConnected(),
  name: getName()
};

export function account(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
