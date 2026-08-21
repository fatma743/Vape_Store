import {create} from 'zustand'



export const useSearch = create((set)=>({
       searchValue : '' ,
       handleSearchValue : (value)=>{
         set({searchValue : value})

       } ,
       clearSearch : ()=> set({ searchValue : '' }) ,
}))