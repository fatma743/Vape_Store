import { create } from 'zustand'
import { useAuth } from './authSlice'
import axios from 'axios'



const wishlistApi = 'https://vapebackend-production-182f.up.railway.app/wishlist'

//api ديه هيكون فيها اللوجك الخاص ب 

export const useWishlist = create ( (set , get)=>({
     
   wishlistData : [] ,
    //   بتعرفني اليوز ده موجود ام لاءfunديه 
    validateUser : ()=>{
      const user = useAuth.getState().currentUser
      return user
    },
    likeorDislike : async(id , images , title , price , discount , description , stock) =>{
        const product = {id , images , title , price , discount , description , stock}
         const user = get().validateUser()
         const {wishlistData} = get()

         if(!user){
          return 'NoAuth'
         }
         
        //  get
      const isExsitinWishlist = await axios.get(`${wishlistApi}?userId=${user.id}&productId=${id}`)
      
      if(isExsitinWishlist.data.length === 0){
          //  post
          await axios.post(wishlistApi , {
            userId : user.id ,
            productId : id ,
            payload : product
          })
          set({wishlistData : [...wishlistData , product]})
          return 'add'
          
      }else{
        // delete
        const wishlistId = isExsitinWishlist.data[0].id
        await axios.delete(`${wishlistApi}/${wishlistId}`)
        const filter = wishlistData.filter( el => el.id !== product.id)
        set({wishlistData : filter})        
        return 'delete'
      }
    },
    // الاضافهfun 
    getWishlistData : async () =>{
     const user = get().validateUser()
     if(!user){
      return 'NoAuth'
     }

    //  get
    const {data} = await axios.get(`${wishlistApi}?userId=${user.id}`)
    const payload = data.map(el => el.payload)        
    set({ wishlistData : payload })
    
    },

    // clear wishlist
    clearWishlist : ()=> { set({ wishlistData : [] }) }
}))