import { useEffect, useMemo } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'tharaday';

// Actions
import { getPosts, selectAllPosts } from '../../features/postsSlice';
import { getComments, selectAllComments } from '../../features/commentsSlice';

// Components
import Comments from '../comments/Comments';
import Photo from '../photo/Photo';

const Item = () => {
  const posts = useSelector(selectAllPosts);
  const comments = useSelector(selectAllComments);
  const dispatch = useDispatch();
  const id = useParams().postId;

  const index = useMemo(
    () => posts.findIndex(post => post.code === id),
    [posts, id],
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
      display="flex"
      mx="auto"
      backgroundColor="main"
      style={{ maxWidth: '1200px' }}
    >
      {posts[index] && (
        <>
          <Photo
            post={posts[index]}
            comments={comments[id]}
            index={index}
            type="item"
          />
          <Comments comments={comments[id]} />
        </>
      )}
    </Box>
  );
};

export default Item;
