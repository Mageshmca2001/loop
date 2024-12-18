// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Users from './pages/User';
import Report from './pages/reports/Dailyreport';
import Monthly from './pages/reports/monthlyreport';
import Meter from './pages/reports/meterreport';


const App = () => {
  return (
    
    <Routes>

      <Route path="/" element={<LoginPage/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/reports/daily' element={<Report/>}/>
      <Route path='/reports/monthly' element={<Monthly/>}/>
      <Route path='/reports/meter' element={<Meter/>}/>

    </Routes>
  );
};

export default App;
