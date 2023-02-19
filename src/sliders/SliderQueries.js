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

const SliderQueries = ({data}) => {

  return (
    <>
     
      <div className='flex items-center justify-center flex-col'>
        <Swiper className='w-full h-[210px] flex flex-col items-center justify-center my-1 gap-2 mb-5'
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
          {data.map(obj=>(
            <SwiperSlide key={obj.id}>
              <QueryTile key={obj.id}
                  OportCode={obj.originCode} 
                  OportName={obj.originPort} 
                  OCountry={obj.originCountry} 
                  containerMode={obj.containerMode}
                  cargos={obj.containers} 
                  DportCode={obj.departCode} 
                  DportName={obj.departPort} 
                  DCountry={obj.departCountry}>
              </QueryTile>
            </SwiperSlide>

          ))}
          
          
        </Swiper>
      </div>
    </>
   
  )
}

export default SliderQueries


  