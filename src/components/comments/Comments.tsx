import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Input, Button } from 'tharaday';

import { useAppDispatch } from '../../hooks';

// Actions
import { addComment, removeComment, Comment } from '../../features/commentsSlice';

interface CommentsProps {
  comments: Comment[];
}

const Comments = ({ comments }: CommentsProps) => {
  const [formData, setFormData] = useState({ author: '', comment: '' });
  const dispatch = useAppDispatch();
  const { postId } = useParams<{ postId: string }>();

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveComment = (index: number) => {
    if (postId) {
      dispatch(removeComment({ postId, index }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { author, comment } = formData;
    if (!author || !comment || !postId) return;
    dispatch(addComment({ postId, author, comment }));
    setFormData({ author: '', comment: '' });
  };

  return (
    <Box flex="1 0 40%" padding={4}>
      {comments?.length > 0 &&
        comments.map((comment, index) => (
          <Box
            key={comment.text + index}
            borderBottom
            paddingY={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text variant="body-md">
              <Text as="span" weight="bold" style={{ marginRight: '0.5rem' }}>
                {comment.user}
              </Text>
              {comment.text}
            </Text>
            <Button
              variant="outline"
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
          value={formData.author}
        />
        <Input
          name="comment"
          onChange={handleOnChange}
          placeholder="comment"
          value={formData.comment}
        />
        <Button type="submit" hidden>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Comments;
