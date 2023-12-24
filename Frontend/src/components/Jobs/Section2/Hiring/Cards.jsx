import React, { useState, useEffect } from "react";
import { jobData } from "../../../../data/data";
import RegistrationForm from "./Form";
import openimg from "../../../../asset/imgs/jobOpenimg.png";
import closeimg from "../../../../asset/imgs/jobCloseimg.png";
import axios from "axios";

const Cards = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isActive, setActive] = useState(false);
  const [isSidebarHidden, setSidebarHidden] = useState(window.innerWidth < 720);
  const jobTitles = ["all", "Coimbatore", "Karamadai", "Coonoor"];

  const toggleActive = () => {
    setActive(!isActive);
  };

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  const filteredJobs = jobs.filter(
    (job) => filter === "all" || job.branch === filter
  );

  useEffect(() => {
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 720);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/jobs/get");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Main">
      {window.innerWidth < 720 && (
        <button
          onClick={toggleSidebar}
          className="sidebar-button cta-job-button"
          style={{ backgroundColor: "white", color: "white" }}
        >
          {isSidebarHidden ? (
            <img
              src={openimg}
              alt="Show Jobs Titles"
              style={{
                width: "50px",
                marginLeft: "20px",
                transition: "transform 0.5s ease-in-out",
                transform: isSidebarHidden
                  ? "rotateY(0deg)"
                  : "rotateY(180deg)",
              }}
            />
          ) : (
            <img
              src={closeimg}
              alt="Hide Jobs Titles"
              style={{
                width: "50px",
                marginLeft: "20px",
                transition: "transform 0.5s ease-in-out",
                transform: isSidebarHidden
                  ? "rotateY(0deg)"
                  : "rotateY(180deg)",
              }}
            />
          )}
        </button>
      )}
      {!isSidebarHidden && (
        <div className={`sidenavbar ${isActive ? "active" : ""}`}>
          <div className="wrapper">
            <li
              onClick={toggleActive}
              className={`bg-[#0c52a6] brand-dropdown ${
                isActive ? "active" : ""
              }`}
            >
              JOB'S TITLES ↓
            </li>
            {jobTitles.map((branch) => (
              <li
                className={`jobFilter ${
                  filter === branch ? "bg-blue-800 text-white" : ""
                }`}
                key={branch}
                onClick={() => {
                  setFilter(branch);
                  setActive(false);
                }}
              >
                {branch === "all" ? "All Jobs" : branch}
              </li>
            ))}
          </div>
        </div>
      )}

      <div className="job-listings">
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2 cta-job-card"
          >
            <div>
              <h4 className="text-indigo-600 text-2xl font-medium text-center text-black">
                {job.jobTitle}
              </h4>
              <p className="mt-4 text-gray-800 text-xl font-semibold">
                {job.branch}
              </p>
              <p className="text-sm text-gray-600">{job.experience}</p>
            </div>
            <div className="py-8 space-y-3">
              <div className="flex items-center gap-5">
                <div className="flex flex-col">
                  <p>{job.description}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-end">
              <RegistrationForm />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
