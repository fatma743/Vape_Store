import { useState } from 'react';
import './Auth.css'
import {IconButton, InputAdornment, TextField} from '@mui/material'
import {useForm} from 'react-hook-form'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../../validations/loginValid';
import { useAuth } from '../../zustand/authSlice';
import { LuLoader } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const navagite = useNavigate() 

  const [ err , setErr] = useState(null)

  // eye
  const [ iseye , setIsEye] = useState(false)
  const [ iseye2 , setIsEye2] = useState(false)

  // zustand
  const loginHandler = useAuth(state => state.loginHandler)
  const isPendingLogin = useAuth(state => state.isPendingLogin)


  const {register , handleSubmit ,  formState:{errors , isDirty , isValid}}= useForm({
    resolver: zodResolver( loginSchema),
    mode: 'all'
  })

  const submitHandler = async(data)=>{
   const res = await  loginHandler(data);
    if(!res.success){
      setErr( 'Something went wrong ...try Agin!!')
    }else{
      setErr(null)
      navagite('/')
      window.scrollTo({top :0 , behavior: 'smooth'})
    }
  }
  

  return (
    <div className='Auth  container mx-auto py-5 mt-56 xl:px-12 md:px-6 px-5'>
      <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className='text-(--main-color) italic text-2xl md:text-3xl font-bold text-center'> Welcome back <span className='text-white'> to your journey </span></h3>
      <p className='mt-3 text-blue-500 text-sm md:text-base text-center'>  Login to continue exploring</p>

       <div className='mt-12'>
      <form 
      onSubmit={handleSubmit(submitHandler)}
      className="flex items-center justify-center flex-col lg:w-[70%] mx-auto relative overflow-hidden rounded-3xl p-8 bg-[radial-gradient(circle_at_top,#262626,#0f0f0f_70%)] border border-(--main-color) shadow-[0_30px_80px_-20px_rgba(0,0,0,0.10)]">

  <div className="absolute -top-24 -right-24 w-100 h-100 bg-(--main-color)/30 blur-[120px] rounded-full"></div>
  <div className=' absolute -bottom-24 -left-24 w-100 h-100 bg-(--main-color)/30 rounded-full blur-[140px]'></div>


      

         <TextField
       error ={errors.email}
       helperText={errors.email?.message}
       {...register('email')}
       fullWidth
       label = 'Email'
       type='email'
       sx={{
        marginBottom:'20px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',         
          backgroundColor: 'rgbg(38,38,38,0.8)', 
          '& fieldset': {
            borderColor: '#d1d5db',          
          },
          '&:hover fieldset': {
            borderColor: '#ff9800',          
          },
          '&.Mui-focused fieldset': {
            borderColor: '#ff9800',       
          },
        },
        '& label': {
          color:'#fff' ,                   
        },
        '& label.Mui-focused': {
          color: 'var(--main-color)',                   
        },
        '& input': {
          color: '#fff',                       
        },
      }}
       />

         <TextField
         error={errors.password}
       helperText={errors.password?.message}
       {...register('password')}
       fullWidth
       label = 'password'
       type= { iseye? 'text' : 'password'}
       sx={{
        marginBottom:'20px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',         
          backgroundColor: 'rgbg(38,38,38,0.8)', 
          '& fieldset': {
            borderColor: '#d1d5db',          
          },
          '&:hover fieldset': {
            borderColor: '#ff9800',          
          },
          '&.Mui-focused fieldset': {
            borderColor: '#ff9800',       
          },
        },
        '& label': {
          color:'#fff' ,                   
        },
        '& label.Mui-focused': {
          color: 'var(--main-color)',                   
        },
        '& input': {
          color: '#fff',                       
        },
      }}
      InputProps={{
        endAdornment:(
          <InputAdornment position='end'>
            <IconButton onClick={()=> setIsEye(!iseye)}>
              {
                !iseye? <FaEyeSlash className='text-white'/> :  <FaEye className='text-white'/>
              }
             
            
            </IconButton>
          </InputAdornment>
        )
      }}
       />

     
      
    

   {
   err && <div className='text-red-700 bg-red-200 rounded-xl  w-full font-semibold py-5 text-center'>{err}</div>
    }
     <button
     disabled={!isValid || !isDirty || isPendingLogin}
  type="submit"
  className=" disabled:cursor-not-allowed disabled:opacity-60 relative  w-max mt-6 p-3 rounded-2xl bg-linear-to-r from-(--main-color) to-(--main-color) text-black font-extrabold tracking-wide hover:scale-[1.05] active:scale-95 transition-all cursor-pointer "
  > {
    isPendingLogin ?
    <div className='flex gap-2 items-center'>
      <LuLoader className=' text-lg animate-spin'/>
      loading...
    </div>
    :
    'Login'
  }
  </button>
       </form>

       </div>

    </div>
  )
}
