import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../CartContext/CartContext'
import Ecom from './Ecom'

const Navbar = () => {
  const{Cart} = useContext(CartContext)

  return (<>
  
<Ecom TCart={Cart}/>
</>

  )
}

export default Navbar
