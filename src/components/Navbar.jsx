import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiLoginBoxFill, RiUserAddFill, RiShoppingCart2Fill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const State = useSelector((state) => state.handleCart);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-200 bg-opacity-75 text-black py-4 px-2 z-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center text-2xl font-bold hover:underline hover:text-[#FFC71C]">
          <BiLogoTailwindCss className="text-[#FB2F71] hover:text-[#FFC71C]" /> <span>eComms</span>
        </NavLink>

        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" aria-expanded={isOpen}>
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>

        <div className={`flex-col lg:flex lg:flex-row lg:space-x-10 text-lg font-semibold ${isOpen ? "flex" : "hidden"}`}>
          <NavLink to="/" className="hover:text-[#FB2F71] hover:font-medium">Home</NavLink>
          <NavLink to="/products" className="hover:text-[#FB2F71] hover:font-medium">Products</NavLink>
          <NavLink to="/about-us" className="hover:text-[#FB2F71] hover:font-medium">About Us</NavLink>
          <NavLink to="/contacts" className="hover:text-[#FB2F71] hover:font-medium">Contact</NavLink>
        </div>

        <div className="flex items-center text-lg space-x-6">
          <NavLink to="/login" className="flex items-center space-x-2 hover:underline hover:text-[#FB2F71] hover:font-bold">
            <RiLoginBoxFill /> <span>Login</span>
          </NavLink>
          <NavLink to="/signup" className="flex items-center space-x-2 hover:underline hover:text-[#FB2F71] hover:font-bold">
            <RiUserAddFill /> <span>Sign Up</span>
          </NavLink>
          <NavLink to="/cart" className="flex items-center space-x-2 hover:underline hover:text-[#FB2F71] hover:font-bold">
            <RiShoppingCart2Fill /> <span>Cart ({State.length})</span>
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col lg:hidden mt-2">
          <NavLink to="/" className="hover:text-[#F55347] hover:font-medium">Home</NavLink>
          <NavLink to="/products" className="hover:text-[#F55347] hover:font-medium">Products</NavLink>
          <NavLink to="/about-us" className="hover:text-[#F55347] hover:font-medium">About Us</NavLink>
          <NavLink to="/contacts" className="hover:text-[#F55347] hover:font-medium">Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;