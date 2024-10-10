import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
        }
      );

      setSuccess("User registered successfully!");
      setError("");
      console.log("Response:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      setSuccess("");
    }
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
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
