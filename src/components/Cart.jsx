import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/action/index"; // Adjust according to your actions
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(delItem(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch({ type: "ADDPRODUCT", payload: item });
  };

  const handleDecreaseQuantity = (item) => {
    if (item.qty === 1) {
      handleRemove(item); // Remove the item if qty is 1
    } else {
      dispatch({ type: "DELPRODUCT", payload: item });
    }
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-gray-100 rounded-lg shadow" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleRemove(cartItem)}
            className="float-right text-gray-600 hover:text-red-600 transition duration-200"
            aria-label="Close"
          >
            &times;
          </button>
          <div className="flex justify-center md:justify-start">
            <div className="flex-shrink-0 md:w-1/3">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                className="h-48 w-36 object-cover rounded-lg"
              />
            </div>
            <div className="md:ml-4 md:w-2/3 text-center md:text-left">
              <h3 className="text-xl font-semibold">{cartItem.title}</h3>
              <p className="text-xl text-[#FC4377] font-bold">${cartItem.price.toFixed(2)}</p>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <button onClick={() => handleDecreaseQuantity(cartItem)} className="text-lg px-2 py-1 border border-gray-400 rounded">-</button>
                <span className="mx-2 text-lg">{cartItem.qty}</span>
                <button onClick={() => handleIncreaseQuantity(cartItem)} className="text-lg px-2 py-1 border border-gray-400 rounded">+</button>
              </div>
              <p className="text-lg mt-2 font-bold">
                Total: ${(cartItem.price * cartItem.qty).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-gray-100 rounded-lg shadow py-5">
        <div className="container py-4 text-center">
          <h3 className="text-2xl">Your Cart is Empty</h3>
        </div>
      </div>
    );
  };

  const totalAmount = () => {
    const total = state.reduce((acc, item) => acc + item.price * item.qty, 0);
    return (
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-xl font-semibold">Total Amount:</h3>
        <p className="text-xl font-bold">${total.toFixed(2)}</p>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="flex justify-center">
        <NavLink to="/products" className="bg-[#FFC71C] text-white py-2 px-8 rounded-lg font-bold hover:bg-[#FB2F71] transition duration-200">
                Continue Shopping
              </NavLink>
          <NavLink
            to="/checkout"
            className="btn bg-[#FB2F71] text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-[#FB2F71] transition duration-300"
          >
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && totalAmount()}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
