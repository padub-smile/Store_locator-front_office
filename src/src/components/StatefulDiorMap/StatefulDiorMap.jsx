import { connect } from 'react-redux'

import DiorMap from 'ui-kit/dist/DiorMap/DiorMap';

const mapStateToProps = (state) => {
  return {
    markers: state.pointOfSale.items
  }
};

export default connect(mapStateToProps)(DiorMap);
