import React, { Component } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { fetchSearchResults, selectPointOfSale } from '../../actions/pointOfSale'
import { DISPLAY_TYPE_MOBILE } from '../../reducers/shared';
import { DISPLAY_MODE_LIST } from 'ui-kit/dist/FilterBlock/FilterBlock';

import ResultsBlock, { HIDE_RESULTS, SHOW_RESULTS } from 'ui-kit/dist/ResultsBlock/ResultsBlock';
import ShopBlock from 'ui-kit/dist/ShopBlock/ShopBlock';

export const MIN_SEARCH_ZOOM = 14;

class StatefulResultsBlock extends Component {
  componentWillUpdate(nextProps) {
    console.log(nextProps.zoom, nextProps.markers);
    if (nextProps.zoom >= MIN_SEARCH_ZOOM && nextProps.markers !== this.props.markers) {
      // Fetch search results.
      const ids = nextProps.markers.map(marker => marker.key);
      nextProps.fetchSearchResults(ids);
    } else if (nextProps.selectedId) {
      const searchResults = nextProps.searchResultsDior.concat(nextProps.searchResultsOther);
      const selectedShop = R.find(R.propEq('id', nextProps.selectedId))(searchResults);
      if (!selectedShop) {
        // Fetch search results for selected shop.
        nextProps.fetchSearchResults([nextProps.selectedId]);
      }
    }
  }

  formatDistance(distance) {
    if (distance) {
      return parseInt(distance * 10, 10) / 10 + 'km';
    }
  }

  render() {
    let height = '550px';
    if (this.props.displayType === DISPLAY_TYPE_MOBILE) {
      height = 'calc((100vh - 65px) - 140px)';
    }

    let state = HIDE_RESULTS;
    if (this.props.displayMode === DISPLAY_MODE_LIST) {
      state = SHOW_RESULTS;
    }

    let diorShops = [];
    if (this.props.searchResultsDior.length > 0) {
      diorShops = this.props.searchResultsDior
        .map((item, index) => ({
          element: (<ShopBlock
            distance={this.formatDistance(item.distance)}
            isSelected={item.id === this.props.selectedId}
            number={index + 1}
            shop={item}
            triggerCallback={this.props.triggerCallback.bind(null, item.id)}
          />),
          id: item.id
        }));
    }

    let otherShops = [];
    if (this.props.searchResultsOther.length > 0) {
      const length = Object.keys(diorShops).length;
      otherShops = this.props.searchResultsOther
        .map((item, index) => ({
          element: (<ShopBlock
            distance={this.formatDistance(item.distance)}
            isSelected={item.id === this.props.selectedId}
            number={index + length + 1}
            shop={item}
            triggerCallback={this.props.triggerCallback.bind(null, item.id)}
          />),
          id: item.id
        }));
    }

    return (<ResultsBlock
      diorShops={diorShops}
      diorShopsTitle="Boutiques Dior"
      displayResults={state}
      height={height}
      otherShops={otherShops}
      otherShopsTitle="Autres boutiques"
      selectedId={this.props.selectedId}
    />);
  }
}

const mapStateToProps = (state) => {
  return {
    center: state.pointOfSale.center,
    displayType: state.shared.displayType,
    displayMode: state.shared.displayMode,
    markers: state.pointOfSale.markers,
    searchResultsDior: state.pointOfSale.searchResultsDior,
    searchResultsOther: state.pointOfSale.searchResultsOther,
    selectedId: state.pointOfSale.selectedId,
    zoom: state.pointOfSale.zoom
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: fetchSearchResults.bind(null, dispatch),
    triggerCallback: selectPointOfSale.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulResultsBlock);
