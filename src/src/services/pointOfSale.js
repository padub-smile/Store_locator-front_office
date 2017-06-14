import fetch from 'isomorphic-fetch'

import { POS_POSITION_URLS, POS_FILTERS_URLS, POS_SEARCH_URLS } from '../settings/pointOfSale';

export function getPointsOfSale() {
  return fetch(POS_POSITION_URLS[process.env.NODE_ENV]);
}

export function getFilters() {
  return fetch(POS_FILTERS_URLS[process.env.NODE_ENV]);
}

export function getSearchResults(ids) {
  return fetch(POS_SEARCH_URLS[process.env.NODE_ENV](ids));
}
