import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 3rem 4.75rem;
  cursor: default;
`

export const Text = styled.div`
  margin: 1.2rem 0;
`

export const ButtonWrapper = styled.div`
  margin: 2rem 0;
`

export const VideoContainer = styled.div`
  margin-left: auto;
`

export const VideoFrame = styled.iframe`
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
  background-color: #e4dadf;
  box-shadow: 0px 4px 14px 6px rgba(0, 0, 0, 0.25);
`
