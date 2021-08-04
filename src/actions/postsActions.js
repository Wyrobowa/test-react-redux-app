export const REQUEST_GET_POSTS = 'REQUEST_GET_POSTS';
export const INCREMENT_LIKES = 'INCREMENT_LIKES';

export const requestGetPosts = () => ({
  type: REQUEST_GET_POSTS,
});

export const incrementLikes = index => ({
  type: INCREMENT_LIKES,
  index,
});
