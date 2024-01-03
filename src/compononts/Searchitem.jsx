import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';


const Searchitem = () => {
// console.log(useParams)
const {term}=useParams();
const [filterdata, setFilterdata] = useState([])

useEffect(() => {
  const filterdData = ()=>{
    const data=items.filter((product)=>product.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
   setFilterdata(data)
  }

  filterdData(); 

}, [term])



  return (
    <Product items={filterdata}/>
  )
}

export default Searchitem