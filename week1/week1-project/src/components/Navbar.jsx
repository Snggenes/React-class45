import React from 'react'

export default function Navbar({category, setCategory}) {

  function setAllProducts(){
    setCategory('all')
  }

  return (
    <h2 className=' cursor-pointer text-4xl mb-6' onClick={setAllProducts}>Products</h2>
  )
}
