import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => {
    const arryLoader = Array(8).fill(0)
    return <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {
            arryLoader.map(( _ , index)=>(
      <ContentLoader key={index}
        speed={2}
        width={399}
        height={400}
        viewBox="0 0 399 400"
        backgroundColor="#ded9d9"
        foregroundColor="#927c7c"
        
      >
        <rect x="159" y="159" rx="0" ry="0" width="0" height="6" /> 
        <rect x="158" y="157" rx="0" ry="0" width="0" height="4" /> 
        <rect x="85" y="181" rx="0" ry="0" width="0" height="13" /> 
        <rect x="13" y="2" rx="0" ry="0" width="306" height="210" /> 
        <rect x="33" y="230" rx="0" ry="0" width="210" height="9" /> 
        <rect x="51" y="249" rx="0" ry="0" width="158" height="8" /> 
        <rect x="66" y="294" rx="0" ry="0" width="235" height="12" />
      </ContentLoader>
    
            ))
        }

    </div>
}

export default MyLoader