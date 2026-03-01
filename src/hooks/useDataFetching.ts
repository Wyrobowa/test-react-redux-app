import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getPosts, selectAllPosts } from '../features/postsSlice';
import { getComments, selectAllComments } from '../features/commentsSlice';

export const useDataFetching = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const comments = useAppSelector(selectAllComments);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
    if (Object.keys(comments).length === 0) {
      dispatch(getComments());
    }
  }, [dispatch, posts.length, comments]);

  return { posts, comments };
};
