import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Function to decode JWT token without external libraries
const decodeToken = (token) => {
  const base64Url = token.split(".")[1]; // Get payload part of the JWT
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
        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
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
          await axios.put(
            `http://localhost:5000/api/products/${id}`,
            formData,
            {
              headers,
            }
          );
          alert("Product updated successfully!");
        } else {
          await axios.post("http://localhost:5000/api/products", formData, {
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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Product Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type='number'
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type='number'
        placeholder='Quantity'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input type='file' onChange={(e) => setImage(e.target.files[0])} />
      <button type='submit'>{isEdit ? "Update Product" : "Add Product"}</button>
    </form>
  );
};

export default ProductForm;
