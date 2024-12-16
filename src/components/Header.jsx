import React from 'react';

const Header = () => {
  return(
    
    <div className="flex-1 p-3 bg-white-500">
        <header className=" bg-gray-300 p-4 rounded shadow">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </header>
        <main className="bg-white p-6 rounded shadow">
          <p>Welcome to the Dashboard! Add your template content here.</p>
        </main>
      </div>

  );
};
  
export default Header;