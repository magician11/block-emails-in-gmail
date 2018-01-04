import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const toggleBinClearing = newState => async dispatch => {
  const res = await axios.post('/api/clear-bin-status', {
    clearBinFolder: newState
  });
  dispatch({ type: FETCH_USER, payload: res.data });
};
