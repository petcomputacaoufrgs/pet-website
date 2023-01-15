import { devices } from '@/styles/devices'
import styled from 'styled-components'

type PropTypeTag = {
  color: string
}

const BaseTag = styled.span.attrs((props: PropTypeTag) => ({
  color: props.color,
}))<PropTypeTag>`
  background-color: ${(props) => props.color};
  padding: 0.3rem 0.6rem;
  border-radius: 1rem;
  width: fit-content;
  margin: 0.3rem 0;
  color: ${(props) => props.theme.colors.secondary};
`

export const SmallTag = styled(BaseTag)`
  font-size: 0.875rem;
`

export const LargeTag = styled(BaseTag)`
  font-size: 0.875rem;
  margin-right: 0.5rem;

  @media ${devices.desktopS} {
    font-size: 1rem;
  }
`
