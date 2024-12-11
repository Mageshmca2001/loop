import React, { useState } from 'react';
import logoImage from '../images/logo.png'
import {
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  FileText,
  Users,
  BarChart,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeRoute, setActiveRoute] = useState('dashboard');

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: FileText,
      label: 'Reports',
      route: 'reports'
    },
    {
      icon: Users,
      label: 'Users',
      route: 'users'
    },
    {
      icon: BarChart,
      label: 'Charts',
      route: 'charts'
    },
    {
      icon: LogOut,
      label: 'Logout',
      route: 'logout'
    }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`
      h-screen
      bg-gray-800
      text-white
      fixed
      left-0
      top-0
      bottom-0
      transition-all
      duration-500
      ease-in-out
      ${isCollapsed ? 'w-20' : 'w-64'}
      flex
      flex-col
      relative
      shadow-2xl
      transform
      ${isCollapsed ? 'translate-x-0' : 'translate-x-0'}
    `}>
      {/* Collapse/Expand Button */}
      <button
        onClick={toggleSidebar}
        className="
          absolute
          top-4
          right-0
          transform
          translate-x-1/2
          bg-gray-700
          p-2
          rounded-full
          z-10
          hover:bg-gray-600
          transition
          duration-300
          hover:scale-105
        "
      >
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </button>

      {/* Logo Area */}
      <div className="
        h-16
        flex
        items-center
        justify-center
        border-b
        border-gray-700
        transition-all
        duration-500
        ease-in-out
      ">
        {!isCollapsed ? (
          <div className="
            opacity-100
            transition-opacity
            duration-500
            ease-in-out
            flex
            items-center
            space-x-2
          ">
            
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
        ) : (
          <img 
            src={logoImage}
            className='rounded-full w-10 h-10 opacity-100 transition-opacity duration-500' 
            alt="Logo"
          />
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow mt-8 overflow-hidden">
        {menuItems.map((item) => (
          <button
            key={item.route}
            onClick={() => setActiveRoute(item.route)}
            className={`
              w-full
              flex
              items-center
              px-4
              py-3
              hover:bg-gray-700
              transition
              duration-300
              ease-in-out
              ${activeRoute === item.route
                ? 'bg-gray-700 text-blue-400'
                : 'text-gray-300'}
              ${isCollapsed ? 'justify-center' : 'justify-start'}
            `}
          >
            <item.icon
              className={`
                ${isCollapsed ? 'mr-0' : 'mr-3'}
                transition-all
                duration-500
                ease-in-out
              `}
            />
            {!isCollapsed && (
              <span className="
                truncate
                opacity-100
                transition-opacity
                duration-500
                ease-in-out
              ">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer or Additional Content */}
      <div className="
        border-t
        border-gray-700
        p-4
        text-center
        transition-all
        duration-500
        ease-in-out
      ">
        {!isCollapsed ? (
          <p className="
            text-sm 
            text-gray-400
            opacity-100
            transition-opacity
            duration-500
            ease-in-out
          ">
            © BrightGrid
          </p>
        ) : (
          <span className="
            opacity-100
            transition-opacity
            duration-500
            ease-in-out
          ">
            ©
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;