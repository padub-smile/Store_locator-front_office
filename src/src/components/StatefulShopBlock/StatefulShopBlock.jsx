import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  changeTravelMode,
  closeItineraryDetails,
  fetchItinerary,
  openItineraryDetails,
  selectPointOfSale,
  setCurrentAddress,
  toggleItinerary
} from '../../actions/pointOfSale'

import Itinerary from 'ui-kit/src/components/Itinerary/Itinerary';
import ItineraryPanel from 'ui-kit/src/components/ItineraryPanel/ItineraryPanel';
import ShopBlock from 'ui-kit/src/components/ShopBlock/ShopBlock';

class StatefulShopBlock extends Component {
  formatDistance(distance) {
    if (distance) {
      return parseInt(distance * 10, 10) / 10 + 'km';
    }
  }

  render() {
    const arrival = `${this.props.shop.defaultStreet1}, ${this.props.shop.defaultZipCode} ${this.props.shop.defaultCity}, ${this.props.shop.countryCode}`;
    const isSelected = this.props.selectedId === this.props.shop.id;

    const itineraryElement = (
      <Itinerary
        arrival={arrival}
        changeTravelModeCallback={this.props.changeTravelMode}
        departure={this.props.currentAddress}
        detailsCallback={this.props.openItineraryDetails}
        isGeolocationAvailable={this.props.isGeolocationAvailable}
        itinerary={this.props.itinerary}
        setCurrentAddress={this.props.setCurrentAddress}
        submitCallback={this.props.fetchItinerary}
        travelMode={this.props.travelMode}
      />
    );

    let itineraryPanel;
    if (isSelected && this.props.itinerary && this.props.isItineraryDetailsOpen) {
      itineraryPanel = (
        <ItineraryPanel
          closeCallback={this.props.closeItineraryDetails}
          directionsDisplay={this.props.directionsDisplay}
          itinerary={this.props.itinerary}
          travelMode={this.props.travelMode}
        />
      );
    }

    return (
      <ShopBlock
        distance={this.formatDistance(this.props.shop.distance)}
        isItineraryVisible={this.props.isItineraryVisible && isSelected}
        isSelected={isSelected}
        itineraryCallback={this.props.toggleItinerary.bind(null, this.props.shop.id, true)}
        mapCallback={this.props.toggleItinerary.bind(null, this.props.shop.id, false)}
        number={this.props.label}
        shop={this.props.shop}
        triggerCallback={this.props.selectPointOfSale.bind(null, this.props.shop.id)}
      >
        {itineraryElement}
        {itineraryPanel}
      </ShopBlock>
    );
  }
}

const mapStateToProps = (state) => {
  return  {
    currentAddress: state.pointOfSale.currentAddress,
    directionsDisplay: state.pointOfSale.directionsDisplay,
    isItineraryVisible: state.pointOfSale.isItineraryVisible,
    isItineraryDetailsOpen: state.pointOfSale.isItineraryDetailsOpen,
    isGeolocationAvailable: state.shared.isGeolocationAvailable,
    itinerary: state.pointOfSale.itinerary,
    selectedId: state.pointOfSale.selectedId,
    travelMode: state.pointOfSale.travelMode
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTravelMode: changeTravelMode.bind(null, dispatch),
    closeItineraryDetails: closeItineraryDetails.bind(null, dispatch),
    fetchItinerary: fetchItinerary.bind(null, dispatch),
    openItineraryDetails: openItineraryDetails.bind(null, dispatch),
    selectPointOfSale: selectPointOfSale.bind(null, dispatch),
    setCurrentAddress: setCurrentAddress.bind(null, dispatch),
    toggleItinerary: toggleItinerary.bind(null, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulShopBlock);
