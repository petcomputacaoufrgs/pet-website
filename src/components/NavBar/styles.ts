import styled from 'styled-components'

type PropTypenavbar = {
  size: number
}

export const Navbar = styled.nav.attrs((props: PropTypenavbar) => ({
  size: props.size,
}))<PropTypenavbar>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.size}, 10rem);
  column-gap: 0.5rem;
  align-items: center;
  justify-items: center;
  min-width: 27.25rem;
`

export const Link = styled.a`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  &:hover {
    background-color: #${(props) => props.theme.colors.accent};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  }
`
