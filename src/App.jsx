// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RouteWithLoader from './router/RouteWithLoader';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Users from './pages/User';
import Report from './pages/reports/Dailyreport';
import Monthly from './pages/reports/monthlyreport';
import Meter from './pages/reports/meterreport';
import Chart from './pages/chart/chart'




const App = () => {
  return (
    
    <Routes>

      <Route path="/" element={<RouteWithLoader element={LoginPage} />} />
      <Route path="/dashboard" element={<RouteWithLoader element={Dashboard} />} />
      <Route path="/users" element={<RouteWithLoader element={Users} />} />
      <Route path="/reports/daily" element={<RouteWithLoader element={Report} />} />
      <Route path="/reports/monthly" element={<RouteWithLoader element={Monthly} />} />
      <Route path="/reports/meter" element={<RouteWithLoader element={Meter} />} />
      <Route path="/chart/chart" element={<RouteWithLoader element={Chart} />} />
    </Routes>
  );
};

export default App;
