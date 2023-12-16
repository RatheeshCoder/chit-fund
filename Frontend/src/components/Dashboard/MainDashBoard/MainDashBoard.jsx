import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

const MainDashBoard = () => {
  const [greeting, setGreeting] = useState('');

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

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 md:px-8 py-12 bg-gray-100 rounded-lg shadow-2xl max-w-xl">
        <h1 className="text-lg mb-4 text-center">
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
  );
};

export default MainDashBoard;