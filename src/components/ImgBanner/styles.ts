import styled from 'styled-components'

type PropTypeContainer = {
  height: number
}

export const Container = styled.div.attrs((props: PropTypeContainer) => ({
  height: props.height,
}))<PropTypeContainer>`
  position: relative;
  height: ${(props) => props.height}px;
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ImgFilter = styled.div`
  background-color: #343239bf;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
