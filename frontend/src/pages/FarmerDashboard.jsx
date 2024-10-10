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
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Farmer Dashboard</h1>

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
                  <th className='border border-gray-300 p-2'>Product Name</th>
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
