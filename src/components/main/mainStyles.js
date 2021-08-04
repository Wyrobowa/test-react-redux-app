import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: 'Grand Hotel', cursive;
  text-align: center;
  font-size: 13rem;
  margin: 2rem 0 4rem;
  letter-spacing: -1px;
  text-shadow: 0 4px 0 rgba(18, 86, 136, 0.11);

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;

    &:focus {
      outline: 0;
    }
  }
`;
