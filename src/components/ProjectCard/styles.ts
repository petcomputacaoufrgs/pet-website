import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 1rem 0;
  cursor: pointer;

  & > *,
  > * > * {
    cursor: pointer;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.1rem;
  flex-wrap: wrap;
`

export const MoreTags = styled.span`
  color: ${(props) => props.theme.colors.black};
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 800;
`

export const Name = styled.h4`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`

export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
`
