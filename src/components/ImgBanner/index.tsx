import { Container, Image, ImgFilter } from './styles'
import { IImgBanner } from './types'
const ImgBanner = ({ src, alt, height }: IImgBanner) => {
  return (
    <Container height={height}>
      <Image src={src} height={height} alt={alt} />
      <ImgFilter></ImgFilter>
    </Container>
  )
}
export default ImgBanner
