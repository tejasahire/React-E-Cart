import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'


const Navbar = ({setData}) => {
const navigate=useNavigate()

  const [searchTerm, setsearchTerm] = useState('')

const filterByCategory=(category)=>{
  const element = items.filter((product)=>product.category===category) 
  setData(element)
}
const filterByPrice=(price)=>{
  const element=items.filter((product)=>product.price >= price)
  setData(element)
}

const handleSubmit=(e)=>{
  e.preventDefault();
  navigate(`/search/${searchTerm}`)
  setsearchTerm('')
}



  return (
    <>
    <header className='sticky-top'>
      <div className="nav-bar">
        <Link to={'/'} className="brand">E-cart</Link>

        <form
        onSubmit={handleSubmit}
         className="search-bar">
            <input
            value={searchTerm}
            onChange={(e)=>setsearchTerm(e.target.value)}
             type="text"
              placeholder='Search Products' />
        </form>


        <Link to={'/cart'} className="cart">Cart</Link>
        </div>  
        <div className="nav-bar-wrapper">
            <div className="item">Filter by {"->"}</div>
            <div
            onClick={()=>setData(items)} 
            
             className="item">No Filter</div>
            <div
            onClick={()=>filterByCategory('mobiles')} 
            className="item">Mobiles</div>
            <div
            onClick={()=>filterByCategory('laptops')} 
             
            className="item">Laptops</div>
            <div
            onClick={()=>filterByCategory('tablets')} 
             
            className="item">Tablets</div>
            <div
            onClick={()=>filterByPrice(29999)} 
             className="item">{">="}29999</div>
            <div
            onClick={()=>filterByPrice(49999)} 
             className="item">{">="}49999</div>
            <div
            onClick={()=>filterByPrice(69999)} 
             className="item">{">="}69999</div>
            <div
            onClick={()=>filterByPrice(89999)} 
             className="item">{">="}89999</div>
            
        </div>
    </header>
    </>
  )
}

export default Navbar