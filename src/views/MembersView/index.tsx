import Footer from '@/components/Footer'
import { CarouselContainer, Container, TitleContainer } from './styles'
import Carousel from './Carousel'
import isMobile from '@/hooks/isMobile'
import Title from '@/components/Title'
import ButtonLink from '@/components/ButtonLink'

const MembersView = () => {
  const mobile = isMobile()

  return (
    <Container>
      <ButtonLink type={'arrow-left'} label={'voltar a home'} href={'/'} />
      {mobile && (
        <TitleContainer>
          <Title type={'h1'} text={'Nossos Petianos'} />
        </TitleContainer>
      )}
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <Footer />
    </Container>
  )
}
export default MembersView
