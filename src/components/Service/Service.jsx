import './Service.css'
import DataTitle from '../../common/DataTitle/DataTitle'

// feature
import feature1 from '../../assets/images/feature-icon1.png'
import feature2 from '../../assets/images/feature-icon2.png'
import feature3 from '../../assets/images/feature-icon3.png'
import feature4 from '../../assets/images/feature-icon4.png'

// service-image
import serviceImage from '../../assets/images/service-image.png'

export default function Service() {

  return (
    <div className='Service py-32 overflow-hidden'>
      <div className="container mx-auto xl:px-12 md:px-6 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">

          <div>
            <div className='service-items mb-12 flex items-center gap-4'>
              <div className='service-icon w-24 h-24 leading-20 flex items-center justify-center rounded-full relative border border-gray-500 duration-500'>
                <img className=' relative z-2' src={feature1} alt="" />
              </div>
              <div>
               <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-lg font-normal'>Free delivery</h4>
                <p style={{color:'#d2d2d2'}} className='mt-2.5 text-sm'>For all orders above $45</p>
              </div>
            </div>

             <div className='service-items mb-12 flex items-center gap-4'>
              <div className='service-icon w-24 h-24 leading-20 flex items-center justify-center rounded-full relative border border-gray-500 duration-500'>
                <img className=' relative z-2' src={feature2} alt="" />
              </div>
              <div>
               <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-lg font-normal'>Secure payments</h4>
                <p style={{color:'#d2d2d2'}} className='mt-2.5 text-sm'>Confidence on all your devices</p>
              </div>
            </div>
            
          </div>


          <div className=' relative hidden lg:block'>
            <div className=' relative'>
              <img className='size-full object-cover' src={serviceImage} alt="" />

            <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center">
             <DataTitle title={'sign up & save 25%'}/>
               </div>
            </div>

          </div>


          <div>
            <div className='service-items mb-12 flex items-center gap-4'>
              <div className='service-icon w-24 h-24 leading-20 flex items-center justify-center rounded-full relative border border-gray-500 duration-500'>
                <img className=' relative z-2' src={feature3} alt="" />
              </div>
              <div>
               <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-lg font-normal'>Top-notch support</h4>
                <p style={{color:'#d2d2d2'}} className='mt-2.5 text-sm'>sayhello&gazacom</p>
              </div>
            </div>

            <div className='service-items mb-12 flex items-center gap-4'>
              <div className='service-icon w-24 h-24 leading-20 flex items-center justify-center rounded-full relative border border-gray-500 duration-500'>
                <img className=' relative z-2' src={feature4} alt="" />
              </div>
              <div>
               <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-lg font-normal'>180 Days Return</h4>
                <p style={{color:'#d2d2d2'}} className='mt-2.5 text-sm'>money back guranry</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
