/*import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
     
      <Sidebar />

   
      <div className="flex-1 p-4 bg-gray-100">
        <header className="mb-4 bg-white p-4 rounded shadow">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </header>

        <main className="bg-white p-6 rounded shadow">
          
          <p>Welcome to the Dashboard! Add your template content here.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;*/


import React, { useState } from 'react';
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Adjust the path based on your project structure

const Dashboard = () => {

  useEffect(() => {
    document.title = 'BGT - Dashboard'; // Update the title for the Login Page
  }, []);
  
  const [isSearchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate(); // Create the navigate function

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleLogout = () => {
    // Clear any user authentication state or tokens here if needed
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="flex">
      <Sidebar />
      
    </div>
  );
};

export default Dashboard ;
