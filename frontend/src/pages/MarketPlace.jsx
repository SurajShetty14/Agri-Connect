// src/components/Marketplace.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MarketPlace = () => {
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsAuthenticated(true);
      }
    };
    checkAuth();

    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Expected an array, but got:", response.data);
          setProducts([]); // Set to an empty array if not an array
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!isAuthenticated) {
      alert("You must be logged in to delete a product.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`/api/products/${id}`, config);
      alert("Product deleted successfully!");
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product!");
    }
  };

  return (
    <div>
      <h2>Marketplace</h2>
      {isAuthenticated && <Link to='/products/add'>Add Product</Link>}
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product._id}>
              <Link to={`/products/${product._id}`}>{product.name}</Link>
              {isAuthenticated && (
                <button onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              )}
            </li>
          ))
        ) : (
          <li>No products available.</li>
        )}
      </ul>
    </div>
  );
};

export default MarketPlace;
