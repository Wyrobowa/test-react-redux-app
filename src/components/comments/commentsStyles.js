import styled from 'styled-components';

export const RemoveCommentButton = styled.button`
  background: none;
  border: 0;
  line-height: 1;
  opacity: 0;
  
  &:hover {
    color: red;
  }
`;

export const CommentsWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  padding: 0.5rem 0;
  
  p {
    font-size: 1.2rem;
    margin: 0;
  }
  
  strong {
    color: ${({ theme }) => theme.colors.blue};
    margin-right: 5px;
  }

  &:hover {
    ${RemoveCommentButton} {
      opacity: 1;
    }
  }
`;

export const Comment = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  padding: 0.5rem 0;
`;

export const CommentForm = styled.form`
  input, textarea {
    width: 100%;
    border: 0;
    font-size: 1.3rem;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
    outline: none;
    resize: vertical;
  }
`;
