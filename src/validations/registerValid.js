import {z} from 'zod'

export const registerSchema = z.object({
    firstName: z.string().min(1 , { message : 'firstName is Required'}),

    lastName: z.string().min(1 , { message : 'lastName is Required'}),

    phone: z.string().min(1 ,  { message : 'phone is Required'})
           .regex(/^01[0-25][0-9]{8}$/ ,{ message : 'this number is not valid , number must be like this => 01151750842'} ),

    email: z.string().min(1 , { message : 'email is Required'} ).email({ message : 'this Email is Not right'}),

    password: z.string().min(1 ,  { message : 'password is Required'})
             .regex(/[A-Z]{3}/ , { message : 'password must includes 3 capital charckter'})  
             .regex(/[0-9]{4}/ , { message : 'password must includes 4 numbers at least'})
             .regex(/.*[!@#$%^&*()__+{}|[\]\\:";'<>?,./].*/ ,{ message : 'you should enter 2 special charckter or more'})
             .min(8 , {message :'password must be 8 chackter or more'}),
    confirmPassword :  z.string().min(1 ,  { message : 'password is Required'})  , 
    gender : z.enum(['male' , 'female'] , { message: 'gender is Required'})     

}).refine( (same)=> same.password === same.confirmPassword , { message : ' password is not matching' , path: ['confirmPassword']}  )
// ديه لو عايزه اعمل حاجه خاصه

