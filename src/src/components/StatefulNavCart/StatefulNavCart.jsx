import { connect } from 'react-redux'

import NavCart from 'ui-kit/dist/NavCart/NavCart';

const mapStateToProps = (state) => {
  return {
    itemCount: state.cart.itemCount
  }
};

export default connect(mapStateToProps)(NavCart);
