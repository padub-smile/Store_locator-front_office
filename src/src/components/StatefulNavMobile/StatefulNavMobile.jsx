import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchNavMobile, fetchNavMobileLinks } from '../../actions/nav';
import NavMobile from 'ui-kit/dist/NavMobile/NavMobile';

class StatefulNavMobile extends Component {
  componentDidMount() {
    if (Object.keys(this.props.data).length === 0) {
      this.props.fetchNavMobile();
    }
    if (Object.keys(this.props.links).length === 0) {
      this.props.fetchNavMobileLinks();
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
    links: state.nav.navMobileLinks,
    metanav: state.nav.metanav,
    isNavMobileOpen: state.nav.isNavMobileOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNavMobile: fetchNavMobile.bind(null, dispatch),
    fetchNavMobileLinks: fetchNavMobileLinks.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulNavMobile);
