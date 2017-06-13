import { connect } from 'react-redux'

import { search } from '../../actions/pointOfSale';

import SearchBlock from 'ui-kit/dist/SearchBlock/SearchBlock';

const mapStateToProps = (state) => {
  return {
    isGeolocationAvailable: navigator
      && navigator.geolocation
      && navigator.geolocation.getCurrentPosition,
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