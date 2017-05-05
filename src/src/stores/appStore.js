import { combineReducers, createStore } from 'redux'

/* Reducers*/
import { metanav } from '../reducers/metanav'
import { navMobile } from '../reducers/navMobile'

const reducers = combineReducers({
  metanav,
  navMobile
});

export default createStore(reducers);
