import styled from 'styled-components';

export const ItemWrapper = styled.div`
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  background: ${({ theme }) => theme.colors.white};
`;
