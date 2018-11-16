import axios from 'axios';
import { FETCH_USER, GET_FILTERS, ERROR } from './types';

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/current-user');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const getFilters = () => async dispatch => {
  try {
    const res = await axios.get('/api/filters');
    dispatch({ type: GET_FILTERS, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const toggleBinClearing = newState => async dispatch => {
  try {
    const res = await axios.post('/api/clear-bin-status', {
      clearBinFolder: newState
    });
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
