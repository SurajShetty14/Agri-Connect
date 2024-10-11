import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../Api";

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const englishText = "Welcome to AgriConnect";
  const kannadaText = "ಅಗ್ರಿಕನೆಕ್ಟ್ ಗೆ ಸ್ವಾಗತ";
  const typingSpeed = 100;
  const [displayText, setDisplayText] = useState("");
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let i = -1;
    const typeWriter = () => {
      let currentText = isEnglish ? englishText : kannadaText;
      if (i < currentText.length) {
        setDisplayText((prev) => prev + currentText.charAt(i));
        i++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setIsEnglish(!isEnglish);
        }, 1500);
      }
    };
    typeWriter();
  }, [isEnglish]);

  return (
    <div className='min-h-screen flex bg-gray-100'>
      {/* Sidebar */}
      <div className='hidden md:flex flex-col w-64 bg-gradient-to-b from-green-900 to-green-600'>
        <div className='flex items-center justify-center h-20 bg-green-900 shadow-lg'>
          <h1 className='text-white text-3xl font-extrabold tracking-wide'>
            Agri<span className='text-yellow-300'>Connect</span>
          </h1>
        </div>
        <div className='flex flex-col flex-1 overflow-y-auto'>
          <nav className='flex-1 px-4 py-6 space-y-4'>
            <a
              href='#'
              className='flex items-center px-4 py-2 text-gray-100 hover:bg-green-700 rounded-md transition duration-300 ease-in-out transform hover:scale-105'>
              <svg
                className='h-6 w-6 mr-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z' />
              </svg>
              <span className='text-lg font-semibold'>Farmers</span>
            </a>
            <a
              href='/'
              className='flex items-center px-4 py-2 text-gray-100 hover:bg-green-700 rounded-md transition duration-300 ease-in-out transform hover:scale-105'>
              <svg
                className='h-6 w-6 mr-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path d='M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772' />
              </svg>
              <span className='text-lg font-semibold'>Products</span>
            </a>
            <a
              href='#'
              className='flex items-center px-4 py-2 text-gray-100 hover:bg-green-700 rounded-md transition duration-300 ease-in-out transform hover:scale-105'>
              <svg
                className='h-6 w-6 mr-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25' />
              </svg>
              <span className='text-lg font-semibold'>Orders</span>
            </a>
            <a
              href='#'
              className='flex items-center px-4 py-2 text-gray-100 hover:bg-green-700 rounded-md transition duration-300 ease-in-out transform hover:scale-105'>
              <svg
                className='h-6 w-6 mr-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3' />
              </svg>
              <span className='text-lg font-semibold'>Transactions</span>
            </a>
            <a
              href='#'
              className='flex items-center px-4 py-2 text-gray-100 hover:bg-green-700 rounded-md transition duration-300 ease-in-out transform hover:scale-105'>
              <svg
                className='h-6 w-6 mr-3'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
              <span className='text-lg font-semibold'>Settings</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col flex-1 overflow-y-auto'>
        {/* Header */}
        <div className='flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6 shadow-md'>
          <div className='flex items-center space-x-4'>
            <button className='text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500'>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
            <h2 className='text-2xl font-semibold text-gray-800'>Dashboard</h2>
          </div>
        </div>

        {/* Main Content */}

        <div className='p-6'>
          <div className='relative max-w-lg mx-auto mt-2'>
            <img
              className='h-64 w-full object-cover rounded-lg shadow-lg'
              src='https://images.unsplash.com/photo-1577424205036-56e9e093b9b9?q=80&w=2070&auto=format&fit=crop'
              alt='Agriculture'
            />
            <div className='absolute inset-0 flex items-center justify-center bg-opacity-60 bg-green-700 rounded-lg shadow-lg'>
              <h1 className='text-white text-5xl font-extrabold tracking-wide text-center leading-snug'>
                {displayText}
              </h1>
            </div>
          </div>

          {/* Products Section */}
          <div className='mt-10'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-3xl font-semibold text-green-800'>
                Your Products
              </h2>
              <Link
                to='/products/add'
                className='bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg transition duration-300'>
                + Add New Product
              </Link>
            </div>
            {loading ? (
              <p className='text-green-600 font-semibold'>Loading...</p>
            ) : (
              <>
                {products.length > 0 ? (
                  <table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
                    <thead className='bg-green-600 text-white'>
                      <tr>
                        <th className='py-3 px-6 text-left text-lg font-semibold'>
                          Product Name
                        </th>
                        <th className='py-3 px-6 text-left text-lg font-semibold'>
                          Price
                        </th>
                        <th className='py-3 px-6 text-left text-lg font-semibold'>
                          Quantity
                        </th>
                        <th className='py-3 px-6 text-left text-lg font-semibold'>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className='text-gray-700'>
                      {products.map((product) => (
                        <tr key={product._id} className='border-b'>
                          <td className='py-4 px-6'>{product.name}</td>
                          <td className='py-4 px-6'>{product.price}</td>
                          <td className='py-4 px-6'>{product.quantity}</td>
                          <td className='py-4 px-6'>
                            <button
                              onClick={() => handleDelete(product._id)}
                              className='bg-red-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-red-500 transition duration-300'>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className='text-green-700 font-semibold'>
                    No products found.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const handleDelete = async (productId) => {
  if (window.confirm("Are you sure you want to delete this product?")) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Make sure you are authorized.");
    }
  }
};

export default FarmerDashboard;
