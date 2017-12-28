import { FETCH_USER } from '../actions/types';
/*
null - is loading auth status
false - not logged in
anything else truthy - logged in
*/
export default (state = null, action) => {
  console.log('users reducer');
  console.log(state, action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
