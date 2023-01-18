import { devices } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.desktopS} {
    padding: 2rem 4.75rem;
    flex-direction: row;
    align-items: normal;
  }

  @media ${devices.desktopL} {
    padding: 2rem 8rem;
  }

  @media ${devices.desktopXL} {
    padding: 2rem 18rem;
  }
`

export const ContactUs = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.accentLighter};
`

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.7rem;
`

export const Email = styled.a`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.white};
  margin-left: 0.5rem;
`

export const SocialMedia = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.accentLighter};
  margin-top: 1.5rem;

  @media ${devices.desktopS} {
    text-align: right;
    margin-top: 0;
  }
`

export const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1.5rem;
  margin-top: 0.7rem;
`
