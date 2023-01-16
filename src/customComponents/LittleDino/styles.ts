import styled, { keyframes } from 'styled-components'

const breathAnimation = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.025);
  }
  100% {
    transform: scaleY(1);
  }
`

const awakeningAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(4deg);
  }
  75% {
    transform: rotate(-4deg);
  }
  100%{
    transform: rotate(0deg);
  }
`

export const Container = styled.div`
  height: 28.125rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: -12rem;
`

export const TransparentButton = styled.button`
  border: none;
  background-color: transparent;
  animation: ${breathAnimation} 4s infinite ease;

  &.awakening-dino {
    animation: ${awakeningAnimation} 0.3s 3 ease-in-out;
  }
`
