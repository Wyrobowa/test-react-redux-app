import styled from 'styled-components';

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
  height: 1rem;
  background: #125688;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  //top: -3px;
  margin-right: 5px;
  
  &::after {
    display: inline-block;
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 1.25rem 1rem 0;
    border-color: transparent #125688 transparent transparent;
    top: 25%;
    left: 0;
  }
`;
