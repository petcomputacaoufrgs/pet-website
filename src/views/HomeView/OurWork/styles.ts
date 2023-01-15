import { devices } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e4dadf;
  padding: 2.5rem 2rem;
  width: 100vw;
  text-align: center;

  @media ${devices.desktopS} {
    padding: 4.5rem 4.75rem;
  }

  @media ${devices.desktopL} {
    padding: 4.5rem 8rem;
  }

  @media ${devices.desktopXL} {
    padding: 4.5rem 18rem;
  }
`

export const FilterDropdownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1.2rem 0 1rem;

  @media ${devices.desktopS} {
    margin: 1.5rem 0 2rem;
  }
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.desktopS} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 3rem;
  }

  @media ${devices.desktopL} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${devices.desktopXL} {
    grid-template-columns: repeat(6, 1fr);
  }
`
