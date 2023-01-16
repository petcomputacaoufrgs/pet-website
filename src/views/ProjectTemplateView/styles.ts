import { devices } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.secondary};
  min-height: 100vh;
  padding-bottom: 14.375rem;
  overflow: hidden;

  @media ${devices.desktopS} {
    padding-bottom: 8.5rem;
  }
`

export const BackHomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  padding: 0 2rem 0 1.25rem;

  @media ${devices.desktopS} {
    margin-top: -6rem;
    padding: 0 4.75rem 0 2rem;
  }

  @media ${devices.desktopL} {
    margin-top: -5rem;
    padding: 0 8rem 0 4rem;
  }

  @media ${devices.desktopXL} {
    margin-top: -4rem;
    padding: 0 18rem 0 12rem;
  }
`

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 6rem;
  width: 6rem;
  z-index: 5;

  @media ${devices.desktopS} {
    height: 11.25rem;
    width: 11.25rem;
  }
`

export const IconContainer = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  margin-right: 1rem;

  @media ${devices.desktopS} {
    margin-right: 1.5rem;
  }
`

export const Circle = styled.div`
  background-color: ${(props) => props.theme.colors.details};
  border-radius: 50%;
  margin: 1.5rem 0 0 1.5rem;
  width: 4.6rem;
  height: 4.6rem;

  @media ${devices.desktopS} {
    width: 8.75rem;
    height: 8.75rem;
    margin: 2.5rem 0 0 2.5rem;
  }
`

export const Main = styled.main`
  padding: 0 2rem 2rem 1.5rem;
  font-size: 1.125rem;

  @media ${devices.desktopS} {
    padding: 0 4.75rem 4rem;
  }

  @media ${devices.desktopL} {
    padding: 0 8rem 4rem;
  }

  @media ${devices.desktopXL} {
    padding: 0 18rem 4rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  margin-top: 1rem;

  @media ${devices.desktopS} {
    margin-left: 10rem;
  }

  @media ${devices.desktopL} {
    margin-left: 9rem;
  }

  @media ${devices.desktopXL} {
    margin-left: 7rem;
  }
`

export const Text = styled.p`
  margin-bottom: 1.125rem;

  @media ${devices.desktopL} {
    font-size: 1.25rem;
  }
`

export const ExtraInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  @media ${devices.desktopS} {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 8rem auto;
    gap: 1rem 0.5rem;
    align-items: baseline;
  }

  @media ${devices.desktopL} {
    grid-template-columns: 9rem auto;
    font-size: 1.25rem;
  }
`

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.details};
  font-weight: 600;
  margin: 1.25rem 0 0.5rem;

  @media ${devices.desktopS} {
    margin: 0;
  }
`

export const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${devices.desktopS} {
    flex-direction: row;
  }
`
