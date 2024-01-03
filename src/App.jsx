import React, { useState } from 'react'
import Navbar from './compononts/Navbar'
import Product from './compononts/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetail from './compononts/ProductDetail'
import Searchitem from './compononts/Searchitem'
import Cart from './compononts/Cart'
import { items } from './compononts/Data'

const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])

  return (
    <>
    <Router>
    <Navbar setData={setData}/>
    <Routes>
      <Route path='/' element={<Product cart={cart} setCart={setCart} items={data}/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/search/:term' element={<Searchitem/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    </Router>
    </>
  )
}

export default App