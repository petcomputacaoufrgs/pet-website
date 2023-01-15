import styled from 'styled-components'

type PropTypeTag = {
  color: string
}

const BaseTag = styled.span.attrs((props: PropTypeTag) => ({
  color: props.color,
}))<PropTypeTag>`
  background-color: ${(props) => props.color};
  padding: 0.1rem 0.6rem;
  border-radius: 1rem;
  width: fit-content;
  margin: 0.3rem 0;
  color: #e4dadf;
  cursor: default;
`

export const SmallTag = styled(BaseTag)`
  font-size: 0.688rem;
`

export const LargeTag = styled(BaseTag)`
  font-size: 0.875rem;
  margin-right: 0.5rem;
`
