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
        const response = await axios.get("http://localhost:5000/api/products");

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Expected an array, but got:", response.data);
          setProducts([]);
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
      await axios.delete(`http://localhost:5000/api/products/${id}`, config);
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

              <img
                src={`http://localhost:5000/${product.imageUrl}`}
                alt={product.name}
                style={{ width: "100px", height: "100px" }}
              />
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
