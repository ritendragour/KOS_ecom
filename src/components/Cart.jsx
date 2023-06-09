import React, { useContext, useEffect } from 'react'
import CartItem from './CartItem'
import CartContext from '../CartContext/CartContext'
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FaShoppingBag } from "react-icons/fa";

const Cart = () => {
  const { Cart } = useContext(CartContext)

  // const totalPrice = Cart.reduce((p, c) => {
  //   return p + c.price
  // }, 0)

  if (Cart.length === 0) {
    return (
      <div className='text-center mt-5 bg-light'>
        <h1 >No Product</h1>
        <Button color='inherit' variant='contained'>
          <Link to={"/"}>Shop Now</Link>
        </Button>
      </div>
    )
  }
  return (
    <>
      <div className="float-end w-100 bg-dark">
        {/* <Button color='inherit' variant='contained' className='float-end my-3 mx-5' ><Link to={"/buy"} className='text-decoration-none text-dark'>{<FcMoneyTransfer />} Buy TO PROCEED</Link></Button> */}
        <Button color='inherit' variant='contained' className='float-end my-3 mx-5' ><Link to={"/"} className='text-decoration-none text-dark'>{<FaShoppingBag />} Continue to shopping</Link></Button>
      </div>

      <div className="">
        <div className=''>
          {
            Cart.map(cart => <CartItem key={cart.id} cart={cart} />)
          }
        </div>
      </div>
    </>
  )
}

export default Cart
