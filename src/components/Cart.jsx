import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/action/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="bg-white shadow-lg rounded-lg my-5 p-4" key={cartItem.id}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Close button */}
          <button onClick={() => handleClose(cartItem)}
                  className="ml-auto text-gray-600 hover:text-gray-900 transition"
          >
            &times;
          </button>
          {/* Product image */}
          <div className="flex-shrink-0">
            <img src={cartItem.img} alt={cartItem.title}
                 className="w-44 h-auto object-contain rounded-lg"
            />
          </div>
          {/* Product details */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{cartItem.title}</h3>
            <p className="text-[#FC4377] text-2xl font-bold">${cartItem.price}</p>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="bg-gray-100 p-10 rounded-lg shadow-md my-10">
        <h3 className="text-center text-2xl text-gray-700 font-semibold">Cart is Empty</h3>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="flex justify-center">
        <NavLink to="/checkout" className="bg-[#FFC71C] text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-[#FB2F71] transition duration-300">Proceed To Checkout</NavLink>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;