import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const NavigationButton = styled.button`
  background-color: #950020;
  border: none;
  height: 3rem;
  width: 3rem;
  min-width: 3rem;
  opacity: ${(props) => (props.opaque ? '0.6' : '1')};
`

export const FillAvailable = styled.div`
  width: 58rem;
  padding: 0 3rem;
`
