import { useState, useMemo } from 'react';
import { Box, Input, Skeleton } from 'tharaday';
import { useDataFetching } from '../../hooks/useDataFetching';

// Components
import Photo from '../photo/Photo';

const Grid = () => {
  const { posts, comments, loading } = useDataFetching();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    return posts.filter(post =>
      post.caption.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  return (
    <Box display="flex" flexDirection="column" gap={8} maxWidth="75rem">
      <Box marginBottom={8}>
        <Input
          placeholder="Search posts by caption..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={8}
      >
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Box key={i}>
              <Skeleton height={300} width="100%" />
              <Box marginTop={4}>
                <Skeleton height={20} width="80%" />
                <Box marginTop={2} display="flex" gap={2}>
                  <Skeleton height={30} width={60} />
                  <Skeleton height={30} width={60} />
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          filteredPosts.length > 0 && filteredPosts.map((post) => {
             const actualIndex = posts.findIndex(p => p.code === post.code);
             return (
              <Photo
                post={post}
                comments={comments[post.code]}
                key={post.code}
                index={actualIndex}
                type="grid"
              />
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default Grid;
