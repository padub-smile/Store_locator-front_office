import React, { Component } from 'react';
import { connect } from 'react-redux'

import 'ui-kit/dist/styles/ui-kit.css';

import DiorMap from 'ui-kit/dist/DiorMap/DiorMap';
import PageContainer from 'ui-kit/dist/PageContainer/PageContainer';
import StatefulFooter from '../StatefulFooter/StatefulFooter.jsx';
import StatefulMetanav from '../StatefulMetanav/StatefulMetanav';
import StatefulNavMobile from '../StatefulNavMobile/StatefulNavMobile';
import StatefulHeader from '../StatefulHeader/StatefulHeader';
import StatefulSubnav from '../StatefulSubnav/StatefulSubnav';

class App extends Component {
  render() {
    if (this.props.isNavMobileOpen) {
      document.body.classList.add('no-overflow')
    } else {
      document.body.classList.remove('no-overflow');
    }

    return (
      <div>
        <StatefulNavMobile />
        <PageContainer isNavMobileOpen={this.props.isNavMobileOpen} >
          <StatefulMetanav />
          <StatefulHeader />
          <StatefulSubnav />
          <div style={{height: '500px'}}><DiorMap /></div>
          <StatefulFooter />
        </PageContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isNavMobileOpen: state.nav.isNavMobileOpen
  }
};

export default connect(mapStateToProps)(App);
