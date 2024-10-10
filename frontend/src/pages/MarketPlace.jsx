import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MarketPlace = () => {
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setRole(user.role);
      }
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
    <div className='min-h-screen bg-gray-100'>
      {/* Navbar */}
      <nav className='bg-green-600 p-4 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/' className='text-white text-lg font-semibold'>
            AgriConnect
          </Link>
          <div>
            <Link to='/' className='text-white px-4'>
              Home
            </Link>
            {role === "farmer" && (
              <Link to='/products/add' className='text-white px-4'>
                Add Product
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Marketplace Title */}
      <div className='container mx-auto py-6'>
        <h2 className='text-3xl font-bold text-center text-green-600 mb-6'>
          Marketplace
        </h2>

        {/* Product List */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className='bg-white shadow-md rounded-lg overflow-hidden'>
                <Link to={`/products/${product._id}`}>
                  <img
                    src={`http://localhost:5000/${product.imageUrl}`}
                    alt={product.name}
                    className='w-full h-48 object-cover'
                  />
                  <div className='p-4'>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      {product.name}
                    </h3>
                    <p className='text-gray-600'>Price: ₹{product.price}</p>
                    <p className='text-gray-600'>
                      Quantity: {product.quantity} Kg
                    </p>
                  </div>
                </Link>
                {isAuthenticated && (
                  <div className='flex justify-center mb-4'>
                    <Link
                      to={`/products/${product._id}`}
                      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                      View
                    </Link>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center text-gray-500'>
              No products available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
