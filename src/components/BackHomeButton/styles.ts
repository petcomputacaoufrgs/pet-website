import styled from 'styled-components'

type PropTypeLink = {
  color: 'white' | 'gray'
}

export const Link = styled.a.attrs((props: PropTypeLink) => ({
  color: props.color,
}))<PropTypeLink>`
  padding: 1.5rem 0 0 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${(props) => (props.color === 'gray' ? '#4d4c52' : '#FBF9FB')};

  & svg {
    margin-right: 0.6rem;
    fill: ${(props) => (props.color === 'gray' ? '#4d4c52' : '#FBF9FB')};
  }

  &:hover {
    color: ${(props) => (props.color === 'gray' ? '#950020' : '#e87180')};

    svg {
      fill: ${(props) => (props.color === 'gray' ? '#950020' : '#e87180')};
    }
  }
`
