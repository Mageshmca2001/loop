import React from 'react';
import { useState, useEffect } from "react";
import Sidebar from '../../components/Sidebar';

const Monthly = () => {

  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); // 
  
  

 const [showTable, setShowTable] = useState(false); // State to manage table visibility
 
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
  
  console.log("Cleaned Data:", cleanedData);
  console.log("Total Records After Cleanup:", cleanedData.length);
  

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
            <h1 className="text-white text-base font-semibold">Meter Report</h1>
          </div>
        </header>

        <header className="bg-gray-600 mt-4 p-3 rounded shadow flex justify-between items-center">
          <h2 className="text-white text-base font-semibold">Select Meter </h2>
        </header>

  <main className="bg-gray-200 mt-4 p-4 rounded border border-2xl shadow-lg">
  <div className="flex justify-between items-center">
   
    <div className="flex space-x-4">

      {/* Year Selector */}
      <div className="flex flex-col">
        <label htmlFor="selectYear" className="mb-4 block text-gray-700 font-semibold">
          Select Year:
        </label>
        <select id="selectYear" className="border border-gray-300 rounded p-2 w-64">
          <option value="" disabled selected>
            Select Year
          </option>

          {Array.from({ length: 20 }, (_, i) => {
  const serialNumber = `A${(301 + i).toString().padStart(6, '0')}`;
  return (
    <option key={i} value={2020 + i}>
      {serialNumber}
    </option>
  );
})}
        </select>
      </div>
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


 {/* main table content */ }

 <main className="bg-blue-600 mt-4 p-4 rounded border border-2xl shadow-lg">

  <h1 className='text-white font-semibold'> Meter Report-Table </h1>

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
              disabled={currentPage === Math.ceil(data.length / entries)}
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

export default Monthly;

