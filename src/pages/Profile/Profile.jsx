import { LuLoader } from 'react-icons/lu'
import { useAuth } from '../../zustand/authSlice'
import {Navigate} from 'react-router-dom'


export default function Profile() {
  const { currentUser, isPendingCurrentUser } = useAuth()

  if (isPendingCurrentUser) {
    return(
       <div className='h-screen justify-center flex gap-2 items-center'>
            <LuLoader className=' text-lg animate-spin'/>
            loading...
          </div>
    )
  }

  if(!currentUser && !isPendingCurrentUser){
     return <Navigate to={'/login'}/>
  }

  return (
    <div className="container mx-auto py-60 px-6">
      <h2  className="text-3xl font-black italic mb-8 text-center">
        My <span className='text-(--main-color)'>Profile</span>
      </h2>

      <div className="flex items-center justify-center flex-col gap-6  lg:w-[50%] mx-auto relative overflow-hidden rounded-3xl p-8 bg-[radial-gradient(circle_at_top,#262626,#0f0f0f_70%)] border border-(--main-color) shadow-[0_30px_80px_-20px_rgba(0,0,0,0.10)]">
        <p className=' italic text-lg'><span className="text-(--main-color) text-xl font-bold"> Name : </span> {currentUser.userName}</p>
        <p className=' italic text-lg'><span className="text-(--main-color) text-xl font-bold"> Email : </span> {currentUser.email}</p>
        <p className=' italic text-lg'><span className="text-(--main-color) text-xl font-bold"> Phone : </span> {currentUser.phone}</p>
        <p className=' italic text-lg'><span className="text-(--main-color) text-xl font-bold"> Gender : </span> {currentUser.gender}</p>
      </div>
    </div>
  )
}