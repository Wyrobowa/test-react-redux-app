import { useEffect } from 'react';
import { Box } from 'tharaday';
import { useAppDispatch, useAppSelector } from '../../hooks';

// Actions
import { getPosts, selectAllPosts } from '../../features/postsSlice';
import { getComments, selectAllComments } from '../../features/commentsSlice';

// Components
import Photo from '../photo/Photo';

const Grid = () => {
  const posts = useAppSelector(selectAllPosts);
  const comments = useAppSelector(selectAllComments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
    if (Object.keys(comments).length === 0) {
      dispatch(getComments());
    }
  }, [dispatch, posts.length, comments]);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}
    >
      {posts.length > 0 && posts.map((post, index) => (
        <Photo
          post={post}
          comments={comments[post.code]}
          key={post.code}
          index={index}
          type="grid"
        />
      ))}
    </Box>
  );
};

export default Grid;
