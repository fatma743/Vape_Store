import { useCart } from "../zustand/cartSlice"
import { useWishlist } from "../zustand/wishlistSlice"
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'


export default function useProduct (){
       
  const navigate = useNavigate() 

  const likeorDislike = useWishlist ( state => state.likeorDislike)
  
  // cart
  const addToCart = useCart( s => s.addToCart)
  const removeFromCart = useCart( s => s.removeFromCart)

  
  //ui اما هنا اللوجك الخاص 
      const  handleWishlist = async (id , images , title , price , discount , description , stock)=>{
        
        const res = await likeorDislike(id , images , title , price , discount , description , stock)
        if(res === 'add'){
          Swal.fire({
          title: `success add Product <span class=' text-(--main-color)'>${title}</span>`,
          text: "Alert from wishlist",
           icon: "success",
           showConfirmButton : false ,
           timer : 2000
            });
        }else if(res === 'delete'){
           Swal.fire({
          title: 'success delete Your Product',
          text: "Alert from wishlist",
           icon: "success",
           showConfirmButton : false ,
           timer : 2000
            });
        }else{
           Swal.fire({
          title: `cant Add Product (You Have To Login Frist)`,
          text: "Alert from wishlist",
           icon: "error",
           showConfirmButton : true ,
           confirmButtonText : 'Login Now' ,
           showCancelButton : true , 
            }).then((result) => {
             if (result.isConfirmed) {
                  navigate('/login')    
                };
                })
        
           }

          }

      // cart
      const handleCart = (id , images , title , finalPrice , stock)=>{
          
      const res =  addToCart(id , images , title , finalPrice , stock)
      if(res === 'firstAdd'){
         Swal.fire({
          title: `Added <span class=' text-(--main-color)'>${title}</span> to Cart`,
          text: "Alert from Cart",
           icon: "success",
           showConfirmButton : false ,
           timer : 2000
            });
      }else if( res === 'increament'){
         Swal.fire({
          title: `Increased Quantity <span class=' text-(--main-color)'>${title}</span>`,
          text: "Alert from Cart",
           icon: "success",
           showConfirmButton : false ,
           timer : 2000
            });

      }else{
          Swal.fire({
          title: `Oops! <span class=' text-(--main-color)'>${title}</span>  is Out Stock`,
          text: "Alert from Cart",
           icon: "error",
           showConfirmButton : false ,
           timer : 2000
            });

      }
      }

    const handleRemoveFromCart = (id) =>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    removeFromCart(id);
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

      }
    return { handleWishlist , handleCart , handleRemoveFromCart}
}