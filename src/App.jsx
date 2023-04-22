import { CartProvider } from "./CartContext/CartContext"
import Buy from "./components/Buy"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import ReturnAndOrder from "./components/ReturnAndOrder"
import { ProductProvider } from "./context/ProductContext"
import { BrowserRouter as Router, Route , Routes } from "react-router-dom"
function App() {
  return (
    <ProductProvider>
      <CartProvider>
       <Router>
      <Navbar />
      <div className="bg-dark">
        <Routes>
          <Route path="/" element={<Product/>}  />
          <Route path="returnAndOrder" element={<ReturnAndOrder/>}  />
          <Route path="buy" element={<Buy/>}/>
          <Route path="/cart" element={<Cart/>}  />
        </Routes>
      </div>
   </Router>
   </CartProvider>
    </ProductProvider>
  )
}

export default App
