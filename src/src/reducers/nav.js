import url from 'url';

import { RECEIVE_METANAV, RECEIVE_NAV_MOBILE, RECEIVE_SUBNAV, TOGGLE_NAV_MOBILE } from '../actions/nav';

const initialState = {
  activeMenu: url.parse(window.location.href, true).query.activeMenu,
  isNavMobileOpen: false,
  metanav: {},
  navMobile: {},
  subnav: []
};

export function nav(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_METANAV:
      return {
        ...state,
        metanav: action.data
      };

    case RECEIVE_NAV_MOBILE:
      return {
        ...state,
        navMobile: action.data
      };

    case RECEIVE_SUBNAV:
      return {
        ...state,
        subnav: action.data
      };

    case TOGGLE_NAV_MOBILE:
      return {
        ...state,
        isNavMobileOpen: action.data
      };

    default:
      return state;
  }
}
