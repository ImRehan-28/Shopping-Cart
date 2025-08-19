/* eslint-disable no-unused-vars */
import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/Cartslice";

const CartItem = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from cart");
  };

  return (
    <div className="flex flex-col sm:flex-row border-b w-full py-4 px-3 gap-4">

      {/* Image */}
      <div className="flex-shrink-0 flex justify-center sm:justify-start">
        <img
          src={item.image}
          alt={item.title}
          className="h-[150px] sm:h-[200px] w-auto max-w-[250px] object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-y-3 sm:ml-6 w-full">
        {/* Title */}
        <h1 className="font-bold text-base sm:text-lg">{item.title}</h1>

        {/* Description */}
        <p className="text-sm sm:text-[14px] text-gray-600">
          {item.description.substring(0, 100)}...
        </p>

        {/* Price & Delete */}
        <div className="flex items-center justify-between w-full text-green-700 font-semibold mt-2">
          <p className="font-bold text-sm sm:text-base">${item.price}</p>

          {cart.some((p) => p.id === item.id) && (
            <button
              onClick={removeFromCart}
              className="bg-red-300 text-red-800 hover:bg-red-400 p-2 rounded-full flex items-center justify-center"
            >
              <MdDelete />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
