import styled from 'styled-components'

export const Container = styled.a`
  & svg {
    fill: ${(props) => props.theme.colors.white};
    transition: all 0.2s ease-in-out;
  }

  &:hover svg {
    fill: ${(props) => props.theme.colors.accentLighter};
  }
`
