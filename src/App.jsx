
import { Suspense, lazy, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LottieHandler from './common/daynamic/LottieHandler'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './zustand/authSlice'

// lazy
const Layout = lazy(() => import('./Layout/Layout'))
const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Blog = lazy(() => import('./pages/Blog/Blog'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Register = lazy(() => import('./pages/Auth/Register'))
const Login = lazy(() => import('./pages/Auth/Login'))
const Products = lazy(() => import('./components/Products/Products'))
const Profile = lazy(() => import('./pages/Profile/Profile'))
const WishList = lazy(() => import('./pages/WishList/WishList'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'))
const Orders = lazy(() => import('./pages/Ordres/Ordres'))

export default function App() {

  const initiatAuthOnApp = useAuth(state => state.initiatAuthOnApp)

  useEffect(() => {
    const recordAuth = initiatAuthOnApp()
    return () => recordAuth()
  }, [])

  return (
    <HashRouter>
      <Suspense fallback={<LottieHandler status="page" />}>
        <Routes>

          <Route path="/" element={<Layout />}>

            <Route
              index
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <Home />
                </Suspense>
              }
            />

            <Route
              path="about"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <About />
                </Suspense>
              }
            />

            <Route
              path="pages/product"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <Products isShopPage={true} />
                </Suspense>
              }
            />

            <Route
              path="blog"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <Blog />
                </Suspense>
              }
            />

            <Route
              path="contact"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <Contact />
                </Suspense>
              }
            />

            <Route
              path="register"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <Register />
                </Suspense>
              }
            />

            <Route
              path="login"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <Login />
                </Suspense>
              }
            />

            <Route
              path="profile"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <Profile />
                </Suspense>
              }
            />

            <Route
              path="wishlist"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <WishList />
                </Suspense>
              }
            />

            <Route
              path="cart"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <Cart />
                </Suspense>
              }
            />

            <Route
              path="productDetails/:id"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <ProductDetails />
                </Suspense>
              }
            />

            <Route
              path="orders"
              element={
                <Suspense fallback={<LottieHandler status="build" />}>
                  <Orders />
                </Suspense>
              }
            />

          </Route>

          {/* أي Route غير موجود */}
          <Route
            path="*"
            element={<LottieHandler status="error" />}
          />

        </Routes>
      </Suspense>

      <Toaster />
    </HashRouter>
  )
}

