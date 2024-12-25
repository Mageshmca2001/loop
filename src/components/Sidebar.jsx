/*import React, { useState } from 'react';
import logoImage from '../images/logo.png';
import {
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  FileText,
  BarChart2,
  PieChart,
  Activity,
  TrendingUp,
  Percent,
  ClipboardList,
  Calendar,
  Users,
  LogOut,
  ChevronDown,
} from 'lucide-react';

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: FileText,
      label: 'Reports',
      route: 'reports',
      subItems: [
        { icon: Calendar, label: 'Daily Report', route: 'daily-report' },
        { icon: BarChart2, label: 'Monthly Report', route: 'monthly-report' },
        { icon: ClipboardList, label: 'Meter Reports', route: 'meter-reports' },
      ],
    },
    {
      icon: BarChart2,
      label: 'Charts',
      route: 'charts',
      subItems: [
        { icon: PieChart, label: 'Sales Chart', route: 'sales-chart' },
        { icon: TrendingUp, label: 'Growth Chart', route: 'growth-chart' },
      ],
    },
    {
      icon: Activity,
      label: 'Analytics',
      route: 'analytics',
      subItems: [
        { icon: TrendingUp, label: 'Website Traffic', route: 'website-traffic' },
        { icon: Percent, label: 'Conversion Rates', route: 'conversion-rates' },
      ],
    },
    {
      icon: Users,
      label: 'Users',
      route: 'users',
    },
    {
      icon: LogOut,
      label: 'Logout',
      route: 'logout',
    },
  ];

  const toggleSidebar = () => {
    const collapsed = !isCollapsed;
    setIsCollapsed(collapsed);
    onToggle(collapsed); // Notify parent layout
  };

  const handleDropdownToggle = (route) => {
    setOpenDropdown(openDropdown === route ? null : route);
  };

  return (
    <div
      className={`fixed h-screen bg-gray-800 text-white shadow-xl transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
     <button
  onClick={toggleSidebar}
  className="absolute top-4 right-[-10px] transform translate-x-1/2 bg-gray-700 border-2 border-white p-2 rounded-full z-10 hover:bg-gray-600 transition duration-300 hover:scale-105"
>
  {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
</button>


      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        {!isCollapsed ? (
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        ) : (
          <img src={logoImage} className="rounded-full w-10 h-10" alt="Logo" />
        )}
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => (
          <div key={item.route}>
            <button
              onClick={() => {
                if (item.subItems) {
                  handleDropdownToggle(item.route);
                }
              }}
              className={`w-full flex items-center px-4 py-3 hover:bg-gray-700 transition duration-300 ${
                isCollapsed ? 'justify-center' : 'justify-start'
              }`}
            >
              <item.icon />
              {!isCollapsed && (
                <div className="flex justify-between w-full items-center ml-3">
                  <span>{item.label}</span>
                  {item.subItems && (
                    <ChevronDown
                      className={`transition-transform ${
                        openDropdown === item.route ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  )}
                </div>
              )}
            </button>

            {item.subItems && openDropdown === item.route && (
              <div
                className={`pl-8 ${
                  isCollapsed ? 'hidden' : 'block'
                } transition-all`}
              >
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.route}
                    className="w-full flex items-center px-4 py-2 hover:bg-gray-600 text-gray-300 transition duration-300"
                  >
                    <subItem.icon className="mr-3" />
                    <span>{subItem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
    
    
  );
};

export default Sidebar;*/


import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import logoImage from '../images/logo.png'; 
import {   
  LayoutDashboard, 
  FileText, 
  Settings, 
  Users, 
  BarChart2   ,
  Activity,
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
} from 'lucide-react'; 

const Sidebar = ({ children }) => {   
  const [isCollapsed, setIsCollapsed] = useState(false);   
  const [openDropdown, setOpenDropdown] = useState(null);   
  const location = useLocation(); // Get current location

  const menuItems = [      
    {       
      icon: LayoutDashboard,       
      label: 'Dashboard',       
      route: '/dashboard',     
    },   
    {
      icon: FileText,
      label: 'Reports',
      route: null,  // Indicates dropdown
      subItems: [
        { icon: FileText, label: 'Daily Report', route: '/reports/daily' },
        { icon: FileText, label: 'Monthly Report', route: '/reports/monthly' },
        { icon: FileText, label: 'Meter Report', route: '/reports/meter' },
      ],
    },
    {
      icon: Settings,
      label: 'Configuration',
      route: null, // Indicates dropdown
      subItems: [
        { icon: Users, label: 'Users', route: '/users' },
      ],
    },

    {
      icon: BarChart2   ,
      label: 'Charts',
      route: '/chart/chart', 
    },
    {
      icon: Activity   ,
      label: 'Analytics',
      route: '/analytics', 
    },
  ]; 

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);   

  const handleDropdownToggle = (route) => {     
    setOpenDropdown(openDropdown === route ? null : route);   
  };    

  useEffect(() => {
    const currentPath = location.pathname;
    const matchingMenuItem = menuItems.find(
      (item) => item.subItems && item.subItems.some((sub) => sub.route === currentPath)
    );

    if (matchingMenuItem) {
      setOpenDropdown(matchingMenuItem.route);
    } else {
      setOpenDropdown(null);
    }
  }, [location.pathname]);

  return (     
    <div className="flex h-screen bg-gray-100" style={{ fontFamily: 'Poppins, sans-serif' }}>       
      {/* Sidebar */}       
      <div         
        className={`fixed h-screen bg-gray-900 text-white shadow-2xl transition-all duration-300 ${           
          isCollapsed ? 'w-20' : 'w-64'         
        }`}       
      >         
        <button           
          onClick={toggleSidebar}           
          className="absolute top-4 right-[-6px] transform translate-x-1/2 bg-gray-700 border-2 border-gray-300 p-2 rounded-full z-10 hover:bg-gray-600 transition duration-300 hover:scale-105"         
        >           
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}         
        </button>          

        <div className="h-16 flex items-center justify-center border-b border-gray-800">           
          {!isCollapsed ? (
            <h1 className="text-xl font-bold tracking-widest">Admin Dashboard</h1>           
          ) : (             
            <img src={logoImage} className="rounded-full w-10 h-10" alt="Logo" />           
          )}         
        </div>          

        {/* Sidebar Navigation */}         
        <nav className="mt-6">           
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.subItems ? (
                // Dropdown Toggle Button
                <button
                  className={`w-full flex items-center px-4 py-3 hover:bg-gray-800 transition-all font-medium ${
                    isCollapsed ? 'justify-center' : 'justify-start'
                  }`}
                  onClick={() => handleDropdownToggle(item.label)}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && (
                    <div className="flex justify-between items-center w-full ml-3">
                      <span>{item.label}</span>
                      <div className="text-xs">
                        {openDropdown === item.label ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    </div>
                  )}
                </button>
              ) : (
                // Regular Link
                <Link
                  to={item.route}
                  className={`w-full flex items-center px-4 py-3 hover:bg-gray-800 transition-all font-medium ${
                    isCollapsed ? 'justify-center' : 'justify-start'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              )}

              {/* Dropdown Items */}
              {item.subItems && openDropdown === item.label && (
                <div 
                  className={`pl-8 mt-2 transition-all duration-300 ${
                    isCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-96 overflow-auto'
                  }`}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.route}
                      to={subItem.route}
                      className={`w-full flex items-center px-4 py-3 hover:bg-gray-800 transition-all font-light ${
                        isCollapsed ? 'justify-center' : 'justify-start'
                      }`}
                    >
                      {subItem.icon && <subItem.icon className="w-5 h-5 mr-2" />}
                      <span>{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}         
        </nav>       
      </div>        

      {/* Main Content */}       
      <div         
        className={`flex-1 ml-${isCollapsed ? '20' : '64'} transition-all duration-300`}       
      >         
        <div className="p-3">{children}</div>       
      </div>     
    </div>   
  ); 
};  

export default Sidebar;







