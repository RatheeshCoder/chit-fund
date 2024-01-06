import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Auth/AuthContext";

import { API_BASE_URL,WEBSOCKET_URL } from "../apiConfig";

const MainBranches = () => {
  const { isAuthenticated } = useAuth();

  const [branches, setBranches] = useState([]);
  const [newBranch, setNewBranch] = useState({
    location: "",
    address: "",
    googleMap: "",
    description: "",
  });
  const [formMode, setFormMode] = useState("add"); // 'add' or 'edit'
  const [branchId, setBranchId] = useState(null); // Added branchId state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/branches/get`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setBranches(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleEdit = (branchId) => {
    const branchToEdit = branches.find((branch) => branch._id === branchId);

    setNewBranch({
      location: branchToEdit.location,
      address: branchToEdit.address,
      googleMap: branchToEdit.googleMap,
      description: branchToEdit.description,
    });

    setBranchId(branchId); // Set branchId state
    setFormMode("edit");
  };

  const handleUpdate = async () => {
    try {
      if (formMode === "edit") {
        // Update existing branch
        const response = await axios.put(
          `${API_BASE_URL}/branches/update/${branchId}`,
          newBranch
        );

        if (response.status === 200) {
          setBranches((prevBranches) =>
            prevBranches.map((branch) =>
              branch._id === branchId ? { ...branch, ...newBranch } : branch
            )
          );
          setNewBranch({
            location: "",
            address: "",
            googleMap: "",
            description: "",
          });
          setBranchId(null); // Reset branchId state
          setFormMode("add");
        } else {
          console.error(
            "Failed to update branch. Unexpected status code:",
            response.status
          );
        }
      } else {
        // Add new branch
        const response = await axios.post(
          `${API_BASE_URL}/branches/add`,
          newBranch
        );

        if (response.status === 201) {
          setBranches((prevBranches) => [...prevBranches, response.data]);
          setNewBranch({
            location: "",
            address: "",
            googleMap: "",
            description: "",
          });
        } else {
          console.error(
            "Failed to add branch. Unexpected status code:",
            response.status
          );
        }
      }
    } catch (error) {
      console.error("Error updating or adding branch:", error);

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

  const handleDelete = async (branchId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/branches/delete/${branchId}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        setBranches((prevBranches) =>
          prevBranches.filter((branch) => branch._id !== branchId)
        );
      } else {
        console.error("Failed to delete branch:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting branch:", error);
    }
  };

  const addBranch = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/branches/add`,
        newBranch
      );

      if (response.status === 201) {
        setBranches((prevBranches) => [...prevBranches, response.data]);
        setNewBranch({
          location: "",
          address: "",
          googleMap: "",
          description: "",
        });
      } else {
        console.error(
          "Failed to add branch. Unexpected status code:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error adding branch:", error);

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
    <div className="mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <div className="mx-4 md:mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-6 md:mt-10 text-center font-bold">Branches</div>
        <div className="mt-3 text-center text-4xl font-bold">
          Add Your New Branches
        </div>
        <div className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="location"
              className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Location *"
              value={newBranch.location}
              onChange={(e) =>
                setNewBranch({ ...newBranch, location: e.target.value })
              }
            />
            <input
              type="text"
              name="googleMap"
              className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Google Map *"
              value={newBranch.googleMap}
              onChange={(e) =>
                setNewBranch({ ...newBranch, googleMap: e.target.value })
              }
            />
          </div>
          <div className="my-4 md:my-6 md:flex md:flex-col md:gap-4">
            {/* <input
                            type="text"
                            name="googleMap"
                            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="Google Map *"
                            value={newBranch.googleMap}
                            onChange={(e) => setNewBranch({ ...newBranch, googleMap: e.target.value })}
                        /> */}
            <textarea
              name="address"
              id="text"
              cols="30"
              rows="5"
              className="mb-4 h-32 md:h-40 w-full resize-none rounded-md border border-slate-300 p-3 md:p-5 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm "
              placeholder="Address *"
              value={newBranch.address}
              onChange={(e) =>
                setNewBranch({ ...newBranch, address: e.target.value })
              }
            ></textarea>
          </div>
          <div className="text-center ">
            {formMode === "add" ? (
              <button
                className="cursor-pointer rounded-lg bg-blue-700 px-4 md:px-8 py-3 md:py-5 w-full md:w-auto text-sm font-semibold text-white"
                type="button"
                onClick={addBranch}
              >
                Add Branch
              </button>
            ) : (
              <button
                className="cursor-pointer rounded-lg bg-green-500 px-4 md:px-8 py-3 md:py-5 w-full md:w-auto text-sm font-semibold text-white"
                type="button"
                onClick={handleUpdate}
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
      {branches.length === 0 ? (
        <div>No Record</div>
      ) : (
        <div className="w-full overflow-x-auto mt-4">
          <table className="w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Google Map
                </th>
               
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {branches
                .slice()
                .reverse()
                .map((branch) => (
                  <tr key={branch._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {branch.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {branch.googleMap}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {branch.address}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">{branch.description}</td> */}
                    <td className="px-6 py-4 whitespace-nowrap space-x-2">
                      <button
                        className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                        onClick={() => handleEdit(branch._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                        onClick={() => handleDelete(branch._id)}
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
  );
};

export default MainBranches;
