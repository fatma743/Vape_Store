import { useEffect } from 'react'
import './Mouse.css'
export default function Mouse() {

  useEffect(()=>{
    const cursorOne = document.querySelector('.cursor-one')
    const cursorTwo = document.querySelector('.cursor-two')

    const moveCursor =(e)=>{
      const x = e.clientX
      const y = e.clientY

      cursorOne.style.transform = `translate(${x}px , ${y}px)`
      cursorTwo.style.transform = `translate(${x}px , ${y}px)`

      cursorOne.style.visibility = 'visible'
      cursorTwo.style.visibility = 'visible'
      
    }
    window.addEventListener('mousemove' , moveCursor)

    return ()=>{ window.addEventListener('mousemove' , moveCursor)}


  },[])

  return (
    <div className='Mouse'>
      <div className="cursor-one"></div>
      <div className="cursor-two"></div>
    </div>
  )
}
