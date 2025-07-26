/* eslint-disable no-unused-vars */
import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/Cartslice'
const CartItem = ({ item, itemIndex }) => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from cart")
  }

  return (

    <div className='flex border-b w-[500px] py-4 px-3 '>

      <div className=''>
        <img src={item.image} className='h-[200px] w-[350px] object-contain' />
      </div>

      <div className='ml-8 flex flex-col gap-y-4'>

        <h1 className='font-bold text-[19px]'>{item.title}</h1>
        <h1 className='text-[14px]'>{item.description.substring(0, 108)}...</h1>

        <div className='flex items-center justify-between w-[90%] text-green-700 font-semibold '>
          <p className='font-bold'>${item.price}</p>

          {
            cart.some((p) => p.id === item.id) && (
              <div onClick={removeFromCart} className='bg-red-300 text-red-800 hover:bg-red-400 p-1 rounded-2xl'>
                <MdDelete />
              </div>)
          }

        </div>

      </div>

    </div>
  )
}

export default CartItem
