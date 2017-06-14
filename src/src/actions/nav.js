import fetch from 'isomorphic-fetch'

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
  fetch('/fixtures/navmobile.json')
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
  fetch('/fixtures/navmobile_links.json')
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
  fetch('/fixtures/metanav.json')
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
  fetch(`/fixtures/${activeMenu}.json`)
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_SUBNAV,
      data: json
    }));
}
