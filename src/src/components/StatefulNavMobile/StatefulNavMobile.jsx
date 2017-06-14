import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchNavMobile, fetchNavMobileLinks } from '../../actions/nav';
import { NAV_MOBILE_NOT_LOADED, NAV_MOBILE_LINKS_NOT_LOADED } from '../../reducers/nav';
import { DISPLAY_MOBILE } from '../../reducers/shared';

import NavMobile from 'ui-kit/dist/NavMobile/NavMobile';

class StatefulNavMobile extends Component {
  componentDidMount() {
    this.loadNavMobile();
  }

  componentDidUpdate() {
    this.loadNavMobile();
  }

  loadNavMobile() {
    if (this.props.displayType === DISPLAY_MOBILE) {
      if (this.props.navMobileLoadState === NAV_MOBILE_NOT_LOADED) {
        this.props.fetchNavMobile();
      }
      if (this.props.navMobileLinksLoadState === NAV_MOBILE_LINKS_NOT_LOADED) {
        this.props.fetchNavMobileLinks();
      }
    }
  }

  render() {
    return (<NavMobile
      data={this.props.data}
      links={this.props.links}
      isOpen={this.props.isNavMobileOpen}
    />);
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.nav.navMobile,
    displayType: state.shared.displayType,
    links: state.nav.navMobileLinks,
    isNavMobileOpen: state.nav.isNavMobileOpen,
    navMobileLoadState: state.nav.navMobileLoadState,
    navMobileLinksLoadState: state.nav.navMobileLinksLoadState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNavMobile: fetchNavMobile.bind(null, dispatch),
    fetchNavMobileLinks: fetchNavMobileLinks.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulNavMobile);
