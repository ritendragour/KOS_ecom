import React, { useContext, useState } from 'react'
import ProductContext from '../context/ProductContext'
import CartContext from '../CartContext/CartContext'

const ProductItem = ({ Product }) => {
  const { image, title, price, id } = Product
  const { dispatch } = useContext(CartContext)

  // Part of Second Condition
  // const [show, setShow] = useState(true)

  const addCart = async (Product) => {
    dispatch({
      type: "ADD_CART",
      payload: Product
    })

    // First Condition 
    document.getElementById('id'+id).style.display = "none"

      // second Condition
    // if(show == true){
    //   setShow(false)
    // }else{
    //   setShow(true)
    // }
      }

    return (
      <div className="card productItem col-xl-4 p-3 bg-dark ">
        {/* mt-5 */}
        <div className="card card-body">

          <img src={image} className="card-img-top-product" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className='df'>
              <h3 className="card-text"><b>${price}</b> </h3>
              <button className="btn btn-primary" id={"id" + id} onClick={() => addCart(Product)}>
                {/* {
                  show && (<h1>Add Cart</h1>)
                } */}
                Add Cart
              </button>
            </span>

          </div>
        </div>

      </div>
    )
  }

  export default ProductItem
