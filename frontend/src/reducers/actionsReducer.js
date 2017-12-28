import { TOGGLE_TRASH_CLEARING } from '../actions/types';

const initialState = {
  clearTrash: false
};

export default (state = initialState, action) => {
  console.log('actions reducer');
  console.log(state, action);
  switch (action.type) {
    case TOGGLE_TRASH_CLEARING:
      return { ...state, clearTrash: action.payload };
    default:
      return state;
  }
};
