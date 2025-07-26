import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <div className=' text-white bg-black'>
      <div className='flex mx-auto w-[70%] justify-between'>

        <NavLink to="/">
          <div>
            <img src="../logo.png" className='h-14 my-2' />
          </div>
        </NavLink>

        <div className="flex items-center gap-x-5 w-[5rem] justify-around">
          <NavLink to="/">
            <div>
              Home
            </div>
          </NavLink>

          <div className='relative h-[25px] w-[25px]'>
            <NavLink to="/cart">
              <div className='pt-2'>
                <FaShoppingCart />
              </div>
              <p className='absolute bottom-[9px] right-[0px] text-[12px] z-10 text-white bg-green-600 rounded-full px-1'>{cart.length}</p>
            </NavLink>
          </div>

        </div>


      </div>
    </div >
  )
}

export default Navbar
