import BuildingPage from '../../assets/lotifiles/Building Page.json'
import landingPage from '../../assets/lotifiles/landing page 20.json'
import Error from '../../assets/lotifiles/Error 404.json'
import pendingOrders from '../../assets/lotifiles/loading.json'
import successOrders from '../../assets/lotifiles/success2.json'
import errOrders from '../../assets/lotifiles/error.json'
import { useLottie } from "lottie-react";
import { Link } from 'react-router-dom';
export default function LottieHandler({status}) {

   
  const options = {
    animationData: status == 'page'?  landingPage :
                   status == 'build'?  BuildingPage :
                   status == 'pending'? pendingOrders :
                   status == 'success'? successOrders :
                   status == 'fail' ? errOrders :
                     Error ,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <div className=' h-[110vh] flex items-center justify-center'>
      <div className='size-full flex flex-col items-center justify-center gap-2'>
      <div className=' w-100'> {View} </div>
      {
        status == 'page'? <p> loading your website.... plz wait</p>
        :
        status == 'build'? <p> loading your page.... plz wait</p>
        :
         status == 'pending'? <p> processing your order.... plz wait</p>
        :
         status == 'success'? <p> order placed successfully</p>
        :
         status == 'fail'? <p> faild to place order</p>
        :
        <>
        <p className=' text-red-600'> something went wrong </p>
        <Link to={'/'} className='underline text-blue-600'> go Back to Main Page </Link>
        </>
      }
      </div>
    </div>
  )

}