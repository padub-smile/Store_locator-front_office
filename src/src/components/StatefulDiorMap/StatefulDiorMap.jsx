import { connect } from 'react-redux'

import { mapIsReady, updateVisibleMarkers } from '../../actions/map';
import { selectPointOfSale } from '../../actions/pointOfSale';

import DiorMap from 'ui-kit/dist/DiorMap/DiorMap';

export const DEFAULT_POINT_ZOOM = 15;

const mapStateToProps = (state) => {
  const props = {};
  if (state.pointOfSale.selectedId) {
    props.selectedMarker = state.pointOfSale.selectedId;
  }
  if (state.map.searchLocation instanceof window.google.maps.LatLngBounds) {
    props.location = state.map.searchLocation;
  } else if (state.map.searchLocation instanceof window.google.maps.LatLng) {
    props.center = state.map.searchLocation;
    props.zoom = DEFAULT_POINT_ZOOM;
  }
  props.markers = state.pointOfSale.items;
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapReady: mapIsReady.bind(null, dispatch),
    markerClicked: function() {
      // Clicked marker is bound to "this".
      selectPointOfSale(dispatch, this.key);
    },
    updateVisibleMarkers: updateVisibleMarkers.bind(null, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiorMap);
