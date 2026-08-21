import './Discount.css'

import discount from '../../assets/images/discount-image2.png'
import fire from '../../assets/images/fire.svg'
export default function Discount() {

  return (
    <div className='Discount mt-20'>
      <div className="container mx-auto xl:px-12 md:px-6 px-5">
        <div className=' grid grid-cols-1 lg:grid-cols-12 items-center gap-12'>
          <div className=' lg:col-span-6'>
            <div className="image  mb-6 lg:mb-0">
              <img
              className='mx-auto lg:mx-0 w-full max-w-md'
               src={discount} alt="image"/>
              </div>
          </div>


          <div className=' lg:col-span-6'>
            <div className=" ps-0 pb-1.5 lg:pb-0 lg:ps-1.5">
            <div>
         <div className=' relative flex items-center'>
        <span className="title-icon mr-2.5 relative w-5 h-3.5"></span>
        <h2 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-2xl sm:text-3xl lg:text-[40px] leading-12 font-normal'>find your best favourite</h2>
         </div>
       <p className="mt-7 mb-10 leading-7 lg:pl-10 text-gray-50">Sell globally in minutes with localized currencies languages, and <br/> experie in every market. only a variety of vaping products</p>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 w-max lg:pl-10'>
          <button className=' btn-1 bg-(--main-color) py-3 px-8 rounded-full font-bold'> Shop Now</button>
   <div className='flex gap-2  font-black text-lg border rounded-full py-2.5 px-5'><img src={fire} alt="icon"/> GET <span className='text-(--main-color)'>25% OFF</span> NOW</div>
        </div>
          </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
