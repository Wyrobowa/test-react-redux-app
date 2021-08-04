// Actions
import { INCREMENT_LIKES, REQUEST_GET_POSTS } from '../actions/postsActions';

// Data
import postsData from '../data/posts';

const initState = {
  posts: [],
};

const posts = (state = initState, action) => {
  const updatedPosts = [...state.posts];

  switch (action.type) {
    case REQUEST_GET_POSTS:
      return {
        ...state,
        posts: postsData,
      };
    case INCREMENT_LIKES:
      updatedPosts[action.index].likes = updatedPosts[action.index].likes + 1;

      return {
        ...state,
        posts: updatedPosts,
      };
    default:
      return state;
  }
};

export const getPosts = state => state.posts.posts;

export default posts;
