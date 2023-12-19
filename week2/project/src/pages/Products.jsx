import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Products() {
  const [ product, setProduct] = useState({})
  const {id} = useParams();
  useEffect(()=>{
    const fetchFunc = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await response.json();
      setProduct(data)
    }
    fetchFunc();
  },[])
  return (
    <div>
      <p className=' text-2xl'>{product.title}</p>
      <p>{product.description}</p>
      <img src={product.image} alt="" />
    </div>
  )
}
