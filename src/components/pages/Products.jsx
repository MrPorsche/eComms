import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsAPI = "https://fakestoreapi.com/products";
        const response = await fetch(productsAPI);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const products = await response.json();
        setData(products);
        setFilter(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    getProducts();
  }, []);

  const Categories = [
    {
      name: "All",
      filter: () => data
    },
    {
      name: "Men's Clothing",
      filter: () => data.filter(item => item.category === "men's clothing")
    },
    {
      name: "Women's Clothing",
      filter: () => data.filter(item => item.category === "women's clothing")
    },
    {
      name: "Jewelry",
      filter: () => data.filter(item => item.category === "jewelery")
    },
    {
      name: "Electronics",
      filter: () => data.filter(item => item.category === "electronics")
    }
  ];

  const Loading = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-16">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="max-w-sm rounded-lg overflow-hidden-mb-4 shadow-lg p-4">
            <Skeleton height={350} />
            <div className="mt-4">
              <Skeleton width={200} height={30} />
              <Skeleton width={100} height={40} className="mt-4" />
              <Skeleton width={120} height={30} className="mt-4" />
            </div>
          </div>
        ))
      }
    </div>
  );

  const ShowProducts = () => {  
    return (
      <>
        {/* Category Filter */}
        <div className="flex flex-col md:flex-row justify-center mt-5 mb-10 pb-10 space-y-2 md:space-y-0 md:space-x-2">
          {Categories.map((category) => (
            <button key={category.name} onClick={() => setFilter(category.filter())}
                    className="border border-gray-800 text-gray-800 font-semibold hover:bg-[#FFD23D] hover:text-[#FFF] hover:border-none py-2 px-4 rounded"
            >{category.name}</button>
          ))}
        </div>
        
        {/* Grid Product */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-16">
          {filter.map((item) => (
            <div key={item.id} className="max-w-sm rounded-lg overflow-hidden mb-4 shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-[350px] p-4" />
              <div className="p-4 flex flex-col items-center">
                <h5 className="text-xl text-center font-bold mb-2">
                  {item.title.substring > 16 ? `${item.title.substring(0, 16)}...` : item.title}
                </h5>
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
      {loading ? <Loading /> : error ? <div className="text-red-600">{error}</div> : <ShowProducts />}
    </div>
  );
};

export default Products;