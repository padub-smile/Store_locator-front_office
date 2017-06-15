import React, { Component } from 'react';
import { connect } from 'react-redux'
import debounce from 'debounce';

import 'ui-kit/src/styles/ui-kit.css';

import { updateDisplayType } from '../../actions/shared';
import { DISPLAY_TYPE_MOBILE, DISPLAY_TYPE_DESKTOP } from '../../reducers/shared';

import MapContainer from 'ui-kit/src/components/MapContainer/MapContainer';
import PageContainer from 'ui-kit/src/components/PageContainer/PageContainer';
import SearchContainer from 'ui-kit/src/components/SearchContainer/SearchContainer';
import StatefulDiorMap from '../StatefulDiorMap/StatefulDiorMap';
import StatefulFilterBlock from '../StatefulFilterBlock/StatefulFilterBlock.jsx';
import StatefulFooter from '../StatefulFooter/StatefulFooter.jsx';
import StatefulMetanav from '../StatefulMetanav/StatefulMetanav';
import StatefulNavMobile from '../StatefulNavMobile/StatefulNavMobile';
import StatefulResultsBlock from '../StatefulResultsBlock/StatefulResultsBlock';
import StatefulHeader from '../StatefulHeader/StatefulHeader';
import StatefulSearchBlock from '../StatefulSearchBlock/StatefulSearchBlock';
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
    if (isDesktop && this.props.displayType !== DISPLAY_TYPE_DESKTOP) {
      // Desktop.
      this.props.updateDisplayType(DISPLAY_TYPE_DESKTOP);
    } else if (!isDesktop && this.props.displayType !== DISPLAY_TYPE_MOBILE) {
      // Mobile.
      this.props.updateDisplayType(DISPLAY_TYPE_MOBILE);
    }
  }

  render() {
    if (this.props.isNavMobileOpen) {
      document.body.classList.add('no-overflow');
    } else {
      document.body.classList.remove('no-overflow');
    }

    let contentStyles = {maxWidth: '1400px', margin: 'auto', padding: '0 20px'};
    let mapStyles = {maxWidth: '920px', height: '800px', marginLeft: '30%'};
    let searchStyles = {maxWidth: '400px', width: '30%', float: 'left'};
    let filtersHeight = '593px';
    if (this.props.displayType === DISPLAY_TYPE_MOBILE) {
      contentStyles = {};
      mapStyles = {width: '100%', height: 'calc(100vh - 65px - 165px)'};
      searchStyles = {width: '100%'};
      filtersHeight = '752px';
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
              search={(<StatefulSearchBlock/>)}
              filters={(<StatefulFilterBlock filtersHeight={filtersHeight}/>)}
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
    displayType: state.shared.displayType,
    isNavMobileOpen: state.nav.isNavMobileOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDisplayType: updateDisplayType.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
