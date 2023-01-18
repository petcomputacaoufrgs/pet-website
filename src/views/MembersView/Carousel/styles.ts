import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const NavigationButton = styled.button`
  background-color: ${(props) => props.theme.colors.details};
  border: none;
  height: 3rem;
  width: 3rem;
  min-width: 3rem;
  border-radius: 0.3rem;
`

export const FillAvailable = styled.div`
  width: 57rem;
  max-width: 518px;
  padding-left: 3rem;
`
