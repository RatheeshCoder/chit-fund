// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { Helmet } from 'react-helmet';
import { API_BASE_URL } from "../Dashboard/apiConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}/users/login`, { email, password })
      .then((result) => {
        if (result.data.message === "Success") {
          login();
          navigate("/MainDashBoard");
        } else {
          setErrorMessage(result.data.error);
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("An error occurred during login.");
      });
  };

  return (
    <>
     <Helmet>
        <title>Vanmoh | Login</title>
      </Helmet>
    <div className="bg-fixed bg-center bg-cover">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full p-8 mx-4 bg-white rounded shadow-md md:w-1/2 lg:w-1/3">
          <h1 className="mb-8 text-3xl font-bold text-center">Login</h1>

          {errorMessage && (
            <div className="mb-4 text-sm text-red-500">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
