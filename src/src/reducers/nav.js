import url from 'url';

import { NAV_AVAILABLE_IDENTIFIERS, NAV_UNIVERSE_QUERY_PARAMETER } from '../settings/nav';
import {
  FETCH_FOOTER,
  FETCH_METANAV,
  FETCH_NAV_MOBILE,
  FETCH_NAV_MOBILE_LINKS,
  FETCH_SUBNAV,
  RECEIVE_FOOTER,
  RECEIVE_METANAV,
  RECEIVE_NAV_MOBILE,
  RECEIVE_NAV_MOBILE_LINKS,
  RECEIVE_SUBNAV,
  TOGGLE_NAV_MOBILE
} from '../actions/nav';

export const FOOTER_NOT_LOADED = 0;
export const FOOTER_LOADING = 1;
export const FOOTER_LOADED = 2;
export const METANAV_NOT_LOADED = 0;
export const METANAV_LOADING = 1;
export const METANAV_LOADED = 2;
export const NAV_MOBILE_NOT_LOADED = 0;
export const NAV_MOBILE_LOADING = 1;
export const NAV_MOBILE_LOADED = 2;
export const NAV_MOBILE_LINKS_NOT_LOADED = 0;
export const NAV_MOBILE_LINKS_LOADING = 1;
export const NAV_MOBILE_LINKS_LOADED = 2;
export const SUBNAV_NOT_LOADED = 0;
export const SUBNAV_LOADING = 1;
export const SUBNAV_LOADED = 2;

const parsedUrl = url.parse(window.location.href, true);
const activeMenu = Object.keys(NAV_AVAILABLE_IDENTIFIERS).indexOf(parsedUrl.query[NAV_UNIVERSE_QUERY_PARAMETER]) !== -1
  ? parsedUrl.query[NAV_UNIVERSE_QUERY_PARAMETER]
  : null;

const initialState = {
  activeMenu,
  footer: {},
  footerLoadState: FOOTER_NOT_LOADED,
  isNavMobileOpen: false,
  isPcd: NAV_AVAILABLE_IDENTIFIERS[activeMenu] === 'pcd',
  metanav: {},
  metanavLoadState: METANAV_NOT_LOADED,
  navMobile: {},
  navMobileLoadState: NAV_MOBILE_NOT_LOADED,
  navMobileLinks: {},
  navMobileLinksLoadState: NAV_MOBILE_LINKS_NOT_LOADED,
  subnav: [],
  subNavLoadState: SUBNAV_NOT_LOADED
};

export function nav(state = initialState, action) {
  switch (action.type) {
    case FETCH_FOOTER:
      return {
        ...state,
        footerLoadState: FOOTER_LOADING
      };

    case FETCH_METANAV:
      return {
        ...state,
        metanavLoadState: METANAV_LOADING
      };

    case FETCH_NAV_MOBILE:
      return {
        ...state,
        navMobileLoadState: NAV_MOBILE_LOADING
      };

    case FETCH_NAV_MOBILE_LINKS:
      return {
        ...state,
        navMobileLinksLoadState: NAV_MOBILE_LINKS_LOADING
      };

    case FETCH_SUBNAV:
      return {
        ...state,
        subNavLoadState: SUBNAV_LOADING
      };

    case RECEIVE_FOOTER:
      return {
        ...state,
        footer: action.data,
        footerLoadState: FOOTER_LOADED
      };

    case RECEIVE_METANAV:
      return {
        ...state,
        metanav: action.data,
        metanavLoadState: METANAV_LOADED
      };

    case RECEIVE_NAV_MOBILE:
      return {
        ...state,
        navMobile: action.data,
        navMobileLoadState: NAV_MOBILE_LOADED
      };

    case RECEIVE_NAV_MOBILE_LINKS:
      return {
        ...state,
        navMobileLinks: action.data,
        navMobileLinksLoadState: NAV_MOBILE_LINKS_LOADED
      };

    case RECEIVE_SUBNAV:
      return {
        ...state,
        subnav: action.data,
        subNavLoadState: SUBNAV_LOADED
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
