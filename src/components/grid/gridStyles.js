import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const GridItem = styled.div`
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 2rem 2rem 2rem;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
  position: relative;
`;
