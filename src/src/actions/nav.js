import fetch from 'isomorphic-fetch'

export const TOGGLE_NAV_MOBILE = 'TOGGLE_NAV_MOBILE';
export function toggleNavMobile(dispatch, isOpen) {
  dispatch({
    type: TOGGLE_NAV_MOBILE,
    data: !isOpen
  });
}

export const RECEIVE_NAV_MOBILE = 'RECEIVE_NAV_MOBILE';
export function fetchNavMobile(dispatch) {
  fetch('/fixtures/navmobile.json')
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_NAV_MOBILE,
      data: json
    }));
}

export const RECEIVE_METANAV = 'RECEIVE_METANAV';
export function fetchMetanav(dispatch) {
  fetch('/fixtures/metanav.json')
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_METANAV,
      data: json
    }));
}

export const RECEIVE_SUBNAV = 'RECEIVE_SUBNAV';
export function fetchSubnav(dispatch, activeMenu) {
  fetch(`/fixtures/${activeMenu}.json`)
    .then(response => response.json())
    .then(json => dispatch({
      type: RECEIVE_SUBNAV,
      data: json
    }));
}
