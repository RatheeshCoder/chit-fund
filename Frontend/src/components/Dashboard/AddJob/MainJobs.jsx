import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Auth/AuthContext";
import { Helmet } from 'react-helmet';
import { API_BASE_URL,WEBSOCKET_URL } from "../apiConfig";

const MainJobs = () => {
  const { isAuthenticated } = useAuth();

  const [jobs, setjobs] = useState([]);
  const [newTask, setNewTask] = useState({
    jobTitle: "",
    branch: "",
    experience: "",
    description: "",
  });
  const [formMode, setFormMode] = useState("add"); // 'add' or 'edit'
  const [taskId, setTaskId] = useState(null); // Added taskId state


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/jobs/get`);
        const result = await response.json();
        setjobs(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const socket = new WebSocket(WEBSOCKET_URL);
    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);

      if (data.newTask) {
        setjobs((prevjobs) => [...prevjobs, data.newTask]);
      } else if (data.updatedTask) {
        setjobs((prevjobs) =>
          prevjobs.map((task) =>
            task._id === data.updatedTask._id ? data.updatedTask : task
          )
        );
      } else if (data.deletedTask) {
        setjobs((prevjobs) =>
          prevjobs.filter((task) => task._id !== data.deletedTask._id)
        );
      }
    });

    return () => {
      socket.close();
    };
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleEdit = (taskId) => {
    const taskToEdit = jobs.find((task) => task._id === taskId);

    setNewTask({
      jobTitle: taskToEdit.jobTitle,
      branch: taskToEdit.branch,
      experience: taskToEdit.experience,
      description: taskToEdit.description,
    });

    setTaskId(taskId); // Set taskId state
    setFormMode("edit");
  };

  const handleUpdate = async () => {
    try {
      if (formMode === "edit") {
        // Update existing task
        const response = await axios.put(
          `${API_BASE_URL}/jobs/update/${taskId}`,
          newTask
        );

        if (response.status === 200) {
          setjobs((prevjobs) =>
            prevjobs.map((task) =>
              task._id === taskId ? { ...task, ...newTask } : task
            )
          );
          setNewTask({
            jobTitle: "",
            branch: "",
            experience: "",
            description: "",
          });
          setTaskId(null); // Reset taskId state
          setFormMode("add");
        } else {
          console.error(
            "Failed to update task. Unexpected status code:",
            response.status
          );
        }
      } else {
        // Add new task
        const response = await axios.post(
          `${API_BASE_URL}/jobs/add`,
          newTask
        );

        if (response.status === 201) {
          setjobs((prevjobs) => [...prevjobs, response.data]);
          setNewTask({
            jobTitle: "",
            branch: "",
            experience: "",
            description: "",
          });
        } else {
          console.error(
            "Failed to add task. Unexpected status code:",
            response.status
          );
        }
      }
    } catch (error) {
      console.error("Error to adding task:", error);

      if (error.response) {
        console.error("Error response from server:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        console.error("No response received from server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/jobs/delete/${taskId}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        setjobs((prevjobs) => prevjobs.filter((task) => task._id !== taskId));
      } else {
        console.error("Failed to delete task:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const addTask = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/jobs/add`,
        newTask
      );

      if (response.status === 201) {
        setjobs((prevjobs) => [...prevjobs, response.data]);
        setNewTask({
          jobTitle: "",
          branch: "",
          experience: "",
          description: "",
        });
      } else {
        console.error(
          "Failed to add task. Unexpected status code:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error adding task:", error);

      if (error.response) {
        console.error("Error response from server:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        console.error("No response received from server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <>
     <Helmet>
        <title> Vanmoh | Add Jobs</title>
      </Helmet>
    <div className="p-6 mx-auto my-8 bg-white rounded-md shadow-md ">
      <div className="mx-4 mt-10 border-2 border-blue-400 rounded-lg md:mx-14">
        <div className="mt-6 font-bold text-center md:mt-10">Jobs</div>
        <div className="mt-3 text-4xl font-bold text-center">
          Add Your New Jobs
        </div>
        <div className="p-4 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              name="jobTitle"
              className="block w-full px-3 py-4 mt-1 bg-white border rounded-md shadow-sm md:w-1/2 border-slate-300 placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Job Title *"
              value={newTask.jobTitle}
              onChange={(e) =>
                setNewTask({ ...newTask, jobTitle: e.target.value })
              }
            />
            <input
              type="text"
              name="branch"
              className="block w-full px-3 py-4 mt-1 bg-white border rounded-md shadow-sm md:w-1/2 border-slate-300 placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Branch *"
              value={newTask.branch}
              onChange={(e) =>
                setNewTask({ ...newTask, branch: e.target.value })
              }
            />
          </div>
          <div className="my-4 md:my-6 md:flex md:flex-col md:gap-4">
            <input
              type="text"
              name="experience"
              className="block w-full px-3 py-4 font-semibold text-gray-500 bg-white border rounded-md shadow-sm border-slate-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Experience *"
              value={newTask.experience}
              onChange={(e) =>
                setNewTask({ ...newTask, experience: e.target.value })
              }
            />
            <textarea
              name="description"
              id="text"
              cols="30"
              rows="5"
              className="w-full h-32 p-3 mb-4 font-semibold text-gray-500 border rounded-md shadow-sm resize-none md:h-40 border-slate-300 md:p-5 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm "
              placeholder="Description *"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="text-center ">
            {formMode === "add" ? (
              <button
                className="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg cursor-pointer md:px-8 md:py-5 md:w-auto"
                type="button"
                onClick={addTask}
              >
                Add Job
              </button>
            ) : (
              <button
                className="w-full px-4 py-3 text-sm font-semibold text-white bg-green-500 rounded-lg cursor-pointer md:px-8 md:py-5 md:w-auto"
                type="button"
                onClick={handleUpdate}
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
      {jobs.length === 0 ? (
        <div>No Record</div>
      ) : (
        <div className="max-w-full mt-4 overflow-x-auto ">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Job Title
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Branch
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Experience
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Description
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobs
                .slice()
                .reverse()
                .map((task) => (
                  <tr key={task._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {task.jobTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {task.branch}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {task.experience}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {task.description}
                    </td>
                    <td className="px-6 py-4 space-x-2 whitespace-nowrap">
                      <button
                        className="px-4 py-2 font-medium text-white transition duration-150 ease-in-out bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600"
                        onClick={() => handleEdit(task._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-4 py-2 ml-2 font-medium text-white transition duration-150 ease-in-out bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600"
                        onClick={() => handleDelete(task._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  );
};

export default MainJobs;
