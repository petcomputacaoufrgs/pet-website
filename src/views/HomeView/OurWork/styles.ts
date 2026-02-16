import { devices } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
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

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: left;
  margin: 2rem 0 1.5rem;
`

export const ToggleButtonWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50px;
  display: inline-flex;
  padding: 4px;
  position: relative;
`

export const ToggleButton = styled.button<{ isActive: boolean; colorType: 'projects' | 'courses' }>`
  background-color: ${(props) => props.isActive ? props.theme.colors[props.colorType] : 'transparent'};
  border: none;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    opacity: 0.9;
  }

  @media ${devices.desktopS} {
    font-size: 1.125rem;
    padding: 0.8rem 2rem;
  }
`

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0 2rem;

  @media ${devices.desktopS} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const AxisFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const AxisFilterButton = styled.button<{ isActive: boolean; color: string }>`
  background-color: ${(props) => props.isActive ? props.color : 'transparent'};
  border: 2px solid ${(props) => props.color};
  border-radius: 1.5rem;
  color: ${(props) => props.isActive ? props.theme.colors.white : props.color};
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media ${devices.desktopS} {
    font-size: 1rem;
  }
`

export const StatusFilters = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const StatusFilterButton = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.isActive ? props.theme.colors.white + '40' : 'transparent'};
  border: 1px solid ${(props) => props.isActive ? props.theme.colors.primary + '30' : 'transparent'};
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.875rem;
  font-weight: ${(props) => props.isActive ? '600' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.white + '60'};
    border-color: ${(props) => props.theme.colors.primary + '40'};
  }

  @media ${devices.desktopS} {
    font-size: 1rem;
  }
`

export const StatusIndicator = styled.div<{ isActive: boolean; color: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.isActive ? props.color : 'transparent'};
  transition: all 0.2s ease;
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
