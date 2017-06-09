import React, { Component } from 'react';
import { connect } from 'react-redux'
import debounce from 'debounce';

import 'ui-kit/dist/styles/ui-kit.css';

import { displayMobile, displayDesktop } from '../../actions/shared';
import { DISPLAY_MOBILE, DISPLAY_DESKTOP } from '../../reducers/shared';

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
  componentDidMount() {
    window.onresize = debounce(this.onResize.bind(this), 200);
  }

  componentWillUnmount() {
    window.onresize.clear();
  }

  onResize() {
    const isDesktop = window.matchMedia('(min-width: 992px)').matches;
    if (isDesktop && this.props.display !== DISPLAY_DESKTOP) {
      // Desktop.
      this.props.displayDesktop();
    } else if (!isDesktop && this.props.display !== DISPLAY_MOBILE) {
      // Mobile.
      this.props.displayMobile();
    }
  }

  render() {
    if (this.props.isNavMobileOpen) {
      document.body.classList.add('no-overflow');
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
    display: state.shared.display,
    isNavMobileOpen: state.nav.isNavMobileOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayMobile: displayMobile.bind(null, dispatch),
    displayDesktop: displayDesktop.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
