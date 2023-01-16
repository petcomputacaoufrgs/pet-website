import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: fit-content;
`

export const DropdownInput = styled.button`
  background-color: ${(props) => props.theme.colors.accent + 'b3'};
  border: none;
  border-radius: 1rem;
  color: white;
  padding: 0.4rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const VerticalLine = styled.div`
  width: 1px;
  height: 1rem;
  background-color: ${(props) => props.theme.colors.white + '66'};
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
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
`

const openAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scaleY(0.001);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
`
export const OptionsContainer = styled.div`
  position: absolute;
  right: 2.5rem;
  top: 100%;
  z-index: 5;
  padding: 0.3rem 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  text-align: left;
  font-size: 1rem;
  width: max-content;
  filter: drop-shadow(
    0px 4px 4px ${(props) => props.theme.colors.black + '40'}
  );
  transform-origin: top;
  animation: ${openAnimation} 0.3s cubic-bezier(0.4, 0, 1, 1);
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem 0;
  cursor: pointer;

  & label {
    cursor: pointer;
  }
`

export const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`
