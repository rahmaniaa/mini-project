// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { CardLoading, CardEvent } from '..';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function CardSwiper(props) {
  const events = props.events;
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='card-carousel'>
        {events.isLoading ? (
          <>
            <SwiperSlide>
              <CardLoading />
            </SwiperSlide>
            <SwiperSlide>
              <CardLoading />
            </SwiperSlide>
            <SwiperSlide>
              <CardLoading />
            </SwiperSlide>
          </>
        ) : (
          events.data &&
          events.data.map((event) => {
            return (
              <SwiperSlide key={`cardSwiper-${event.categoryId}-${event.id}`}>
                <CardEvent event={event} />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </>
  );
}
