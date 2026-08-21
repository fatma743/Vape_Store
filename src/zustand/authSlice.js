import { create} from 'zustand'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged, signOut} from 'firebase/auth'
import { auth, db } from '../../firebase/firebase'
import {setDoc , getDoc , doc} from 'firebase/firestore'


export const useAuth = create((set , get)=>({
    isPendingRegister : false , 
    isPendingLogin : false , 

    currentUser : null ,
    isPendingCurrentUser : true , 

    registerHandler : async(data)=>{
        const {email , password , firstName , lastName , phone , gender} = data
        set({isPendingRegister : true})

        try {
            const userData = await createUserWithEmailAndPassword(auth , email , password)
            const id = userData.user.uid
            await setDoc(doc( db , 'users' , id) ,{
                id ,
                userName : firstName + ' ' + lastName ,
                email , 
                password ,
                gender ,
                phone , 
                // ديه بتعرفني العملاء مسجله من امتى
                createdAt : new Date()
            } )
            return { success : true}
            
        } catch (error) {
            return { success : false , message : error.message}

        }finally{
            set({isPendingRegister : false})
        }
        

    } ,
    loginHandler : async(data)=>{
        const { email , password}= data
        set({isPendingLogin : true})
        try {
            await signInWithEmailAndPassword(auth , email , password)
            return { success : true}
            
        } catch (error) {
            return { success : false , message : error.message}
            
        }finally{
        set({isPendingLogin : false})

        }
        
    } , 
    signOut : async()=>{
        try {
            await signOut(auth)
        } catch (error) {
            
        }
    },

   fetchUserData : async(id) =>{
    try {
        const userData = await getDoc(doc( db , 'users' , id))
        if(userData.exists()){
            set({currentUser : userData.data()})
            return { success : true}
        }
    } catch (error) {
     return { success : false , message : error.message}        
    }

   },
   initiatAuthOnApp :()=>{
    const {fetchUserData} = get() 
    try {
        onAuthStateChanged(auth , async(user)=>{
            if(user){
                await fetchUserData(user.uid)
            }else{
                set({currentUser : null})
            }
            set({isPendingCurrentUser : false})
            
        })
    } catch (error) {
        console.log(error.message);
        set({currentUser : null})
        
    }   
 
   }
     

}))
