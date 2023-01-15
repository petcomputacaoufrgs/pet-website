import styled from 'styled-components'
import { devices } from '@/styles/devices'

export const Container = styled.div`
  position: relative;
  cursor: default;
`

export const InfoContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  padding: 1.5rem;
`

export const TopBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MainTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  text-align: center;
  margin: 6rem 0 1rem;
  font-size: 2.1rem;

  @media ${devices.desktopS} {
    font-size: 4rem;
  }
`

export const Description = styled.p`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  @media ${devices.desktopS} {
    font-size: 1.5rem;
  }
`
