import styled from 'styled-components'
import { devices } from '@/styles/devices'

type PropTypenavbar = {
  size: number
}

export const Navbar = styled.nav.attrs((props: PropTypenavbar) => ({
  size: props.size,
}))<PropTypenavbar>`
  display: none;
  grid-template-columns: repeat(${(props) => props.size}, 10rem);
  column-gap: 0.5rem;
  align-items: center;
  justify-items: center;
  min-width: 27.25rem;

  @media (min-width: 539px) {
    display: grid;
    grid-template-columns: repeat(${(props) => props.size}, 5.5rem);
    column-gap: 0.1rem;
    min-width: auto;
    font-size: 0.75rem;
  }

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(${(props) => props.size}, 8.5rem);
    column-gap: 0.4rem;
    font-size: 1rem;
  }

  @media ${devices.desktopS} {
    grid-template-columns: repeat(${(props) => props.size}, 10rem);
    column-gap: 0.5rem;
  }
`

export const Link = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  }
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  padding: 0.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    border-radius: 0.5rem;
  }

  @media (min-width: 539px) {
    display: none;
  }
`

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  gap: 0;
  padding: 1rem 0;
  min-width: 100%;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 539px) {
    display: none;
  }
`

export const MobileLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  transition: all 0.1s ease-out;
  display: block;
  text-align: left;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`

export const NavBarWrapper = styled.div`
  position: relative;
`
