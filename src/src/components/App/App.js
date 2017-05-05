import React, { Component } from 'react';

import 'ui-kit/dist/styles/ui-kit.css';

import StatefulHeader from '../StatefulHeader/StatefulHeader.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <StatefulHeader />
      </div>
    );
  }
}

export default App;
