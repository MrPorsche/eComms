import React from "react";
import Product from "./Products";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen pt-20 mb-20 px-5 md:px-10 bg-[url('/src/assets/bg.jpg')] bg-cover bg-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mt-16 text-[#FFC71C] text-shadow-lg">Shop Today <span className="text-[#FC4377]">OR</span> Now!</h1>
        <h1 className="text-6xl md:text-8xl font-extrabold text-center mt-16 text-[#FFC71C] text-shadow-lg">Shop Tomorrow <span className="text-[#FC4377]">OR</span> Later!!</h1>
        <h1 className="text-7xl md:text-9xl font-extrabold text-right mt-16 text-[#FC4377] text-shadow-lg">Shop Everyday <span className="text-[#FFC71C]">AND</span> Anytime!!!</h1>
      </div>
      <div className="w-full h-auto">
        <Product />
      </div>
    </>
  );
};

export default Home;