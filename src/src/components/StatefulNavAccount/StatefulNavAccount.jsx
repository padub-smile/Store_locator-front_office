import { connect } from 'react-redux'

import NavAccount from 'ui-kit/dist/NavAccount/NavAccount';

const mapStateToProps = (state) => {
  return {
    isConnected: state.account.isConnected
  }
};

export default connect(mapStateToProps)(NavAccount);
