import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
        {/* Add more dashboard content here */}
      </main>
    </div>
  );
};

export default Dashboard;
