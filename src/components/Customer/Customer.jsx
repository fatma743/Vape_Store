import DataTitle from '../../common/DataTitle/DataTitle'
import './Customer.css'

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay ,Navigation} from 'swiper/modules'
import 'swiper/css';

// testimonial
import testimonial1 from '../../assets/images/testimonial1.png'
import testimonial2 from '../../assets/images/testimonial2.png'

export default function Customer() {

  // data
  const data = [
    { img: testimonial1, names: 'Kenneth S. Fisher' , title:'marketing manager'},
    { img: testimonial2, names: 'Francis A. Cote' , title:'Garden Maker'},
  ]

  return (
    <div className='Customer py-32 overflow-hidden'>
      <div className="container  mx-auto xl:px-12 md:px-6 px-5">
        <div className=' rounded-xl border border-gray-600'>
        <div className='border border-b-gray-600 rounded-xl'>
          <div className=' p-16'>
            <DataTitle title={'customers speak for us'}>

              <div className="arry-btn my-1 lg:m-0 flex gap-3 lg:justify-center">
             <button className='prev w-16 h-16 leading-16 text-2xl border border-gray-700 flex items-center justify-center rounded-full cursor-pointer hover:bg-(--main-color) duration-400'   > <IoIosArrowBack /> </button>
           <button className='next w-16 h-16 leading-16 text-2xl border border-gray-700 duration-400 flex items-center justify-center rounded-full cursor-pointer hover:bg-(--main-color)'  > <IoIosArrowForward /> </button>
              </div>
            </DataTitle>
          </div>
        </div>
            
        <div className=' py-10 pr-14'>
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className=' col-span-12 lg:col-span-7'>
                  <Swiper
                   modules={[Autoplay , Navigation]}
                    navigation={{
                      nextEl: '.next',
                      prevEl: '.prev'
                    }}
                   autoplay={{
                     delay: 2000 ,
                     pauseOnMouseEnter: true
                    }}
                    
                     loop={true}
                    slidesPerView={1}
                  >
                {
                  data.map((val , index)=>(
                    <SwiperSlide>
              <div className="lg:pl-16 sm:pl-8 pl-4" key={index}>
           <div className=" flex justify-between items-center mb-7">
           <div className="content">
            <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-2xl font-normal leading-9'>{val.names}</h3>
           <span className='text-(--main-color) pt-2.5 font-semibold inline-block'>{val.title}</span>
            </div>
         <FaQuoteRight className='text-6xl text-(--main-color)'/>
          </div>
         <p style={{color:'#727272'}} className='text-xl leading-9'>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convalliserat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.</p>
       <div className="star mt-7 flex gap-2 text-amber-400">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>   
        <FaStar/>                            
         </div>
               </div>

                    </SwiperSlide>
                  )) 
                }

                  </Swiper>

                </div>

                 <div className='col-span-12 lg:col-span-5'>
              
                <Swiper
                 modules={[Autoplay , Navigation]}
                    navigation={{
                      nextEl: '.next',
                      prevEl: '.prev'
                    }}
                   autoplay={{
                     delay: 2000 ,
                     pauseOnMouseEnter: true
                    }}
                    
                     loop={true}
                    slidesPerView={1}
                >
                {
                  data.map((val , index)=>(
                    <SwiperSlide>
                <div className=' relative size-full z-1' key={index}>
                  <img className='w-full h-auto object-contain mx-auto' src={val.img} alt="" />
                </div>

                    </SwiperSlide>

                  ))
                }

                </Swiper>
              </div>
            </div>
       </div>
              </div>
            
            
           
          </div>
        </div>

       
   
  )
}
