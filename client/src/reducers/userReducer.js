import { FETCH_USER, GET_FILTERS, ERROR } from '../actions/types';
/*
null - is loading auth status
false - not logged in
anything else truthy - logged in
*/

const initialState = {
  profile: null,
  filters: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, profile: action.payload } || false;
    case GET_FILTERS:
      return { ...state, filters: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
