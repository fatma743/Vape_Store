import {z} from 'zod'

export const loginSchema = z.object({



    email: z.string().min(1 , { message : 'email is Required'} ).email({ message : 'this Email is Not right'}),

    password: z.string().min(1 ,  { message : 'password is Required'})
})

