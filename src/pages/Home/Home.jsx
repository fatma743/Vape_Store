import './Home.css'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import View from '../../components/View/View'
import Products from '../../components/Products/Products'
import Discount from '../../components/Discount/Discount'
import Arrival from '../../components/Arrival/Arrival'
import Marquee from '../../components/Marquee/Marquee'
import Gallery from '../../components/Gallery/Gallery'
import Brand from '../../common/Brand/Brand'
import Scroll from '../../common/Scroll/Scroll'
import Mouse from '../../common/Mouse/Mouse'
export default function Home() {

  return (
    <div className='Home'>

      <Header />
      <Categories/>
      <View/>
      <Products />
      <Discount/>
      <Arrival/> 
      <Marquee/>
      <Gallery/>
      <Brand/>
      <Scroll/> 
      <Mouse/>
    </div>
  )
}
