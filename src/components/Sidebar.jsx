import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import logoImage from '../images/logo.png'; 
import {   
  LayoutDashboard, 
  FileText, 
  Settings, 
  Users, 
  BarChart2,
  Activity,
  ChevronLeft, 
  ChevronDown, 
  ChevronUp,
  Menu, // Hamburger icon
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
      setOpenDropdown(matchingMenuItem.label);
    } else {
      setOpenDropdown(null);
    }
  }, [location.pathname]);

  return (     
    <div className="flex h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>       
      {/* Sidebar */}       
     <div
  className={`fixed h-screen bg-blue-800 text-white shadow-2xl transition-all duration-300 ease-in-out
    ${isCollapsed ? 'w-20' : 'w-64'}`}
>
      
        <button           
          onClick={toggleSidebar}           
          className="absolute top-4 right-[-27px] transform translate-x-1/2 bg-gray-700 border-2 border-gray-300 p-2 rounded-full z-10 hover:bg-gray-600 transition duration-300 hover:scale-105"         
        >           
          {isCollapsed ? <Menu className="w-6 h-6" /> : <ChevronLeft />}         
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
                  className={`w-full flex items-center px-4 py-3 hover:bg-blue-600 transition-all font-medium ${
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
                  className={`w-full flex items-center px-4 py-3 hover:bg-blue-600 transition-all font-medium ${
                    isCollapsed ? 'justify-center' : 'justify-start'
                  }`}
                  onClick={() => setOpenDropdown(null)} // Close dropdown when a link is clicked
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
                      className={`w-full flex items-center px-4 py-3 hover:bg-blue-700 transition-all font-light ${
                        isCollapsed ? 'justify-center' : 'justify-start'
                      }`}
                      onClick={() => setOpenDropdown(null)} // Close dropdown when a sub-item is clicked
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
