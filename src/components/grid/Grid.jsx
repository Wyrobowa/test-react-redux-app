import React, { useEffect } from 'react';
import PropType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getPosts, selectAllPosts } from '../../features/postsSlice';
import { getComments, selectAllComments } from '../../features/commentsSlice';

// Components
import Photo from '../photo/Photo';

// Styles
import { GridWrapper } from './gridStyles';

const Grid = () => {
  const posts = useSelector(selectAllPosts);
  const comments = useSelector(selectAllComments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
    if (Object.keys(comments).length === 0) {
      dispatch(getComments());
    }
  }, [dispatch, posts.length, comments]);
  return (
    <GridWrapper>
      {posts.length > 0 && posts.map((post, index) => (
        <Photo
          post={post}
          comments={comments[post.code]}
          key={post.code}
          index={index}
          type="grid"
        />
      ))}
    </GridWrapper>
  );
};

Grid.propTypes = {
  children: PropType.node,
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
