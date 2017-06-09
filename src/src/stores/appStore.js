import { combineReducers, createStore } from 'redux'

/* Reducers*/
import { account } from '../reducers/account';
import { cart } from '../reducers/cart';
import { favorite } from '../reducers/favorite';
import { nav } from '../reducers/nav';
import { pointOfSale } from '../reducers/pointOfSale';
import { shared } from '../reducers/shared';

const reducers = combineReducers({
  account,
  cart,
  favorite,
  nav,
  pointOfSale,
  shared
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enables the Redux DevTools Extension.
);
