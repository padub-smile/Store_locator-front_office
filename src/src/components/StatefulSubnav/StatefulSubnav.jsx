import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchSubnav } from '../../actions/nav';
import { SUBNAV_NOT_LOADED } from '../../reducers/nav';
import { DISPLAY_TYPE_DESKTOP } from '../../reducers/shared';

import Subnav from 'ui-kit/src/components/Subnav/Subnav';

const availableIdentifiers = [
  'womens-fashion',
  'mens-fashion',
  'childrens-fashion',
  'jewellery',
  'timepieces'
];

class StatefulSubnav extends Component {
  componentDidMount() {
    this.loadSubnav();
  }

  componentDidUpdate() {
    this.loadSubnav();
  }

  loadSubnav() {
    if (this.props.subNavLoadState === SUBNAV_NOT_LOADED
      && this.props.displayType === DISPLAY_TYPE_DESKTOP
      && this.props.activeMenu
      && availableIdentifiers.indexOf(this.props.activeMenu) !== -1) {
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
    data: state.nav.subnav,
    displayType: state.shared.displayType,
    subNavLoadState: state.nav.subNavLoadState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubnav: fetchSubnav.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulSubnav);
