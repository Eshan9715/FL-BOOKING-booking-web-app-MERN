import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import QueryTile from '../components/QueryTile';
//import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay]);

const SliderQueries = ({data, height}) => {

  return (
    <>
     
      <div className='flex items-center justify-center flex-col'>
        <Swiper className={`w-full h-[${height}px] flex flex-col items-center justify-center my-1 gap-2 mb-5`}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          direction="vertical"
          slidesPerView={2}
          spaceBetween={10}
        
          autoplay={{delay:2000}}
          navigation = {false}
          //pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          
          >
          {data.map((obj,index)=>(
            <SwiperSlide key={obj.id}>
              <QueryTile key={index}
                  OportName={obj.origin} 
                  DportName={obj.destination} 
                  containerMode={obj.containerMode}
                  cargos={obj.cargoFCL} 
                  status={obj.status}
                  rDate={obj.rDate}
                  savedDate = {obj.createdAt}
              />
            </SwiperSlide>

          ))}
          
          
        </Swiper>
      </div>
    </>
   
  )
}

export default SliderQueries


  