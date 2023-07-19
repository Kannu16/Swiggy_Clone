import React, { useContext} from 'react';
import Items from './Items';
import { INR } from '../Utils/CurrencyConverter';
import { CartContext } from './Cart';

const ContextCart = () => {
  const { cartItems, totalAmount, totalItem} = useContext(CartContext);
  console.log(cartItems, totalAmount)

  return (
    <>
      <div className='container d-flex justify-content-between' style={{marginTop:"8%"}}>
       <div className='cart-left ' style={{width:"50%"}}>
           <div className='account p-4'>      
              <h3>Account</h3>
             <p>To place your order now, log in to your existing account or sign up.</p>
             <button type="button" className="btn btn-outline-success login-button me-4"> <span className=' px-4' style={{fontSize:"15px"}}>Have an account</span> <br /> <span style={{fontSize:"17px", fontWeight:"600" }}>Login</span> </button>
             <button type="button" className="sign-up-button btn btn-success" > <span className=' px-4' style={{fontSize:"15px"}}>New to Swiggy?</span> <br /> <span style={{fontSize:"17px", fontWeight:"600" }}>Sign up</span> </button>
           </div>
           <div  className='address my-3 p-4'>  <h3 style={{fontWeight:"600", color:"#7e808c", fontSize:"16px"}}> Delivery Address </h3></div>
           <div  className='payment p-4'>  <h3 style={{fontWeight:"600", color:"#7e808c", fontSize:"16px"}}> Payment </h3></div>
       </div>
       <div className='cart-right p-4' style={{width:"40%"}}>
           <div className='cart-restro-information mb-4'>
              <div className='cart-restro-information-right '>
                 You have total <span className='fw-bold'>{totalItem}</span> items in your cart
              </div>
           </div>
          <div className='cart-menu'>
       {
        cartItems.map((items)=>{
          return(
             <Items 
             key={items.id} 
             items={items}
             />
        
          )
        })
       }
           <div className='d-flex justify-content-between menu-total-price'>
             <h1>SumTotal</h1>
             <h2>{INR.format(totalAmount.toString().slice(0,-2))}</h2>
           </div>
          </div>
       </div>
     </div>
    </>
  )
}

export default ContextCart