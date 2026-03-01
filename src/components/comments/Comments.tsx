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
    <Box padding={4}>
      {comments?.length > 0 &&
        comments.map((comment, index) => (
          <Box
            key={comment.text + index}
            borderBottom
            paddingY={2}
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            gap={2}
          >
            <Text variant="body-md">
              <Box display="flex" flexWrap="wrap" gap={2}>
                <Text as="span" weight="bold">
                  {comment.user}
                </Text>
                {comment.text}
              </Box>
            </Text>
            <Button
              variant="subtle"
              intent="danger"
              size="sm"
              aria-label="Delete comment"
              onClick={() => handleRemoveComment(index)}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M8 6V4h8v2" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
              </svg>
            </Button>
          </Box>
        ))}
      <Box
        as="form"
        onSubmit={handleSubmit}
        marginTop={4}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Input
          name="author"
          onChange={handleOnChange}
          placeholder="author"
          value={formData.author}
          fullWidth
        />
        <Input
          name="comment"
          onChange={handleOnChange}
          placeholder="comment"
          value={formData.comment}
          fullWidth
        />
        <Button type="submit" hidden>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Comments;
