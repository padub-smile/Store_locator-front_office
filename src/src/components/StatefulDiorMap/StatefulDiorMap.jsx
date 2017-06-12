import { connect } from 'react-redux'

import { mapIsReady, updateVisibleMarkers } from '../../actions/map';

import DiorMap from 'ui-kit/dist/DiorMap/DiorMap';

const mapStateToProps = (state) => {
  if (state.map.searchLocation instanceof window.google.maps.LatLngBounds) {
    return {
      location: state.map.searchLocation,
      markers: state.pointOfSale.items
    }
  } else if (state.map.searchLocation instanceof window.google.maps.LatLng) {
    return {
      center: state.map.searchLocation,
      markers: state.pointOfSale.items,
      zoom: 15
    }
  } else {
    return {
      markers: state.pointOfSale.items
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapReady: mapIsReady.bind(null, dispatch),
    updateVisibleMarkers: updateVisibleMarkers.bind(null, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiorMap);
