import axios from 'axios';
import { FETCH_USER } from './types';
// import { TOGGLE_TRASH_CLEARING } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  console.log('response from fetchUser');
  console.log(res);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const toggleTrashClearing = newState => async dispatch => {
  const res = await axios.post('/api/clear-trash-status', {
    clearTrash: newState
  });
  console.log('Dispatching from toggle trash');
  console.log(res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};
