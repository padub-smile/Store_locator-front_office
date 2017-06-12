export const SEARCH = 'SEARCH';
export function search(dispatch, viewport) {
  dispatch({
    type: SEARCH,
    data: viewport
  });
}

export const MAP_IS_READY = 'MAP_IS_READY';
export function mapIsReady(dispatch) {
  dispatch({type: MAP_IS_READY});
}

export const MARKERS_UPDATED = 'MARKERS_UPDATED';
export function updateVisibleMarkers(dispatch, markers, zoom, center) {
  dispatch({
    type: MARKERS_UPDATED,
    markers,
    zoom,
    center
  });
}