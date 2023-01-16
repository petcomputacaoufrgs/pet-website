import { devices } from '@/styles/devices'
import styled from 'styled-components'
import { ArrowColorType } from './types'

export const Link = styled.a`
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  border-radius: 3rem;
  padding: 0.75rem 2.5rem;
  margin: 1rem 0;
  text-align: center;
  font-size: 1rem;
  transition: all 0.2s cubic-bezier(0.47, 0, 0.75, 0.72);

  &:hover {
    background-color: ${(props) => props.theme.colors.details};
  }

  @media ${devices.desktopS} {
    font-size: 1.125rem;
  }
`

const ArrowBase = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  transition: all 0.2s cubic-bezier(0.47, 0, 0.75, 0.72);

  & svg {
    fill: ${(props) => props.theme.colors.primary};
    transition: all 0.2s cubic-bezier(0.47, 0, 0.75, 0.72);
  }

  &:hover {
    color: ${(props) => props.theme.colors.accentLighter};

    svg {
      fill: ${(props) => props.theme.colors.accentLighter};
    }
  }
`

export const ArrowLeft = styled(ArrowBase).attrs((props: ArrowColorType) => ({
  color: props.color,
}))<ArrowColorType>`
  padding: 1.5rem 0 0 1.5rem;
  color: ${(props) => props.color === 'white' && props.theme.colors.white};
  & svg {
    margin-right: 0.6rem;
    fill: ${(props) => props.color === 'white' && props.theme.colors.white};
  }

  &:hover {
    color: ${(props) =>
      props.color === 'default' && props.theme.colors.details};
    svg {
      fill: ${(props) =>
        props.color === 'default' && props.theme.colors.details};
    }
  }
`

export const ArrowRight = styled(ArrowBase)`
  & svg {
    margin-left: 0.6rem;
  }

  @media ${devices.desktopS} {
    margin-right: 4rem;
  }
`
