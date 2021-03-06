import { connect } from 'react-redux'

import { search } from '../../actions/pointOfSale';

import SearchBlock from 'ui-kit/src/components/SearchBlock/SearchBlock';

const mapStateToProps = (state) => {
  return {
    isGeolocationAvailable: state.shared.isGeolocationAvailable,
    title: state.shared.dataCdc
      ? state.shared.dataCdc.search.placeholder
      : '',
    value: state.pointOfSale.searchValue
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: search.bind(null, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
