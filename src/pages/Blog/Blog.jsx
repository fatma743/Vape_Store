import Banner from '../../common/Banner/Banner'
import Sidebar from '../../components/Sidebar/Sidebar'
import Scroll from '../../common/Scroll/Scroll'
import Mouse from '../../common/Mouse/Mouse'
import './Blog.css'
export default function Blog() {

  return (
    <div className='Blog'>
      <Banner page={'Blog Sidebar'} title={'Blog sidebar'}/>
      <Sidebar/>
      <Scroll/>
      <Mouse/>
    </div>
  )
}
