import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMetanav, toggleNavMobile } from '../../actions/nav';
import { DISPLAY_DESKTOP } from '../../reducers/shared';
import Metanav from 'ui-kit/dist/Metanav/Metanav';

class StatefulMetanav extends Component {
  componentDidMount() {
    if (Object.keys(this.props.data).length === 0) {
      this.props.fetchMetanav();
    }
  }

  componentDidUpdate() {
    if (this.props.displayType === DISPLAY_DESKTOP) {
      this.props.toggleNavMobile(true);
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
    isNavMobileOpen: state.nav.isNavMobileOpen,
    displayType: state.shared.displayType
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMetanav: fetchMetanav.bind(null, dispatch),
    toggleNavMobile: toggleNavMobile.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulMetanav);
