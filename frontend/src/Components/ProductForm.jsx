import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const decodeToken = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((char) => "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(jsonPayload);
};

const ProductForm = ({ isEdit }) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (isEdit && id) {
      const fetchProduct = async () => {
        const response = await API.get(`/products/${id}`);

        const product = response.data;
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setQuantity(product.quantity);
      };
      fetchProduct();
    }
  }, [isEdit, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("quantity", quantity);
    if (image) {
      formData.append("image", image);
    }

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = decodeToken(token);
        const farmerId = decodedToken.farmerId;

        formData.append("farmerId", farmerId);

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        if (isEdit) {
          await API.put(`/products/${id}`, formData, {
            headers,
          });
          alert("Product updated successfully!");
        } else {
          await API.post("/products", formData, {
            headers,
          });
          alert("Product created successfully!");
        }

        // Clear the form
        setName("");
        setPrice("");
        setDescription("");
        setQuantity("");
        setImage(null);
      } catch (error) {
        console.error("Error decoding token:", error);
        alert("Error saving product!");
      }
    } else {
      alert("You need to be logged in to create or edit a product.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg mt-10 space-y-6'>
      <h2 className='text-2xl font-semibold text-center mb-4 text-green-600'>
        {isEdit ? "Update Product" : "Add Product"}
      </h2>

      <div className='space-y-4'>
        <input
          type='text'
          placeholder='Product Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
        />

        <input
          type='number'
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
        />

        <input
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
        />

        <input
          type='number'
          placeholder='Quantity'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
        />

        <input
          type='file'
          onChange={(e) => setImage(e.target.files[0])}
          className='w-full p-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-600 hover:file:bg-green-100 focus:outline-none'
        />
      </div>

      <button
        type='submit'
        className='w-full bg-green-600 text-white py-3 rounded-md mt-4 hover:bg-green-700 transition-all duration-300'>
        {isEdit ? "Update Product" : "Add Product"}
      </button>

      <Link
        to='/farmerDashboard'
        className='block text-center text-green-500 mt-4 hover:underline'>
        Back
      </Link>
    </form>
  );
};

export default ProductForm;
