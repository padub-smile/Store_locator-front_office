import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMetanav, toggleNavMobile } from '../../actions/nav';
import { METANAV_NOT_LOADED } from '../../reducers/nav';
import { DISPLAY_TYPE_DESKTOP } from '../../reducers/shared';

import Metanav from 'ui-kit/dist/Metanav/Metanav';

class StatefulMetanav extends Component {
  componentDidMount() {
    this.loadMetanav();
  }

  componentDidUpdate() {
    if (this.props.displayType === DISPLAY_TYPE_DESKTOP) {
      this.props.toggleNavMobile(true);
    }
    this.loadMetanav();
  }

  loadMetanav() {
    if (this.props.metanavLoadState === METANAV_NOT_LOADED && this.props.displayType === DISPLAY_TYPE_DESKTOP) {
      this.props.fetchMetanav();
    }
  }

  openNavMobile() {
    this.props.toggleNavMobile(this.props.isNavMobileOpen);
  }

  render() {
    return (<Metanav
      triggerCallback={this.openNavMobile.bind(this)}
      data={this.props.data}
      activeMenu={this.props.activeMenu}
    />);
  }
}

const mapStateToProps = (state) => {
  return {
    activeMenu: state.nav.activeMenu,
    data: state.nav.metanav,
    displayType: state.shared.displayType,
    isNavMobileOpen: state.nav.isNavMobileOpen,
    metanavLoadState: state.nav.metanavLoadState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMetanav: fetchMetanav.bind(null, dispatch),
    toggleNavMobile: toggleNavMobile.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulMetanav);
