import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay]);

const SliderAct = ({data}) => {

  return (
    <>
     
      <div className='flex items-center justify-center flex-col'>
        {/* <div className='flex justify-center items-center gap-4'>
        <img src={`https://flagcdn.com/20x15/lk.png`} alt="flag" className='w-8 h-6'/>
        <h1 className='text-xl font-Monserrat font-bold text-white'>{title}</h1>

        </div> */}

        <Swiper className='w-full h-[215px] flex flex-col items-center justify-center mt-3 gap-4'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          direction="vertical"
          slidesPerView={3}
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
              <div className="w-full flex px-3 py-2 bg-white shadow-md hover:shodow-lg rounded-lg my-5">
                <div className='w-full flex justify-between items-center'>
                    <div className='flex justify-center flex-col items-start'>
                        <span className='text-sm text-gray-400'>{obj.act}</span>
                        <span className='text-sm text-slate-400'>{obj.date}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-sm w-[80px] text-center ${obj.state === "Urgent" ? 'bg-red-500 w-full text-white':'bg-green-500 w-full text-white'}`}>{obj.state}</span>
                </div>
              </div>
              </SwiperSlide>

          ))}
          
          
        </Swiper>
      </div>
    </>
   
  )
}

export default SliderAct


  
      


      