export const REQUEST_GET_COMMENTS = 'REQUEST_GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const requestGetComments = () => ({
  type: REQUEST_GET_COMMENTS,
});

export const addComment = (id, author, comment) => ({
  type: ADD_COMMENT,
  id,
  author,
  comment,
});

export const removeComment = (id, index) => ({
  type: REMOVE_COMMENT,
  id,
  index,
});