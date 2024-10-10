import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("consumer");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username: trimmedUsername,
          password: trimmedPassword,
          role,
        }
      );

      setSuccess("User registered successfully!");
      setError("");
      navigate("/login");
      console.log("Response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      setSuccess("");
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter username'
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            required
          />
        </div>
        <div>
          <label>Role: </label>
          <select name='role' value={role} onChange={handleRoleChange}>
            <option value='consumer'>Consumer</option>
            <option value='farmer'>Farmer</option>
          </select>
        </div>
        <button type='submit'>Register</button>
        <p>
          Already Registered? <a href='/login'> Login Now</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
