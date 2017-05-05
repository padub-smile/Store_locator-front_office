import React, { Component } from 'react';
import Cookie from 'js-cookie';

import NavAccount from 'ui-kit/dist/NavAccount/NavAccount';

const cookieName = 'userData';

class StatefulNavAccount extends Component {
  render() {
    let isConnected = false;
    let cookieData = Cookie.get(cookieName);
    if (cookieData) {
      cookieData = JSON.parse(cookieData);
      isConnected = !!cookieData.name;
    }

    return (<NavAccount isConnected={isConnected} />);
  }
}

export default StatefulNavAccount;
