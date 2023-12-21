import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://chit-fund-server.vercel.app/login', { email, password });

      // Assuming the server responds with a JSON object containing a 'message' property
      if (response.data.message === 'Success') {
        setIsLoggedIn(true);
        navigate('/MainDashBoard');
      } else {
        console.log('Login failed. Server response:', response.data);
        // You might want to set an error state here and show a user-friendly error message.
      }
    } catch (error) {
      console.error('An error occurred during the login request:', error);

      // Handle the error, e.g., show an error message to the user
    }
  };

  if (isLoggedIn) {
    // If already logged in, redirect to MainDashBoard
    navigate('/MainDashBoard');
    return null; // or render a loading spinner, as you're redirecting
  }

  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
    >
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
