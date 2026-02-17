import Footer from '@/components/Footer'
import { homePageData } from '@/data/homePage'
import Banner from './Banner'
import OurWork from './OurWork'
import { Container } from './styles'
import WhoWeAre from './WhoWeAre'
import  Header  from '@/components/Header'

import header from '@/images/header.png'
import styled from 'styled-components'


export const HeaderTitle = styled.div`
  background-color: white;
  font-size: 6rem;
  padding: 0.5rem 1rem;
  font-weight: 600;

`

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
