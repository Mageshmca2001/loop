import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import Sidebar from '../../components/Sidebar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Real-Time Data',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  });

  const intervalRef = useRef(null);

  const fetchData = () => {
    const newTime = new Date().toLocaleTimeString();
    const newValue = Math.floor(Math.random() * 100);
  
    setChartData((prevState) => {
      const updatedLabels = [...prevState.labels, newTime].slice(-10); // Keeps the last 10 time labels
      const updatedData = [...prevState.datasets[0].data, newValue].slice(-10); // Keeps the last 10 data points
  
      return {
        labels: updatedLabels,
        datasets: [
          {
            ...prevState.datasets[0],
            data: updatedData,
          },
        ],
      };
    });
  };
  

  useEffect(() => {
    intervalRef.current = setInterval(fetchData, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  const handlePopValue = () => {
    setChartData((prevState) => {
      const updatedLabels = prevState.labels.slice(1);
      const updatedData = prevState.datasets[0].data.slice(1);

      return {
        labels: updatedLabels,
        datasets: [
          {
            ...prevState.datasets[0],
            data: updatedData,
          },
        ],
      };
    });
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-4 bg-gray-100 min-h-screen">

      <div className="w-full max-w-7xl mx-auto p-6">

<div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md p-4 rounded-lg">
  <h1 className="text-xl font-bold text-gray-700">📈 Real-Time Chart</h1>
  <button
    onClick={handleRefresh}
    className="mt-4 sm:mt-0 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
  >
    Refresh Data
  </button>
</div>

<div className="mt-6 bg-white rounded-lg shadow-md p-4">
  <div className="w-full h-full sm:h-[400px]">
    <Line
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,  // Ensures chart takes up full height of its container
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Value',
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      }}
    />
  </div>



            <div className="flex justify-center mt-4 gap-4 flex-col sm:flex-row">

              <button
                onClick={handlePopValue}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
              >
                Pop Value
              </button>

              <button
                onClick={handleRefresh}
                className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
              >
                Refresh Data
              </button>

            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Chart;
