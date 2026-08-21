import './SomeThing.css'
import arry from '../../assets/images/arry.png'
import { Link} from 'react-router-dom'
import { useRef, useState } from 'react';


// icon
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function SomeThing() {

  const list = useRef()

  const [selected , setSelected] = useState('Select Subiect')

  const handleSelect = (val)=>{
    setSelected(val)
  }

  return (
    <div className='SomeThing py-32'>
      <div className="container mx-auto xl:px-12 md:px-6 px-5">
        <div className="grid grid-cols-12 gap-6">
          <div className='col-span-12 lg:col-span-6'>
            <div className='content rounded-xl px-6 py-8 lg:px-10 lg:py-12 h-full sm:py-10 sm:px-8'>
            <h2 style={{fontFamily:'"Prosto One", sans-serif'}} className='pb-10 text-2xl sm:text-3xl lg:text-4xl font-normal leading-12'>Have something in mind? <br/>Let's talk.</h2>

            <p className=' leading-7 text-[#d2d2d2] text-sm sm:text-base'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore <br/> et dolore magna aliqua.Ut enim ad minim.</p>
            <div className=' my-12'> <img src={arry} alt="" /> </div>

            <div>
              <div className=' mb-5'>
                <Link
                className='flex gap-4 items-center'
                 to={'https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&amp;hl=en_US&amp;ll=18.672105000000013%2C105.68673800000003&amp;z=17'}>
                  <div  className='bg-[#ffffff33] text-xl mr-2.5 flex items-center justify-center min-w-10 w-10 h-10 leading-10'> <FaLocationDot/></div>
                785 15h Street, Office 478 Berlin
                </Link>
              </div>

               <div className=' mb-5'>
                <div className='flex gap-4 items-center'>
                  <div  className='bg-[#ffffff33] text-xl mr-2.5 flex items-center justify-center min-w-10 w-10 h-10 leading-10'> <FaPhoneVolume /></div>
                +1 800 555 45 65
                </div>
              </div>
                <div className=' mb-5'>
                <div className='flex gap-4 items-center'>
                  <div  className='bg-[#ffffff33] text-xl mr-2.5 flex items-center justify-center min-w-10 w-10 h-10 leading-10'> <FaEnvelope /> </div>
                info.stoky@company.com
                </div>
              </div>
            </div>

            </div>
          </div>

          <div className='col-span-12 lg:col-span-6'>
            <div>
              <form className='flex flex-col'>
            <input 
            className='mb-8 w-full bg-(--secondary-color) py-3 sm:py-3.5 px-5 rounded-xl text-sm sm:text-base'
            type="text"
             placeholder="Name"/>

            <input
            className='mb-8 w-full bg-(--secondary-color) py-3.5 px-5 rounded-xl'
             type="email" 
             placeholder="Email"/>

           <div
             ref={list}
           onClick={ ()=> list.current.classList.toggle('open')}
           className='select cursor-pointer relative mb-8 w-full bg-(--secondary-color) py-3.5 px-5 rounded-xl'>
            <span>{selected}</span>
            <ul className="list">
              <li onClick={ ()=> handleSelect('Select Subject')} className=" font-bold hover:text-(--main-color) duration-300 cursor-pointer pl-4 pr-7 py-2 selected">Select Subject</li>
              <li onClick={ ()=> handleSelect('Account')} className=" font-bold hover:text-(--main-color) duration-300 cursor-pointer pl-4 pr-7 py-2">Account</li>
              <li onClick={ ()=> handleSelect('Service')} className=" font-bold hover:text-(--main-color) duration-300 cursor-pointer pl-4 pr-7 py-2">Service</li>
              <li onClick={ ()=> handleSelect('Pricing')} className=" font-bold hover:text-(--main-color) duration-300 cursor-pointer pl-4 pr-7 py-2">Pricing</li>
              <li onClick={ ()=> handleSelect('Support')} className=" font-bold hover:text-(--main-color) duration-300 cursor-pointer pl-4 pr-7 py-2">Support</li>
              </ul>
              </div>
           <textarea 
           className='w-full py-3.5 px-5 bg-[#191919] border border-[#414141] mt-8 h-40 sm:h-52 rounded-xl'
            placeholder="Message..."></textarea>
           <div className="radio-btn mt-2 flex items-center gap-3">
           <span className='w-5 h-5 border border-(--main-color) relative cursor-pointer inline-block rounded-full'></span>
           <p>I accept your terms & conditions</p>
             </div>
                <button className=' btn-1 bg-(--main-color) py-3 px-6 relative overflow-hidden z-0 rounded-xl w-max font-bold mt-10'> Submit Now</button>       
             </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
