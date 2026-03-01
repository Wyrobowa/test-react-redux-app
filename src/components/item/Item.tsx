import { useMemo } from "react";
import { useParams } from 'react-router-dom';
import { Box, Skeleton } from 'tharaday';
import { useDataFetching } from '../../hooks/useDataFetching';

// Components
import Comments from '../comments/Comments';
import Photo from '../photo/Photo';

const Item = () => {
  const { posts, comments, loading } = useDataFetching();
  const { postId } = useParams<{ postId: string }>();

  const index = useMemo(
    () => posts.findIndex(post => post.code === postId),
    [posts, postId],
  );

  if (loading) {
    return (
      <Box maxWidth={1200} display="flex" justifyContent="space-between" gap={8} marginX="auto">
        <Box flex={6}>
          <Skeleton height={500} width="100%" />
        </Box>
        <Box flex={4}>
          <Skeleton height={20} width="60%" />
          <Box marginTop={4}>
             <Skeleton height={40} width="100%" />
             <Skeleton height={40} width="100%" />
             <Skeleton height={40} width="100%" />
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box maxWidth={1200} marginX="auto">
      {postId && posts[index] && (
        <Box display="flex" justifyContent="space-between" gap={8}>
          <Box flex={6}>
            <Photo
              post={posts[index]}
              comments={comments[postId]}
              index={index}
              type="item"
            />
          </Box>
          <Box flex={4}>
            <Comments comments={comments[postId]} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Item;
