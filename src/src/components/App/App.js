import React, { Component } from 'react';
import { connect } from 'react-redux'

import 'ui-kit/dist/styles/ui-kit.css';

import NavMobile from 'ui-kit/dist/NavMobile/NavMobile';
import PageContainer from 'ui-kit/dist/PageContainer/PageContainer';
import StatefulHeader from '../StatefulHeader/StatefulHeader.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <NavMobile isOpen={this.props.isNavMobileOpen} />
        <PageContainer isNavMobileOpen={this.props.isNavMobileOpen} >
          <StatefulHeader />
        </PageContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isNavMobileOpen: state.navMobile.isOpen
  }
};

export default connect(mapStateToProps)(App);
