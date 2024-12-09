import React, { useState } from 'react';
import logoImage from '../images/logo.png'
import { 
  LayoutDashboard, 
  ChevronLeft, 
  ChevronRight, 
 
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
    
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`
      h-screen 
      bg-purple-800 
      text-white 
      transition-all 
      duration-300 
      ${isCollapsed ? 'w-20' : 'w-64'}
      flex 
      flex-col 
      relative
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
          hover:bg-white-600
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
        border-white-700
      ">
        {!isCollapsed ? (
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        ) : (
          <span className="text-2xl">
            <img src={logoImage} className='rounded-full w-10 h-10 mx-auto my-2'/>
          </span>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow mt-8">
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
              duration-200
              ${activeRoute === item.route 
                ? 'bg-gray-700 text-blue-400' 
                : 'text-gray-300'}
            `}
          >
            <item.icon 
              className={`
                mr-3 
                ${isCollapsed ? 'mx-auto' : ''}
              `} 
            />
            {!isCollapsed && (
              <span className="truncate">{item.label}</span>
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
      ">
        {!isCollapsed ? (
          <p className="text-sm text-gray-400">BrightGrid</p>
        ) : (
          <span>©</span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;