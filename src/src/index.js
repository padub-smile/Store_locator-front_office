import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import { fetchPointsOfSale, fetchFilters } from './actions/pointOfSale'
import store from './stores/appStore'
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

fetchPointsOfSale(store.dispatch);
fetchFilters(store.dispatch);
