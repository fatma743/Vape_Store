import Banner from '../../common/Banner/Banner'
import SomeThing from '../../components/SomeThing/SomeThing'
import Map from '../../components/Map/Map'
import Scroll from '../../common/Scroll/Scroll'
import Mouse from '../../common/Mouse/Mouse'
import './Contact.css'
export default function Contact() {

  return (
    <div className='Contact'>
      <Banner page={'Contact Us'} title={'contact us'}/>
      <SomeThing/>
      <Map/>
      <Scroll/>
      <Mouse/>
    </div>
  )
}
