import React, { useContext, useEffect } from 'react'
import ProductItem from './ProductItem'
import { getProduct } from '../context/ProductAction'
import ProductContext from '../context/ProductContext'
import HeroSection from './HeroSection'
import { BsArrowRight } from "react-icons/bs";

const Product = () => {

    const {Product , dispatch} = useContext(ProductContext)

    const handleclick = async() =>{
        var data = await getProduct()
        dispatch({
            type : "GET_PRODUCT",
            payload : data
        })
    }

        useEffect(()=>{
            handleclick()
        },[])

    return (
        <>
        <HeroSection/>
        <div className="container">
        <div className='product row gx-5 '>  
        <h1 className='text-light mt-3 mb-2'><u>All Products <BsArrowRight/></u></h1>
        {
            Product.map(Product => <ProductItem key={Product.id} Product={Product}/>)
        }
        </div>
        </div>
        </>
    )
}

export default Product
