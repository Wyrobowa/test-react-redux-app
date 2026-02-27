import { useEffect, useMemo } from "react";
import { useParams } from 'react-router-dom';
import { Box } from 'tharaday';
import { useAppDispatch, useAppSelector } from '../../hooks';

// Actions
import { getPosts, selectAllPosts } from '../../features/postsSlice';
import { getComments, selectAllComments } from '../../features/commentsSlice';

// Components
import Comments from '../comments/Comments';
import Photo from '../photo/Photo';

const Item = () => {
  const posts = useAppSelector(selectAllPosts);
  const comments = useAppSelector(selectAllComments);
  const dispatch = useAppDispatch();
  const { postId } = useParams<{ postId: string }>();

  const index = useMemo(
    () => posts.findIndex(post => post.code === postId),
    [posts, postId],
  );

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
      style={{ maxWidth: '1200px' }}
    >
      {postId && posts[index] && (
        <Box display="flex" justifyContent="space-between" gap={8}>
          <Photo
            post={posts[index]}
            comments={comments[postId]}
            index={index}
            type="item"
          />
          <Comments comments={comments[postId]} />
        </Box>
      )}
    </Box>
  );
};

export default Item;
