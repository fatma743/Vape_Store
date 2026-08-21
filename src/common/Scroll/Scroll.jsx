import { useEffect, useState } from 'react';
import './Scroll.css'
import { MdKeyboardArrowUp } from "react-icons/md";
export default function Scroll() {

  const [isScroll , setIsScroll]= useState(false)
  const [progress, setProgress] = useState(0);
  useEffect(() =>{
  const handleScroll = () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const percent = (scrollTop / height) * 100;
  setProgress(percent);

  if (scrollTop >= 500) {
    setIsScroll(true);
  } else {
    setIsScroll(false);
  }
};
    window.addEventListener('scroll' ,handleScroll )
    return ()=>{
      window.removeEventListener('scroll' , handleScroll)
    }

  }, [])

// click
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


  return (
    <div className='Scroll'>
      <div
      onClick={scrollToTop}
      style={{ '--progress' : `${progress}`}}
       className={`scroll-up ${isScroll ? 'active' : ''}`}
       >
        <MdKeyboardArrowUp className='text-3xl relative z-1' />

      </div>
        
    </div>
    
  )
}
