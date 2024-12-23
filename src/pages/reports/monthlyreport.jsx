import React from 'react';
import { useState } from "react";
import Sidebar from '../../components/Sidebar';

const Monthly = () => {

  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 1, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 2, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 3, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 4, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 5, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 6, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 7, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 8, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 9, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    { id: 10, DateTime: "10.11.2024", Tested: "yes", completed: "yes", pending: "yes",Reworked: "yes" },
    
    
    
  ];

  const handleEntriesChange = (e) => {
    setEntries(parseInt(e.target.value));
  };

  const handleSearch = (e) => {
    // Handle search logic (e.g., filter data based on input)
  };

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
    const maxPages = Math.ceil(data.length / entries);
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedData = paginateData(data, entries, currentPage);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-3 bg-white-500 relative">
        <header className="bg-gray-600 p-3 rounded shadow flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-base font-semibold">Monthly Report</h1>
          </div>
        </header>

        <header className="bg-gray-600 mt-4 p-3 rounded shadow flex justify-between items-center">
          <h2 className="text-white text-base font-semibold">Select Month </h2>
        </header>

        <main className="bg-gray-200 mt-4 p-4 rounded border border-2xl shadow-lg">
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <label htmlFor="fromDate" className="block text-gray-700 font-semibold ">Select Date  :</label>
              <input type="date" id="fromDate" className="border border-gray-300 rounded mt-2 p-2 w-64" />
            </div>
          </div>

  <div class="flex-grow text-right">
   <button onclick="showTable()" class="bg-teal-500 text-white px-4 py-2 rounded ml-4 hover:bg-teal-600">Generate</button>
   <button id="exportbtn"class="bg-teal-500 text-white px-4 py-2 rounded ml-4  hover:bg-teal-600">Export</button>
 </div>

 </main>

 {/* main table content */ }

 <main className="bg-blue-600 mt-4 p-4 rounded border border-2xl shadow-lg">

  <h1 className='text-white font-semibold'> Daily Report-Table </h1>

  <div className="mt-4 flex justify-between items-center">
            {/* Entries Per Page Selector */}
            <div className="flex items-center space-x-2">
              <label htmlFor="entries" className="text-white font-semibold">Entries per page:</label>
              <select
                id="entries"
                value={entries}
                onChange={handleEntriesChange}
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
                onChange={handleSearch}
                className="border border-gray-300 rounded p-2 w-64"
              />
            </div>
          </div>

          {/* Table Display */}
          <main className="bg-gray-200 mt-4 p-4 rounded border border-2xl shadow-lg">
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
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td> {/* S.No column */}
                <td className="border border-gray-300 px-4 py-2 text-center">{entry.DateTime}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{entry.Tested}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{entry.completed}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{entry.pending}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{entry.Reworked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>


          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-gray-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <span className="text-white font-semibold">Page {currentPage}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(data.length / entries)}
              className="bg-gray-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Monthly;

