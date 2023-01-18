import ImgBanner from '@/components/ImgBanner'
import NavBar from '@/components/NavBar'
import Title from '@/components/Title'
import isMobile from '@/hooks/isMobile'
import Image from 'next/image'
import bgImg from '../../../images/banner.jpg'
import logoPet from '../../../images/LogoPET.png'
import { Container, Description, InfoContainer, TopBanner } from './styles'
import { IBanner } from './types'

const Banner = ({ title, description, navbar }: IBanner) => {
  const mobile = isMobile()

  return (
    <Container>
      <ImgBanner src={bgImg.src} height={mobile ? 450 : 628} />
      <InfoContainer>
        <TopBanner>
          <Image src={logoPet.src} alt="PET logo" height={90} width={90} />
          {!mobile && <NavBar navData={navbar} />}
        </TopBanner>
        <div>
          <Title type={'page'} text={title} />
          {description &&
            description.map((paragraph, index) => (
              <Description key={`banner-paragraph-${index}`}>
                {paragraph}
              </Description>
            ))}
        </div>
      </InfoContainer>
    </Container>
  )
}
export default Banner
