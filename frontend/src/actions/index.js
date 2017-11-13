import axios from 'axios';
import { FETCH_USER, FETCH_USER_PROFILE } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/fetch-user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchUserProfile = () => async dispatch => {
  const res = await axios.get('/api/fetch-user-profile');
  dispatch({ type: FETCH_USER_PROFILE, payload: res.data });
};
