import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCards from './ItemCards';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {

  const [activeCart,setActiveCart]=useState(false);

  const cartItems = useSelector((state)=>state.cart.cart)
  const totalQty=cartItems.reduce((totalQty,items)=>totalQty+items.qty,0);
  const totalPrice=cartItems.reduce((totalPrice,items)=>totalPrice+items.qty*items.price,0)

  return (
    <>
    <div className={`fixed right-0 top-0 lg:w-[20vw] w-full h-full p-5 bg-white mb-3 ${activeCart?"translate-x-0":"translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between my-3 '>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <IoMdClose onClick={()=>setActiveCart(!activeCart)} className='border-2 border-gray-600 text-gray-600  font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'/>
        </div>
    
    {cartItems.length > 0 ? (
    cartItems.map((food)=>{
        return   <ItemCards key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}/>
      })): (
        <h2 className="text-center text-xl font-bold text-gray-800">
          Your cart is empty
        </h2>
      )}
    
       <div className='absolute bottom-0'>
        <h3 className='font-semibold text-gray-800'>Items:{totalQty}</h3>
        <h3 className='font-semibold text-gray-800'>Total Amounts:{totalPrice}</h3>
        <hr className='w-[90vw] lg:w-[18vw] my-2' />
        <button  className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5'>Checkout</button>
      </div>
    
      </div>
      <FaShoppingCart onClick={()=>setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-4  ${totalQty > 0  && "animate-bounce delay-500 transition-all"}`}/>
      
    </>
  )
}

export default Cart
