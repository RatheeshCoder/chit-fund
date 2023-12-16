import React, { useState, useEffect } from "react";

const AddJob = ({ onAddJob, onEditJob, editMode, editData }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    branch: "",
    experience: "",
    description: "",
  });

  useEffect(() => {
    if (editMode && editData) {
      setFormData({
        jobTitle: editData.jobTitle || "",
        branch: editData.branch || "",
        experience: editData.experience || "",
        description: editData.description || "",
      });
    }
  }, [editMode, editData]);

  const submitForm = (e) => {
    e.preventDefault();
    if (editMode) {
      onEditJob(formData);
    } else {
      onAddJob(formData);
    }
    setFormData({
      jobTitle: "",
      branch: "",
      experience: "",
      description: "",
    });
  };

  return (
    <form onSubmit={submitForm} className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="form-group">
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-600"
          >
            Job Title
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={(e) =>
              setFormData({ ...formData, jobTitle: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="branch"
            className="block text-sm font-medium text-gray-600"
          >
            Branch
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={(e) =>
              setFormData({ ...formData, branch: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-600"
          >
            Experience
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={(e) =>
              setFormData({ ...formData, experience: e.target.value })
            }
          />
        </div>
      </div>
      <div className="form-group">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description
        </label>
        <textarea
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-4 p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
      >
        {editMode ? "Edit Job" : "Add Job"}
      </button>
    </form>
  );
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
    localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));
  };

  const removeJob = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const editJob = (index) => {
    setEditMode(true);
    setEditIndex(index);
  };

  const updateJob = (updatedJob) => {
    const updatedJobs = [...jobs];
    updatedJobs[editIndex] = updatedJob;
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setEditMode(false);
    setEditIndex(null);
  };

  return (
    <div className="container mx-auto mt-20 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">
        <i className="fas fa-briefcase text-primary"></i> Job Listings
      </h1>

      <AddJob
        onAddJob={addJob}
        onEditJob={updateJob}
        editMode={editMode}
        editData={editMode ? jobs[editIndex] : null}
      />

      <div className="overflow-x-auto">
        <table className="table-auto min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Job Title</th>
              <th className="p-2">Branch</th>
              <th className="p-2">Experience</th>
              <th className="p-2">Description</th>
              <th className="p-2"></th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td className="p-2">{job.jobTitle}</td>
                <td className="p-2">{job.branch}</td>
                <td className="p-2">{job.experience}</td>
                <td className="p-2">{job.description}</td>
                <td className="p-2">
                  <button
                    onClick={() => removeJob(index)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    Remove
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => editJob(index)}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jobs;
