import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchMetanav } from '../../actions/metanav';
import Metanav from 'ui-kit/dist/Metanav/Metanav';

class StatefulMetanav extends Component {
  componentDidMount() {
    this.props.fetchMetanav();
  }

  render() {
    return (<Metanav triggerCallback={this.props.triggerCallback} data={this.props.data} />);
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.metanav
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMetanav: fetchMetanav.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulMetanav);
