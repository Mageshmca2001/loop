import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const Meter = () => {
  useEffect(() => {
    document.title = "BGT - MeterReports"; // Update the title
  }, []);

  const [data, setData] = useState([
    { id: 1, name: "Item 1", DateTime: "2024-12-01" },
    { id: 2, name: "Item 2", DateTime: "2024-12-02" },
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  

  // Function to remove duplicates based on unique `id` and `DateTime`
  const cleanData = (dataset) => {
    const seen = new Set();
    return dataset.filter((item) => {
      const identifier = `${item.id}-${item.DateTime}`;
      if (seen.has(identifier)) {
        return false;
      }
      seen.add(identifier);
      return true;
    });
  };

  const handleAdd = () => {
    const newItem = {
      id: data.length + 1,
      name: `Item ${data.length + 1}`,
      DateTime: new Date().toISOString().split("T")[0],
    };
    setData([...data, newItem]);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleUpdate = (id, newName) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  const cleanedData = cleanData(data);

  return (



    <div className="flex">
      {/* Sidebar */}
      { <Sidebar />}

      <div className="flex-1 p-4">
        
        <div className="mb-4">
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Add Item
          </button>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>

            {cleanedData.map((item) => (
              <tr key={item.id}>
                <td className=" text-center border border-gray-300 px-4 py-2">{item.id}</td>
                <td className=" text-center border border-gray-300 px-4 py-2">{item.name}</td>
                <td className=" text-center border border-gray-300 px-4 py-2">
                  {item.DateTime}
                </td>
                <td className="text-center border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleUpdate(item.id, `${item.name} Updated`)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Meter;
