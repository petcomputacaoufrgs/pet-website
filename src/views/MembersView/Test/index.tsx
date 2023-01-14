import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import { members } from '@/data/members'
import MemberCard from '@/components/MemberCard'
import Title from '@/components/Title'
import { Container, FillAvailable } from './styles'

export default function App() {
  const swiper = useSwiper()
  return (
    <Container>
      <FillAvailable>
        <Title type={'h1'} text={'Nossos Petianos'} />
      </FillAvailable>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ width: '-webkit-fill-available' }}
      >
        {members.map((member, index) => (
          <SwiperSlide>
            <MemberCard member={member} index={index + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
