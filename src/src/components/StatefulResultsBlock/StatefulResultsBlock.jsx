import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSearchResults } from '../../actions/pointOfSale'
import { DISPLAY_MOBILE } from '../../reducers/shared';
import { DISPLAY_MODE_LIST } from 'ui-kit/dist/FilterBlock/FilterBlock';

import ResultsBlock, { HIDE_RESULTS, SHOW_RESULTS } from 'ui-kit/dist/ResultsBlock/ResultsBlock';
import ShopBlock from 'ui-kit/dist/ShopBlock/ShopBlock';

export const MIN_SEARCH_ZOOM = 14;

class StatefulResultsBlock extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.zoom >= MIN_SEARCH_ZOOM && this.props.markers !== prevProps.markers) {
      const ids = this.props.markers
        .map(marker => marker.key)
        .join(',');
      this.props.fetchSearchResults(ids);
    }
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  distanceInKm(lat1, lng1, lat2, lng2) {
    const earthRadiusKm = 6371;

    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLng = this.degreesToRadians(lng2 - lng1);

    const radLat1 = this.degreesToRadians(lat1);
    const radLat2 = this.degreesToRadians(lat2);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLng/2) * Math.sin(dLng/2) * Math.cos(radLat1) * Math.cos(radLat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return Math.abs(earthRadiusKm * c);
  }

  formatDistance(distance) {
    return parseInt(distance * 10, 10) / 10 + 'km';
  }

  render() {
    let height = '550px';
    if (this.props.displayType === DISPLAY_MOBILE) {
      height = 'calc((100vh - 65px) - 140px)';
    }

    let state = HIDE_RESULTS;
    if (this.props.displayMode === DISPLAY_MODE_LIST) {
      state = SHOW_RESULTS;
    }

    let diorShops = [];
    let otherShops = [];
    if (this.props.center && this.props.searchResults && this.props.searchResults.length > 0) {
      const lat = this.props.center.lat();
      const lng = this.props.center.lng();

      const markers = this.props.markers.reduce((prev, marker) => {
        prev[marker.key] = marker;
        return prev;
      }, {});

      const searchResults = this.props.searchResults
        .map(item => (item.distance = this.distanceInKm(item.lat, item.lng, lat, lng)) && item);
      searchResults
        .sort(this.sortByDistance)
        .forEach((item, index) => markers[item.id] && markers[item.id].setLabel({
          text: index + 1 + '',
          color: 'white',
          fontFamily: 'Century-Gothic, Arial, sans-serif',
          fontWeight: 'bold'
        }));

      diorShops = searchResults
        .filter(item => item.typeParent === 'Dior')
        .map((item, index) => (
          <ShopBlock
            shop={item}
            distance={this.formatDistance(item.distance)}
            number={index + 1}
          />
        ));
      otherShops = searchResults
        .filter(item => item.typeParent !== 'Dior')
        .map((item, index) => (
          <ShopBlock
            shop={item}
            distance={this.formatDistance(item.distance)}
            number={index + 1}
          />
        ));
    }

    return (<ResultsBlock
      diorShops={diorShops}
      diorShopsTitle="Boutiques Dior"
      displayResults={state}
      height={height}
      otherShops={otherShops}
      otherShopsTitle="Autres boutiques"
    />);
  }

  sortByDistance(a, b) {
    return a.distance - b.distance;
  }
}

const mapStateToProps = (state) => {
  return {
    center: state.map.center,
    displayType: state.shared.displayType,
    displayMode: state.shared.displayMode,
    markers: state.map.markers,
    searchResults: state.pointOfSale.searchResults,
    zoom: state.map.zoom
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: fetchSearchResults.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulResultsBlock);
