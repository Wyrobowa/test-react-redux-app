// Actions
import { INCREMENT_LIKES } from '../actions/postActions';

const initState = {

};

const post = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_LIKES:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default post;
