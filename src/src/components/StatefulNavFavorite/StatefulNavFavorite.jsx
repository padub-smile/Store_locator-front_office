import React, { Component } from 'react';
import Cookie from 'js-cookie';

import NavFavorite from 'ui-kit/dist/NavFavorite/NavFavorite';

const cookieName = 'cdc_wishlist_items_id';

class StatefulNavFavorite extends Component {
  render() {
    const itemCount = Cookie.get(cookieName).split(',').length;
    return (<NavFavorite itemCount={itemCount} />);
  }
}

export default StatefulNavFavorite;
