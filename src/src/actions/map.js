export const SEARCH = 'SEARCH';
export function search(dispatch, viewport) {
  dispatch({
    type: SEARCH,
    data: viewport
  });
}

export const MAP_IS_READY = 'MAP_IS_READY';
export function mapReady(dispatch) {
  dispatch({type: MAP_IS_READY});
}
