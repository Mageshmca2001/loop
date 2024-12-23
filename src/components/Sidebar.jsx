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


import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import logoImage from '../images/logo.png'; 
import {   
  LayoutDashboard, 
  FileText, 
  Users, 
  LogOut, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
  BarChart2,
} from 'lucide-react'; 

const Sidebar = ({ children }) => {   
  const [isCollapsed, setIsCollapsed] = useState(false);   
  const [openDropdown, setOpenDropdown] = useState(null);    // State for dropdown visibility

  const menuItems = [      
    {       
      icon: LayoutDashboard,       
      label: 'Dashboard',       
      route: '/dashboard',     
    },   
    {
      icon: FileText,
      label: 'Reports',
      route: '#',  // No direct link, as it's a dropdown
      subItems: [
        { icon: FileText, label: 'Daily Report', route: '/reports/daily' },
        { icon: FileText,label: 'Monthly Report', route: '/reports/monthly' },
        { icon: FileText,label: 'Meter Report', route: '/reports/meter' },
      ],  // Submenu items for Reports
    },
    {       
      icon: Users,       
      label: 'Users',       
      route: '/users',     
    },     
    {       
      icon: LogOut,       
      label: 'Logout',       
      route: '/logout',     
    },    
  ];   

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);   

  const handleDropdownToggle = (route) => {     
    setOpenDropdown(openDropdown === route ? null : route);   
  };    

  return (     
    <div className="flex h-screen">       
      {/* Sidebar */}       
      <div         
        className={`fixed h-screen bg-gray-800 text-white shadow-xl transition-all duration-300 ${           
          isCollapsed ? 'w-20' : 'w-64'         
        }`}       
      >         
        <button           
          onClick={toggleSidebar}           
          className="absolute top-4 right-[-6px] transform translate-x-1/2 bg-gray-700 border-2 border-white p-2 rounded-full z-10 hover:bg-gray-600 transition duration-300 hover:scale-105"         
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

        {/* Sidebar Navigation */}         
        <nav className="mt-4">           
          {menuItems.map((item) => (
            <div key={item.route}>
              <Link
                to={item.route}
                className={`w-full flex items-center px-4 py-3 hover:bg-gray-700 transition-all ${                   
                  isCollapsed ? 'justify-center' : 'justify-start'                 
                }`}
                onClick={() => item.subItems && handleDropdownToggle(item.route)}
              >
                <item.icon className="w-5 h-5" />
                {!isCollapsed && (
                  <div className="flex justify-between items-center w-full ml-3">
                    <span>{item.label}</span>
                    {item.subItems && (
                      <div className="text-xs">
                        {openDropdown === item.route ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    )}
                  </div>
                )}
              </Link>

              {/* Dropdown for Reports */}
              {item.subItems && openDropdown === item.route && (
                <div className="pl-8 mt-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.route}
                      to={subItem.route}
                      className={`w-full flex items-center px-4 py-3 hover:bg-gray-700 transition-all ${                   
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
        className={`flex-1 ml-${isCollapsed ? '16' : '64'} transition-all duration-300`}       
      >         
        <div className="p-4">{children}</div>       
      </div>     
    </div>   
  ); 
};  

export default Sidebar;


