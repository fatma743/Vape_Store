import DataTitle from "../../common/DataTitle/DataTitle";
import { useOrders } from "../../zustand/ordersSlice";
import Mouse from '../../common/Mouse/Mouse'
import Scroll from '../../common/Scroll/Scroll'
import { useAuth } from "../../zustand/authSlice";
import { LuLoader } from 'react-icons/lu'
import {Navigate} from 'react-router-dom'

export default function Orders() {

  const orders = useOrders((s) => s.orders);
  const {  isPendingCurrentUser} = useAuth()
  const currentUser = useAuth(s => s.currentUser)
     
  // التحميل
   if (isPendingCurrentUser) {
      return(
         <div className='h-screen justify-center flex gap-2 items-center'>
           <LuLoader className=' text-lg animate-spin'/>
           loading...
        </div>
      )
    }
      // الحمايه
     if(!currentUser && !isPendingCurrentUser){
    return<Navigate to={'/login'} />
  }

  return (
    <>
    <div className="Orders container mx-auto px-4 sm:px-8 mt-40 pb-20">
      <div className=" pt-20 flex justify-center items-center italic">
        <DataTitle title={"Your Orders"} />
      </div>

      {/* لو مفيش Orders */}
      {!orders.length ? (
        <div className="bg-[#222121] shadow shadow-amber-600 border border-amber-800  rounded-2xl p-6 text-center text-white">
          <p className="font-semibold">No orders yet.</p>
          <p className="opacity-70 mt-2"> Place your first order from cart  </p>
        </div>

      ) : (
       <div className="grid gap-8">

      {orders.map((order, index) => (
        <div key={index} className="mt-10 bg-[#222121] shadow shadow-amber-600 border border-amber-800 text-white rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-lg">Order # {index + 1}</p>
            {/* <p className="text-sm opacity-70">
            {order.timeStamp ? new Date(order.timeStamp).toLocaleString() : ""}
            </p> */}
            <p className="font-semibold ">
              <span className="text-(--main-color)"> Total : </span> {Number(order.total).toFixed(1)}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-600 text-gray-300">
                  <th className="py-2 text-(--main-color)">Product</th>
                  <th className="py-2 text-(--main-color)">Price</th>
                  <th className="py-2 text-(--main-color)">Qty</th>
                  <th className="py-2 text-(--main-color)">Stock</th>
                  <th className="py-2 text-(--main-color)">Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {order.items.map((val, i) => (
                  <tr key={i} className="border-b border-gray-700">

                    <td className="py-3 flex items-center gap-3">
                      <img src={val.images} alt={val.title}
                       className="w-16 h-16 p-1 border border-(--main-color) rounded-full object-cover"/>
                      <span className="font-medium">{val.title}</span> 
                    </td>

                    <td className="py-3">{Number(val.finalPrice).toFixed(1)}</td>
                    <td className="py-3">{val.quantity}</td>
                    <td className="py-3">{val.stock}</td>
                    <td className="py-3"> {(Number(val.finalPrice) * val.quantity).toFixed(1)} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      </div>
      
      )}
    </div>

   <Mouse />
   <Scroll />
    </>
    
  );
}
    
    
  
