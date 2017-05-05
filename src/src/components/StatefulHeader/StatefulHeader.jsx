import React, { Component } from 'react';

import FormTextfield from 'ui-kit/dist/FormTextfield/FormTextfield';
import HeaderDesktop from 'ui-kit/dist/HeaderDesktop/HeaderDesktop';
import NavMobile from 'ui-kit/dist/NavMobile/NavMobile';
import StatefulMetanav from '../StatefulMetanav/StatefulMetanav.jsx';
import StatefulNavAccount from '../StatefulNavAccount/StatefulNavAccount.jsx';
import StatefulNavCart from '../StatefulNavCart/StatefulNavCart.jsx';
import StatefulNavFavorite from '../StatefulNavFavorite/StatefulNavFavorite.jsx';


class StatefulHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openNavMobile() {
    console.log('coucou');
    this.setState({isOpen: !this.state.isOpen});
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
        <NavMobile isOpen={this.state.isOpen} />
        <StatefulMetanav triggerCallback={this.openNavMobile.bind(this)} />
        <HeaderDesktop
          a11yHomeTitle="Retour à l'accueil"
          components={[SearchBar, <StatefulNavFavorite />, <StatefulNavAccount />, <StatefulNavCart />]}
        />
      </div>
    );
  }
}

export default StatefulHeader;
