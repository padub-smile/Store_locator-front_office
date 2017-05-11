import { combineReducers, createStore } from 'redux'

/* Reducers*/
import { account } from '../reducers/account'
import { cart } from '../reducers/cart'
import { favorite } from '../reducers/favorite'
import { metanav } from '../reducers/metanav'
import { navMobile } from '../reducers/navMobile'

const reducers = combineReducers({
  account,
  cart,
  favorite,
  metanav,
  navMobile
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enables the Redux DevTools Extension.
);
