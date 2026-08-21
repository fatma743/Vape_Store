import { use, useEffect, useState } from 'react'
import DataTitle from '../../common/DataTitle/DataTitle'
import ProductsCard from '../../common/ProductsCard/ProductsCard'
import { useDisplayProducts } from '../../zustand/displaySlice'
import './Products.css'
import Scroll from '../../common/Scroll/Scroll'
import Mouse from '../../common/Mouse/Mouse'
import MyLoader from '../../assets/skeltons/ProductsLoader'
import { useAuth } from '../../zustand/authSlice'
import { useSearch } from '../../zustand/searchSlice'
// import { Tab , Tabs , Box} from '@mui/material'
export default function Products({isShopPage}) {

  const [cat , setCat] = useState('')

  // zustand ده اللي بجيبوا من 
  const productData = useDisplayProducts(state => state.productData)
  const getProducts = useDisplayProducts(state => state.getProducts)
  const isloading = useDisplayProducts(state => state.isLoading)
  const getCategories = useDisplayProducts(state => state.getCategories)
  const categories = useDisplayProducts(state => state.categories)
  const isPendingCurrentUser = useAuth(state => state.isPendingCurrentUser)
  const searchValue = useSearch(state => state.searchValue)



  const [error , setError] = useState(null)
  
  const displayHandler = async (category)=>{
    const res = await getProducts(category)
    if(!res.success ){
      setError(res.message)
    }else{
      setError(null)
    }

  }

  useEffect(()=>{
    displayHandler(isShopPage ? undefined : 'LatestItem')
    setCat('LatestItem')
    getCategories()
  } ,[])

// useEffect(()=>{
//   if(categories.length>0){
//     setCat(categories[0])
//     displayHandler(categories[0])
//   }
// } , [categories])
 

  const filterdProducts = productData.filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase().trim()))
  return (
    <>
    <div className='Products py-32'>
      <div className="container mx-auto xl:px-12 md:px-6 px-5">
     {
      !isShopPage &&
         <div className=' border-b border-[#414141] pb-7 mb-16 flex flex-wrap items-center justify-center lg:justify-between '>
      <DataTitle title={'latest arrival products'}/>
      <div className=' mt-6 lg:mt-0 flex  gap-4 '>
        {
          categories.map((category , index)=>(
            <button
            key={index}
            onClick={()=>{ 
              setCat(category)
              displayHandler(category) }}
             className={`px-4 py-2 rounded-full font-semibold transition ${cat === category ? 'bg-(--main-color) text-black' : 'text-white hover:text-(--main-color)' } `} >
              {category}
            </button>
          ))
        }
      </div>
        </div>
        
     }
     
     {
      isShopPage && 
      <div className='pt-32 pb-16 flex items-center justify-center'>
        <DataTitle title={'All Products'}/>
      </div>

     }
     

        {
          isloading || isPendingCurrentUser?
          <MyLoader/>
          :
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
              filterdProducts.map((val , index)=>(
                <ProductsCard 
                key={index}
                id = {val.id}
                images = {val.images}
                title = {val.title}
                price = {val.price}
                discount = {val.discount}
                description = {val.description}
                stock = {val.stock}

                />

              ))
            }
 
           </div>
        }
  
        {
          error && <div className='text-red-700 bg-red-200 rounded-xl py-5 mx-auto text-center text-xl font-semibold md:w-125'>{error}</div>
        }
      </div>
    </div>
    <Scroll />
    <Mouse/>
    </>
  )
}
