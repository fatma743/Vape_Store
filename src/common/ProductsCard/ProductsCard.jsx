import './ProductsCard.css'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import useProduct from '../../hooks/useProduct';
import { useWishlist } from '../../zustand/wishlistSlice';
import { Link } from 'react-router-dom';

export default function ProductsCard({id , images , title , price , discount , description , stock}) {


  const {handleWishlist , handleCart} = useProduct()
  const wishlistData = useWishlist(s => s.wishlistData)
  const isColor = wishlistData.some(el => el.id === id)

  const finalPrice = price - (price * discount / 100)

  return (
    <div className='ProductsCard  overflow-hidden relative bg-[#141414] rounded-2xl border border-(--main-color) shadow shadow-amber-600'>

       <button
       onClick={ ()=> handleWishlist(id , images , title , price , discount , description , stock)}
        className={`wishlist absolute bottom-44 right-5 p-2 cursor-pointer w-10 h-10 border flex justify-center items-center z-1 -translate-x-2.5 rounded-full text-xl duration-300  hover:-translate-y-1.5 opacity-0
         ${isColor? 'text-red-500 border-red-500': 'text-white border'}`}> <FaHeart /> </button>
     
      <Link to={`/productDetails/${id}`}>
        <img className='w-full h-70 object-cover rounded-2xl p-3' src={images} alt="" />
      </Link>
      <div className='bg-red-700 py-1 text-sm -rotate-45 px-3 w-40 text-center rounded top-5 -start-10 absolute'>{discount} %</div>
        
        <div className=' flex flex-col gap-2'>
          <p style={{fontFamily:'"Prosto One", sans-serif'}} className='tilte text-xl mb-3 px-5'>{title} </p>
          <p className='px-5 font-bold text-(--main-color) text-xl'> ${finalPrice.toFixed()} <del className='line-through opacity-40 ms-3 text-[#ccc]'>${price}</del> </p>
          <div className='flex gap-2 text-amber-500 my-5 px-5'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>
          
           <button
       onClick={ ()=> handleCart(id , images , title , finalPrice , stock)}
            className='cart p-5 relative border-t border-[#414141] flex justify-center items-center gap-2.5 cursor-pointer rounded'>
             <FaCartShopping className='ca text-(--main-color) relative z-1 text-lg'/> 
             <span className='z-1 relative font-bold' >Add to cart</span>
             </button>

      </div>

    </div>
  )
}
