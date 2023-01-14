import ImgBanner from '@/components/ImgBanner'
import NavBar from '@/components/NavBar'
import { navbar } from '@/data/navbar'
import bgImg from '../../../images/banner.jpg'
import logoPet from '../../../images/LogoPET.png'
import {
  Container,
  Description,
  InfoContainer,
  MainTitle,
  TopBanner,
} from './styles'

const Banner = () => {
  return (
    <Container>
      <ImgBanner src={bgImg.src} height={628} />
      <InfoContainer>
        <TopBanner>
          <img src={logoPet.src} height={90} width={90} />
          <NavBar navData={navbar} />
        </TopBanner>
        <div>
          <MainTitle>PET COMPUTAÇÃO UFRGS</MainTitle>
          <Description>
            Programa de Educação Tutorial Computação UFRGS
          </Description>
        </div>
      </InfoContainer>
    </Container>
  )
}
export default Banner
