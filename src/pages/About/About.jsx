import './About.css'
import Banner from '../../common/Banner/Banner'
import Modern from '../../components/Modern/Modern'
import Service from '../../components/Service/Service'
import Customer from '../../components/Customer/Customer'
import Blog from '../../components/Blog/Blog'
import Brand from '../../common/Brand/Brand'
import Scroll from '../../common/Scroll/Scroll'
import Mouse from '../../common/Mouse/Mouse'
export default function About() {

  return (
    <div className='About'>
     <Banner  page={'About us'} title={'About'}/>
      <Modern/>
      <Service/>
      <Customer/>
      <Blog/>
      <Brand/>
      <Scroll/>
      <Mouse/>
    </div>
  )
}
