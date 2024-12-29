import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold flex items-center">
        <span className="material-icons text-white mr-2">code</span>
        <span>coding2go</span>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="block lg:hidden p-2 rounded-md hover:bg-blue-500 focus:outline-none"
      >
        <span className="material-icons">menu</span>
      </button>
    </header>
  );
};

export default Header;
