import styled, { keyframes } from 'styled-components'

const moveArmAnimation = keyframes`
  0% {
    transform: rotateZ(-2deg);
  }
  50% {
    transform: rotateZ(4deg);
  }
  100% {
    transform: rotateZ(-2deg);
  }
`

export const Svg = styled.svg`
  & .right-arm {
    animation: ${moveArmAnimation} 1.5s infinite;
  }
`
