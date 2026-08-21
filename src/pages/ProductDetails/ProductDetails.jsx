import { useEffect, useState } from 'react';
import { useDisplayProducts } from '../../zustand/displaySlice';
import './ProductDetails.css'
import {useParams} from 'react-router-dom'
import { LuLoader } from 'react-icons/lu'
import { useWishlist } from '../../zustand/wishlistSlice';
import useProduct from '../../hooks/useProduct';
import { FaHeart } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
import DataTitle from '../../common/DataTitle/DataTitle';
import { useCart } from '../../zustand/cartSlice';

export default function ProductDetails() {

  const {id} = useParams()
  const productData = useDisplayProducts( s => s.productData)
  const {handleWishlist , handleCart} = useProduct()
  const wishlistData = useWishlist( s=> s.wishlistData)
  const cartData = useCart(s => s.cartData)
  const addToCart = useCart(s => s.addToCart)


  const [ product , setProduct] = useState(null)

  useEffect(()=>{
    const foundProduct = productData.find(e => e.id === parseInt(id));    
    setProduct(foundProduct)
  } , [id , productData])

  const isInWishlist = product && wishlistData.some(el => el.id === product.id)
  
const finalPrice = product?.price - (product?.price * product?.discount / 100)


  return (
    <div className='ProductDetails py-40'>
     <div className='pt-24 pb-16 flex items-center justify-center italic'>
          <DataTitle title={'Product Details'}/>
              </div>
        
      {
        !product ?
        <div className='pt-40 justify-center flex gap-2 items-center'>
            <LuLoader className=' text-lg animate-spin'/>
            loading...
          </div>
          :
          <div className=' container mx-auto  px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10'>
           <div className='col-span-1 lg:col-span-5'>
            <div className='rounded-2xl p-6 border border-amber-700 shadow shadow-amber-500'>
              <img className='w-full h-110 rounded-2xl' src={product.images}  alt="" />

            </div>
           </div>


           <div className='col-span-1 lg:col-span-7'>
            <div className='rounded-2xl p-6 border border-amber-700 shadow shadow-amber-500 flex flex-col gap-6'>
            <p className='text-center text-2xl text-(--main-color) font-semibold'> ( {product.category} ) </p>
            <p className='text-2xl text-amber-500 font-semibold italic'> Title : <span className='text-white font-normal '> {product.title}</span></p>
            <p className='text-2xl text-amber-500 font-semibold italic'> Price : <span className='text-white font-normal '> $ {product.price}</span></p>
            <p className='text-2xl text-amber-500 font-semibold italic'> Discount : <span className='text-white font-normal '>{product.discount} %</span></p>
            <p className='text-2xl text-amber-500 font-semibold italic'> Stock : <span className='text-white font-normal '> {product.stock}</span></p>
            <p className='text-2xl text-amber-500 font-semibold italic'> Description : <span className='text-white font-normal '> {product.description}</span></p>

            <div className=' flex justify-between items-center mt-5'>

            <button
                onClick={() => handleWishlist(
                    product.id,
                    product.images,
                    product.title,
                    product.price,
                    product.discount,
                    product.description,
                    product.stock
                  )
                }
                className={` p-3 rounded-2xl font-semibold cursor-pointer border w-max text-3xl hover:-translate-y-2.5 duration-300 hover:text-(--main-color) transition ${isInWishlist ? 'text-red-500 border-red-500' : 'text-white'}`}
              >
                <FaHeart />
              </button>
             
            
              <button
              onClick={ ()=> {
                if(product){
                  handleCart(
                    product.id,
                    product.images,
                    product.title,
                    finalPrice,
                    product.stock
                  )
                }
              }}
              className={`p-3 rounded-2xl font-semibold hover:-translate-y-2.5 duration-300 hover:text-(--main-color)  cursor-pointer border w-max text-3xl`}
              >
               <FaCartShopping />
              </button>

            </div>
            </div>
           </div>
          </div>
          </div>
          
  

      }
    </div>
  )
}
