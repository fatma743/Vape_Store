import { Navigate } from 'react-router-dom';
import MyLoader from '../../assets/skeltons/ProductsLoader';
import DataTitle from '../../common/DataTitle/DataTitle';
import ProductsCard from '../../common/ProductsCard/ProductsCard';
import { useAuth } from '../../zustand/authSlice';
import { useDisplayProducts } from '../../zustand/displaySlice';
import { useWishlist } from '../../zustand/wishlistSlice'
import './WishList.css'
import Scroll from '../../common/Scroll/Scroll';
import Mouse from '../../common/Mouse/Mouse';

export default function WishList() {

  const wishlistData = useWishlist( s => s.wishlistData)
  const isPendingCurrentUser = useAuth(s => s.isPendingCurrentUser)
  const currentUser = useAuth(s => s.currentUser)
  const isloading = useDisplayProducts( s => s.isLoading)
  
  if(!currentUser && !isPendingCurrentUser){
    return<Navigate to={'/login'} />
  }

  return (
    <>
    <div className='Wishlist py-32'>
         <div className="container mx-auto xl:px-12 md:px-6 px-5">
        <div className='pt-24 pb-16 flex items-center justify-center italic'>
           <DataTitle title={'My Wishlist'}/>
         </div>
   
           {
             isloading || isPendingCurrentUser?
             <MyLoader/>
             :
             !wishlistData.length ?
               <div className='text-center text-blue-600 text-xl'> There is no product in wishlist </div>
             :
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>

               {
                 wishlistData.map((val , index)=>(
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
     
           {/* {
             error && <div className='text-red-700 bg-red-200 rounded-xl py-5 mx-auto text-center text-xl font-semibold md:w-125'>{error}</div>
           } */}
         </div>
       </div>
    
    <Scroll />
    <Mouse />
    </>
  )
}
