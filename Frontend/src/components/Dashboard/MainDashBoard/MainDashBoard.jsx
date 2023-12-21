import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MainDashBoard = () => {
  const [greeting, setGreeting] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume the user is initially not logged in
  const navigate = useNavigate();

  useEffect(() => {
    const time = new Date().getHours();
    let greetingText;

    if (time < 10) {
      greetingText = 'Good morning';
    } else if (time < 20) {
      greetingText = 'Good day';
    } else {
      greetingText = 'Good evening';
    }

    setGreeting(greetingText);
  }, []);

  useEffect(() => {
    // If not logged in, navigate to the login page
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    // If not logged in, you can redirect or show a message.
    // For now, we'll redirect to the login page.
    return null;
  }

  return (
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Hey Vanmoh<span className="mx-2">{greeting}</span>😄,
            <br />
          </h1>

          <div className="flex flex-col justify-center w-full text-center mt-8 gap-6 sm:flex-row text-lg font-semibold">
            <Link
              to="DashBoard/AddJobs"
              className="bg-blue-600 w-full sm:w-40 py-4 rounded-lg text-white hover:bg-blue-700 shadow-lg"
            >
              Add Jobs
            </Link>
            <Link
              to="DashBoard/AddBranch"
              className="bg-blue-600 w-full sm:w-40 py-4 rounded-lg text-white hover:bg-blue-700 shadow-lg"
            >
              Add Branch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashBoard;
