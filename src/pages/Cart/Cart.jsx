import './Cart.css'
import { useCart } from '../../zustand/cartSlice'
import DataTitle from '../../common/DataTitle/DataTitle';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import { useAuth } from '../../zustand/authSlice';
import { useOrders } from '../../zustand/ordersSlice';
import { useEffect } from 'react';
import LottieHandler from '../../common/daynamic/LottieHandler';
import Scroll from '../../common/Scroll/Scroll';
import Mouse from '../../common/Mouse/Mouse';

export default function Cart() {


  const { handleRemoveFromCart } = useProduct()
  const cartData = useCart(s => s.cartData)
  const handleQuantity = useCart(s => s.handleQuantity)
  const totalCart = useCart(s => s.totalCart)
  const total = totalCart().toFixed(1)
  const currentUser = useAuth(s => s.currentUser)
  const isPendingCurrentUser = useAuth(s => s.isPendingCurrentUser)
  const addToOrderList = useOrders(s => s.addToOrderList)
  const orderState = useOrders(s => s.orderState)
  const backToCartMode = useOrders(s => s.backToCartMode)
  const clearCartData = useCart(s => s.clearCartData)


  const handleAddToOrderlist = async () => {
    const res = await addToOrderList(total)
    if (res.success) {
      clearCartData()
    }
  }

  useEffect(() => {
    return () => backToCartMode()
  }, [])

  return (
    <>
      <div className='Cart container mx-auto px-4 sm:px-8 mt-60 md:px-10 lg:px-20 xl:px-30 py-10'>
        <div className=' pb-16 flex items-center justify-center italic'>
          <DataTitle title={'Your Cart'} />
        </div>
        {
          orderState == 'idle' &&
          <div>
            {
              !cartData.length ?
                <div className='flex flex-col gap-2 items-center'>
                  <p className='font-semibold capitalize'> There is no product in your cart </p>
                  <Link className=' text-blue-500 underline' to={'/pages/product'}> get Some Products ? </Link>
                </div> :

                <div className='grid grid-cols-1 gap-2'>
                  {
                    cartData.map((val, index) => (
                      <div key={index} className='card bg-[#222121] shadow shadow-amber-700 flex justify-around items-center gap-3 p-3'>

                        <img src={val.images} alt="" className='size-20 p-1 object-cover border  border-amber-700 rounded-full' />
                        <div className='text-lg flex flex-col'>
                          <p className=' font-semibold'> {val.title}  </p>
                          <p> {val.finalPrice} x {val.quantity} <sup className=' opacity-80'> ( {(val.finalPrice * val.quantity).toFixed(1)} )</sup></p>
                        </div>

                        <div>
                          <div className='flex items-center gap-3'>
                            <button
                              disabled={val.quantity >= val.stock}
                              onClick={() => handleQuantity('inc', val.id)}
                              className=' disabled:cursor-not-allowed disabled:opacity-50 duration-200 size-7 rounded-full bg-black cursor-pointer text-white' > + </button>

                            <p className='font-bold text-lg'> {val.quantity} </p>
                            <button
                              disabled={val.quantity <= 1}
                              onClick={() => handleQuantity('dec', val.id)}
                              className=' disabled:cursor-not-allowed disabled:opacity-50 duration-200 size-7 rounded-full bg-black cursor-pointer text-white' > - </button>
                          </div>
                          <p className='opacity-60 mt-1'> maxlimit : {val.stock} </p>
                        </div>


                        <button
                          onClick={() => handleRemoveFromCart(val.id)}
                          className='py-2 px-3 bg-red-700 duration-300 rounded-2xl hover:bg-red-500 cursor-pointer hover:scale-90'> Remove product </button>
                      </div>

                    ))
                  }
                </div>

            }

            <div className=' flex justify-between mt-10'>
              {
                cartData.length &&
                <button className='py-2 px-3 bg-(--main-color) rounded cursor-pointer'> Totall : {total} </button>
              }
              {
                currentUser && !isPendingCurrentUser && cartData.length ?
                  <button
                    onClick={() => handleAddToOrderlist(total)}
                    className='py-2 px-3 bg-(--main-color) rounded shadow-sm  shadow-white cursor-pointer hover:bg-amber-600 text-black hover:text-white duration-300 hover:scale-90 border border-(--main-color)'
                  > Placing Order </button> : ''

              }
            </div>

          </div>
        }
        {orderState === 'pending' && <LottieHandler status={'pending'} />}
        {orderState === 'success' && <LottieHandler status={'success'} />}
        {orderState === 'fail' && <LottieHandler status={'fail'} />}

      </div>

      <Scroll />
      <Mouse />
    </>
  )
}
