import BackHomeButton from '@/components/BackHomeButton'
import Footer from '@/components/Footer'
import { CarouselContainer, Container } from './styles'
import Test from './Carousel'

const MembersView = () => {
  return (
    <Container>
      <BackHomeButton color="gray" />
      <CarouselContainer>
        <Test />
      </CarouselContainer>
      <Footer />
    </Container>
  )
}
export default MembersView
