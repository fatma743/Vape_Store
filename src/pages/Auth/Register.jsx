import { useState } from 'react';
import './Auth.css'
import {IconButton, InputAdornment, TextField , Radio ,RadioGroup , FormControlLabel , FormLabel , FormControl, FormHelperText} from '@mui/material'
import {useForm} from 'react-hook-form'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../../validations/registerValid';
import { useAuth } from '../../zustand/authSlice';
import { LuLoader } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function Register() {

  const navagite = useNavigate() 

  const [ err , setErr] = useState(null)

  // eye
  const [ iseye , setIsEye] = useState(false)
  const [ iseye2 , setIsEye2] = useState(false)

  // zustand
  const registerHandler = useAuth(state => state.registerHandler)
  const isPendingRegister = useAuth(state => state.isPendingRegister)


  const {register , handleSubmit , watch , formState:{errors , isDirty , isValid}}= useForm({
    resolver: zodResolver( registerSchema),
    mode: 'all'
  })

  const submitHandler = async(data)=>{
   const res = await  registerHandler(data);
    if(!res.success){
      setErr(res.message.includes('email-already-in-use') ? 'This Email Already in use' : 'Something went wrong ...try Agin!!')
    }else{
      setErr(null)
      navagite('/')
      toast.success('Welcome' +  ' '+ watch('firstName'))
    }
  }
  

  return (
    <div className='Auth  container mx-auto py-5 mt-56 xl:px-12 md:px-6 px-5'>
      <h3 style={{fontFamily:'"Prosto One", sans-serif'}} className=' text-2xl md:text-3xl font-bold text-center'> Your journey <span className='text-(--main-color) italic'> starts here </span></h3>
      <p className='mt-3 text-blue-500 text-sm md:text-base text-center'> Create an account to explore all features</p>

       <div className='mt-12'>
      <form 
      onSubmit={handleSubmit(submitHandler)}
      className="flex items-center justify-center flex-col lg:w-[70%] mx-auto relative overflow-hidden rounded-3xl p-8 bg-[radial-gradient(circle_at_top,#262626,#0f0f0f_70%)] border border-(--main-color) shadow-[0_30px_80px_-20px_rgba(0,0,0,0.10)]">

  <div className="absolute -top-24 -right-24 w-100 h-100 bg-(--main-color)/30 blur-[120px] rounded-full"></div>
  <div className=' absolute -bottom-24 -left-24 w-100 h-100 bg-(--main-color)/30 rounded-full blur-[140px]'></div>


       <TextField
       error ={errors.firstName}
       helperText={errors.firstName?.message}
       {...register('firstName')}
       fullWidth
       label = 'First Name'
       type='text'
       sx={{
        marginBottom:'20px',
        // جسم الموقع
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',         
          backgroundColor: 'rgbg(38,38,38,0.8)', 
          // border اطار ال
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
       error ={errors.lastName}
       helperText={errors.lastName?.message}
       {...register('lastName')}
       fullWidth
       label = 'Last Name'
       type='text'
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
       error ={errors.phone}
       helperText={errors.phone?.message}
       {...register('phone')}
       fullWidth
       label = 'Phone'
       type='number'
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

         <TextField
         error={errors.confirmPassword}
       helperText={errors.confirmPassword?.message}
       {...register('confirmPassword')}
       fullWidth
       label = 'Confirm Password'
       type= { iseye2? 'text' : 'password'}
       
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
            <IconButton onClick={()=> setIsEye2(!iseye2)}>
              {
                !iseye2? <FaEyeSlash className='text-white'/> :  <FaEye className='text-white'/>
              }
            </IconButton>
          </InputAdornment>
        )
      }}
       />
      
      <FormControl  sx={{width:'100%'}}>
         <FormLabel sx={{ color:'#fff', fontWeight:'700', marginBottom:1}} > Gender </FormLabel>

             <FormHelperText> {errors.gender?.message} </FormHelperText>
          <RadioGroup >
        <FormControlLabel  {...register('gender')}  value="male" control={<Radio sx={{color:'#d1d5ab', '&.Mui-checked':{color:'var(--main-color)'}}}/>} label="Male" />
        
        <FormControlLabel  {...register('gender')}  value="female" control={<Radio sx={{color:'#d1d5ab', '&.Mui-checked':{color:'var(--main-color)'}}}/>} label="Female" />
      </RadioGroup>
      </FormControl>

   {
   err && <div className='text-red-700 bg-red-200 rounded-xl  w-full font-semibold py-5 text-center'>{err}</div>
    }
     <button
     disabled={!isValid || !isDirty || isPendingRegister}
  type="submit"
  className=" disabled:cursor-not-allowed disabled:opacity-60 relative  w-max mt-6 p-3 rounded-2xl bg-linear-to-r from-(--main-color) to-(--main-color) text-black font-extrabold tracking-wide hover:scale-[1.05] active:scale-95 transition-all cursor-pointer "
  > {
    isPendingRegister ?
    <div className='flex gap-2 items-center'>
      <LuLoader className=' text-lg animate-spin'/>
      loading...
    </div>
    :
    'Create Account'
  }
  </button>
       </form>

       </div>

    </div>
  )
}
