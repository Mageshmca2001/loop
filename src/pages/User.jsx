import { useState } from "react";
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar'; // Make sure to import the Sidebar

const Users = () => {

   useEffect(() => {
      document.title = 'BGT - User-details'; // Update the title for the Login Page
    }, []);

  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    { id: 1, name: "B.Magesh", date: "02.12.2024", role: "Software Engineering", status: "Active" },
    { id: 2, name: "U.Kamalesh Waran", date: "03.12.2024", role: "Software Developer", status: "Active" },
    { id: 3, name: "T.Mukesh", date: "04.12.2024", role: "Devops Engineering", status: "Active" },
    { id: 4, name: "S.Babu", date: "05.12.2024", role: "Technical Support", status: "Active" },
    { id: 5, name: "M,Monisha", date: "06.12.2024", role: "Sr.Software Engineering", status: "Active" },
    { id: 6, name: "S.Dhanush", date: "07.12.2024", role: "Devops Engineering", status: "Active" },
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

      {/* Main Content Area */}

      
      <div className="flex-1 p-6 bg-white">
      <div class="bg-blue-600 text-white p-4 rounded-t mt-4 cursor-pointer">

    Users Details

    

      </div>
        <div className="flex justify-between items-center mt-4 mb-4">
            
          <div>

            <label htmlFor="entries" className="mr-2">Show</label>
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
            <span className="ml-2">entries</span>
          </div>
          <div>
            <label htmlFor="search" className="mr-2">Search:</label>
            <input
              type="text"
              id="search"
              className="border border-gray-300 rounded p-1"
              onChange={handleSearch}
            />
           
          </div>
          </div>
     
        

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2">S.No</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2">User name</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2">Created Date</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2">Role</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2">Status</th>
              <th className="border border-gray-300 text-white bg-blue-500 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-300 text-center px-4 py-2">{row.id}</td>
                <td className="border border-gray-300 text-center px-4 py-2">{row.name}</td>
                <td className="border border-gray-300 text-center px-4 py-2">{row.date}</td>
                <td className="border border-gray-300 text-center px-4 py-2">{row.role}</td>
                <td className="border border-gray-300 text-center px-4 py-2">{row.status}</td>
                <td className="border border-gray-300 text-center px-4 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
};

export default Users;
