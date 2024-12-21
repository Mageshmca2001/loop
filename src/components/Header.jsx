/*import React, { useState } from 'react';
import './css/header.css';

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div className="flex-1 p-3 bg-white-500 relative">
      <header className="bg-gray-600 p-3 rounded shadow flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-semibold">Dashboard</h1>

         
          {isSearchVisible && (
            <div className="search-bar ml-4 p-2 bg-white shadow-md rounded-md flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="input border p-2 rounded-l-md"
              />
              <button type="button" className="bg-blue-500 p-2 rounded-2-md">
                <i className="bx bx-search text-white"></i>
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
         
          <i className="bx bx-bell text-2xl cursor-pointer text-white"></i>

          
          <button
            className="text-2xl p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            onClick={toggleSearch}
          >
            <i className="bx bx-search"></i>
          </button>

        
          <button
            className="text-1xl p-2 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            onClick={() => alert('Logged Out')} // Add your logout functionality here
          >
            <i className="bx bx-log-out"></i> Logout
          </button>
        </div>
      </header>

     
      <main className="bg-gray-200 mt-4 p-4 rounded border border-2xl shadow-lg">
        <div className="container">
          <div className="card red">
            <div className="number">Users</div>
            <div className="col-xs-6">
              <i className="fa fa-users fa-2x"></i>
            </div>
            <div className="more-info">
              <a href="../index.html">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div className="card blue">
            <div className="number">Configuration</div>
            <div className="col-xs-6">
              <i className="fa fa-cogs fa-2x"></i>
            </div>
            <div className="more-info">
              <a href="../index.html">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div className="card red">
            <div className="number">Reports</div>
            <div className="col-xs-6">
              <i className="fa fa-file-alt fa-2x"></i>
            </div>
            <div className="more-info">
              <a href="../index.html">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div className="card blue">
            <div className="number">Analytics</div>
            <div className="col-xs-6">
              <i className="fa fa-chart-line fa-2x"></i>
            </div>
            <div className="more-info">
              <a href="../index.html">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div className="card red">
            <div className="number">Meters</div>
            <div className="col-xs-6">
              <i className="fa fa-tachometer-alt fa-2x"></i>
            </div>
            <div className="more-info">
              <a href="../index.html">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/header.css';



const Header = () => {
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
    <div className="flex-1 p-4 bg-gray-100 min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
  <header className="bg-gray-800 p-4 rounded-md shadow-md flex flex-wrap justify-between items-center">
    <div className="flex items-center space-x-4">
      <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      {isSearchVisible && (
        <div className="relative bg-white rounded-md shadow-md flex items-center overflow-hidden w-full max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border-none focus:ring-0 rounded-l-md text-gray-700 w-full"
          />
          <button className="bg-blue-500 p-2 rounded-r-md hover:bg-blue-600">
            <i className="bx bx-search text-white"></i>
          </button>
        </div>
      )}
    </div>

    <div className="flex items-center space-x-4">
      <i className="bx bx-bell text-2xl cursor-pointer text-white"></i>
      <button
        className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 focus:outline-none"
        onClick={toggleSearch}
      >
        <i className="bx bx-search"></i>
      </button>
      <button
        className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 focus:outline-none flex items-center space-x-1"
        onClick={handleLogout}
      >
        <i className="bx bx-log-out"></i>
        <span className="hidden md:inline">Logout</span>
      </button>
    </div>
  </header>

  <main className=" max-7xl p-2  grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2 lg:grid-cols-4">
    {[
      { title: "Users", icon: "fa-users", color: "bg-red-500" },
      { title: "Configuration", icon: "fa-cogs", color: "bg-blue-500" },
      { title: "Reports", icon: "fa-file-alt", color: "bg-green-500" },
      { title: "Analytics", icon: "fa-chart-line", color: "bg-yellow-500" },
      
    ].map((card, index) => (
      <div
        key={index}
        className={`${card.color} bg-opacity-90 hover:bg-opacity-100 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between h-44 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer w-full`}
      >
        <div className="flex items-center space-x-4">
          <i className={`fa ${card.icon} text-4xl`}></i>
          <div className="text-left">
            <h2 className="text-xl font-bold tracking-wide text-center md:text-left">{card.title}</h2>
            <p className="text-sm text-gray-200 text-center md:text-left">Quick access to {card.title.toLowerCase()} details</p>
          </div>
        </div>
        <a
          href="../index.html"
          className="text-sm mt-2 flex items-center space-x-1 hover:underline"
        >
          <span>More info</span>
          <i className="fas fa-arrow-circle-right"></i>
        </a>
      </div>
    ))}
  </main>
</div>

  );
};

export default Header;

