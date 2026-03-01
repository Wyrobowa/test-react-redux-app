import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getPosts, selectAllPosts } from '../features/postsSlice';
import { getComments, selectAllComments } from '../features/commentsSlice';

export const useDataFetching = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const comments = useAppSelector(selectAllComments);

  useEffect(() => {
    const fetchData = () => {
      if (posts.length === 0) {
        dispatch(getPosts());
      }
      if (Object.keys(comments).length === 0) {
        dispatch(getComments());
      }
      setLoading(false);
    };

    const timer = setTimeout(fetchData, 800);
    return () => clearTimeout(timer);
  }, [dispatch, posts.length, comments]);

  return { posts, comments, loading };
};
