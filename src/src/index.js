import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { provideTranslate } from '@gandi/react-translate';

import './index.css';
import { fetchPointsOfSale, fetchFilters } from './actions/pointOfSale'
import store from './app/appStore'
import translator from './app/appTranslator';
import App from './components/App/App';

const TranslatedApp = provideTranslate(translator)(App);

ReactDOM.render(
  <Provider store={store}><TranslatedApp /></Provider>,
  document.getElementById('root')
);

fetchPointsOfSale(store.dispatch);
fetchFilters(store.dispatch);
