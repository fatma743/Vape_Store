import './Modern.css'
import DateTitle from '../../common/DataTitle/DataTitle'

import aboutImage from '../../assets/images/about-image.jpg'
import { FaPlay } from "react-icons/fa";

export default function Modern() {

  return (
    <div className='Modern pt-32 overflow-hidden'>
      <div className="container mx-auto xl:px-12 md:px-6 px-5">
        <div className="grid grid-cols-12 items-center gap-8">
          <div className='col-span-12 lg:col-span-6'>
            <div className="relative">
           <img className=" rounded-xl" src={aboutImage} alt="image"/>
             <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
             <div className="video-btn relative text-center inline-block z-2">
              <span className=' relative  text-(--main-color) text-2xl z-1 bg-white w-20 h-20 leading-20 rounded-full duration-300 flex items-center justify-center'><FaPlay /></span>
             </div>
            </div>
            </div>
          </div>



          <div className='col-span-12 lg:col-span-6'>
            <div className=' lg:text-left lg:pl-8'>
              <DateTitle title={'We Are Here To Increase Your Modern Life'}/>
              <p style={{color:'#d2d2d2'}} class="mt-7 mb-14 leading-7">Sell globally in minutes with localized currencies languages, and<br/>experie in every market. only a variety of vaping products globally in with localized currencies languages globally in with localized currencies languages Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem perspiciatis rem sed ipsum assumenda nemo praesentium blanditiis tempora consequuntur cum beatae saepe facere quis dolore dignissimos nihil.</p>
               <button className=' btn-1 bg-(--main-color) py-3 px-8 rounded-full font-bold duration-500'>More About us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
