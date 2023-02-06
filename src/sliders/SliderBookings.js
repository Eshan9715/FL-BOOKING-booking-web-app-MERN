import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BookingTyle from '../components/BookingTyle';
//import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay]);

const SliderBookings
 = ({data,containers}) => {

  return (
    <>
     
      <div className='flex items-center justify-center flex-col'>
        {/* <div className='flex justify-center items-center gap-4'>
        <img src={`https://flagcdn.com/20x15/lk.png`} alt="flag" className='w-8 h-6'/>
        <h1 className='text-xl font-Monserrat font-bold text-white'>{title}</h1>

        </div> */}

        <Swiper className='w-full h-[210px] flex flex-col items-center justify-center my-1 gap-2 mb-5'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          direction="vertical"
          slidesPerView={2}
          spaceBetween={10}

        //   breakpoints={{
        //     // when window width is >= 640px
        //     640: {
        //       width: 640,
        //       slidesPerView: 1,
        //     },
        //     // when window width is >= 768px
        //     768: {
        //       width: 768,
        //       slidesPerView: 2,

        //     },
        //     1024: {
        //       width: 1024,
        //       slidesPerView: 3,

        //     },
        //     1536: {
        //       width: 1536,
        //       slidesPerView: 4,

        //     },
        //   }}
        
          autoplay={{delay:2000}}
          navigation = {false}
          //pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          >
          {data.map(obj=>(
              <SwiperSlide key={obj.id}>
              <BookingTyle key={obj.id}
                            bookingID={obj.bookingID} 
                            route={obj.route} 
                            date={obj.date} 
                            status={obj.status}
                            containerMode={obj.containerMode} 
                            containers={obj.containers} 
                           >
                        </BookingTyle>
              </SwiperSlide>
              

          ))}
          
          
        </Swiper>
      </div>
    </>
   
  )
}

export default SliderBookings



  