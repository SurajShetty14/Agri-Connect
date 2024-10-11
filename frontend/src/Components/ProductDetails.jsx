import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../Api";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const baseURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await API.get(`/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='max-w-lg mx-auto p-6 flex justify-center flex-col text-center align-middle bg-white shadow-lg rounded-lg border border-gray-200'>
      <h2 className='text-2xl font-semibold mb-4 text-center text-green-600'>
        {product.name}
      </h2>
      <img
        src={`${baseURL}/${product.imageUrl}`}
        alt={product.name}
        className='w-full h-72 object-cover rounded-md mb-4'
      />
      <div className='text-gray-700 mb-6 text-center'>
        <p className='text-lg mb-2 font-semibold'>Price: ₹{product.price}</p>
        <p className='text-lg mb-2'>Description: {product.description}</p>
        <p className='text-lg'>Quantity: {product.quantity} Kg</p>
      </div>
      <Link
        to={"/marketplace"}
        className='w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-200'>
        Back To MarketPlace
      </Link>
    </div>
  );
};

export default ProductDetails;
