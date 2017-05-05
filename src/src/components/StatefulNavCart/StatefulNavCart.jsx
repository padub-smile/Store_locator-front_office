import React, { Component } from 'react';
import Cookie from 'js-cookie';

import NavCart from 'ui-kit/dist/NavCart/NavCart';

const cookieName = 'cdc_cart_items_count';

class StatefulNavCart extends Component {
  render() {
    const itemCount = +Cookie.get(cookieName);
    return (<NavCart itemCount={itemCount} />);
  }
}

export default StatefulNavCart;
