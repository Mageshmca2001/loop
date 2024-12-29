import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const Meter = () => {
  useEffect(() => {
    document.title = "BGT - MeterReports"; // Update the title
  }, []);

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({ id: "", name: "", DateTime: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Change this value to the number of items per page

  // Function to remove duplicates based on unique `id` and `DateTime`
  const cleanData = (dataset) => {
    const seen = new Set();
    return dataset.filter((item) => {
      const identifier = `${item.id}-${item.DateTime}`;
      if (seen.has(identifier)) {
        return false;
      }
      seen.add(identifier);
      return true;
    });
  };

  // Fetch user details from API
  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.restful-api.dev/objects"); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleAdd = () => {
    setShowForm(true); // Show the form when Add Item is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form
    setNewItem({ id: "", name: "", DateTime: "" }); // Reset the form data
  };

  const handleSubmit = () => {
    const newItemId = data.length + 1;
    const newItemToAdd = { id: newItemId, ...newItem, DateTime: new Date().toISOString().split("T")[0] };
    setData([...data, newItemToAdd]);
    setShowForm(false); // Close form after submitting
    setNewItem({ id: "", name: "", DateTime: "" }); // Reset the form data
  };

  // Delete user details from both the server and local state
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://api.restful-api.dev/objects/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      // Remove the user from the local state after successful deletion
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdate = (id, newName) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  const cleanedData = cleanData(data);

  // Search filter
  const filteredData = cleanedData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      {<Sidebar />}

      <div className="flex-1 mt-5 p-9">
        {/* Title Container */}
        <div className=" bg-gray-600 p-3 rounded shadow flex justify-between items-center mb-6 ">
          <h1 className="text-2xl font-semibold text-white">
            User Details
          </h1>
        </div>

        {/* Search and Add Button */}
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search Users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Add Users
          </button>
        </div>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="id">
                  ID
                </label>
                <input
                  type="number"
                  id="id"
                  value={newItem.id}
                  onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="DateTime">
                  Date
                </label>
                <input
                  type="date"
                  id="DateTime"
                  value={newItem.DateTime}
                  onChange={(e) => setNewItem({ ...newItem, DateTime: e.target.value })}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                >
                  Submit
                </button>
                <button
                  onClick={handleCloseForm}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading and Error States */}
        {loading && <p>Loading user details...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Table */}
        <table className="w-full border-collapse border-2 border-gray-500">
          <thead>
            <tr>
              <th className="bg-blue-500 text-white border-2 border-gray-500 px-4 py-2">ID</th>
              <th className="bg-blue-500 text-white border-2 border-gray-500 px-4 py-2">Name</th>
              <th className="bg-blue-500 text-white border-2 border-gray-500 px-4 py-2">Date</th>
              <th className="bg-blue-500 text-white border-2 border-gray-500 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="text-center border-2 border-gray-500 px-4 py-2">{item.id}</td>
                <td className="text-center border-2 border-gray-500 px-4 py-2">{item.name}</td>
                <td className="text-center border-2 border-gray-500 px-4 py-2">{item.DateTime}</td>
                <td className="text-center border-2 border-gray-500 px-4 py-2">
                  <button
                    onClick={() => handleUpdate(item.id, `${item.name} Updated`)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
                {/* Pagination */}
                <div className="flex justify-between items-center mt-4">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Previous
          </button>

          {/* Page Info */}
          <div className="text-center">
            <span>Page {currentPage} of {totalPages}</span>
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default Meter;
