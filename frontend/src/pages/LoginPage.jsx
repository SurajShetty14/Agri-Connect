import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Api";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      setError("");
      navigate("/marketplace");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
        <p>
          Not Registerd? <a href='/register'> Register Now</a>
        </p>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
