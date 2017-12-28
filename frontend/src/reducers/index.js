import { combineReducers } from 'redux';
import userReducer from './userReducer';
import actionsReducer from './actionsReducer';

export default combineReducers({
  user: userReducer,
  actions: actionsReducer
});
