import { getFooter, getMetanav, getNavMobile, getNavMobileLinks, getSubnav } from '../services/nav';

export const TOGGLE_NAV_MOBILE = 'TOGGLE_NAV_MOBILE';
export function toggleNavMobile(dispatch, isOpen) {
  dispatch({
    type: TOGGLE_NAV_MOBILE,
    data: !isOpen
  });
}

export const FETCH_NAV_MOBILE = 'v_NAV_MOBILE';
export const RECEIVE_NAV_MOBILE = 'RECEIVE_NAV_MOBILE';
export function fetchNavMobile(dispatch) {
  dispatch({type: FETCH_NAV_MOBILE});
  getNavMobile()
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_NAV_MOBILE,
      data: json
    }));
}

export const FETCH_NAV_MOBILE_LINKS = 'FETCH_NAV_MOBILE_LINKS';
export const RECEIVE_NAV_MOBILE_LINKS = 'RECEIVE_NAV_MOBILE_LINKS';
export function fetchNavMobileLinks(dispatch) {
  dispatch({type: FETCH_NAV_MOBILE_LINKS});
  getNavMobileLinks()
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_NAV_MOBILE_LINKS,
      data: json
    }));
}

export const FETCH_METANAV = 'FETCH_METANAV';
export const RECEIVE_METANAV = 'RECEIVE_METANAV';
export function fetchMetanav(dispatch) {
  dispatch({type: FETCH_METANAV});
  getMetanav()
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_METANAV,
      data: json
    }));
}

export const FETCH_SUBNAV = 'FETCH_SUBNAV';
export const RECEIVE_SUBNAV = 'RECEIVE_SUBNAV';
export function fetchSubnav(dispatch, activeMenu) {
  dispatch({type: FETCH_SUBNAV});
  getSubnav(activeMenu)
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_SUBNAV,
      data: json
    }));
}

export const FETCH_FOOTER = 'FETCH_FOOTER';
export const RECEIVE_FOOTER = 'RECEIVE_FOOTER';
export function fetchFooter(dispatch) {
  dispatch({type: FETCH_FOOTER});
  getFooter()
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_FOOTER,
      data: json
    }));
}
