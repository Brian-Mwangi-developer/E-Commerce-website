import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';

function Totalprice() {
  const cartItems = useSelector((state) => state.handleCart);

  // Calculate the subtotal for all cart items
  const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  const handleCheckout = async () => {
    // Prepare line_items array for Stripe API
    const lineItems = cartItems.map((item) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: [item.image],// Stripe requires an array of images
            description: item.description,
          },
          unit_amount: item.price * 100, // Stripe requires the amount in cents
        },
        quantity: item.qty,
      };
    });
    try { const {data}= await axios.post('http://localhost:8080/create-checkout-session', { lineItems });
        if (data.url) {
          console.log(data)
          window.location.href =data.url;
        }
      }catch(err){ 
        console.log(err.message);
  }
  };

  // Calculate the total
  const shippingCost = 0; // You can add shipping cost calculation logic here
  const total = subtotal + shippingCost;

  return (
    <>
      <div>
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">Ksh {subtotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">{shippingCost}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">Ksh {total}</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button
          onClick={handleCheckout}
          className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
        >
          Check out
        </button>
      </div>
    </>
  );
}

export default Totalprice;