import styled from 'styled-components'
import { devices } from '@/styles/devices'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
  padding: 0 1rem;
  box-sizing: border-box;

  @media ${devices.tablet} {
    padding: 0;
  }
`

export const NavigationButton = styled.button`
  background-color: ${(props) => props.theme.colors.details};
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  min-width: 2.5rem;
  border-radius: 0.3rem;
  cursor: pointer;

  @media ${devices.tablet} {
    height: 3rem;
    width: 3rem;
    min-width: 3rem;
  }
`

export const FillAvailable = styled.div`
  width: 57rem;
  max-width: 518px;
  padding-left: 3rem;
  flex-shrink: 0;
`
