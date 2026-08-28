import {Suspense , lazy, useEffect} from 'react'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import LottieHandler from './common/daynamic/LottieHandler'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './zustand/authSlice'

 

// lazy
const Layout = lazy(()=>import( './Layout/Layout') )
const Home = lazy(()=>import( './pages/Home/Home') )
const About = lazy(()=>import( './pages/About/About') )
const Blog = lazy(()=>import(  './pages/Blog/Blog') )
const Contact = lazy(()=>import(  './pages/Contact/Contact') )
const Register = lazy(()=>import( './pages/Auth/Register') )
const Login = lazy(()=>import( './pages/Auth/Login') )
const Products = lazy(()=>import( './components/Products/Products') )
const Profile = lazy(()=>import( './pages/Profile/Profile') )
const WishList = lazy(()=>import( './pages/WishList/WishList') )
const Cart = lazy(()=>import( './pages/Cart/Cart') )
const ProductDetails = lazy(()=>import( './pages/ProductDetails/ProductDetails') )
const Orders = lazy(()=>import( './pages/Ordres/Ordres') )




export default function App() {

  const initiatAuthOnApp = useAuth(state => state.initiatAuthOnApp)


  useEffect(()=>{
    const recordAuth = initiatAuthOnApp()
    return ()=> recordAuth()

  } , [])

  const router = createBrowserRouter([
    {
      path : '/',
      element :<Suspense fallback={<LottieHandler status='page'/>}> <Layout/> </Suspense>,
      children:[
        { index : true , element : 
          <Suspense fallback={<LottieHandler status='build' />}>
            < Home />
          </Suspense>
        },

        { path : 'about' , element :
          <Suspense fallback={<LottieHandler status='build' />}>
            <About/>
          </Suspense>
        },

         { path : 'pages/product' , element :
          <Suspense fallback={<LottieHandler status='build' />}>
            <Products isShopPage={true}/>
          </Suspense>
        },

        { path : 'blog' , element : 
          <Suspense fallback={<LottieHandler status='build' />}>
            <Blog/>
          </Suspense>
        },

        { path : 'contact' , element: 
          <Suspense fallback={<LottieHandler status='build' />}>
            <Contact/>
          </Suspense>
        },

          { path : 'register' , element: 
          <Suspense fallback={<LottieHandler status='build' />}>
            <Register/>
          </Suspense>
        },

          { path : 'login' , element: 
          <Suspense fallback={<LottieHandler status='build' />}>
            <Login/>
          </Suspense>
        } ,
         { path : 'profile' , element: 
          <Suspense fallback={<LottieHandler status='build' />}>
            <Profile />
          </Suspense>
        } ,
          { path : 'wishlist' , element: 
          <Suspense fallback={<LottieHandler status='build' />}>
            <WishList />
          </Suspense>
        },

             { path : 'cart' , element: 
          <Suspense fallback={<LottieHandler status='build' />}>
            <Cart />
          </Suspense>
        } ,

            
             { path : 'productDetails/:id' , element: 
          <Suspense fallback={<LottieHandler status='build' />}>
            <ProductDetails />
          </Suspense>
        } ,

            { path : 'orders' , element: 
          <Suspense fallback={<LottieHandler status='build' />}>
            <Orders />
          </Suspense>
        } 


      ] ,
      errorElement :<LottieHandler status='error'/>
    }
  ]  , {
    basename: '/Vape_Store'
  })
  return <div>
    <RouterProvider router={router} />
    <Toaster />
  </div>
}
