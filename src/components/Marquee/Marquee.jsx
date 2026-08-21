import './Marquee.css'

import image from '../../assets/images/title-left.svg'

export default function Marquee() {

  return (
    <div className='Marquee'>
        
    <div className="container  mx-auto xl:px-12 md:px-6 px-5"> <div className="bor-top pb-10 border-t border-gray-600"></div> </div>
            
         <div style={{fontFamily:'"Prosto One", sans-serif'}} className=" w-full overflow-hidden text-7xl">
            <div className="marquee-inner w-max flex">
                <div className=" flex gap-10 items-center pb-10">
                       <span className='flex items-center gap-3 whitespace-nowrap'>E-Cigarettes <img src={image} /></span>
                      <span className='flex items-center gap-3 whitespace-nowrap'>Vape Pens <img src={image} /></span>
                       <span className='flex items-center gap-3 whitespace-nowrap'>Vape Juice <img src={image} /></span>

                 {/* نكرر نفس المحتوى */}
                  <span className='flex items-center gap-3 whitespace-nowrap'>E-Cigarettes <img src={image} /></span>
                     <span className='flex items-center gap-3 whitespace-nowrap'>Vape Pens <img src={image} /></span>
                     <span className='flex items-center gap-3 whitespace-nowrap'>Vape Juice <img src={image} /></span>
                </div>
            </div>
        </div>

        <div className="container  mx-auto xl:px-12 md:px-6 px-5"> <div className="bor-top pb-16 border-t border-gray-600"></div></div>
    
    </div>
  )
}
