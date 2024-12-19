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
    <div className="flex-1 p-3 bg-white-500 relative">
      <header className="bg-gray-600 p-3 rounded shadow flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-semibold">Dashboard</h1>

          {/* Search Bar */}
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
          {/* Notification Icon */}
          <i className="bx bx-bell text-2xl cursor-pointer text-white"></i>

          {/* Button to Toggle Search Bar */}
          <button
            className="text-2xl p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            onClick={toggleSearch}
          >
            <i className="bx bx-search"></i>
          </button>

          {/* Logout Button */}
          <button
            className="text-1xl p-2 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            onClick={handleLogout} // Call the handleLogout function on click
          >
            <i className="bx bx-log-out"></i> Logout
          </button>
        </div>
      </header>

      {/* main Page Content */}
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

export default Header;

