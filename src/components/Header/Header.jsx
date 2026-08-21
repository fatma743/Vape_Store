// import { useEffect } from 'react'
import './Header.css'
import vape from '../../assets/images/vape1.png'
import vape2 from '../../assets/images/vape2.png'
import fire from '../../assets/images/fire.svg'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';


// banner
import banner1 from '../../assets/images/banner-two-image1.jpg'
import banner2 from '../../assets/images/banner-two-image2.jpg'
import banner3 from '../../assets/images/banner-two-image3.jpg'


export default function Header() {


  const banners =[
   { img: banner1},
   { img: banner2},
   { img: banner3},

  ]
  return (
    <div className='header overflow-hidden relative '>

      <div className=" banner hidden lg:block absolute bottom-80 -left-16 z-2" >
         <img src={vape} alt="shape"/>
            </div>
            <div className="banner hidden lg:block absolute bottom-0 -right-8 z-2" >
                <img src={vape2} alt="shape"/>
            </div>
            <div>
                <div className="swiper-wrapper overflow-hidden relative z-1 ">
                  <Swiper
                   modules={[Autoplay]}
                   autoplay={{
                     delay: 2000 ,
                     pauseOnMouseEnter: true
                    }}
                    
                     loop={true}
                    slidesPerView={1}
                  >
                      {
                        banners.map((val , index)=>(
                          <SwiperSlide>
                      <div className='relative h-full' key={index}>
                        <img src={val.img} className='object-cover w-175 h-200 lg:size-full rounded overflow-hidden' alt="" />
                       
               <div className="content flex flex-col size-full  absolute gap-3 top-0 left-0 px-5 sm:px-8 md:px-12 pt-80 pb-24 lg:pl-12 justify-center">

                <h4 className='flex gap-2 mb-7 font-black text-2xl'><img src={fire} alt="icon"/> GET <span className='text-(--main-color)'>25% OFF</span> NOW</h4>

                                <h1 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight lg:leading-22.5'>Find everything <br/>for <span className='text-(--main-color)'>vaping</span></h1>
                                <p style={{color:'#d2d2d2' , fontWeight:'500'}} className="mt-10 leading-7">Sell globally in minutes
                                    with localized currencies languages, and <br/> experie in
                                    every
                                    market. only a variety of vaping
                                    products</p>

                                <div className=" mt-7" >
                                    <span className="mb-3 text-sm" style={{color:'#d2d2d2', fontWeight:'500'}}>Starting Price</span>
                                    <h3 style={{fontWeight:'700'}} className='text-3xl leading-9'>$99.00</h3>
                                </div>
                                <div className="btn mt-8 flex gap-5 flex-col sm:flex-row w-max">
                                  <button className=' btn-1 bg-(--main-color) py-3 px-8 rounded-full font-bold'> Shop Now</button>
                                   <button className='btn-2 bg-white text-(--main-color) py-3 px-8 rounded-full font-bold'> View Details</button>
                                </div>
                            </div>
                        </div>
                          </SwiperSlide>

                     
                        ))
                      }
                  </Swiper>
                 
                    </div>
                    </div>
            </div>

    
  )
}

