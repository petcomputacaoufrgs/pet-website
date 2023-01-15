import { devices } from '@/styles/devices'
import styled from 'styled-components'
import { ArrowColorType } from './types'

export const Link = styled.a`
  background-color: #dd5b6c;
  color: #fbf9fb;
  border-radius: 3rem;
  padding: 0.75rem 2.5rem;
  margin: 1rem 0;
  text-align: center;
  font-size: 1rem;

  &:hover {
    background-color: #950020;
  }

  @media ${devices.desktopS} {
    font-size: 1.125rem;
  }
`

export const ArrowLeft = styled.a.attrs((props: ArrowColorType) => ({
  color: props.color,
}))<ArrowColorType>`
  padding: 1.5rem 0 0 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${(props) => (props.color === 'default' ? '#4d4c52' : '#FBF9FB')};

  & svg {
    margin-right: 0.6rem;
    fill: ${(props) => (props.color === 'default' ? '#4d4c52' : '#FBF9FB')};
  }

  &:hover {
    color: ${(props) => (props.color === 'default' ? '#950020' : '#e87180')};

    svg {
      fill: ${(props) => (props.color === 'default' ? '#950020' : '#e87180')};
    }
  }
`
