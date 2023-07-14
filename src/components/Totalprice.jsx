import React from 'react'
import { useSelector } from 'react-redux'

function Totalprice() {
    const totalPrice =useSelector((state)=> state.handleCart)
    const shipCost = 35;
    // calculate the Sub total
    const subTotal = totalPrice.reduce((acc,item)=>{
        return acc + item.price;
    },0);

    //Calculate the total
    const total = subTotal+shipCost;
  return (
    <>
        <div>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">Ksh {subTotal}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">{shipCost}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">Ksh {total}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
    </>  
  )
}

export default Totalprice