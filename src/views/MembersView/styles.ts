import { devices } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e4dadf;
  padding-bottom: 14.375rem;
  @media ${devices.desktopS} {
    padding-bottom: 8.5rem;
  }
`

export const TitleContainer = styled.div`
  padding: 3rem 0 0 2rem;
`

export const CarouselContainer = styled.div`
  margin: auto 0;
`
