import './Arrival.css'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


import fire from '../../assets/images/fire.svg'
import bg from '../../assets/images/get-bg.png'


import image1 from '../../assets/images/get-image.png'
import image2 from '../../assets/images/get-image2.png'


// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay , Navigation} from 'swiper/modules'
import 'swiper/css';
import DataTitle from '../../common/DataTitle/DataTitle';

export default function Arrival() {

  const images =[
       { img:image1  },
       { img:image2  },
       
       
      ]

  return (
    
    <div className='Arrival py-32  overflow-hidden'>
      <div className="container mx-auto xl:px-12 md:px-6 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <div className=' lg:col-span-6'>

       <h4 className='flex gap-2  mb-7 font-black text-xl lg:text-2xl sm:text-2xl'><img src={fire} alt="icon"/> GET <span className='text-(--main-color)'>25% OFF</span> NOW</h4>
       
        <DataTitle  title={'latest arrival products'}/>
         
         <div>
          <div className='py-5 text-2xl '>
      <del style={{color: '#727272'}} className='font-medium mr-5'>$99.00</del> <span className='font-black inline-block'>$49.00</span>
       </div>
      <p className=" font-semibold text-gray-300 leading-6 sm:leading-7 text-sm sm:text-base lg:text-base">There are many variations of passages of Lorem Ipsum available, but <br/> the majority have suffered alteration in some form, by injected humour, or randomised words which</p>
     <ul className="pt-7 pb-7 pl-4 text-gray-300 flex gap-12 list-disc items-center border-b border-gray-100">
       <li>100% Natural</li>
       <li>Coupon $61.99, Code: W2</li>
       <li>30 Day Refund</li>
       </ul>
       <div className="flex flex-wrap items-center gap-12 mt-8 ">
       <div>
          <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-lg font-medium'>HUNGRY UP !</h4>
        <span className='text-lg mt-2.5 inline-block'>Offer end in :</span>
       </div>
      <div className="flex gap-3 items-center ">
      <div className=" w-16 h-16 leading-5 text-center pt-2.5 rounded-full border border-gray-50">
       <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-2xl leading-7 font-medium'>-767</h3>
       <span className='text-gray-400 inline-block font-semibold'>Day</span>
      </div>
      <div className="w-12 h-12 sm:w-16 sm:h-16 leading-5 text-center pt-2 rounded-full border border-gray-50">
       <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-2xl leading-7 font-medium'>-19</h3>
         <span className='text-gray-400 inline-block font-semibold'>Hr</span>
         </div>
       <div className=" w-16 h-16 leading-5 text-center pt-2.5 rounded-full border border-gray-50">
          <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-2xl leading-7 font-medium'>-32</h3>
       <span className='text-gray-400 inline-block font-semibold'>Min</span>
        </div>
      <div className=" w-16 h-16 leading-5 text-center pt-2.5 rounded-full border border-gray-50">
       <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-2xl leading-7 font-medium'>-43</h3>
        <span className='text-gray-400 inline-block font-semibold'>Sec</span>
                                    </div>
                                </div>
                            </div>
                        </div>
          </div> 

          <div className=' lg:col-span-6 mt-12 lg:mt-0'>
            <div style={{maxWidth:'648px'}} className='h-90 sm:h-150 lg:h-162 max-w-105 sm:max-w-130 mt-12 xl:mt-0 mx-auto rounded-full bg-(--secondary-color) relative'>
              <div style={{maxWidth:'520px'}} className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-1 w-full">
              <img src={bg} alt="image"/>
               </div>
               <div className="swiper absolute inset-0 grid place-items-center overflow-hidden z-1"> 
                <div className="swiper-wrapper relative size-full z-1">
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
                    // className='size-full'
                  >
                    {
                      images.map((val , index)=>(
                        <SwiperSlide>
                   <div className='grid place-items-center h-full' key={index}>          
               <img src={val.img} className='w-full max-w-60 sm:max-w-100 mx-auto mt-8 sm:mt-12' alt="image"/>
               </div>
                        </SwiperSlide>

                      ))
                    }
                    </Swiper>    

                </div>
               </div>
               <button className='prev absolute top-1/2 left-5 text-3xl  sm:text-4xl hover:text-(--main-color) duration-300 cursor-pointer -translate-y-1/2 z-2'><IoIosArrowBack /></button>
               <button className='next absolute top-1/2 right-5 text-3xl  sm:text-4xl hover:text-(--main-color) duration-300 cursor-pointer -translate-y-1/2 z-2'><IoIosArrowForward /></button>

            </div>
          </div>
        </div>

      </div>
    </div>
      
      
  
  )
}
