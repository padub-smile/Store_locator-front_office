import React, { Component } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { fetchSearchResults } from '../../actions/pointOfSale'
import { DISPLAY_TYPE_MOBILE } from '../../reducers/shared';
import { DISPLAY_MODE_LIST } from 'ui-kit/src/components/FilterBlock/FilterBlock';

import ResultsBlock, { HIDE_RESULTS, SHOW_RESULTS } from 'ui-kit/src/components/ResultsBlock/ResultsBlock';
import StatefulShopBlock from '../StatefulShopBlock/StatefulShopBlock';

export const MIN_SEARCH_ZOOM = 14;

class StatefulResultsBlock extends Component {
  componentWillUpdate(nextProps) {
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

  formatShop(item, number) {
    return {
      element: <StatefulShopBlock shop={item} label={number} />,
      id: item.id
    };
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

    let diorShops = this.props.searchResultsDior;
    let otherShops = this.props.searchResultsOther;

    if (this.props.itinerary) {
      diorShops = diorShops.filter(shop => shop.id === this.props.selectedId);
      otherShops = otherShops.filter(shop => shop.id === this.props.selectedId);
    }

    if (this.props.searchResultsDior.length > 0) {
      diorShops = diorShops.map((item, index) => this.formatShop(item, index + 1));
    }

    if (this.props.searchResultsOther.length > 0) {
      const length = Object.keys(diorShops).length;
      otherShops = otherShops.map((item, index) => this.formatShop(item, index + length + 1));
    }

    return (<ResultsBlock
      diorShops={diorShops}
      displayResults={state}
      height={height}
      otherShops={otherShops}
      selectedId={this.props.selectedId}
    />);
  }
}

const mapStateToProps = (state) => {
  return {
    center: state.pointOfSale.center,
    displayType: state.shared.displayType,
    displayMode: state.shared.displayMode,
    itinerary: state.pointOfSale.itinerary,
    markers: state.pointOfSale.markers,
    searchResultsDior: state.pointOfSale.searchResultsDior,
    searchResultsOther: state.pointOfSale.searchResultsOther,
    selectedId: state.pointOfSale.selectedId,
    zoom: state.pointOfSale.zoom
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: fetchSearchResults.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulResultsBlock);
