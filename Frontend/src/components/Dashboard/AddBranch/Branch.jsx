import React, { useState, useEffect } from 'react';

const BranchList = () => {
  const [branches, setBranches] = useState([]);
  const [formData, setFormData] = useState({
    location: '',
    address: '',
    mapUrl: '',
    description: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editTarget, setEditTarget] = useState(null);

  useEffect(() => {
    const storedBranches = JSON.parse(localStorage.getItem('branches')) || [];
    setBranches(storedBranches);
  }, []);

  const addBranch = () => {
    if (!formData.location || !formData.address || !formData.mapUrl || !formData.description) {
      alert('Please fill in all fields');
      return;
    }

    const newBranch = {
      location: formData.location,
      address: formData.address,
      mapUrl: formData.mapUrl,
      description: formData.description,
    };

    if (editMode) {
      const updatedBranches = branches.map((branch) =>
        branch.location === editTarget ? newBranch : branch
      );
      setBranches(updatedBranches);
      setEditMode(false);
      setEditTarget(null);
    } else {
      setBranches([...branches, newBranch]);
    }

    localStorage.setItem('branches', JSON.stringify(branches));
    setFormData({ location: '', address: '', mapUrl: '', description: '' });
  };

  const removeBranch = (location) => {
    const updatedBranches = branches.filter((branch) => branch.location !== location);
    setBranches(updatedBranches);
    localStorage.setItem('branches', JSON.stringify(updatedBranches));
  };

  const editBranch = (location) => {
    const branchToEdit = branches.find((branch) => branch.location === location);
    setFormData({
      location: branchToEdit.location,
      address: branchToEdit.address,
      mapUrl: branchToEdit.mapUrl,
      description: branchToEdit.description,
    });
    setEditMode(true);
    setEditTarget(location);
  };

  const submitForm = (e) => {
    e.preventDefault();
    addBranch();
  };

  return (
    <div className="container mx-auto mt-20 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Add Branch</h1>

      <form onSubmit={submitForm} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="location" className="block text-sm font-medium text-gray-600">
              Main Location
            </label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
              id="location"
              name="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Full Address
            </label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mapUrl" className="block text-sm font-medium text-gray-600">
              Google Map URL
            </label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
              id="mapUrl"
              name="mapUrl"
              value={formData.mapUrl}
              onChange={(e) => setFormData({ ...formData, mapUrl: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
        >
          {editMode ? 'Edit Branch' : 'Add Branch'}
        </button>
      </form>

      <div className="overflow-x-auto">
  <table className="table-auto min-w-full">
    <thead className="bg-gray-200">
      <tr>
        <th className="p-2 sm:p-3">Main Location</th>
        <th className="p-2 sm:p-3">Full Address</th>
        <th className="p-2 sm:p-3">Google Map</th>
        <th className="p-2 sm:p-3">Description</th>
        <th className="p-2 sm:p-3"></th>
        <th className="p-2 sm:p-3"></th>
      </tr>
    </thead>
    <tbody>
      {branches.map((branch) => (
        <tr key={branch.location}>
          <td className="p-2 sm:p-3">{branch.location}</td>
          <td className="p-2 sm:p-3">{branch.address}</td>
          <td className="p-2 sm:p-3">{branch.mapUrl}</td>
          <td className="p-2 sm:p-3">{branch.description}</td>
          <td className="p-2 sm:p-3">
            <button
              onClick={() => removeBranch(branch.location)}
              className="text-red-600 hover:text-red-800 focus:outline-none"
            >
              Remove
            </button>
          </td>
          <td className="p-2 sm:p-3">
            <button
              onClick={() => editBranch(branch.location)}
              className="text-blue-600 hover:text-blue-800 focus:outline-none"
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

export default BranchList;
