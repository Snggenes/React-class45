import React from 'react'

export default function Navbar({products, setProducts}) {

  function setAllProducts(){
    setProducts('allProducts')
  }

  return (
    <h2 className=' cursor-pointer text-4xl mb-6' onClick={setAllProducts}>Products</h2>
  )
}
