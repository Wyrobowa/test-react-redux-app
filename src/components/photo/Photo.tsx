import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Box, Button, Text, Card } from 'tharaday';

import { useAppDispatch } from '../../hooks';

// Actions
import { incrementLikes, deletePost, Post } from '../../features/postsSlice';
import { Comment } from '../../features/commentsSlice';

// Common
import { routes } from '../../common/consts';

// Styles
import * as Styled from './photoStyles';

interface PhotoProps {
  post: Post;
  comments?: Comment[];
  index: number;
  type: 'grid' | 'item';
}

const Photo = ({ post, comments, index, type }: PhotoProps) => {
  const [transition, setTransition] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleIncrementLikes = () => {
    dispatch(incrementLikes(index));
    setTransition(true);
  };

  const handleDeletePost = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(deletePost(index));
      if (type === 'item') {
        navigate(routes.main);
      }
    }
  };

  const isGrid = type === 'grid';

  return (
    <Card
      padding="none"
      bordered
      borderColor="subtle"
      backgroundColor="subtle"
      style={{
        position: 'relative',
        boxShadow: '0 0 0 5px rgba(0, 0, 0, 0.03)',
        overflow: 'hidden'
      }}
    >
      <Box style={{ position: 'relative' }}>
        <Link to={`${routes.item}/${post.code}`}>
          <img
            src={post.display_src}
            alt={post.caption}
            style={{
              width: '100%',
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

      <Box padding={4}>
        <Box display="flex" flexDirection="column" gap={4}>
          <Text variant="body-md">{post.caption}</Text>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" gap={2}>
              <Button variant="outline" size="sm" onClick={handleIncrementLikes}>
                &hearts; {post.likes}
              </Button>
              <Link to={`${routes.item}/${post.code}`} style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="sm">
                  &#128172; {comments?.length || 0}
                </Button>
              </Link>
            </Box>
            <Button variant="outline" intent="danger" size="sm" onClick={handleDeletePost}>
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Photo;
