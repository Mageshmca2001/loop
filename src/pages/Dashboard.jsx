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

import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <Header/>
      
    </div>
  );
};

export default Dashboard;
