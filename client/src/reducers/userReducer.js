import { FETCH_USER, GET_FILTERS } from '../actions/types';
/*
null - is loading auth status
false - not logged in
anything else truthy - logged in
*/
export default (state = { profile: null, filters: [] }, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, profile: action.payload } || false;
    case GET_FILTERS:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};
