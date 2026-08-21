import './Footer.css'
import { FaPaperPlane } from "react-icons/fa6";
import logo from '../../assets/images/logo.svg'
import payment from '../../assets/images/payment.png'

// socail
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


export default function Footer() {

  return (
    <div className='Footer'>
      <div className="container  mx-auto xl:px-12 md:px-6 px-5">
        <div className='py-16 border-y border-gray-700'>
          <div className="grid grid-cols-12 gap-6">
            <div className='col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6'>
              <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className="mb-6 text-lg font-normal">Customer Service</h4>

              <ul>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Help Portal</li>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Contact Us</li>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Delivery Information</li>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Click and Collect</li>
               <li className=' hover:text-(--main-color) duration-300  text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Refunds and Returns</li>
                </ul>
            </div>

            <div className='col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6'>
           <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className="mb-6 text-lg font-normal">Get to Know Us</h4>

           <ul>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>About Us</li>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>News & Blog</li>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Careers</li>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Investors</li>
               <li className=' hover:text-(--main-color) duration-300  text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Contact Us</li>
                </ul>
            </div>

            <div className='col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6'>
              <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className="mb-6 text-lg font-normal">vapes new collections</h4>

              <ul>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>E-Cigarettes</li>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Vape Pens</li>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Pod Systems</li>
               <li className=' hover:text-(--main-color) duration-300 mb-2 text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Disposable Vapes</li>
               <li className=' hover:text-(--main-color) duration-300  text-sm text-gray-600 font-medium cursor-pointer'><span className=' inline-block w-2.5 h-2.5 leading-2.5 mr-1.5 rounded-full border border-gray-500'></span>Nicotine Salt Devices</li>
                </ul>
            </div>


            <div className='col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6'>
              <h4 style={{fontFamily:'"Prosto One", sans-serif'}} className="mb-6 text-lg font-normal">get newsletter</h4>

              <div className=' relative'>
                <input className=' w-full bg-(--secondary-color) py-4 px-6 rounded-full border border-gray-600' type="email" placeholder="Your Email"/>
                <button className=' absolute top-1.5 right-1.5 text-lg bg-(--main-color) rounded-full flex items-center justify-center w-12 h-12 leading-12'><FaPaperPlane /></button>
              </div>
              <div className=' mt-10 flex gap-2.5'>
                <span className=' w-10 h-10 hover:text-(--main-color) duration-300 cursor-pointer hover:-translate-y-1.5 rounded-full text-gray-500 border border-gray-700 items-center justify-center flex'><FaFacebookF /></span>
                <span className=' w-10 h-10 hover:text-(--main-color) duration-300 cursor-pointer hover:-translate-y-1.5 rounded-full text-gray-500 border border-gray-700 items-center justify-center flex'><IoLogoTwitter /></span>
                <span className=' w-10 h-10 hover:text-(--main-color) duration-300 cursor-pointer hover:-translate-y-1.5 rounded-full text-gray-500 border border-gray-700 items-center justify-center flex'><FaLinkedinIn /></span>
                <span className=' w-10 h-10 hover:text-(--main-color) duration-300 cursor-pointer hover:-translate-y-1.5 rounded-full text-gray-500 border border-gray-700 items-center justify-center flex'><FaYoutube /></span>
              </div>
            </div>

          </div>
        </div>
             {/*  */}
        <div className='col-span-12 py-12 flex flex-col md:flex-row md:justify-between md:items-center flex-wrap'>
          <div className=' block'>
           <img src={logo} alt="" />
          </div>
          <p style={{color:'#727272' , fontSize:'14px' , fontWeight:'600'}}>© Copyright 2023 odor All Rights Reserved</p>
          <div className=' block'>
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
