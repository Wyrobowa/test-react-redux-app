import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Box, Button, Text } from 'tharaday';

// Actions
import { incrementLikes } from '../../features/postsSlice';

// Common
import { routes } from '../../common/consts';

// Styles
import * as Styled from './photoStyles';

const Photo = ({ post, comments, index, type }) => {
  const [transition, setTransition] = useState(false);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  const handleIncrementLikes = () => {
    dispatch(incrementLikes(index));
    setTransition(true);
  };

  const isGrid = type === 'grid';

  return (
    <Box
      as="figure"
      padding={isGrid ? 4 : 0}
      m={isGrid ? 4 : 0}
      border={isGrid}
      borderColor="subtle"
      backgroundColor="main"
      flex={isGrid ? '1 0 calc(33.333% - 4rem)' : '1 0 60%'}
      style={{
        maxWidth: isGrid ? 'calc(33.333% - 4rem)' : '60%',
        boxShadow: isGrid ? '0 0 0 5px rgba(0, 0, 0, 0.03)' : 'none',
        position: 'relative'
      }}
    >
      <Box style={{ position: 'relative' }}>
        <Link to={`${routes.item}/${post.code}`}>
          <img
            src={post.display_src}
            alt={post.caption}
            style={{
              width: isGrid ? 'calc(100% + 4rem)' : '100%',
              marginLeft: isGrid ? '-2rem' : '0',
              marginTop: isGrid ? '-2rem' : '0',
              display: 'block'
            }}
          />
        </Link>
        <CSSTransition
          in={transition}
          onEntered={() => setTransition(false)}
          timeout={500}
          classNames="like"
          nodeRef={nodeRef}
        >
          <Styled.LikesHeart ref={nodeRef} className="likes-heart">{post.likes}</Styled.LikesHeart>
        </CSSTransition>
      </Box>

      <Box as="figcaption" mt={4}>
        <Text variant="body-md" mb={4}>{post.caption}</Text>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button variant="outline" size="sm" onClick={handleIncrementLikes}>
            &hearts; {post.likes}
          </Button>
          <Link to={`/view/${post.code}`} style={{ textDecoration: 'none' }}>
            <Button variant="outline" size="sm">
              <Styled.SpeechBubble />
              {comments?.length || 0}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
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
