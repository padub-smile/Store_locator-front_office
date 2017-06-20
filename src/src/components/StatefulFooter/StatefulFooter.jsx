import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchFooter } from '../../actions/nav';
import { FOOTER_NOT_LOADED } from '../../reducers/nav';
import { localPath } from '../../app/appTranslator';

import FooterDesktop from 'ui-kit/src/components/FooterDesktop/FooterDesktop';

class StatefulFooter extends Component {
  componentDidMount() {
    if (this.props.footerLoadState === FOOTER_NOT_LOADED) {
      this.props.fetchFooter();
    }
  }

  render() {
    return (<FooterDesktop
      currentLanguage={localPath}
      data={this.props.footer}
      isPcd={this.props.isPcd}
    />);
  }
}

const mapStateToProps = (state) => {
  return {
    footer: state.nav.footer,
    footerLoadState: state.nav.footerLoadState,
    isPcd: state.nav.isPcd
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFooter: fetchFooter.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulFooter);
