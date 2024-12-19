import React from 'react';
import { useState } from "react";
import Sidebar from '../../components/Sidebar';

const Report = () => {

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
          <h2 className="text-white text-base font-semibold">Select From Date to Current Date</h2>
        </header>

        <main className="bg-gray-200 mt-4 p-4 rounded border border-2xl shadow-lg">
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <label htmlFor="fromDate" className="block text-gray-700 font-semibold ">From Date :</label>
              <input type="date" id="fromDate" className="border border-gray-300 rounded mt-2 p-2 w-64" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="toDate" className="block text-gray-700 font-semibold">To Date :</label>
              <input type="date" id="toDate" className="border border-gray-300 rounded mt-2 p-2 w-64" />
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

  <div className="flex justify-between items-center mt-4 mb-4">
            
            <div>
  
              <label htmlFor="entries" className="mr-2 text-white font-semibold">Show</label>
              <select
                id="entries"
                className="border border-gray-300 rounded p-1"
                value={entries}
                onChange={handleEntriesChange}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value="All">All</option>
              </select>
              <span className="ml-2 text-white font-semibold">entries</span>
            </div>
            <div>
              <label htmlFor="search" className="mr-2 text-white font-semibold">Search:</label>
              <input
                type="text"
                id="search"
                className="border border-gray-300 rounded p-1"
                onChange={handleSearch}
              />
             
            </div>
            </div>

  </main>


{/* main table */}

<main className=' mt-4 p-4 rounded border border-2xl shadow-lg'>
  
<div className="flex justify-between items-center mt-4 mb-4">

<table className="min-w-full bg-white border border-gray-300">
          <thead>

            <tr>

              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2">S.No</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2">Date/Time</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2"> No.of.Meter Tested</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2"> No.of.Meter Completed</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2"> No.of.Meter Pending</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2"> No.of.Meter Reworked</th>
              
            </tr>
            
            </thead>
            <tbody>
            {paginatedData.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-300 text-center px-4 py-2">{row.id}</td>
                <td className="border border-gray-300 text-center px-4 py-2">{row.Tested}</td>
                <td className="border border-gray-300 text-center px-4 py-2">{row.completed}</td>
                <td className="border border-gray-300 text-center px-4 py-2">{row.pending}</td>
                <td className="border border-gray-300 text-center px-4 py-2">{row.Reworked}</td>
                <td className="border border-gray-300 text-center px-4 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        
 </div>

</main>

<div className="flex justify-between items-center mt-4">
          <div>
            <span className="pagination-info">Showing {(currentPage - 1) * entries + 1} to {Math.min(currentPage * entries, data.length)} entries</span>
          </div>
          <div className="flex space-x-1">
            <button onClick={handlePrevPage} className="px-3 py-1 border border-gray-300 rounded bg-white">Previous</button>
            <button onClick={handleNextPage} className="px-3 py-1 border border-gray-300 rounded bg-white">Next</button>
          </div>
        </div>
 
      </div>
    </div>
  );
}

export default Report;
