import React, { Component } from 'react';
import { connect } from 'react-redux'

import { CART_LOADING } from '../../reducers/cart';

import NavCart, { STATE_LOADING, STATE_LOADED, STATE_EMPTY } from 'ui-kit/src/components/NavCart/NavCart';

class StatefulNavCart extends Component {
  render() {
    // Setup labels.
    let labels = {
      title: '',
      subTotal: '',
      checkoutButton: ''
    };
    if (this.props.dataCdc) {
      labels = {
        title: this.props.dataCdc.cart.title,
        subTotal: this.props.dataCdc.cart.subtotal,
        checkoutButton: this.props.dataCdc.cart.url.title
      }
    }

    // Setup checkout URLs.
    let checkoutUrls = ['#', '#'];
    if (this.props.dataCdc && this.props.dataPcd) {
      checkoutUrls = [this.props.dataCdc.cart.url.url, this.props.dataPcd.funnel.children[4].url];
    }

    // Setup state.
    let state = STATE_EMPTY;
    if (this.props.itemLoadState === CART_LOADING) {
      state = STATE_LOADING;
    } else if ((this.props.items[0] && this.props.items[0].basket.products.length > 0)
            || (this.props.items[1] && this.props.items[1].basket.products.length > 0)) {
      state = STATE_LOADED;
    }

    return (
      <NavCart
        cart={this.props.items}
        checkoutUrls={checkoutUrls}
        itemCount={this.props.itemCount}
        labels={labels}
        popinIsOpen={this.props.popinIsOpen}
        popinState={state}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataCdc: state.shared.dataCdc,
    dataPcd: state.shared.dataPcd,
    itemCount: state.cart.itemCount,
    itemLoadState: state.cart.itemLoadState,
    items: state.cart.items
  }
};

export default connect(mapStateToProps)(StatefulNavCart);
