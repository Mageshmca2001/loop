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
      heading: '* MAIN *', // Section heading
      items: [
        {
          icon: LayoutDashboard,
          label: 'Dashboard',
          route: '/dashboard',
        },
      ],
    },
    {
      heading: '* REPORTS *', // Section heading
      items: [
        {
          icon: FileText,
          label: 'Reports',
          route: null, // Indicates dropdown
          subItems: [
            { icon: FileText, label: 'Daily Report', route: '/reports/daily' },
            { icon: FileText, label: 'Monthly Report', route: '/reports/monthly' },
            { icon: FileText, label: 'Meter Report', route: '/reports/meter' },
          ],
        },
      ],
    },
    {
      heading: '* SETTINGS *', // Section heading
      items: [
        {
          icon: Settings,
          label: 'Configuration',
          route: null, // Indicates dropdown
          subItems: [
            { icon: Users, label: 'Users', route: '/users' },
          ],
        },
      ],
    },
    {
      heading: '* ANALYTICS *', // Section heading
      items: [
        {
          icon: BarChart2,
          label: 'Charts',
          route: '/chart/chart',
        },
        {
          icon: Activity,
          label: 'Analytics',
          route: '/analytics',
        },
      ],
    },
  ];
  
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);   

  const handleDropdownToggle = (route) => {     
    setOpenDropdown(openDropdown === route ? null : route);   
  };    

  const handleLinkClick = () => {
    setOpenDropdown(null); // Close dropdown when a link is clicked
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const matchingMenuItem = menuItems.find(
      (section) =>
        section.items.some(
          (item) =>
            item.subItems && item.subItems.some((sub) => sub.route === currentPath)
        )
    );

    if (matchingMenuItem) {
      setOpenDropdown(
        matchingMenuItem.items.find((item) => item.subItems)?.label
      );
    } else {
      setOpenDropdown(null);
    }
  }, [location.pathname]);

  return (     
    <div className="flex h-screen " style={{ fontFamily: 'Poppins, sans-serif' }}>       
      {/* Sidebar */}       
      <div
        className={`fixed h-screen bg-blue-800 text-[rgb(255,255,255)]shadow-2xl transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-20' : 'w-64'}`}
      >
        <button           
          onClick={toggleSidebar}           
          className="absolute top-4 right-[-28px] text-[rgb(255,255,255)] transform translate-x-1/2 bg-blue-500 border-2 border-gray-300 p-2 rounded-full z-10 hover:bg-blue-800 transition duration-300 hover:scale-105"         
        >           
          {isCollapsed ? <Menu className="w-6 h-6" /> : <ChevronLeft />}         
        </button>          

        <div className="h-16 flex items-center justify-center border-b border-white">           
          {!isCollapsed ? (
            <h1 className="text-base text-white font-bold tracking-widest"> BGT Dashboard</h1>           
          ) : (             
            <img src={logoImage} className="rounded-full w-10 h-10" alt="Logo" />           
          )}         
        </div>          

       {/* Sidebar Navigation */}
<nav className="mt-6 h-full overflow-y-auto">
  {menuItems.map((section, index) => (
    <div key={index} className="mb-4">
      {!isCollapsed && (
        <h2
          className="text-sm font-semibold text-[rgb(255,255,255)] px-4 py-2 uppercase"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {section.heading}
        </h2>
      )}
      {section.items.map((item) => (
        <div key={item.label}>
          {item.subItems ? (
            // Dropdown Toggle Button
            <button
              className={`w-full flex items-center px-4 py-3 text-[rgb(255,255,255)] hover:bg-blue-600 hover:text-[rgb(255,255,255)] transition-all font-medium ${
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
              className={`w-full flex items-center px-4 py-3 text-[rgb(255,255,255)] hover:bg-blue-600 hover:text-[rgb(255,255,255)] transition-all font-medium ${
                isCollapsed ? 'justify-center' : 'justify-start'
              }`}
              onClick={handleLinkClick} // Close dropdown when a link is clicked
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
                  className={`w-full flex items-center px-4 py-3 text-[rgb(255,255,255)] hover:bg-blue-700 hover:text-[rgb(255,255,255)] transition-all font-light ${
                    isCollapsed ? 'justify-center' : 'justify-start'
                  }`}
                  onClick={handleLinkClick} // Close dropdown when a sub-item is clicked
                >
                  {subItem.icon && <subItem.icon className="w-5 h-5 mr-2" />}
                  <span>{subItem.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
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
