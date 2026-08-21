import DataTitle from '../../common/DataTitle/DataTitle'
import './Blog.css'
import blogSm from '../../assets/images/blog-image-sm.png'

// blog
import blog1 from '../../assets/images/blog-image1.png'
import blog2 from '../../assets/images/blog-image2.png'
import blog3 from '../../assets/images/blog-image3.png'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';

export default function Blog() {

  const blogs =[
    { img: blog1},
    { img: blog2},
    { img: blog3},

  ]

  return (
    <div className='Blog bg-(--secondary-color) py-10 md:py-20 xl:py-32'>
      <div className="container  mx-auto xl:px-12 md:px-6 px-5">
        <div className='mb-16'>
          <DataTitle title={'our latest blog'}>
            <button className='btn-2 bg-white text-(--main-color) py-3 px-8 rounded-full font-bold'> View All Blog</button>

          </DataTitle>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className=' col-span-12 xl:col-span-8'>
            <div className='rounded-xl border border-gray-600 p-8 relative'>
              <Swiper
               modules={[Autoplay]}
                   autoplay={{
                     delay: 2000 ,
                     pauseOnMouseEnter: true
                    }}
                    
                     loop={true}
                     spaceBetween={50}
                    slidesPerView={1}
              >
                {
                  blogs.map((val , index) =>(
                    <SwiperSlide>
              <div className="grid grid-cols-12 gap-6">
                <div className='col-span-12 md:col-span-6'>
                  <div>
                 <span className="text-(--main-color) py-1 px-2.5 bg-white rounded-3xl">vapers</span>
               <h3 className=' mt-6 md:mt-8 text-xl md:text-2xl font-normal leading-8 md:leading-9'>roup of young volunteers  park. they are vapeing</h3>
              <p style={{color:'#d2d2d2'}} className=' mt-4 md:mt-5 mb-8 md:mb-10 leading-6 md:leading-7'>vapers planting is the act of planting young vaperss, shrubs, or other woody plants into the ground to establish new vapes.</p>
              <span style={{color:'#d2d2d2'}} className=" inline-block">By <strong className="mr-4  font-bold">Max Trewhitt</strong> 2 weeks ago</span>
      </div>
                </div>


                <div className='col-span-12 md:col-span-6'>
                  <div>
                    <img src={val.img} alt="" />
                  </div>
                </div>
              </div>

                    </SwiperSlide>

                  ))
                }

              </Swiper>
            </div>
          </div>

          <div className=' col-span-12 lg:col-span-4 hidden xl:block '>
            <div className="border border-gray-600 p-8 rounded-xl">
         <div className="block mb-7">
         <img className="rounded-xl" src={blogSm} alt="image"/>
           </div>
           <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-2xl leading-8 mb-5'>Close up picture of the sapling of the vape is</h3>
           <div className="flex items-center justify-between">
            <span className="text-(--main-color) py-1 px-2.5 bg-white rounded-3xl">vapers</span>
            <span style={{color:'#727272'}} className=' inline-block'>2 weeks ago</span>
                            </div>
                        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
