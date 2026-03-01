import { useMemo } from "react";
import { useParams } from 'react-router-dom';
import { Box } from 'tharaday';
import { useDataFetching } from '../../hooks/useDataFetching';

// Components
import Comments from '../comments/Comments';
import Photo from '../photo/Photo';

const Item = () => {
  const { posts, comments } = useDataFetching();
  const { postId } = useParams<{ postId: string }>();

  const index = useMemo(
    () => posts.findIndex(post => post.code === postId),
    [posts, postId],
  );

  return (
    <Box maxWidth={1200}>
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
