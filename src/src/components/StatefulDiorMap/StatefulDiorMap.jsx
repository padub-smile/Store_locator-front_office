import { connect } from 'react-redux'

import { mapIsReady, selectPointOfSale, updateVisibleMarkers } from '../../actions/pointOfSale';

import DiorMap, { POINT_ZOOM_LEVEL } from 'ui-kit/dist/DiorMap/DiorMap';

const mapStateToProps = (state) => {
  const props = {};

  const diorIds = state.pointOfSale.searchResultsDior.map(item => item.id);
  const otherIds = state.pointOfSale.searchResultsOther.map(item => item.id);
  props.idsWithLabels = diorIds.concat(otherIds);

  if (state.pointOfSale.selectedId) {
    props.selectedMarker = state.pointOfSale.selectedId;
  }

  props.location = state.pointOfSale.searchViewport;
  props.center = state.pointOfSale.searchPosition;
  props.zoom = POINT_ZOOM_LEVEL;
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
