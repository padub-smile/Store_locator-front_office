import React, { Component } from 'react';

import FormTextfield from 'ui-kit/dist/FormTextfield/FormTextfield';
import HeaderDesktop from 'ui-kit/dist/HeaderDesktop/HeaderDesktop';
import StatefulNavAccount from '../StatefulNavAccount/StatefulNavAccount';
import StatefulNavCart from '../StatefulNavCart/StatefulNavCart';
import StatefulNavFavorite from '../StatefulNavFavorite/StatefulNavFavorite';

class StatefulHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPopinIndex: null
    };
  }

  displayPopup(index) {
    clearTimeout(this.timeout);
    this.setState({openPopinIndex: index});
  }

  closePopup() {
    const delay = 2000;
    this.timeout = setTimeout(() => this.setState({openPopinIndex: null}), delay);
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
      <div onMouseEnter={this.displayPopup.bind(this, 0)}  onMouseLeave={this.closePopup.bind(this)}>
        <StatefulNavFavorite popinIsOpen={this.state.openPopinIndex === 0}/>
      </div>
    );
    const NavAccountComponent = (
      <div onMouseEnter={this.displayPopup.bind(this, 1)}  onMouseLeave={this.closePopup.bind(this)}>
        <StatefulNavAccount popinIsOpen={this.state.openPopinIndex === 1}/>
      </div>
    );
    const NavCartComponent = (
      <div onMouseEnter={this.displayPopup.bind(this, 2)}  onMouseLeave={this.closePopup.bind(this)}>
        <StatefulNavCart popinIsOpen={this.state.openPopinIndex === 2}/>
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

export default StatefulHeader;
