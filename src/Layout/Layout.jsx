import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar/Navbar'
import Footer from '../common/footer/footer'
export default function Layout() {
  return (
    <>
     <Navbar/>
     <Outlet />
     <Footer />
    </>
  )
}
