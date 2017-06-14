import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchCartItems } from '../../actions/cart';
import { fetchFavoriteItems } from '../../actions/favorite';
import { fetchData } from '../../actions/shared'
import { CART_NOT_LOADED } from '../../reducers/cart';
import { FAVORITE_NOT_LOADED } from '../../reducers/favorite';
import { DATA_NOT_LOADED, DISPLAY_TYPE_DESKTOP } from '../../reducers/shared';

import FormTextfield from 'ui-kit/dist/FormTextfield/FormTextfield';
import HeaderDesktop from 'ui-kit/dist/HeaderDesktop/HeaderDesktop';
import StatefulNavAccount from '../StatefulNavAccount/StatefulNavAccount';
import StatefulNavCart from '../StatefulNavCart/StatefulNavCart';
import StatefulNavFavorite from '../StatefulNavFavorite/StatefulNavFavorite';

class StatefulHeader extends Component {
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  constructor(props) {
    super(props);
    this.state = {
      openPopinIndex: null
    };
  }

  closePopup() {
    const delay = 2000;
    this.timeout = setTimeout(() => this.setState({openPopinIndex: null}), delay);
  }

  openCart(index) {
    this.openPopup(index);
    if (this.props.cartItemCount > 0 && this.props.cartItemLoadState === CART_NOT_LOADED) {
      this.props.fetchCartItems();
    }
  }

  openFavorite(index) {
    this.openPopup(index);
    if (this.props.favoriteItemCount > 0 && this.props.favoriteItemLoadState === FAVORITE_NOT_LOADED) {
      this.props.fetchFavoriteItems();
    }
  }

  openPopup(index) {
    clearTimeout(this.timeout);
    this.setState({openPopinIndex: index});
  }

  loadData() {
    if (this.props.dataLoadState === DATA_NOT_LOADED && this.props.displayType === DISPLAY_TYPE_DESKTOP) {
      this.props.fetchData();
    }
  }

  render() {
    const SearchBar = (
      <FormTextfield
        name="search"
        addonAfter={(<span className="icon icon-loop" style={{fontSize: 18}}></span>)}
        placeholder="Rechercher"
        transition={true}
        width="150px"
      />
    );
    const NavFavoriteComponent = (
      <div onMouseEnter={this.openFavorite.bind(this, 0)} onMouseLeave={this.closePopup.bind(this)}>
        <StatefulNavFavorite popinIsOpen={this.state.openPopinIndex === 0} />
      </div>
    );
    const NavAccountComponent = (
      <div onMouseEnter={this.openPopup.bind(this, 1)} onMouseLeave={this.closePopup.bind(this)}>
        <StatefulNavAccount popinIsOpen={this.state.openPopinIndex === 1} />
      </div>
    );
    const NavCartComponent = (
      <div onMouseEnter={this.openCart.bind(this, 2)} onMouseLeave={this.closePopup.bind(this)}>
        <StatefulNavCart popinIsOpen={this.state.openPopinIndex === 2} />
      </div>
    );

    return (
      <HeaderDesktop
        a11yHomeTitle="Retour à l'accueil"
        components={[SearchBar, NavFavoriteComponent, NavAccountComponent, NavCartComponent]}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItemCount: state.cart.itemCount,
    cartItemLoadState: state.cart.itemLoadState,
    dataLoadState: state.shared.dataLoadState,
    displayType: state.shared.displayType,
    favoriteItemCount: state.favorite.itemCount,
    favoriteItemLoadState: state.favorite.itemLoadState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCartItems: fetchCartItems.bind(null, dispatch),
    fetchData: fetchData.bind(null, dispatch),
    fetchFavoriteItems: fetchFavoriteItems.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulHeader);
