import Footer from '@/components/Footer'
import { homePageData } from '@/data/homePage'
import Banner from './Banner'
import OurWork from './OurWork'
import { Container } from './styles'
import WhoWeAre from './WhoWeAre'

const HomeView = () => {
  return (
    <Container>
      <Banner navbar={homePageData.navBar} {...homePageData.banner} />
      <WhoWeAre {...homePageData.whoWeAre} />
      <OurWork {...homePageData.ourWork} />
      <Footer />
    </Container>
  )
}
export default HomeView
