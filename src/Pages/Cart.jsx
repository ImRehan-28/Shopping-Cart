import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem';
import { Link } from 'react-router-dom';
const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    settotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className='flex pt-8'>
      {

        cart.length > 0 ?
          (

            <div className="flex flex-col lg:flex-row mx-auto gap-6 pr-4 w-[90%]">

              <div className='flex-1'>
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className="mt-6 lg:mt-8 flex flex-col justify-between px-5 py-4 border rounded-lg shadow h-auto lg:h-[72vh] w-full lg:w-[300px] bg-white">
                <div >
                  <div className='text-[18px] font-semibold leading-1 text-green-800'>Your Cart</div>
                  <div className='text-[30px] font-bold text-green-800'>SUMMARY</div>
                  <p className='font-bold'>Total Items :<span> {cart.length}</span> </p>
                </div>

                <div>
                  <p className='text-[15px] font-semibold mb-[16px]'>Total Amount : <span className='font-bold'>${totalAmount}</span></p>
                  <button className='bg-green-800 w-[225px] py-[8px] rounded-md flex justify-center items-center font-bold text-white text-[14px]'>Checkout Now</button>
                </div>
              </div>

            </div>) :
          (
            <div className='flex flex-col justify-center items-center h-[60vh] w-screen gap-2'>
              <h1 className='text-3xl font-bold'>Cart Empty</h1>

              <Link to={"/"}><button className=' px-6 py-1 font-semibold hover:bg-blue-200 rounded-md hover:bg-blue-950 hover:text-amber-50 transition-all duration-200'>Shop Now</button> </Link>
            </div >
          )
      }
    </div>
  )
}

export default Cart