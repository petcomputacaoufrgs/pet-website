import Footer from '@/components/Footer'
import { CarouselContainer, Container, TitleContainer } from './styles'
import Carousel from './Carousel'
import isMobile from '@/hooks/isMobile'
import Title from '@/components/Title'
import ButtonLink from '@/components/ButtonLink'
import { useEffect, useState } from 'react'

const MembersView = () => {
  const [showCarousel, setShowCarousel] = useState(false)
  const mobile = isMobile()

  useEffect(() => setShowCarousel(true), [])

  return (
    <Container>
      <ButtonLink type={'arrow-left'} label={'voltar a home'} href={'/'} />
      {mobile && (
        <TitleContainer>
          <Title text={'Nossos Petianos'} />
        </TitleContainer>
      )}
      <CarouselContainer>{showCarousel && <Carousel />}</CarouselContainer>
      <Footer />
    </Container>
  )
}
export default MembersView
