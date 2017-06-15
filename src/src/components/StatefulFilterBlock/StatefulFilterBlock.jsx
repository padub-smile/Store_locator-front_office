import { connect } from 'react-redux'

import { updateDisplayMode } from '../../actions/shared';

import FilterBlock from 'ui-kit/src/components/FilterBlock/FilterBlock';

const mapStateToProps = (state) => {
  return {
    displayMode: state.shared.displayMode,
    nbResults: state.pointOfSale.searchCount,
    filters: state.pointOfSale.filters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerCallback: updateDisplayMode.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock);
