import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Totalprice from './Totalprice'

const Cart=()=> {
  return (
  <h1>
     <div className="h-screen bg-gray-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3 overflow-y-auto">
       <CartItem/>
      </div>
      {/* <!-- Sub total --> */}
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 sticky top-24">
        <Totalprice/>
      </div>
    </div>
  </div>
  </h1> 
  )
}

export default Cart