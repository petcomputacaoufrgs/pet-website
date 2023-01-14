import BackButton from '@/components/BackButton'
import Footer from '@/components/Footer'
import { CarouselContainer, Container } from './styles'
import Test from './Test'

const MembersView = () => {
  return (
    <Container>
      <BackButton />
      <CarouselContainer>
        <Test />
      </CarouselContainer>
      <Footer />
    </Container>
  )
}
export default MembersView
