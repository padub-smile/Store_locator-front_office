import { connect } from 'react-redux'

import NavFavorite from 'ui-kit/dist/NavFavorite/NavFavorite';

const mapStateToProps = (state) => {
  return {
    itemCount: state.favorite.itemCount
  }
};

export default connect(mapStateToProps)(NavFavorite);
