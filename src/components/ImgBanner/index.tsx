import { Container, Image, ImgFilter } from './styles'
const ImgBanner = ({ src, height }: { src: string; height: number }) => {
  return (
    <Container height={height}>
      <Image src={src} height={height} />
      <ImgFilter></ImgFilter>
    </Container>
  )
}
export default ImgBanner
