import styled from 'styled-components';

export const PhotoWrapper = styled.div`
  position: relative;
`;

export const Photo = styled.img`
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-top: -2rem;
  max-width: none;
`;

export const ControlButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikesHeart = styled.span`
  background: url(http://f.cl.ly/items/3Y373q2Q3J3Y1j203n0m/Bitmap-3.png) center no-repeat;
  background-size: contain;
  font-size: 2rem;
  padding: 1rem;
  position: absolute;
  color: #125688;
  left: 50%;
  top: 50%;
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s;
  transform: translateX(-50%) translateY(-50%) scale(5);
  display: block;

  &.like-enter {
    transition: all .2s;
    transform: translateX(-50%) translateY(-50%) scale(1);
    opacity: 1;

    &.like-enter-active {
      transform: translateX(-50%) translateY(-50%) scale(5);
    }
  }

  .like-leave-active {
    display: none;
  }
`;

export const SpeechBubble = styled.span`
  width: 1.5rem;
  height: 1.25rem;
  background: #125688;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  margin-right: 5px;
  
  &::after {
    display: inline-block;
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 1.25rem 1.25rem 0;
    border-color: transparent #125688 transparent transparent;
    top: 30%;
    left: 0;
  }
`;

export const PhotoFigure = styled.figure`
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 2rem 2rem 2rem;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.03);
  position: relative;
  
  ${({ type }) => type && type === 'item' && `
    box-shadow: none;
    margin: 0 2rem 0 0;
    border: 0;
    padding: 0;
    flex: 1 0 60%;
    max-width: 60%;
    
    ${Photo} {
      width: 100%;
      margin: 0;
    }
  `}
`;
