import { connect } from 'react-redux'

import NavAccount from 'ui-kit/src/components/NavAccount/NavAccount';

const mapStateToProps = (state) => {
  return {
    data: state.shared.dataCdc,
    isConnected: state.account.isConnected,
    name: state.account.name
  }
};

export default connect(mapStateToProps)(NavAccount);
