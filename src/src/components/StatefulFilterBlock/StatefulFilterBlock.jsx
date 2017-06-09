import { connect } from 'react-redux'

import FilterBlock from 'ui-kit/dist/FilterBlock/FilterBlock';

const mapStateToProps = (state) => {
  return {
    nbResults: state.pointOfSale.searchCount,
    filters: state.pointOfSale.filters
  }
};

export default connect(mapStateToProps)(FilterBlock);
