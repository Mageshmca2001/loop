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


      
</div>
  );
};

export default Report;
