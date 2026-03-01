import { Box } from 'tharaday';
import { useDataFetching } from '../../hooks/useDataFetching';

// Components
import Photo from '../photo/Photo';

const Grid = () => {
  const { posts, comments } = useDataFetching();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      maxWidth={1200}
      style={{ marginLeft: 'auto', marginRight: 'auto' }}
    >
      {posts.length > 0 && posts.map((post, index) => (
        <Photo
          post={post}
          comments={comments[post.code]}
          key={post.code}
          index={index}
          type="grid"
        />
      ))}
    </Box>
  );
};

export default Grid;
