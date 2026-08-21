import './Data.css'
export default function Data({title}) {

  return (
    <div className='Data'>
      <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-2xl font-medium leading-9 text-center'>
              <span className='title-icon relative w-5 h-3.5'></span>
               {title}
                <span className='title-icon relative w-5 h-3.5'></span>
               </h3>
    </div>
  )
}
