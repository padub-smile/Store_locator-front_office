import React, { Component } from 'react';
import { connect } from 'react-redux'

import { toggleNavMobile } from '../../actions/navMobile';
import FormTextfield from 'ui-kit/dist/FormTextfield/FormTextfield';
import HeaderDesktop from 'ui-kit/dist/HeaderDesktop/HeaderDesktop';
import StatefulMetanav from '../StatefulMetanav/StatefulMetanav.jsx';
import StatefulNavAccount from '../StatefulNavAccount/StatefulNavAccount.jsx';
import StatefulNavCart from '../StatefulNavCart/StatefulNavCart.jsx';
import StatefulNavFavorite from '../StatefulNavFavorite/StatefulNavFavorite.jsx';


class StatefulHeader extends Component {
  openNavMobile() {
    this.props.toggleNavMobile(this.props.isOpen);
  }

  render() {
    const SearchBar = (<FormTextfield
      name="search"
      addonAfter={(<span className="icon icon-loop" style={{fontSize: 18}}></span>)}
      placeholder="Rechercher"
      transition={true}
      width="150px"
    />);

    return (
      <div>
        <StatefulMetanav triggerCallback={this.openNavMobile.bind(this)} />
        <HeaderDesktop
          a11yHomeTitle="Retour à l'accueil"
          components={[SearchBar, <StatefulNavFavorite />, <StatefulNavAccount />, <StatefulNavCart />]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.navMobile.isOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavMobile: toggleNavMobile.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulHeader);
