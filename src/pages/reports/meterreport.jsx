import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";


const Meter = () => {
  const [entries, setEntries] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); // 

 

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
          <h2 className="text-white text-base font-semibold">
            Select From Date 
          </h2>
        </header>

        <main className="bg-gray-200 mt-4 p-4 rounded border border-2xl shadow-lg">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
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
              {paginatedData.map((item, index) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b text-center">{(currentPage - 1) * entries + index + 1}</td>
                  <td className="py-2 px-4 border-b text-center">{item.name || "N/A"}</td>
                  <td className="py-2 px-4 border-b text-center">{item.tested || "N/A"}</td>
                  <td className="py-2 px-4 border-b text-center">{item.completed || "N/A"}</td>
                  <td className="py-2 px-4 border-b text-center">{item.pending || "N/A"}</td>
                  <td className="py-2 px-4 border-b text-center">{item.reworked || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {Math.ceil(data.length / entries)}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(data.length / entries)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Meter;
