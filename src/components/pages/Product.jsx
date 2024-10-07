import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const Dispatch = useDispatch();
  const addProduct = (product) => {
    Dispatch(addItem(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const productAPI = "https://fakestoreapi.com/products";
      const response = await fetch(`${productAPI}/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="w-full h-full flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/2">
        <Skeleton className="rounded-lg" height={400} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <Skeleton width={200} height={30} />
        <Skeleton width={300} height={40} />
        <Skeleton width={100} height={20} />
        <Skeleton width={150} height={30} />
        <Skeleton height={80} />
        <div className="flex gap-4">
          <Skeleton width={150} height={50} />
          <Skeleton width={150} height={50} />
          <Skeleton width={150} height={50} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-200">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-full flex flex-col md:flex-row gap-4 p-4">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-[400px] h-auto rounded-lg p-4 bg-white shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 w-full md:w-1/2 p-4">
            <h4 className="text-gray-400 text-xl mb-2 uppercase">
              {product.category}
            </h4>
            <h1 className="text-[#FFC71C] text-4xl md:text-5xl mb-2">
              {product.title}
            </h1>
            <p className="text-xl font-extrabold mb-4">
              Rating {product.rating && product.rating.rate}*
            </p>
            <h3 className="text-[#FC4377] text-3xl mb-4 font-extrabold">
              ${product.price}
            </h3>
            <p className="mt-2 text-gray-700 mb-4">{product.description}</p>
            <div className="flex gap-4">
              <button
                      className="bg-[#FFC71C] text-white py-2 px-8 rounded-lg font-bold hover:bg-[#FB2F71] transition duration-200"
                      onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="bg-[#FB2F71] text-white py-2 px-8 rounded-lg font-bold hover:bg-[#FFC71C] transition duration-200">
                Go to Cart
              </Link>
              <Link to="/products" className="bg-[#FFC71C] text-white py-2 px-8 rounded-lg font-bold hover:bg-[#FB2F71] transition duration-200">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;