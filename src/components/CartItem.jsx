import React, { createContext, useContext, useState } from 'react'
import CartContext from '../CartContext/CartContext'
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import Buy from './Buy';
import { BsShare } from "react-icons/bs";

const CartItem = ({ cart }) => {

  const { image, title, price, id } = cart

  const { Cart,dispatch } = useContext(CartContext)

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id
    })
  }

  const manyUseSum = () => {
    setQuantity(quantity + 1)
    setMultiPrice((quantity + 1) * price)

  }

  const manyUseSub = () => {
    setQuantity(quantity - 1)
    setMultiPrice((quantity - 1) * price)
  }

  const [quantity, setQuantity] = useState(1)

  const [multiPrice, setMultiPrice] = useState(price)

  return (
    <>
    <button className="btn btn-warning w-25 mt-3 mx-3 navProduct mb-2 float-end" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + id} aria-expanded="false" aria-controls="collapseExample">
                Hide / Show
              </button>
      <div className="collapse show" id={"collapseExample" + id}>
        <div className="card card-body dfr">
          <span className='cart-img'>
            <img src={image} className="card-img-top" alt="Product" />
          </span>
          <span className='dfc cart-titleW'>
            <div className="btn-manager">
              <button className='btn btn-danger float-end mt-3' onClick={() => removeCart(id)}>Remove</button>
            </div>
            <h5 className="card-title mt-3">{title}</h5>
            <span className='df'>
            <h5 className='text-info'>In stock</h5>
            <h5 className='text-primary btn border border-dark'>Share &nbsp; <BsShare/></h5>
            </span>
            <h4>Price : {price}</h4> &nbsp;&nbsp;
            <span className="card-body df">
              {/* quantity logic */}
              <div className='df float-end'>
                <h2 className='text-center'> QTY : &nbsp;</h2>
                <button className='btn border border-dark' id={quantity === 1 ? "noPrice" : "havePrice"}
                  onClick={() => manyUseSub()}><GrFormSubtract /></button>
                <button className='btn border border-dark ' id={quantity !== 1 ? "noPrice" : "havePrice"} disabled><GrFormSubtract /></button>
                <button className='btn'><h2>{quantity}</h2></button>
                <button className='btn border border-dark'
                  onClick={() => manyUseSum()}><AiOutlinePlus /></button>
              </div>
              {/* <div className="float-end">
                <button className='btn btn-danger' onClick={() => removeCart(id)}>Remove</button>
              </div> */}
              
            </span>
            <span className=''>
              <h2 className=''>Total Price : {multiPrice}</h2>
            </span>
          </span>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default CartItem
