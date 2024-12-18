import React, { useState } from 'react';
import './css/header.css';




const Header = () => {

  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  
  return(
    
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
        </div>
      </header>

 {/* main Page Content */}
 <main className="bg-gray-200 mt-4 p-4 rounded border border-2xl shadow-lg">

 <div class="container">

        <div class="card red">

            <div class="number">Users</div>

            <div class="col-xs-6">

                <i class="fa fa-users fa-2x"></i>
            </div>
            <div class="more-info">
              <a href="../index.html">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>

        <div class="card blue">

            <div class="number">Configuration</div>

            <div class="col-xs-6">

                <i class="fa fa-cogs fa-2x"></i>

            </div>
            
            <div class="more-info">

              <a href="../index.html">More info <i class="fas fa-arrow-circle-right"></i></a>

            </div>

        </div>

        <div class="card red">

            <div class="number">Reports</div>

            <div class="col-xs-6">

            <i class="fa fa-file-alt fa-2x"></i>


            </div>
            
            <div class="more-info">

              <a href="../index.html">More info <i class="fas fa-arrow-circle-right"></i></a>

            </div>

        </div>

        <div class="card blue">

            <div class="number">Analytics</div>

            <div class="col-xs-6">

                <i class="fa fa-chart-line fa-2x"></i>

            </div>
            <div class="more-info">

              <a href="../index.html">More info <i class="fas fa-arrow-circle-right"></i></a>

            </div>

        </div>

        <div class="card red">

            <div class="number">Meters</div>

            <div class="col-xs-6">

                <i class="fa fa-tachometer-alt fa-2x"></i>

            </div>

            <div class="more-info">

              <a href="../index.html">More info <i class="fas fa-arrow-circle-right"></i></a>

            </div>

        </div>

        </div>
  

      </main>


      
 </div>

  );
};
  
export default Header;

/*import React, { useState } from 'react';

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <section className="home-section">
      <div className="home-content flex justify-between items-center p-4">
        <div className="flex items-center">
          <i className="bx bx-menu"></i>
          <span className="text ml-2">Dashboard</span>
        </div>

        <div className="relative">
          <i
            className="bx bx-search search-toggle cursor-pointer"
            onClick={toggleSearch}
          ></i>
          {isSearchVisible && (
            <div className="search-bar absolute top-0 right-0 mt-2 p-2 bg-white shadow-md rounded-md flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="input border p-2 rounded-l-md"
              />
              <button type="button" className="bg-blue-500 p-2 rounded-r-md">
                <i className="bx bx-search text-white"></i>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="card bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <div className="number">Users</div>
          <div className="col-xs-6">
            <i className="fa fa-users fa-2x"></i>
          </div>
          <div className="more-info">
            <a href="../index.html" className="text-white hover:underline">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>

        <div className="card bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <div className="number">Configuration</div>
          <div className="col-xs-6">
            <i className="fa fa-cogs fa-2x"></i>
          </div>
          <div className="more-info">
            <a href="../index.html" className="text-white hover:underline">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>

        <div className="card bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
          <div className="number">Analytics</div>
          <div className="col-xs-6">
            <i className="fa fa-chart-line fa-2x"></i>
          </div>
          <div className="more-info">
            <a href="../index.html" className="text-white hover:underline">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>

        <div className="card bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <div className="number">Meters</div>
          <div className="col-xs-6">
            <i className="fa fa-tachometer-alt fa-2x"></i>
          </div>
          <div className="more-info">
            <a href="../index.html" className="text-white hover:underline">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;*/
