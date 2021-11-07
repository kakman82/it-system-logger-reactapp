import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
  // buradaki log, logReducer da tanımlanan tüm state gösterir
  log: logReducer,
  tech: techReducer,
});
