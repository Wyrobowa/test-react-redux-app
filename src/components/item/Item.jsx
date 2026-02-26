import React, { useEffect, useMemo } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getPosts, selectAllPosts } from '../../features/postsSlice';
import { getComments, selectAllComments } from '../../features/commentsSlice';

// Components
import Comments from '../comments/Comments';
import Photo from '../photo/Photo';

// Styles
import { ItemWrapper } from './itemStyles';

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
