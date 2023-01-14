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
`

export const SmallTag = styled(BaseTag)`
  color: #e4dadf;
  font-size: 0.688rem;
`
