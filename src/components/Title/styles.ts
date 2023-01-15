import { devices } from '@/styles/devices'
import styled from 'styled-components'

export const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  text-align: center;
  margin: 6rem 0 1rem;
  font-size: 2.1rem;
  font-weight: 600;

  @media ${devices.desktopS} {
    font-size: 4rem;
  }
`

const BaseTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;

  @media ${devices.desktopS} {
    font-size: 3.2rem;
  }

  @media ${devices.desktopL} {
    font-size: 4.5rem;
  }
`

export const DefaultTitle = styled(BaseTitle)`
  font-size: 3.2rem;
`

export const ProjectTitle = styled(BaseTitle)`
  font-size: 2.4rem;
`

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-size: 2.125rem;
  font-weight: 500;

  @media ${devices.desktopL} {
    font-size: 2.6rem;
  }
`
