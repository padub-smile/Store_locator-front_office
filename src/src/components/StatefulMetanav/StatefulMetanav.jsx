import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

import Metanav from 'ui-kit/dist/Metanav/Metanav';

class StatefulMetanav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.init();
  }

  init() {
    fetch('/fixtures/metanav.json')
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(data => this.setState({data}));
  }

  render() {
    return (<Metanav triggerCallback={this.props.triggerCallback} data={this.state.data} />);
  }
}

StatefulMetanav.propTypes = {
  triggerCallback: PropTypes.func
};

StatefulMetanav.defaultProps = {
  triggerCallback: () => {}
};

export default StatefulMetanav;
