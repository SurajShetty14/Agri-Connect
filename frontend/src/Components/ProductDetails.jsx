// src/components/ProductDetails.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img
        src={`http://localhost:5000/${product.imageUrl}`}
        alt={product.name}
      />
      <p>Price: Rs.{product.price}</p>
      <p>Description: {product.description}</p>
      <p>Quantity: {product.quantity}Kg</p>
    </div>
  );
};

export default ProductDetails;
