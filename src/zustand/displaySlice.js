import {create} from 'zustand'
import axios from 'axios'


const apiProducts = 'https://vapebackend-production-182f.up.railway.app/products'

export const useDisplayProducts = create( (set)=>({
    // globle state

    //وvalue  key  بس جوه اوبجت يعني كانها  state ديه كأنها 
    productData : [],
    categories : [],
    isLoading : false,
    // funاللي هتجيب المنتجات
    getProducts : async(category)=>{
        set({isLoading : true})
        try{
            if(category){
                const {data} = await axios.get(`${apiProducts}?category=${category}`)
                set({productData : data})

            }else{
                const {data} = await axios.get(apiProducts)
                set({productData : data})   
            }
              return{ success : true}
        }catch(error){
            return {success : false , message : error.message}
        }finally{
            set({isLoading : false})
        }
        

    },
    getCategories : async() =>{
        try{
            const {data} = await axios.get(`${apiProducts}/categories`)
            set({categories : data})
        }catch(error){
            console.log(error.message);
            
        }
    }

}))