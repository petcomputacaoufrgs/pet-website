import { devices } from '@/styles/devices'
import styled from 'styled-components'

type PropTypeTitle = {
  variant: 'primary' | 'secondary'
}

export const TitleStyle = styled.h1.attrs((props: PropTypeTitle) => ({
  variant: props.variant,
}))<PropTypeTitle>`
  color: #343239;
  font-size: ${(props) =>
    props.variant === 'secondary' ? '2.4rem' : '3.2rem'};
  font-weight: 500;

  @media ${devices.desktopS} {
    font-size: 3.2rem;
  }

  @media ${devices.desktopL} {
    font-size: 4.5rem;
  }
`

export const SubtitleStyle = styled.h2`
  color: #343239;
  font-size: 2.125rem;
  font-weight: 500;

  @media ${devices.desktopL} {
    font-size: 2.6rem;
  }
`

/*
${(props) =>
    props.variant === 'secondary' &&
    `@media ${devices.desktopS} {
    font-size: 2.4rem;
  }`}
*/
