import './Categories.css'
import Data from '../../common/Data/Data'



// category
import categoryIcon1 from '../../assets/images/category-icon1.png'
import categoryIcon2 from '../../assets/images/category-icon2.png'
import categoryIcon3 from '../../assets/images/category-icon3.png'
import categoryIcon4 from '../../assets/images/category-icon4.png'
import categoryIcon5 from '../../assets/images/category-icon5.png'
import categoryIcon6 from '../../assets/images/category-icon6.png'

import categoryImage1 from '../../assets/images/category-image1.png'
import categoryImage2 from '../../assets/images/category-image2.png'
import categoryImage3 from '../../assets/images/category-image3.png'
import categoryImage4 from '../../assets/images/category-image4.png'
import categoryImage5 from '../../assets/images/category-image5.png'
import categoryImage6 from '../../assets/images/category-image6.png'


// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';

export default function Categories() {


   const categories =[
     { img:categoryImage1 , image:categoryIcon1 , title:'best e- juice' },
     { img:categoryImage2 , image:categoryIcon2 , title:'best mod' },
     { img:categoryImage3 , image:categoryIcon3 , title:'best pan' },
     { img:categoryImage6 , image:categoryIcon6 , title:'Best vaps' },
     { img:categoryImage4 , image:categoryIcon4 , title:'best pod' },
     { img:categoryImage5 , image:categoryIcon5 , title:'best tank' },
     
    ]

  return (
    <div className='Categories pb-32 pt-32 '>
      <div className="container  mx-auto xl:px-12 md:px-6 px-5">
        <div className=" pb-32 mb-16 border-b border-gray-800">
          <div className=" mb-16 text-center">
            <Data title={'our top categories'}/>
          </div>
          <div>
               <Swiper
                modules={[Autoplay]}
                   autoplay={{
                     delay: 2000 ,
                     pauseOnMouseEnter: true
                    }}
                    
                     loop={true}
                     spaceBetween={20}
                     breakpoints={{
                      0:{slidesPerView:1},
                      640:{slidesPerView:2},
                      768:{slidesPerView:3},
                      1024:{slidesPerView:4},
                      1280:{slidesPerView:5},

                     }}
                  >
              {categories.map((val , index)=>(
                <SwiperSlide>
               <div className='relative h-full text-center cursor-pointer' key={index}>          
                <div className="category-image block relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 overflow-hidden rounded-full mx-auto border border-gray-800 duration-300">
               <img src={val.img} className='category-bg object-cover' alt="image"/>

               <div className="category-icon absolute z-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--secondary-color) w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44  rounded-full duration-300 flex items-center justify-center">
             <img src={val.image} className='object-cover' alt="icon"/>
            </div>
             </div>
                                    
          <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className='category-title mt-6 text-base sm:text-lg font-normal'>{val.title}</h4>
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
