import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { CSSTransition } from 'react-transition-group';

// Actions
import { incrementLikes } from '../../features/postsSlice';

// Common
import { routes } from '../../common/consts';

// Styles
import * as Styled from './photoStyles';

const Photo = ({ post, comments, index, type }) => {
  const [transition, setTransition] = useState(false);
  const dispatch = useDispatch();

  const handleIncrementLikes = ({ currentTarget }) => {
    const index = currentTarget.getAttribute('data-index');
    dispatch(incrementLikes(index));
    setTransition(true);
  };

  return (
    <Styled.PhotoFigure type={type}>
      <Styled.PhotoWrapper>
        <Link to={`${routes.item}/${post.code}`}>
          <Styled.Photo src={post.display_src} alt={post.caption}/>
        </Link>
        <CSSTransition
          in={transition}
          onEntered={() => setTransition(false)}
          timeout={500}
          classNames="like"
        >
          <Styled.LikesHeart className="likes-heart">{post.likes}</Styled.LikesHeart>
        </CSSTransition>
        <figcaption>
          <p>{post.caption}</p>
          <Styled.ControlButtons>
            <button onClick={handleIncrementLikes} data-index={index}>&hearts; {post.likes}</button>
            <Link to={`/view/${post.code}`} className="button">
              <Styled.SpeechBubble />
              {comments?.length || 0}
            </Link>
          </Styled.ControlButtons>
        </figcaption>
      </Styled.PhotoWrapper>
    </Styled.PhotoFigure>
  );
};

Photo.propTypes = {
  post: PropType.shape({
    code: PropType.string,
    caption: PropType.string,
    likes: PropType.number,
    id: PropType.string,
    display_src: PropType.string,
  }).isRequired,
  comments: PropType.arrayOf(PropType.shape({
    text: PropType.string,
    user: PropType.string,
  })),
  index: PropType.number.isRequired,
  type: PropType.oneOf(['grid', 'item']).isRequired,
};

export default Photo;
