import axios from 'axios';
import { FETCH_USER } from './types';
import { TOGGLE_TRASH_CLEARING } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const toggleTrashClearing = newState => async dispatch => {
  const res = await axios.post('/api/clear-trash-status', {
    clearTrash: newState
  });
  dispatch({ type: TOGGLE_TRASH_CLEARING, payload: res.data });
};
