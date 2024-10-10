import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className='flex h-screen bg-gray-100'>
        <div className='hidden md:flex flex-col w-64 bg-gray-800'>
          <div className='flex items-center justify-center h-16 bg-gray-900'>
            <span className='text-white font-bold uppercase'>
              Daystar Dashboard
            </span>
          </div>
          <div className='flex flex-col flex-1 overflow-y-auto'>
            <nav className='flex-1 px-2 py-4 bg-gray-800'>
              <a
                href='#'
                className='flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
                  />
                </svg>
                Baby Sitters
              </a>
              <a
                href='#'
                className='flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z'
                  />
                </svg>
                Babies
              </a>
              <a
                href='#'
                className='flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
                  />
                </svg>
                Procurement
              </a>

              <a
                href='#'
                className='flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
                  />
                </svg>
                Transactions
              </a>

              <a
                href='#'
                className='flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
                Settings
              </a>
            </nav>
          </div>
        </div>

        <div className='flex flex-col flex-1 overflow-y-auto'>
          <div className='flex items-center justify-between h-16 bg-white border-b border-gray-200'>
            <div className='flex items-center px-4'>
              <button className='text-gray-500 focus:outline-none focus:text-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
            <div className='flex items-center pr-4'></div>
          </div>
          <div className='container mx-auto p-4'>
            <div className='relative max-w mx-auto mt-2'>
              <img
                className='h-64 w-full object-cover rounded-md'
                src='https://images.unsplash.com/photo-1577424205036-56e9e093b9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Random image'
              />
              <div className='absolute inset-0  rounded-md'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <h1 className='relative ml-4 w-[max-content] text-green-50 font-serif font-bold from-neutral-900 text-5xl before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black'>
                  Welcome To <br />
                  <p className='mt-5'> Agri-Connect</p>
                </h1>
              </div>
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className='mb-4'>
                  <Link to='/products/add' className='btn btn-primary'>
                    Add New Product
                  </Link>
                </div>
                <h2 className='text-xl mb-2'>Your Products</h2>
                {products.length > 0 ? (
                  <table className='min-w-full border-collapse border border-gray-200'>
                    <thead>
                      <tr>
                        <th className='border border-gray-300 p-2'>
                          Product Name
                        </th>
                        <th className='border border-gray-300 p-2'>Price</th>
                        <th className='border border-gray-300 p-2'>Quantity</th>
                        <th className='border border-gray-300 p-2'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product._id}>
                          <td className='border border-gray-300 p-2'>
                            {product.name}
                          </td>
                          <td className='border border-gray-300 p-2'>
                            {product.price}
                          </td>
                          <td className='border border-gray-300 p-2'>
                            {product.quantity}
                          </td>
                          <td className='border border-gray-300 p-2'>
                            <Link
                              to={`/products/edit/${product._id}`}
                              className='text-blue-500'>
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(product._id)}
                              className='text-red-500 ml-2'>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No products found.</p>
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
