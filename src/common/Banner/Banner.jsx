import './Banner.css'
import {Link} from  'react-router-dom'
import { TiHome } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";


export default function Banner({page , title}) {

  return (
    <div className='Banner py-32 mt-52 text-center'>
       <div className="container mx-auto xl:px-12 md:px-6 px-5">
        <h2 style={{fontFamily:'"Prosto One", sans-serif'}}  className=' mb-4 text-4xl leading-12 font-normal'>{page}</h2>
       </div>

       <div className='flex justify-center items-center '>
        <Link to={'/'} className='flex items-center gap-1.5 font-semibold hover:text-(--main-color) duration-300'> <TiHome className='text-xl'/> Home <IoIosArrowForward /> </Link>
        <span className='font-semibold'>{title}</span>
       </div>
    </div>
  )
}
