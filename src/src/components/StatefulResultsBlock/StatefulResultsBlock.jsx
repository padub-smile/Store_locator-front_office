import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSearchResults } from '../../actions/pointOfSale'
import { DISPLAY_MOBILE } from '../../reducers/shared';

import ResultsBlock from 'ui-kit/dist/ResultsBlock/ResultsBlock';
import ShopBlock from 'ui-kit/dist/ShopBlock/ShopBlock';

class StatefulResultsBlock extends Component {
  componentDidMount() {
    this.props.fetchSearchResults();
  }

  render() {
    let height = '550px';
    if (this.props.display === DISPLAY_MOBILE) {
      height = 'calc((100vh - 65px) - 140px)';
    }


    const diorShops = this.props.searchResults.map((item, index) => console.log(item.openingHours) || (
      <ShopBlock
        shop={item}
        number={index + 1}
      />
    ));

    return (<ResultsBlock
      diorShops={diorShops}
      displayResults="open"
      height={height}
    />);
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.shared.display,
    searchResults: state.pointOfSale.searchResults
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: fetchSearchResults.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StatefulResultsBlock);
