import { Link } from 'react-router-dom';
import './Sidebar.css'

// icon
import { FaSearch } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";



// sm
import sm1 from '../../assets/images/sm1.png'
import sm2 from '../../assets/images/sm2.png'
import sm3 from '../../assets/images/sm3.png'
import sm4 from '../../assets/images/sm4.png'

// single
import single1 from '../../assets/images/single4.jpg'
import single2 from '../../assets/images/single1.jpg'
import single3 from '../../assets/images/single1v.jpg'
import single4 from '../../assets/images/single2.jpg'
import single5 from '../../assets/images/single3.jpg'


export default function Sidebar() {

  return (
    <div className='Sidebar py-32'>
      <div className="container  mx-auto xl:px-12 md:px-6 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* left */}
        <div className='col-span-1 lg:col-span-4'>
          <div className=' rounded-xl p-7 bg-(--secondary-color)'>
            <h4 className="mb-7 text-xl font-semibold leading-7 capitalize">Search</h4>
            <div className="search mb-10 relative">
            <input
            className='w-full py-3 px-4 sm:py-3.5 sm:px-5 bg-[#dadada] rounded-xl'
             type="text" 
             placeholder="Search here. . ."/>
            <button className='text-[#646464] absolute right-5 top-3.5 text-xl bg-[#dadada]'><FaSearch /></button>
             </div>
              <h4 class="mb-7 text-xl font-semibold leading-7 capitalize">Categories</h4>

              <ul class="mb-10 pl-7">
                <li className=' list-disc  pb-1 mb-2'> Business</li>
                <li className=' list-disc  pb-1 mb-2'> Job Market</li>
                 <li className=' list-disc  pb-1 mb-2'> Marketing</li>
                <li className=' list-disc  pb-1 mb-2'> News</li>
               <li className=' list-disc  pb-1 mb-2'> Social Media</li>
              <li className=' list-disc  pb-1 mb-2'> Trends</li>
               <li className=' list-disc  pb-1 mb-2'> Writing</li>
             </ul>
             <h4 className="mb-7 text-xl font-semibold leading-7 capitalize">Recent Posts</h4>
             {/* sm1 */}
             <div className=' py-6 border-b border-[#414141] bg-(--secondary-color) flex items-center'>
              <div> <img width={100} src={sm1} alt="" /> </div>
              <div className=' pl-3.5'>
                <span className=' pb-1 text-sm inline-block'>10/01/2023</span>
                <h5
                style={{fontFamily:'"Prosto One", sans-serif'}}
                 className=' font-normal leading-5'>The blind peo ple who train their own guide and go now</h5>
              </div>
             </div>
             {/* sm2 */}
             <div className=' py-6 border-b border-[#414141] bg-(--secondary-color) flex items-center'>
              <div> <img width={100} src={sm2} alt="" /> </div>
              <div className=' pl-3.5'>
                <span className=' pb-1 text-sm inline-block'>10/01/2023</span>
                <h5
                style={{fontFamily:'"Prosto One", sans-serif'}}
                 className=' font-normal leading-5'>The blind peo ple who train their own guide and go now</h5>
              </div>
             </div>
             {/* sm3 */}
             <div className=' py-6 border-b border-[#414141] bg-(--secondary-color) flex items-center'>
              <div> <img width={100} src={sm3} alt="" /> </div>
              <div className=' pl-3.5'>
                <span className=' pb-1 text-sm inline-block'>10/01/2023</span>
                <h5
                style={{fontFamily:'"Prosto One", sans-serif'}}
                 className=' font-normal leading-5'>The blind peo ple who train their own guide and go now</h5>
              </div>
             </div>
             {/* sm4 */}
             <div className=' py-6 border-b border-[#414141] bg-(--secondary-color) flex items-center'>
              <div> <img width={100} src={sm4} alt="" /> </div>
              <div className=' pl-3.5'>
                <span className=' pb-1 text-sm inline-block'>10/01/2023</span>
                <h5
                style={{fontFamily:'"Prosto One", sans-serif'}}
                 className=' font-normal leading-5'>The blind peo ple who train their own guide and go now</h5>
              </div>
             </div>

             <h4 className="mb-7 mt-10 text-xl font-semibold leading-7 capitalize">Tags</h4>
             {/* tags */}
             <div class="tags">
             <span className=' py-1.5 px-2.5 capitalize inline-block'> Vape </span>
             <span className=' py-1.5 px-2.5 capitalize inline-block'> smoke </span>
             <span className=' py-1.5 px-2.5 capitalize inline-block'> galaxy </span>
             <span className=' py-1.5 px-2.5 capitalize inline-block'> creative </span>
             <span className=' py-1.5 px-2.5 capitalize inline-block'> art </span>
             <span className=' py-1.5 px-2.5 capitalize inline-block'> business </span>
             <span className=' py-1.5 px-2.5 capitalize inline-block'> space </span>
             <span className=' py-1.5 px-2.5 capitalize inline-block'> biology </span>
             <span className=' py-1.5 px-2.5 capitalize inline-block'> environemnt </span>
          </div>

          <div className=" mt-10">
           <img 
           className=' rounded-xl w-full'
            src={single1} alt="image"/>
             </div>

          </div>
        </div>

        {/* right */}
        <div className='col-span-1 lg:col-span-8'>

          {/* 1 */}
          <div className=' p-7 rounded-xl border border-[#414141]'>
            <div className='mb-7 block'>
              <img className=' rounded-xl w-full' src={single2} alt="" />
            </div>
            <div className="flex items-center justify-between">
          <div>
              <span className=' inline-block'>Written By:Marry Biden</span>
              <span className="w-2 h-2 rounded-full bg-[#414141] mx-2.5 inline-block"></span>
              <span className=' inline-block'>10/01/2023</span>
          </div>
          <div>
              <button className=' py-0.5 px-2.5 rounded-4xl text-sm bg-(--main-color)'>Vape</button>
              <button className=' py-0.5 px-2.5 rounded-4xl text-sm bg-(--secondary-color) ml-3'>smoke</button>
          </div>
      </div>
          </div>

          <div className=" mb-16">
         <h3
         style={{fontFamily:'"Prosto One", sans-serif'}}
          className="capitalize mt-7 mb-4 text-xl lg:text-2xl leading-7 lg:leading-9 font-normal">Guide dog shortage: The blind people who train their </h3>

         <p className='text-[#d2d2d2] leading-7'>Daily Star News published on Feb 2nd, 2022, Sangbad Protidin dated January 31st, 2022 and HRCBM's investigation. Bangladesh again witnessing uptick in violence.</p>
         <div className=" w-11 h-11 rounded-xl bg-(--main-color) leading-10 mt-7 flex items-center justify-center">
          <FaLongArrowAltRight className='text-2xl font-black -rotate-45 hover:rotate-0 duration-300'/>
         </div>
     </div>
          {/* 2 */}
        <div className=' p-7 rounded-xl border border-[#414141]'>
            <div className='mb-7 block relative'>
              <img className=' rounded-xl w-full' src={single3} alt="" />
              <div className=' absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
              <div className='video relative z-2 flex justify-center items-center'>
               <Link
               className=' relative text-(--main-color) text-2xl z-1 bg-[#ffffffcc] w-22.5 h-22.5 leading-20 rounded-full flex items-center justify-center duration-300'
                to={"https://www.youtube.com/watch?v=Cn4G2lZ_g2I"}>
               <FaPlay/>
               </Link>
              </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
          <div>
              <span className=' inline-block'>Written By:Marry Biden</span>
              <span className="w-2 h-2 rounded-full bg-[#414141] mx-2.5 inline-block"></span>
              <span className=' inline-block'>10/01/2023</span>
          </div>
          <div>
              <button className=' py-0.5 px-2.5 rounded-4xl text-sm bg-(--main-color)'>Vape</button>
              <button className=' py-0.5 px-2.5 rounded-4xl text-sm bg-(--secondary-color) ml-3'>smoke</button>
          </div>
      </div>
          </div>

          <div className=" mb-16">
         <h3
         style={{fontFamily:'"Prosto One", sans-serif'}}
          className="capitalize mt-7 mb-4 text-xl lg:text-2xl leading-7 lg:leading-9 font-normal">A team of scientists from NASA's Jet Propulsion</h3>

         <p className='text-[#d2d2d2] leading-7'>Daily Star News published on Feb 2nd, 2022, Sangbad Protidin dated January 31st, 2022 and HRCBM's investigation. Bangladesh again witnessing uptick in violence.</p>
         <div className=" w-11 h-11 rounded-xl bg-(--main-color) leading-10 mt-7 flex items-center justify-center">
          <FaLongArrowAltRight className='text-2xl font-black -rotate-45 hover:rotate-0 duration-300'/>
         </div>
     </div>
             {/* 3 */}
         <div className=' p-7 rounded-xl border border-[#414141]'>
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-7">
            <div className='col-span-1 md:col-span-6'>
            <div className='mb-7 block'>
              <img className=' rounded-xl w-full' src={single4} alt="" />
            </div>
              
            </div>
            <div className='col-span-1 md:col-span-6'>
              <div className='mb-7 block'>
              <img className=' rounded-xl w-full' src={single5} alt="" />
            </div>
            </div>


          </div>
            <div className="flex items-center justify-between">
          <div>
              <span className=' inline-block'>Written By:Marry Biden</span>
              <span className="w-2 h-2 rounded-full bg-[#414141] mx-2.5 inline-block"></span>
              <span className=' inline-block'>10/01/2023</span>
          </div>
          <div>
              <button className=' py-0.5 px-2.5 rounded-4xl text-sm bg-(--main-color)'>Gallery</button>
              <button className=' py-0.5 px-2.5 rounded-4xl text-sm bg-(--secondary-color) ml-3'>Business</button>
          </div>
      </div>
          </div>

          <div className=" mb-16">
         <h3
         style={{fontFamily:'"Prosto One", sans-serif'}}
          className="capitalize mt-7 mb-4 text-xl lg:text-2xl leading-7 lg:leading-9 font-normal">There are also natural sources of methane - from</h3>

         <p className='text-[#d2d2d2] leading-7'>Daily Star News published on Feb 2nd, 2022, Sangbad Protidin dated January 31st, 2022 and HRCBM's investigation. Bangladesh again witnessing uptick in violence.</p>
         <div className=" w-11 h-11 rounded-xl bg-(--main-color) leading-10 mt-7 flex items-center justify-center">
          <FaLongArrowAltRight className='text-2xl font-black -rotate-45 hover:rotate-0 duration-300'/>
         </div>
     </div>
        
        {/* 4 */}
        <div className="pt-4 mt-16 border-t border-[#414141] flex items-center gap-2">
         <span className=" w-12.5 h-12.5 flex items-center justify-center border border-[#414141] rounded-full mr-2 hover:bg-(--main-color) duration-300 cursor-pointer">01</span>
         <span className=" w-12.5 h-12.5 flex items-center justify-center border border-[#414141] rounded-full mr-2 bg-(--main-color)">02</span>
         <span className=" w-12.5 h-12.5 flex items-center justify-center border border-[#414141] rounded-full mr-2 hover:bg-(--main-color) duration-300 cursor-pointer">03</span>
         <span><FaLongArrowAltRight /></span>
           </div>
        </div>

        

      </div>
      </div>
    </div>
  )
}