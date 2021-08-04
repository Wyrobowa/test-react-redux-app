import React, { useEffect, useMemo } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { requestGetPosts } from '../../actions/postsActions';

// Components
import Comments from '../comments/Comments';
import Photo from '../photo/Photo';

// Reducers
import { getPosts } from '../../reducers/postsReducer';
import { getComments } from '../../reducers/commentsReducer';

// Styles
import { ItemWrapper } from './itemStyles';
import { requestGetComments } from '../../actions/commentsActions';

const Item = () => {
  const posts = useSelector(getPosts);
  const comments = useSelector(getComments);
  const dispatch = useDispatch();
  const id = useParams().postId;

  const index = useMemo(
    () => posts.findIndex(post => post.code === id),
    [posts, id],
  );

  useEffect(() => {
    dispatch(requestGetPosts());
    dispatch(requestGetComments());
  }, []);

  return (
    <ItemWrapper>
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
    </ItemWrapper>
  );
};

export default Item;
