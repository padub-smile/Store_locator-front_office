import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchSubnav } from '../../actions/nav';
import Subnav from 'ui-kit/dist/Subnav/Subnav';

const availableIdentifiers = [
  'womens-fashion',
  'mens-fashion',
  'childrens-fashion',
  'jewellery',
  'timepieces'
];

class StatefulSubnav extends Component {
  componentDidMount() {
    if (Object.keys(this.props.data).length === 0 &&
        this.props.activeMenu &&
        availableIdentifiers.indexOf(this.props.activeMenu) !== -1) {
      this.props.fetchSubnav(this.props.activeMenu);
    }
  }

  render() {
    if (this.props.activeMenu && availableIdentifiers.indexOf(this.props.activeMenu) !== -1) {
      return (<Subnav data={this.props.data}/>);
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    activeMenu: state.nav.activeMenu,
    data: state.nav.subnav
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubnav: fetchSubnav.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulSubnav);
