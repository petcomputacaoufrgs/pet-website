import styled from 'styled-components'

export const Container = styled.a`
  & svg {
    fill: ${(props) => props.theme.colors.white};
  }

  &:hover svg {
    fill: ${(props) => props.theme.colors.accentLighter};
  }
`
