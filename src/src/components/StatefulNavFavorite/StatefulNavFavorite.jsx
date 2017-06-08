import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchData } from '../../actions/shared';
import { LOADING } from '../../reducers/favorite';

import NavFavorite, { STATE_NOT_CONNECTED, STATE_LOADING, STATE_LOADED, STATE_EMPTY } from 'ui-kit/dist/NavFavorite/NavFavorite';

class StatefulNavFavorite extends Component {
  componentDidMount() {
    if (!this.props.isLoading) {
      this.props.fetchData();
    }
  }

  render() {
    // Setup state.
    let state = STATE_NOT_CONNECTED;
    if (this.props.itemLoadState === LOADING) {
      state = STATE_LOADING;
    } else if (this.props.items.length > 0) {
      state = STATE_LOADED;
    } else {
      state = STATE_EMPTY;
    }

    return (
      <NavFavorite
        data={this.props.dataCdc && this.props.dataCdc.wishlist}
        favs={this.props.items}
        itemCount={this.props.itemCount}
        popinIsOpen={this.props.popinIsOpen}
        popinState={state}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataCdc: state.shared.dataCdc,
    itemCount: state.favorite.itemCount,
    itemLoadState: state.favorite.itemLoadState,
    items: state.favorite.items,
    isLoading: state.shared.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: fetchData.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulNavFavorite);
