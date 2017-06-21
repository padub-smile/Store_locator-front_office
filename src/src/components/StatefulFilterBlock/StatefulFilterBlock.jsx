import { connect } from 'react-redux'

import { updateFilters } from '../../actions/pointOfSale';
import { updateDisplayMode } from '../../actions/shared';

import FilterBlock from 'ui-kit/src/components/FilterBlock/FilterBlock';

const mapStateToProps = (state) => {
  return {
    displayMode: state.shared.displayMode,
    filtersSelected: state.pointOfSale.filtersSelected,
    nbResults: state.pointOfSale.searchCount,
    filters: state.pointOfSale.filters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerCallback: updateDisplayMode.bind(null, dispatch),
    updateFilters: updateFilters.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock);
