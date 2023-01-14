import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: fit-content;
  margin: 1.5rem 0 2rem auto;
`

export const DropdownInput = styled.button`
  background-color: #dd5b6cb3;
  border: none;
  border-radius: 1rem;
  color: white;
  padding: 0.4rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
`

export const VerticalLine = styled.div`
  width: 1px;
  height: 1rem;
  background-color: #fbf9fb66;
  margin: 0 0.4rem;
`

type PropTypeIconContainer = {
  isOpen: boolean
}

export const IconContainer = styled.div.attrs(
  (props: PropTypeIconContainer) => ({
    isOpen: props.isOpen,
  })
)<PropTypeIconContainer>`
  transform: rotate(${(props) => (props.isOpen ? '180' : '0')}deg);
`

export const OptionsContainer = styled.div`
  position: absolute;
  right: 2.5rem;
  top: 100%;
  z-index: 5;
  padding: 0.4rem 0.8rem;
  background-color: #fbf9fb;
  text-align: left;
  font-size: 0.875rem;
  width: max-content;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3rem 0;
`

export const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`
