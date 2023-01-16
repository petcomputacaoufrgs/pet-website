import styled, { keyframes } from 'styled-components'

const sleepZsAnimation1 = keyframes`
  0% {
    transform: translate(0, 0);
  } 
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(50px, -30px);
  }
`

const sleepZsAnimation2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(60px, -40px);
  }
`

const sleepZsAnimation3 = keyframes`
  0% {
    transform: translate(15px, -15px);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(60px, -50px);
  }
`

export const Svg = styled.svg`
  & .sleep-z-3 {
    transform: translate(15px, -15px);
    opacity: 0;
    animation: ${sleepZsAnimation3} 6s 1.6s infinite ease;
  }

  & .sleep-z-2 {
    opacity: 0;
    animation: ${sleepZsAnimation2} 6s 0.8s infinite ease;
  }

  & .sleep-z-1 {
    opacity: 0;
    animation: ${sleepZsAnimation1} 6s infinite ease;
  }
`
