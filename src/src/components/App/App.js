import React, { Component } from 'react';
import { connect } from 'react-redux'

import 'ui-kit/dist/styles/ui-kit.css';


import MapContainer from 'ui-kit/dist/MapContainer/MapContainer';
import PageContainer from 'ui-kit/dist/PageContainer/PageContainer';
import ResultsBlock from 'ui-kit/dist/ResultsBlock/ResultsBlock';
import SearchBlock from 'ui-kit/dist/SearchBlock/SearchBlock';
import SearchContainer from 'ui-kit/dist/SearchContainer/SearchContainer';
import StatefulDiorMap from '../StatefulDiorMap/StatefulDiorMap';
import StatefulFilterBlock from '../StatefulFilterBlock/StatefulFilterBlock.jsx';
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
          <div style={{maxWidth: '1400px', margin: 'auto'}}>
            <SearchContainer
              search={(<SearchBlock
                title="Votre Recherche"
              />)}
              filters={(<StatefulFilterBlock
                filtersHeight={"593px"}
              />)}
              results={(<ResultsBlock />)}
              style={{maxWidth: '400px', width: '30%', float: 'left'}}
            />
            <MapContainer
              style={{maxWidth: '920px', height: '800px', marginLeft: '30%'}}
              map={(<StatefulDiorMap />)}
            />
          </div>
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
