import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  background-color: #e4dadf;
  min-height: 100vh;
`

export const BackHomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  margin-top: -6rem;
  padding: 0 4.75rem 0 2rem;
`

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 11.25rem;
  width: 11.25rem;
`

export const IconContainer = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  margin-right: 1.5rem;
`

export const Circle = styled.div`
  width: 8.75rem;
  height: 8.75rem;
  background-color: #950020;
  border-radius: 50%;
  margin: 2.5rem 0 0 2.5rem;
`

export const Main = styled.main`
  padding: 0 4.75rem;
  font-size: 1.125rem;
  cursor: default;
`

export const TagContainer = styled.div`
  margin-left: 10rem;
  margin-bottom: 2rem;
`

export const Text = styled.p`
  margin-bottom: 1.125rem;
`

export const ExtraInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 8rem auto;
  column-gap: 0.5rem;
  margin: 3rem 0 2.5rem 0;
`

export const Subtitle = styled.h3`
  font-size: 1.125rem;
  color: #950020;
  font-weight: 600;
`
