import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
  const cart = useSelector((state) => state.HandleCart);

  return (
    <div>Cart{ cart}</div>
  )
}

export default Cart