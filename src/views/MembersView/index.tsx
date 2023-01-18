import Footer from '@/components/Footer'
import { CarouselContainer, Container, TitleContainer } from './styles'
import Carousel from './Carousel'
import isMobile from '@/hooks/isMobile'
import Title from '@/components/Title'
import ButtonLink from '@/components/ButtonLink'
import { useEffect, useState } from 'react'
import { membersPage } from '@/data/membersPage'

const MembersView = () => {
  const [showCarousel, setShowCarousel] = useState(false)
  const mobile = isMobile()

  useEffect(() => setShowCarousel(true), [])

  return (
    <Container>
      <ButtonLink type={'arrow-left'} label={'voltar a home'} href={'/'} />
      {mobile && (
        <TitleContainer>
          <Title text={membersPage.title} />
        </TitleContainer>
      )}
      <CarouselContainer>
        {showCarousel && <Carousel {...membersPage} />}
      </CarouselContainer>
      <Footer />
    </Container>
  )
}
export default MembersView
