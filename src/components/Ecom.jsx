import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartCheck,BsChatDots } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Button } from '@mui/material';
import { FaShoppingBag } from "react-icons/fa";


const Ecom = ({ TCart }) => {
  return (
    <header className="section-header">

      <nav className="navbar navbar-dark navbar-expand p-0 bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav d-none d-md-flex mr-auto">
            <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Cash On Delivery</a></li>
            <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Free Delivery</a></li>
            <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Cash Backs</a></li>
          </ul>
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <div className="d-flex flex-row">
                <img src="https://i.imgur.com/EYFtR83.jpg" className="rounded-circle" width="30" />
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center" data-abc="true"><span>Ritendra gour</span><i className='bx bxs-chevron-down'></i></a>
            </li>
          </ul>
        </div>
      </nav>      
      <section className="header-main border-bottom main-header text-light">
        <div className="container-fluid">
          <div className="row p-2 d-flex align-items-center">
            <div className="col-md-1 px-4 d-flex align-items-center justify-content-between " >
              {/* <img  className="d-none d-md-flex" src="data:image/png;base64,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" width="100" height="50"/> */}
              <Link className="text-light text-decoration-none" to="/"><h3>KOS</h3></Link>
              <Link className="  p-2 px-3 text-light border noNavProduct " to="/cart"><h5 className=' d-flex align-items-center'>{<BsCartCheck />}&nbsp; Cart</h5></Link>

            </div>

            <div className="col-md-1 px-4 navProduct" >
              <span className="fw-bold d-flex align-items-center"><h5>20%OFF</h5></span>
            </div>

            <div className="col-md-5 navProduct">
              <div className="d-flex form-inputs">
                <input className="form-control" type="text" placeholder="Search any product..." />
                <i className="bx bx-search"></i>
              </div>

            </div>
            <div className="col-md-3 navProduct">
              <div className="d-flex form-inputs">
                <Link className="navbar-brand  p-2 px-3 text-light rounded-5  d-flex align-items-center" to="/returnAndOrder">
                  <button className='btn text-light border d-flex align-items-center'><span>Return & Orders</span></button>
                  <i className="bx bx-search"></i></Link>

                  <Link className="navbar-brand text-light rounded-5  d-flex align-items-center" to="/returnAndOrder">
                  <button className='btn text-light  d-flex align-items-center'><h5><BiSupport/> Support</h5></button>
                  <i className="bx bx-search"></i></Link>

                  <Link className="navbar-brand text-light rounded-5  d-flex align-items-center" to="/returnAndOrder">
                  {/* <h5 className='d-flex align-items-center'><BsChatDots/>&nbsp;Chat</h5> */}
                  <i className="bx bx-search"></i></Link>
                  
              </div>
            </div>

            <div className="col-md-2 navProduct">
              <div className="d-flex  d-md-flex flex-row align-items-center">
                <span className="shop-bag"><i className='bx bxs-shopping-bag'></i></span>
                <div className="d-flex flex-column ms-2 mx-4">
                  <h5 className="qty "> {TCart.length?TCart.length : ""} Product</h5>
                </div>
                <Link className="navbar-brand  p-2 px-3 text-light rounded-5 text-decoration-none d-flex align-items-center" to="/cart"><h5 className=' d-flex align-items-center'>{<BsCartCheck />}&nbsp; Cart</h5></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-md-none d-md-flex" href="#">Categories</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Electronics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Fashion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Furnitures</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mobiles
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Smart Phones</a></li>
                  <li><a className="dropdown-item" href="#">Feature Phones</a></li>
                  <li><a className="dropdown-item" href="#">Mobile Covers</a></li>
                </ul>
              </li>
            </ul>

          </div>
        {/* <Button color='inherit' variant='contained' className='float-end my-3 mx-5' ><Link to={"/"} className='text-decoration-none text-dark'>{<FaShoppingBag />} Continue to shopping</Link></Button> */}
        </div>
      </nav>
    </header>

  )
}

export default Ecom
