import { TOGGLE_NAV_MOBILE } from '../actions/navMobile'

const initialState = {
  isOpen: false
};

export function navMobile(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV_MOBILE:
      return {
        ...state,
        isOpen: action.data
      };

    default:
      return state;
  }
}
