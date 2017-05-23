import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchNavMobile } from '../../actions/nav';
import NavMobile from 'ui-kit/dist/NavMobile/NavMobile';

class StatefulNavMobile extends Component {
  componentDidMount() {
    if (Object.keys(this.props.data).length === 0) {
      this.props.fetchNavMobile(this.props.activeMenu);
    }
  }

  render() {
    let home = {};
    if (this.props.metanav && this.props.metanav.home) {
      home.title = 'Accueil';
      home.href = this.props.metanav.home.url;
    }
    return (<NavMobile
      data={this.props.data}
      home={home}
      isOpen={this.props.isNavMobileOpen}
    />);
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.nav.navMobile,
    metanav: state.nav.metanav,
    isNavMobileOpen: state.nav.isNavMobileOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNavMobile: fetchNavMobile.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulNavMobile);
