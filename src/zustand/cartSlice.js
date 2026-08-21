import { create } from "zustand";
import { persist} from 'zustand/middleware'


export const useCart = create( 
    persist(
        (set , get)=>({
        cartData : [],
         addToCart :(id , images , title , finalPrice , stock)=>{
            const {cartData} = get()
         const product = {id , images , title , finalPrice , stock}
         const findedProduct = cartData.find(el => el.id === product.id)
         if(!findedProduct){
             const productInfo = {...product , quantity : 1}
             set({cartData : [...cartData , productInfo]})
              return 'firstAdd'
              
         }
    
         if( findedProduct.quantity < stock){
            const increamentedProduct = cartData.map(el =>(
          el.id === id ? {...el , quantity : ++el.quantity} : el
            ))
            set({cartData : increamentedProduct})        
            return 'increament'
        }
        
        return 'maxLimit'
         } ,
    
         removeFromCart : (id) => {
         const { cartData } = get()
         const filterdArray = cartData.filter( el => el.id !== id )
         set( { cartData : filterdArray } )
        } ,
    
         handleQuantity : (status , id)=>{
         const { cartData } = get()
         const findedProduct = cartData.find( el => el.id === id )
         if( status == 'inc' && findedProduct.quantity < findedProduct.stock ) ++findedProduct.quantity
         if( status == 'dec' && findedProduct.quantity > 1  ) --findedProduct.quantity
        set( { cartData : [...cartData] } )
         } ,
    
          totalCart : ()=> { 
          const { cartData } = get()
          return cartData.reduce( (p , c) => p + c.finalPrice * c.quantity , 0 )
         } ,
         clearCartData : ()=> set({ cartData : [] }) 
       }) ,

     {
      name : 'cart-data' ,
     partialize : (s)=>({
     cartData : s.cartData
            })
        }
    )

    )