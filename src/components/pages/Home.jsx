import React from "react";
import Product from "./Products";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen text-[#FAC18C] text-shadow-lg flex flex-col justify-center gap-32 px-5 md:px-10 bg-[url('/src/assets/bg.jpg')] bg-cover bg-center">
        {/* Updated Hero Text */}
        <h1 className="text-2xl md:text-4xl font-extrabold">
          Get It Today or Save It for Tomorrow!
        </h1>
        <h1 className="text-2xl md:text-4xl font-extrabold">
          The Hottest Deals, Always Within Reach.
        </h1>
        <h1 className="text-2xl md:text-4xl font-extrabold">
          Shop Now, Shop Later – Just Don’t Miss Out!
        </h1>
      </div>

      {/* Products Section */}
      <div className="w-full h-auto">
        <Product />
      </div>
    </>
  );
};

export default Home;