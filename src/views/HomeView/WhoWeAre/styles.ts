import { devices } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  align-items: center;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column-reverse;

  @media ${devices.desktopS} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem 4.75rem;
  }

  @media ${devices.desktopL} {
    padding: 3rem 8rem;
  }

  @media ${devices.desktopXL} {
    padding: 3rem 18rem;
  }
`

export const Text = styled.p`
  margin: 1.2rem 0;

  @media ${devices.desktopL} {
    font-size: 1.125rem;
    margin: 1.4rem 0;
  }
`

export const ButtonWrapper = styled.div`
  margin: 2rem 0 1rem;
`

export const VideoContainer = styled.div`
  margin-left: auto;
  margin-bottom: 2.5rem;

  @media ${devices.desktopS} {
    margin-bottom: 0rem;
  }
`

export const VideoFrame = styled.iframe`
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0px 4px 14px 6px rgba(0, 0, 0, 0.25);
`
