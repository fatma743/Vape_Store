import './DataTitle.css'
export default function DataTitle({title , children}) {

  return (
    <div className='DataTitle'>
      <div className=' relative flex lg:flex-row flex-col items-start justify-between lg:items-center'>

        <div className='flex items-center'>
        <span className="title-icon mr-2.5 relative w-5 h-3.5"></span>
        <h2 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-3xl lg:text-4xl  leading-12 font-normal'>{title}</h2>
        </div>

        {children}

         </div>
    </div>
  )
}
