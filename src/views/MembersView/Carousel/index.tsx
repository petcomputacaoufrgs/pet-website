import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import { members } from '@/data/members'
import MemberCard from '@/components/MemberCard'
import Title from '@/components/Title'
import { Container, FillAvailable, NavigationButton } from './styles'
import Icon from '@/components/Icon'
import isMobile from '@/hooks/isMobile'

const Carousel = () => {
  const swiperRef: any = useRef()
  const mobile = isMobile()

  return (
    <Container>
      <NavigationButton onClick={() => swiperRef.current?.slidePrev()}>
        <Icon type={'chevron-left'} />
      </NavigationButton>
      {!mobile && (
        <FillAvailable>
          <Title type={'h1'} text={'Nossos Petianos'} />
        </FillAvailable>
      )}
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
          1920: { slidesPerView: 4 },
          2560: { slidesPerView: 6 },
        }}
        spaceBetween={30}
        cssMode={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ width: '-webkit-fill-available', marginLeft: 'auto' }}
      >
        {members.map((member, index) => (
          <SwiperSlide>
            <MemberCard member={member} index={index + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButton onClick={() => swiperRef.current?.slideNext()}>
        <Icon type={'chevron-right'} />
      </NavigationButton>
    </Container>
  )
}
export default Carousel
