import { combineReducers, createStore } from 'redux'

/* Reducers*/
import { metanav } from '../reducers/metanav'
import { navMobile } from '../reducers/navMobile'

const reducers = combineReducers({
  metanav,
  navMobile
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enables the Redux DevTools Extension.
);
