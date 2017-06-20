import React, { Component } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import {
  changeTravelMode,
  fetchItinerary,
  fetchSearchResults,
  selectPointOfSale,
  setCurrentAddress,
  toggleItinerary
} from '../../actions/pointOfSale'
import { DISPLAY_TYPE_MOBILE } from '../../reducers/shared';
import { DISPLAY_MODE_LIST } from 'ui-kit/src/components/FilterBlock/FilterBlock';

import Itinerary from 'ui-kit/src/components/Itinerary/Itinerary';
import ResultsBlock, { HIDE_RESULTS, SHOW_RESULTS } from 'ui-kit/src/components/ResultsBlock/ResultsBlock';
import ShopBlock from 'ui-kit/src/components/ShopBlock/ShopBlock';

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

  formatDistance(distance) {
    if (distance) {
      return parseInt(distance * 10, 10) / 10 + 'km';
    }
  }

  formatShop(item, number) {
    const isSelected = this.props.selectedId === item.id;
    const itineraryElement = (
      <Itinerary
        arrival={`${item.defaultStreet1}, ${item.defaultZipCode} ${item.defaultCity}, ${item.countryCode}`}
        changeTravelModeCallback={this.props.changeTravelMode}
        departure={this.props.currentAddress}
        isGeolocationAvailable={this.props.isGeolocationAvailable}
        setCurrentAddress={this.props.setCurrentAddress}
        submitCallback={this.props.fetchItinerary}
        travelMode={this.props.travelMode}
      />
    );
    const shopElement = (
      <ShopBlock
        distance={this.formatDistance(item.distance)}
        isItineraryVisible={this.props.isItineraryVisible && isSelected}
        isSelected={isSelected}
        itineraryCallback={this.props.toggleItinerary.bind(null, item.id)}
        number={number}
        shop={item}
        triggerCallback={this.props.triggerCallback.bind(null, item.id)}
      >{itineraryElement}</ShopBlock>
    );
    return {
      element: shopElement,
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

    let diorShops = [];
    if (this.props.searchResultsDior.length > 0) {
      diorShops = this.props.searchResultsDior
        .map((item, index) => this.formatShop(item, index + 1));
    }

    let otherShops = [];
    if (this.props.searchResultsOther.length > 0) {
      const length = Object.keys(diorShops).length;
      otherShops = this.props.searchResultsOther
        .map((item, index) => this.formatShop(item, index + length + 1));
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
    currentAddress: state.pointOfSale.currentAddress,
    displayType: state.shared.displayType,
    displayMode: state.shared.displayMode,
    isItineraryVisible: state.pointOfSale.isItineraryVisible,
    isGeolocationAvailable: state.shared.isGeolocationAvailable,
    markers: state.pointOfSale.markers,
    searchResultsDior: state.pointOfSale.searchResultsDior,
    searchResultsOther: state.pointOfSale.searchResultsOther,
    selectedId: state.pointOfSale.selectedId,
    travelMode: state.pointOfSale.travelMode,
    zoom: state.pointOfSale.zoom
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTravelMode: changeTravelMode.bind(null, dispatch),
    fetchItinerary: fetchItinerary.bind(null, dispatch),
    fetchSearchResults: fetchSearchResults.bind(null, dispatch),
    setCurrentAddress: setCurrentAddress.bind(null, dispatch),
    toggleItinerary: toggleItinerary.bind(null, dispatch),
    triggerCallback: selectPointOfSale.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulResultsBlock);
