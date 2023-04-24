import React, { createContext, useContext, useState } from 'react'
import CartContext from '../CartContext/CartContext'
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import Buy from './Buy';

const CartItem = ({ cart }) => {

  const { image, title, price, id } = cart

  const { dispatch } = useContext(CartContext)

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

  // const multiPriceFun = () => {
  //   return setMultiPrice(quantity * price)
  // }
  const [quantity, setQuantity] = useState(1)

  const [multiPrice, setMultiPrice] = useState(price)
  console.log(multiPrice)

  return (
    <>
      {/* <div className="card mt-5 productItem col-xl-4 p-3 "> */}

      <div className="collapse show" id={"collapseExample" + id}>
        <div className="card card-body dfr">
          <span>
            <img src={image} className="card-img-top" alt="Product" />
          </span>
          <span className='dfc'>
            <div className="btn-manager">
              <button className="btn btn-warning w-25 mt-3 navProduct mb-2 float-end" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + id} aria-expanded="false" aria-controls="collapseExample">
                H / S
              </button>
            </div>
            <h5 className="card-title mt-3">{title}</h5>
            <span className='df'>
              <h4>Price : {price}</h4>
              <h4>Total Price : {multiPrice}</h4>
            </span>
            <span className="card-body df">
              {/* quantity logic */}
              <div className='df'>
                <button className='btn border border-dark' id={quantity === 1 ? "noPrice" : "havePrice"}
                  onClick={() => manyUseSub()}><GrFormSubtract /></button>
                <button className='btn border border-dark ' id={quantity !== 1 ? "noPrice" : "havePrice"} disabled><GrFormSubtract /></button>
                <button className='btn'><h2>{quantity}</h2></button>
                <button className='btn border border-dark'
                  onClick={() => manyUseSum()}><AiOutlinePlus /></button>
              </div>
              <div className="float-end">
                <button className='btn btn-danger' onClick={() => removeCart(id)}>Remove</button>
              </div>
            </span>

          </span>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default CartItem
