import Footer from '@/components/Footer'
import Banner from './Banner'
import OurWork from './OurWork'
import { Container } from './styles'
import WhoWeAre from './WhoWeAre'

const HomeView = () => {
  return (
    <Container>
      <Banner />
      <WhoWeAre />
      <OurWork />
      <Footer />
    </Container>
  )
}
export default HomeView
