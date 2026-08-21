import './Navbar.css'
// top-nav
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo from '../../assets/images/logo.svg'
import { useState, useEffect, useRef } from "react";
import { LuLoader } from "react-icons/lu";
import { useAuth } from '../../zustand/authSlice';
import { useWishlist } from '../../zustand/wishlistSlice';


// dropdown mui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



// navbar
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { IoIosArrowDown } from "react-icons/io";

// mobile-menu
import { IoIosCloseCircle } from "react-icons/io";
import Search from '../Search/Search';
import { useCart } from '../../zustand/cartSlice';


export default function Navbar() {




  //   mobile-menu
  const [mobileMenu, setMobileMenu] = useState(false)


  //   scroll Nav
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // dropdown
  const dropDown = useRef()

  // dropdown-mobile
  const mobile = useRef()


  // zustand
  const currentUser = useAuth(s => s.currentUser)
  const isPendingCurrentUser = useAuth(s => s.isPendingCurrentUser)
  const signOut = useAuth(s => s.signOut)
  const getWishlistData = useWishlist(s => s.getWishlistData)
  const clearWishlist = useWishlist(s => s.clearWishlist)
  const wishlistData = useWishlist(s => s.wishlistData)
  const cartData = useCart(s => s.cartData)


  const totalItems = cartData.reduce((p, c) => p + c.quantity, 0)

  // start mui dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //   end mui dropdown

  const navigate = useNavigate()
  const handleLogOut = async () => {
    handleClose()
    await signOut()
    clearWishlist()
    navigate('/login')
  }

  useEffect(() => {
    if (!currentUser) {
      return
    }
    getWishlistData()
  }, [currentUser])


  return (
    <>
      <div className={`top__nav pt-5 px-4 sm:px-8 md:px-12 absolute top-0 w-full z-99 ${isSticky ? "opacity-0 invisible" : "opacity-100 visible"}`}>
        <div className="container">
          <div className="flex justify-between items-center">
            {/* logo */}
            <img className=' hidden md:flex h-10' src={logo} alt="logo__image" />

            {/* search */}
            <Search />

            <div className="account__wrap flex items-center gap-7">
              {/* wishlist */}
              <Link to={'wishlist'} className="account flex items-center px-5 gap-2 lg:w-40 bg-transparent lg:bg-white text-black rounded-full">
                <div className="rounded-full lg:rounded-l-full text-lg lg:rounded-r-none w-12 h-12 flex items-center justify-center lg:text-(--main-color) bg-(--main-color) lg:bg-transparent text-white text-center"><FaHeart />
                  <sub className=' lg:hidden block text-black font-bold'> ({wishlistData.length}) </sub>
                </div>
                <span className=' hidden lg:flex' style={{ fontWeight: '500' }}> WishList </span>

                <span style={{ backgroundColor: '#191919', borderRadius: '0 100px 100px 0', fontWeight: '600' }} className=" hidden lg:flex py-3.5 px-5 text-white">{wishlistData.length}</span>

              </Link>


              {/* cart */}
              <Link to={'cart'} className="cart flex items-center gap-2.5 lg:w-43.5 bg-transparent lg:bg-white rounded-full">
                <span className=" w-12 h-12 bg-(--main-color) lg:bg-transparent text-center leading-[50] lg:w-18 lg:h-12 text-xl lg:text-lg rounded-full lg:rounded-none text-white lg:text-(--main-color) flex items-center justify-center"> <FaCartShopping />
                  <sub className=' lg:hidden block text-black font-bold'> ({totalItems}) </sub>
                </span>
                <span className=' hidden lg:flex text-black' style={{ fontWeight: '500' }}> Cart </span>


                <span style={{ backgroundColor: '#191919', borderRadius: '0 100px 100px 0', fontWeight: '600' }} className=" hidden lg:flex py-3.5 px-5 text-white">{totalItems}</span>

              </Link>


            </div>
          </div>
        </div>
      </div>

      <div className={`navbar bg-(--secondary-color)  w-full left-0 z-10 transition-all duration-300 ${isSticky ? "fixed top-0  navbar-blur " : " absolute top-28"}`}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between px-12 py-2.5">
            {/* icon mobileMenu */}
            <div
              onClick={() => setMobileMenu(true)}
              className="nav-bar lg:hidden block  text-white text-4xl cursor-pointer "><BiMenuAltLeft /> </div>

            {/* links */}
            <ul className=' hidden lg:flex items-center gap-4'>
              <li>
                <NavLink to={'/'} end className='text-sm text-white font-bold block py-3.5 px-2.5 hover:text-(--main-color) duration-300 rounded'> Home </NavLink>
              </li>

              <li>
                <NavLink to={'about'} className='text-sm text-white font-bold block py-3.5 px-2.5 hover:text-(--main-color) duration-300 rounded'> About Us </NavLink>
              </li>

              <li className=' relative'>
                <div
                  onClick={() => dropDown.current.classList.toggle('active')}
                  className='text-sm  font-bold flex items-center py-3.5 px-2.5 hover:text-(--main-color) duration-300 rounded cursor-pointer'> Pages <IoIosArrowDown /></div>

                <div ref={dropDown} className="dropDown absolute top-16 rounded shadow p-3 bg-white start-0 w-max flex flex-col">
                  <NavLink to={'pages/product'} className='py-1 text-black font-extrabold px-3 hover:text-(--main-color) duration-300 hover:translate-x-2 block border-b border-gray-300'>Product</NavLink>
                  <NavLink to={`productDetails/1`} className='py-1 text-black font-extrabold px-3 hover:text-(--main-color) duration-300 hover:translate-x-2 block border-b border-gray-300'>Product Detialis</NavLink>
                  <NavLink to={'wishlist'} className='py-1 text-black font-extrabold px-3 hover:text-(--main-color) duration-300 hover:translate-x-2 block border-b border-gray-300'>Wishlist</NavLink>
                  <NavLink to={'cart'} className='py-1 text-black font-extrabold px-3 hover:text-(--main-color) duration-300 hover:translate-x-2 block'>Cart</NavLink>
                  
                </div>

              </li>

              <li>
                <NavLink to={'blog'} className='text-sm  font-bold block py-3.5 px-2.5 hover:text-(--main-color) duration-300 rounded'> Blog </NavLink>
              </li>

              <li>
                <NavLink to={'contact'} className='text-sm  font-bold block py-3.5 px-2.5 hover:text-(--main-color) duration-300 rounded'> Contact Us </NavLink>
              </li>
            </ul>



            {/*  */}

            {
              isPendingCurrentUser ?
                <div className='flex gap-2 items-center'>
                  <LuLoader className=' text-lg animate-spin' />
                  loading...
                </div>
                : !isPendingCurrentUser && !currentUser ?
                  <div className='auth-btns hidden sm:flex items-center gap-5'>
                    <NavLink
                      className='px-5 py-2 rounded-full border border-(--main-color) font-bold shadow shadow-amber-300'
                      to={'register'}> Register </NavLink>

                    <NavLink
                      className='px-5 py-2 rounded-full border border-(--main-color) font-bold shadow shadow-amber-300'
                      to={'login'}> Login </NavLink>

                  </div>
                  :
                  <>
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <div className='text-(--main-color) italic'> <span className='text-lg font-semibold italic text-white'>welcome</span> : {currentUser.userName} </div>
                    </Button>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      slotProps={{
                        list: {
                          'aria-labelledby': 'basic-button',
                        },
                      }}
                    >
                      <MenuItem sx={{ width: '230px' }}
                        onClick={() => {
                          handleClose()
                          navigate('/profile')
                        }}
                      >
                        Profile </MenuItem>

                      <MenuItem sx={{ width: '230px' }}
                        onClick={() => {
                          handleClose()
                          navigate('/orders')
                        }}
                      >
                        Orders
                         </MenuItem>

                      <MenuItem sx={{ width: '230px' }} onClick={handleLogOut}>Logout</MenuItem>
                    </Menu>
                  </>

            }


          </div>
        </div>
      </div>


      {/* mobileMenu */}

      {/* overlay  */}
      {
        mobileMenu && (
          <div
            onClick={() => setMobileMenu(false)}
            className="animate-fadeIn fixed inset-0 z-999 flex items-center justify-center bg-black/90">

            <div
              onClick={(e) => e.stopPropagation()}
              className="animate-scaleIn w-[97%] max-w-lg bg-[#191919] rounded-2xl p-8 relative z-999 bg-linear-to-bl from-[#0e0d0d] via-[#322f2f] to-[#4a3103]  shadow-[0_0_0_1px_rgba(255,140,0,15),0_30px_80px_rgba(0,0,0,0.3)] ">

              {/* icon-close */}
              <button
                onClick={() => setMobileMenu(false)}
                className="absolute top-4 right-4 text-3xl cursor-pointer hover:text-(--main-color) hover:rotate-180 duration-300">
                <IoIosCloseCircle />
              </button>
              <ul className="flex flex-col gap-6 text-center mt-6">
                <li>
                  <NavLink
                    onClick={() => setMobileMenu(false)}
                    to={'/'} end className=" text-lg font-bold hover:text-(--main-color) duration-300"> Home </NavLink>
                </li>

                <li>
                  <NavLink
                    onClick={() => setMobileMenu(false)}
                    to={'about'} className='text-lg  font-bold hover:text-(--main-color) duration-300'> About Us </NavLink>
                </li>

                <li className=' relative'>
                  <div
                    onClick={() => mobile.current.classList.toggle('active')}
                    className='text-lg font-bold flex items-center justify-center hover:text-(--main-color) duration-300 cursor-pointer'> Pages <IoIosArrowDown /></div>

                  <div ref={mobile} className="dropdown-mobile">
                    <NavLink to={'pages/product'} className='py-2.5  font-extrabold px-3 hover:text-(--main-color) duration-300 hover:translate-x-2 block text-black border-b border-[#adadad]'>Product</NavLink>
                    <NavLink to={''} className='py-2.5  font-extrabold px-3 hover:text-(--main-color) duration-300 hover:translate-x-2 block text-black border-b border-[#adadad]'>Product Detialis</NavLink>
                    <NavLink to={''} className='py-2.5  font-extrabold px-3 hover:text-(--main-color) duration-300 hover:translate-x-2 block text-black border-b border-[#adadad]'>Wishlist</NavLink>
                    <NavLink to={''} className='py-2.5 text-black font-extrabold px-3 hover:text-(--main-color) duration-300 hover:translate-x-2 block'>Cart</NavLink>
                  </div>

                </li>

                <li>
                  <NavLink
                    onClick={() => setMobileMenu(false)}
                    to={'blog'} className='text-lg  font-bold  hover:text-(--main-color) duration-300 '> Blog </NavLink>
                </li>

                <li>
                  <NavLink
                    onClick={() => setMobileMenu(false)}
                    to={'contact'} className='text-lg font-bold  hover:text-(--main-color) duration-300'> Contact Us </NavLink>
                </li>
              </ul>
            

              {
                isPendingCurrentUser ?
                  <div className='flex gap-2 items-center'>
                    <LuLoader className=' text-lg animate-spin' />
                    loading...
                  </div>
                  : !isPendingCurrentUser && !currentUser ?
                    <div className='auth-btns hidden sm:flex items-center gap-5'>
                      <NavLink
                        className='px-5 py-2 rounded-full border border-(--main-color) font-bold shadow shadow-amber-300'
                        to={'register'}> Register </NavLink>

                      <NavLink
                        className='px-5 py-2 rounded-full border border-(--main-color) font-bold shadow shadow-amber-300'
                        to={'login'}> Login </NavLink>

                    </div>
                    :
                    <>
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        <div className='text-(--main-color) italic'> <span className='text-lg font-semibold italic text-white'>welcome</span> : {currentUser.userName} </div>
                      </Button>

                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                          list: {
                            'aria-labelledby': 'basic-button',
                          },
                        }}
                      >
                        <MenuItem sx={{ width: '230px' }}
                          onClick={() => {
                            handleClose()
                            navigate('/profile')
                          }}
                        >
                          Profile </MenuItem>

                        <MenuItem sx={{ width: '230px' }} onClick={handleLogOut}>Logout</MenuItem>
                      </Menu>
                    </>

              }

            </div>
          </div>

        )
      }
    </>
  )
}
