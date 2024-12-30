import React from 'react';
import { useState, useEffect } from "react";
import Sidebar from '../../components/Sidebar/Sidebar';

const Report = () => {

   useEffect(() => {
      document.title = 'BGT - DailyReports'; // Update the title for the Login Page
    }, []);

  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const [showTable, setShowTable] = useState(false); // State to manage table visibility
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const handleGenerateClick = () => {
    setShowTable(true); // Show the table when Generate is clicked
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const apiurl = (import.meta.env.VITE_API);
      const response = await fetch(apiurl); 
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []); 

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

  const cleanedData = cleanData(data);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the data based on the search term
  const filteredData = cleanedData.filter((entry) => {
    return (
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const paginateData = (data, entriesPerPage, page) => {
    const startIndex = (page - 1) * entriesPerPage;
    return data.slice(startIndex, startIndex + entriesPerPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPages = Math.ceil(filteredData.length / entries);
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedData = paginateData(filteredData, entries, currentPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-3 bg-white-500 relative">
        <header className="bg-gray-600 p-3 rounded shadow flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-base font-semibold">Daily Report</h1>
          </div>
        </header>

        <header className="bg-gray-600 mt-4 p-3 rounded shadow flex justify-between items-center">
          <h2 className="text-white text-base font-semibold">Select Date </h2>
        </header>

        <main className="bg-gray-200 mt-4 p-4 rounded border border-2xl shadow-lg">
          <div className="flex justify-between items-center">
            {/* From Date Input */}
            <div className="flex flex-col">
              <label htmlFor="fromDate" className="block text-gray-700 font-semibold">
                From Date:
              </label>
              <input
                type="date"
                id="fromDate"
                className="border border-gray-300 rounded mt-2 p-2 w-64"
              />
            </div>

            {/* Buttons Section */}
            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleGenerateClick}
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
              >
                Generate
              </button>
              <button
                id="exportbtn"
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
              >
                Export
              </button>
            </div>
          </div>
        </main>

        {/* Main Table Content */}
        <main className="bg-blue-600 mt-4 p-4 rounded border border-2xl shadow-lg">
          <h1 className='text-white font-semibold'> Daily Report-Table </h1>

          <div className="mt-4 flex justify-between items-center">
            {/* Entries Per Page Selector */}
            <div className="flex items-center space-x-2">
              <label htmlFor="entries" className="text-white font-semibold">Entries per page:</label>
              <select
                id="entries"
                value={entries}
                onChange={(e) => setEntries(parseInt(e.target.value))}
                className="border border-gray-300 rounded p-2"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="border border-gray-300 rounded p-2 w-64"
              />
            </div>
          </div>

          {/* Table Display */}
          <main className="bg-gray-200 mt-4 p-4 rounded border border-2xl shadow-lg">
            {showTable && (
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead className="bg-gray-500 text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-center">S.No</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">DateTime</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Tested</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Completed</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Pending</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Reworked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((entry, index) => (
                      <tr key={entry.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{entry.title}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{entry.price}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{entry.description}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{entry.category}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{entry.Reworked}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </main>

          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-white text-gray-800 px-4 py-2 rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <span className="text-white font-semibold">Page {currentPage}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(filteredData.length / entries)}
              className="bg-white text-gray-800 px-4 py-2 rounded disabled:bg-green-300"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Report;
