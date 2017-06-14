import fetch from 'isomorphic-fetch'

import { NAV_METANAV_URLS, NAV_MOBILE_LINKS_URLS, NAV_MOBILE_URLS, NAV_SUBNAV_URLS } from '../settings/nav';

export function getNavMobile() {
  return fetch(NAV_MOBILE_URLS['development']);
}

export function getNavMobileLinks() {
  return fetch(NAV_MOBILE_LINKS_URLS['development']);
}

export function getMetanav() {
  return fetch(NAV_METANAV_URLS['development']);
}

export function getSubnav(universe) {
  return fetch(NAV_SUBNAV_URLS['development'](universe));
}
