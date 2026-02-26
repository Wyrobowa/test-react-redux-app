import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropType from 'prop-types';

// Actions
import { addComment, removeComment } from '../../features/commentsSlice';

// Styles
import * as Styled from './commentsStyles';

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

  const handleRemoveComment = ({ currentTarget }) => {
    const index = parseInt(currentTarget.getAttribute('data-index'), 10);
    dispatch(removeComment({ postId: id, index }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addComment({ postId: id, author, comment }));
    setAuthor('');
    setComment('');
  };

  return (
    <Styled.CommentsWrapper>
      {comments?.length > 0 && comments.map((comment, index) => (
        <Styled.Comment key={comment.text}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <Styled.RemoveCommentButton
              onClick={handleRemoveComment}
              data-index={index}
            >
              &times;
            </Styled.RemoveCommentButton>
          </p>
        </Styled.Comment>
      ))}
      <Styled.CommentForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          onChange={handleOnChange}
          placeholder="author"
          value={author}
        />
        <input
          type="text"
          name="comment"
          onChange={handleOnChange}
          placeholder="comment"
          value={comment}
        />
        <input type="submit" hidden/>
      </Styled.CommentForm>
    </Styled.CommentsWrapper>
  );
};

Comments.propTypes = {
  comments: PropType.arrayOf(PropType.shape({
    text: PropType.string,
    user: PropType.string,
  })),
};

export default Comments;
