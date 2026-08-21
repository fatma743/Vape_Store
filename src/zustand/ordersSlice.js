import { create } from "zustand";
import { useAuth } from "./authSlice";
import { useCart } from "./cartSlice";
import toast from 'react-hot-toast'
import axios from "axios";
import {persist} from 'zustand/middleware'


const ordersApi =  'http://localhost:5001/order'

export const useOrders = create(
    persist(
        (set)=>({
    
        orders: [] ,
        orderState : 'idle' ,
        addToOrderList : async(total)=>{
            const user = useAuth.getState().currentUser
            const cartData = useCart.getState().cartData
            set({ orderState : 'pending' })
            try {
                const payload ={
                    userId : user.id ,
                    items: cartData ,
                    total  ,
                    timeStamp : new Date()
                }
                await axios.post( ordersApi , payload )
                set(s => ({orderState : 'success', orders:[...s.orders , payload]}))
                return { success : true }
            } catch (error) {
                set({ orderState : 'fail' })
                toast.error( error.message )
                return { success : false  }
            }
            
        } ,
        backToCartMode : ()=> set({orderState : 'idle'})
    }) ,

    { name : 'orders-storage'}
   )

    ) 