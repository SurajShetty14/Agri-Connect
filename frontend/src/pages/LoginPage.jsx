import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Api";
import backgroundImage from "../assets/new1.jpg";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", formData);
      const { token, role } = response.data;

      localStorage.setItem("token", token);
      localStorage.setem("role", role);

      setError("");
      if (role === "farmer") {
        setSuccess("User Login Successful!");
        navigate("/farmerDashboard");
      } else {
        setSuccess("User Login Successful!");
        navigate("/marketplace");
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className='overflow-hidden'>
      {success && <p className='text-green-500 text-center'>{success}</p>}
      <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
        <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
          <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
            <div className='flex  justify-center text-center'>
              <img src='../logo.svg' className='h-52 w-mx-auto' />
            </div>
            <div className='mt-3 flex flex-col items-center'>
              <div className='w-full flex-1 mt-8'>
                <div className='my-12 border-b text-center'>
                  <div className='leading-none px-2 inline-block text-3xl text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                    Login Form
                  </div>
                </div>
                <form onSubmit={handleSubmit} className='mt-4'>
                  <div className='mx-auto max-w-xs'>
                    <input
                      className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                      type='text'
                      name='username'
                      value={formData.username}
                      onChange={handleChange}
                      placeholder='Enter username'
                      required
                    />
                    <input
                      className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                      type='password'
                      name='password'
                      placeholder='Enter Password'
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type='submit'
                      className='mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
                      <svg
                        className='w-6 h-6 -ml-2'
                        fill='none'
                        stroke='currentColor'>
                        <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
                        <circle cx='8.5' cy='7' r='4' />
                      </svg>
                      <span className='ml-'>Login</span>
                    </button>
                    <p className='mt-6 text-md text-gray-600 text-center'>
                      Not Registered?
                      <a
                        href='/register'
                        className='border-b ml-2 border-gray-500 border-dotted'>
                        Register Now
                      </a>
                    </p>
                    <div className='flex justify-center mt-3'>
                      <a
                        href='/'
                        className='border-b ml-2 border-gray-500 border-dotted'>
                        Home
                      </a>
                    </div>
                    {error && (
                      <p className=' text-red-500 text-center'>{error}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='flex-1 bg-green-100 text-center hidden lg:flex'>
            <div
              className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
                borderRadius: "15px",
                filter: "brightness(0.8) ",
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
