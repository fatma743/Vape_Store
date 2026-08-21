import './View.css'

import fire from '../../assets/images/fire.svg'
import image1 from '../../assets/images/view-image1.jpg'
import image2 from '../../assets/images/view-image2.jpg'
import image3 from '../../assets/images/view-image3.jpg'
export default function View() {

  return (
    <div className='View relative'>
      <div className='view-bg bg-image'></div>
      <div className="container mx-auto xl:px-12 md:px-6 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:-mt-24">
          <div className=' lg:mb-30 lg:col-span-6 rounded-xl'>

            <div className="overflow-hidden rounded-xl">
           <div className=' rounded-xl'>
         <img src={image1} alt="image"/>
           </div>
         <div className=" p-10 pt-7 bg-(--secondary-color) ">
          <h2 style={{fontFamily:'"Prosto One", sans-serif'}} className=' text-4xl font-normal leading-9'>  The best e-liqued bundles </h2>
         <p className=' mt-8 mb-12 font-semibold leading-7 '>Sell globally in minutes with localized currencies languages, and experie in every market. only a variety of vaping products</p>
         <div className='flex flex-col sm:flex-row sm:justify-between gap-6 sm:items-center'>
            <button className='btn-2 bg-white text-(--main-color) py-3 px-7 rounded-full font-bold inline-block'> Shop Now</button>                     
           <div className='flex gap-2 mb-7 font-black text-lg border rounded-full py-2.5 px-5'><img src={fire} alt="icon"/> GET <span className='text-(--main-color)'>25% OFF</span> NOW</div>
         </div>

             </div>
            </div>
          </div>


          <div className=' lg:col-span-6 flex flex-col'>
            <div className=" mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg bg-(--secondary-color) overflow-hidden">
              <div className="p-5 pl-10 flex flex-col gap-5">
                <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className=' text-2xl font-normal leading-9'>new to vapeing?</h3>
                <p className=' font-semibold leading-7 text-gray-50'>Whereas recognition of the inherent dignity</p>
               <button className='btn-2 w-max bg-white text-(--main-color) py-3 px-7 rounded-full font-bold inline-block'> Shop Now</button>  
               </div>

               <div className='w-full sm:w-48 lg:w-60'>
                 <img className='size-full object-contain' src={image2} alt="image"/>
              </div>
            </div>

             <div className="sm:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg bg-(--secondary-color) overflow-hidden">
              <div className="p-5 pl-10 flex flex-col gap-5">
                <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className=' text-2xl font-normal leading-9'>Vap mode</h3>
                <p className=' font-semibold leading-7 text-gray-50'>Whereas recognition of the inherent dignity</p>
               <button className='btn-2 w-max bg-white text-(--main-color) py-3 px-7 rounded-full font-bold inline-block'> Shop Now</button>  
               </div>

               <div className='w-full sm:w-48 lg:w-60'>
                 <img  className='size-full object-contain' src={image3} alt="image"/>
              </div>

             </div>

          </div>
        </div>
      </div>
    </div>
  )
}
