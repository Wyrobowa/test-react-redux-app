// Actions
import { ADD_COMMENT, REMOVE_COMMENT, REQUEST_GET_COMMENTS } from '../actions/commentsActions';

// Data
import commentsData from '../data/comments';

const initState = {
  comments: {},
};

const comments = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_GET_COMMENTS:
      return {
        ...state,
        comments: commentsData,
      };
    case ADD_COMMENT:
      console.log(state)
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.id]: [
            ...state.comments[action.id],
            {
              user: action.author,
              text: action.comment,
            },
          ],
        },
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.id]: [
            ...state.comments[action.id].slice(0,action.index),
            ...state.comments[action.id].slice(action.index + 1)
          ],
        },
      };
    default:
      return state;
  }
};

export const getComments = state => state.comments.comments;

export default comments;
