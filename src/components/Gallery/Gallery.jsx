import './Gallery.css'

// gallery
import gallery1 from '../../assets/images/gallery-image1.jpg'
import gallery2 from '../../assets/images/gallery-image2.jpg'
import gallery3 from '../../assets/images/gallery-image3.jpg'
import gallery4 from '../../assets/images/gallery-image4.jpg'
import gallery5 from '../../assets/images/gallery-image5.jpg'


// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';

export default function Gallery() {

    const gallery =[
     { img:gallery1 , tilte:'best e-lequid'},
     { img:gallery2 , tilte:'best Vape flavours'},
     { img:gallery3 , tilte:'Battery And Charger Kit'},
     { img:gallery4 , tilte:'best vape tanks'},
     { img:gallery5 , tilte:'POP Extra Strawberry'},
  
    ]

  return (
    <div className='Gallery'>
              <Swiper
               modules={[Autoplay]}
                   autoplay={{
                     delay: 2000 ,
                     pauseOnMouseEnter: true
                    }}
                    
                    breakpoints={{
                      0:{slidesPerView:1},
                      640:{slidesPerView:2},
                      1024:{slidesPerView:4},
                    }}
                     loop={true}
                     speed={800}
              >
             {
                  gallery.map((val , index)=>(
                    <SwiperSlide>
          <div className='mr-7 relative h-full' key={index}>
            <div className=" relative">
            <div className=" absolute top-7 left-7 xl:top-10 xl:left-10 z-1 w-20 h-20 rounded-full bg-white text-(--main-color) text-center text-lg font-semibold leading-6 uppercase pt-4">50% <br/> off</div>
                
            <div className="gallery__image relative">
              <img className=' rounded-xl' src={val.img} alt="image"/>
              </div>

              <div className="gallery__content absolute bottom-8 left-8 xl:bottom-12 xl:left-12">
           <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className="mb-2.5 text-2xl font-normal leading-9">{val.tilte}</h3>
        <p style={{color:'#d2d2d2'}} className=' leading-7'>Best E liquids from our huge collection</p>
       <button className='btn-2 relative overflow-hidden z-0 bg-white text-(--main-color) py-3 px-8 rounded-full font-bold mt-6'> Shop Now</button>                 
            </div>

            </div>
          </div>
                    </SwiperSlide>
                    
                  ))
                }

              </Swiper>
                
        </div>
    
  )
}
