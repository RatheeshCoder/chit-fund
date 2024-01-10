import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";
import { Helmet } from 'react-helmet';

const MainDashBoard = () => {
  const { isAuthenticated } = useAuth();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const time = new Date().getHours();
    let greetingText;

    if (time < 10) {
      greetingText = "Good morning";
    } else if (time < 20) {
      greetingText = "Good day";
    } else {
      greetingText = "Good evening";
    }

    setGreeting(greetingText);
  }, []);

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
     <Helmet>
        <title>Vanmoh | DashBoard</title>
      </Helmet>
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-xl px-4 py-12 bg-gray-100 rounded-lg shadow-2xl md:px-8">
        <h1 className="mb-4 text-lg text-center">
          Hey Vanmoh<span className="mx-2">{greeting}</span>😄,
          <br />
        </h1>

        <div className="flex flex-col justify-center w-full gap-6 mt-8 text-lg font-semibold text-center sm:flex-row">
          <Link
            to="/MainDashBoard/DashBoard/AddJobs"
            className="w-full py-4 text-white bg-blue-600 rounded-lg shadow-lg sm:w-40 hover:bg-blue-700"
          >
            Add Jobs
          </Link>
          <Link
            to="/MainDashBoard/DashBoard/AddBranch"
            className="w-full py-4 text-white bg-blue-600 rounded-lg shadow-lg sm:w-40 hover:bg-blue-700"
          >
            Add Branch
          </Link>
          <Link
            to="/MainDashBoard/DashBoard/AddProducts"
            className="w-full py-4 text-white bg-blue-600 rounded-lg shadow-lg sm:w-40 hover:bg-blue-700"
          >
            Add Products
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default MainDashBoard;
