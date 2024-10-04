import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productsAPI = "https://fakestoreapi.com/products";
      const response = await fetch(productsAPI);
      const products = await response.json();
      setData(products);
      setFilter(products);
      setLoading(false);
    };
    
    getProducts();
  }, []);

  const Loading = () => <div>Loading...</div>;

  const ShowProducts = () => {  
    return (
      <>
        <div className="flex flex-col md:flex-row justify-center mt-5 mb-10 pb-10 space-y-2 md:space-y-0 md:space-x-2">
          <button className="border border-gray-800 text-gray-800 font-semibold hover:bg-[#FFD23D] hover:text-[#FFF] hover:border-none py-2 px-4 rounded"
                  onClick={() => setFilter(data)}
          >All</button>
          <button className="border border-gray-800 text-gray-800 font-semibold hover:bg-[#FFD23D] hover:text-[#FFF] hover:border-none py-2 px-4 rounded"
                  onClick={() => setFilter(data.filter(item => item.category === "men's clothing"))}
          >Men's Clothing</button>
          <button className="border border-gray-800 text-gray-800 font-semibold hover:bg-[#FFD23D] hover:text-[#FFF] hover:border-none py-2 px-4 rounded"
                  onClick={() => setFilter(data.filter(item => item.category === "women's clothing"))}
          >Women's Clothing</button>
          <button className="border border-gray-800 text-gray-800 font-semibold hover:bg-[#FFD23D] hover:text-[#FFF] hover:border-none py-2 px-4 rounded"
                  onClick={() => setFilter(data.filter(item => item.category === "jewelery"))}
          >Jewelry</button>
          <button className="border border-gray-800 text-gray-800 font-semibold hover:bg-[#FFD23D] hover:text-[#FFF] hover:border-none py-2 px-4 rounded"
                  onClick={() => setFilter(data.filter(item => item.category === "electronics"))}
          >Electronics</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-16">
          {filter.map((item) => (
            <div key={item.id} className="max-w-sm rounded-lg overflow-hidden mb-4 shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-[350px] p-4" />
              <div className="p-4 flex flex-col items-center">
                <h5 className="text-xl text-center font-bold mb-2">{item.title.substring(0, 16)}...</h5>
                <p className="text-[#FC4377] text-3xl mb-4 font-extrabold">${item.price}</p>
                <Link to={`/products/${item.id}`} className="inline-block border border-gray-800 font-extrabold py-2 px-4 rounded hover:bg-[#FC4377] hover:text-white hover:border-none transition duration-200">Buy Now</Link>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 my-5 py-5">
      <div className="flex flex-wrap mx-4">
        <div className="w-full px-4 mb-5 mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-10">Trending Products!</h1>
          <hr className="border-2 border-[#FFC71C] w-1/3 mx-auto" />
        </div>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;