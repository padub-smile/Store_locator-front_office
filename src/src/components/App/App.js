import React, { Component } from 'react';
import { connect } from 'react-redux'
import debounce from 'debounce';

import 'ui-kit/dist/styles/ui-kit.css';

import { displayMobile, displayDesktop } from '../../actions/shared';
import { DISPLAY_MOBILE, DISPLAY_DESKTOP } from '../../reducers/shared';

import MapContainer from 'ui-kit/dist/MapContainer/MapContainer';
import PageContainer from 'ui-kit/dist/PageContainer/PageContainer';
import SearchBlock from 'ui-kit/dist/SearchBlock/SearchBlock';
import SearchContainer from 'ui-kit/dist/SearchContainer/SearchContainer';
import StatefulDiorMap from '../StatefulDiorMap/StatefulDiorMap';
import StatefulFilterBlock from '../StatefulFilterBlock/StatefulFilterBlock.jsx';
import StatefulFooter from '../StatefulFooter/StatefulFooter.jsx';
import StatefulMetanav from '../StatefulMetanav/StatefulMetanav';
import StatefulNavMobile from '../StatefulNavMobile/StatefulNavMobile';
import StatefulResultsBlock from '../StatefulResultsBlock/StatefulResultsBlock';
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

    let contentStyles = {maxWidth: '1400px', margin: 'auto'};
    let mapStyles = {maxWidth: '920px', height: '800px', marginLeft: '30%'};
    let searchStyles = {maxWidth: '400px', width: '30%', float: 'left'};

    if (this.props.display === DISPLAY_MOBILE) {
      contentStyles = {};
      mapStyles = {width: '100%', height: 'calc(100vh - 65px - 165px)'};
      searchStyles = {width: '100%'};
    }


    return (
      <div>
        <StatefulNavMobile />
        <PageContainer isNavMobileOpen={this.props.isNavMobileOpen} >
          <StatefulMetanav />
          <StatefulHeader />
          <StatefulSubnav />
          <div style={contentStyles}>
            <SearchContainer
              search={(<SearchBlock
                title="Votre Recherche"
              />)}
              filters={(<StatefulFilterBlock
                filtersHeight={"593px"}
              />)}
              results={(<StatefulResultsBlock />)}
              style={searchStyles}
            />
            <MapContainer
              style={mapStyles}
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
