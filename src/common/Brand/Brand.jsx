import Data from '../Data/Data'
import './Brand.css'

// brand
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import brand4 from '../../assets/images/brand4.png'
import brand5 from '../../assets/images/brand5.png'
import brand6 from '../../assets/images/brand6.png'



// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules'
import 'swiper/css';


export default function Brand() {

  const brands = [
    {img: brand1},
    {img: brand2},
    {img: brand3},
    {img: brand4},
    {img: brand5},
    {img: brand6},

  ]

  return (
    <div className='Brand py-32'>
      <div className="container mx-auto xl:px-12 md:px-6 px-5">
        <Data title={'our top brands'}/>
        <div className="swiper mt-16 relative overflow-hidden z-1">
          <div className="swiper-warpper size-full relative z-1 flex">
            <Swiper
            modules={[Autoplay]}
                   autoplay={{
                     delay: 2000 ,
                     pauseOnMouseEnter: true
                    }}
                    
                    breakpoints={{
                      0:{slidesPerView:1},
                      640:{slidesPerView:2},
                      1024:{slidesPerView:5},
                    }}
                     loop={true}
                     speed={800}
                     spaceBetween={30}
            >
              {
                brands.map((val , index) =>(
                  <SwiperSlide>
             <div className=" radius-10 flex items-center justify-center p-4 h-full relative rounded-2xl cursor-pointer border border-gray-700" key={index}>
              <img src={val.img} alt="icon"/>
              </div>

                  </SwiperSlide>

                ))
              }   

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
