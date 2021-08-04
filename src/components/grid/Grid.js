import React, { useEffect } from 'react';
import PropType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { requestGetPosts } from '../../actions/postsActions';
import { requestGetComments } from '../../actions/commentsActions';

// Components
import Photo from '../photo/Photo';

// Reducers
import { getPosts } from '../../reducers/postsReducer';
import { getComments } from '../../reducers/commentsReducer';

// Styles
import { GridWrapper } from './gridStyles';

const Grid = () => {
  const posts = useSelector(getPosts);
  const comments = useSelector(getComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetPosts());
    dispatch(requestGetComments());
  }, [dispatch]);
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
