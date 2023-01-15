import { Container, Image, ImgFilter } from './styles'
import { IImgBanner } from './types'
const ImgBanner = ({ src, height }: IImgBanner) => {
  return (
    <Container height={height}>
      <Image src={src} height={height} />
      <ImgFilter></ImgFilter>
    </Container>
  )
}
export default ImgBanner
