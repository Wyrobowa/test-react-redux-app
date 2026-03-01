import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Box, Button, Text, Card, CardContent } from 'tharaday';

import { useAppDispatch } from '../../hooks';

// Actions
import { incrementLikes, Post } from '../../features/postsSlice';
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
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleIncrementLikes = () => {
    dispatch(incrementLikes(index));
    setTransition(true);
  };

  const isGrid = type === 'grid';

  return (
    <Card
      padding={'md'}
      bordered
      borderColor="subtle"
      backgroundColor="subtle"
      style={{
        flex: isGrid ? '1 0 calc(33.333% - 4rem)' : '1 0 60%',
        margin: isGrid ? '1rem 2rem' : '0',
        maxWidth: isGrid ? 'calc(33.333% - 4rem)' : '60%',
        boxShadow: '0 0 0 5px rgba(0, 0, 0, 0.03)',
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

      <CardContent style={{ padding: isGrid ? '0' : '1rem' }}>
        <Box paddingTop={4} display="flex" flexDirection="column" gap={4}>
          <Text variant="body-md" style={{ marginBottom: '1rem' }}>{post.caption}</Text>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Button variant="outline" size="sm" onClick={handleIncrementLikes}>
              &hearts; {post.likes}
            </Button>
            <Link to={`${routes.item}/${post.code}`} style={{ textDecoration: 'none' }}>
              <Button variant="outline" size="sm">
                &#128172; {comments?.length || 0}
              </Button>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Photo;
