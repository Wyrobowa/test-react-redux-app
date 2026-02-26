import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropType from 'prop-types';
import { Box, Text, Input, Button } from 'tharaday';

// Actions
import { addComment, removeComment } from '../../features/commentsSlice';

const Comments = ({ comments }) => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const id = useParams().postId;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'author') {
      setAuthor(value);
    }

    if (name === 'comment') {
      setComment(value);
    }
  };

  const handleRemoveComment = (index) => {
    dispatch(removeComment({ postId: id, index }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!author || !comment) return;
    dispatch(addComment({ postId: id, author, comment }));
    setAuthor('');
    setComment('');
  };

  return (
    <Box flex="1 0 40%" padding={4}>
      {comments?.length > 0 && comments.map((comment, index) => (
        <Box key={comment.text + index} borderBottom paddingY={2} display="flex" justifyContent="space-between" alignItems="center">
          <Text variant="body-md">
            <Text as="span" weight="bold" style={{ marginRight: '0.5rem' }}>{comment.user}</Text>
            {comment.text}
          </Text>
          <Button
            variant="ghost"
            intent="danger"
            size="sm"
            onClick={() => handleRemoveComment(index)}
          >
            &times;
          </Button>
        </Box>
      ))}
      <Box as="form" onSubmit={handleSubmit} mt={4} display="flex" flexDirection="column" gap={2}>
        <Input
          name="author"
          onChange={handleOnChange}
          placeholder="author"
          value={author}
        />
        <Input
          name="comment"
          onChange={handleOnChange}
          placeholder="comment"
          value={comment}
        />
        <Button type="submit" hidden>Submit</Button>
      </Box>
    </Box>
  );
};

Comments.propTypes = {
  comments: PropType.arrayOf(PropType.shape({
    text: PropType.string,
    user: PropType.string,
  })),
};

export default Comments;
