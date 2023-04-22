import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartContext from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Alert } from '@mui/material';

const Buy = () => {

  const {Cart} = useContext(CartContext)

   const totalPrice = Cart.reduce((p, c) => {
    return p + c.price
  }, 0)

 function paymentDone (){
  alert("Thank you")
  }
      
  return (
    <>
    
   <div className='p-5 text-center bg-light'>
   <h3 className='text-center text-dark'> <s>Amount ${totalPrice}</s> <span className='text-success'>20% OFF</span></h3>
   <h3 className='text-center text-dark'> <p>Amount ${ parseFloat((totalPrice / 100) *80).toFixed(2)}</p></h3>
   <img src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+parseFloat((totalPrice / 100) *80).toFixed(2)} alt="" width="300" className='mt-3'/>
   <p className='text-danger mt-2'><b> It's Important NOTE : -</b>  Please click on the button after payment</p>
   <Link className="btn border border-dark" onClick={()=>paymentDone()} to={"/"}><h3>Done</h3></Link>
   </div>
    </>
  )
}

export default Buy
