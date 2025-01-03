import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import logoImage from '../../images/logo.png'; 
import {   
  LayoutDashboard, 
  FileText, 
  Settings, 
  Users, 
  ChevronLeft, 
  ChevronDown, 
  ChevronUp,
  Menu, 
} from 'lucide-react'; 
const Sidebar = ({ children }) => {   
  const [isCollapsed, setIsCollapsed] = useState(true);   
  const [openDropdown, setOpenDropdown] = useState(null);   
  const [hoveredLabel, setHoveredLabel] = useState(null); // State for hovered menu labels
  const location = useLocation();

  const menuItems = [
    {
      heading: '* MAIN *',
      items: [
        {
          icon: LayoutDashboard,
          label: 'Dashboard',
          route: '/dashboard',
        },
      ],
    },
    {
      heading: '* REPORTS *',
      items: [
        {
          icon: FileText,
          label: 'Reports',
          route: null,
          subItems: [
            { icon: FileText, label: 'Daily Report', route: '/reports/daily' },
            { icon: FileText, label: 'Monthly Report', route: '/reports/monthly' },
            { icon: FileText, label: 'Meter Report', route: '/reports/meter' },
          ],
        },
      ],
    },
    {
      heading: '* SETTINGS *',
      items: [
        {
          icon: Settings,
          label: 'Configuration',
          route: null,
          subItems: [
            { icon: Users, label: 'Users', route: '/users' },
          ],
        },
      ],
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (route) => {     
    setOpenDropdown(openDropdown === route ? null : route);
  };    

  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  const handleMouseEnter = (label) => {
    setHoveredLabel(label);
  };

  const handleMouseLeave = () => {
    setHoveredLabel(null);
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
    <div className="flex h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>       
      <div
        className={`fixed h-screen bg-blue-800 text-[rgb(255,255,255)] shadow-2xl transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-24' : 'w-56'}`} 
      >
        <button           
          onClick={toggleSidebar}           
          className="absolute top-3 right-[-35px] z-10 text-[rgb(255,255,255)] transform translate-x-1/2 bg-blue-500 border-2 border-gray-300 p-2 rounded-full hover:bg-blue-800 transition duration-300 hover:scale-105"         
        >           
          {isCollapsed ? <Menu className="w-6 h-6" /> : <ChevronLeft />}         
        </button>          

        <div className="h-16 flex items-center justify-center border-b border-white">           
          {isCollapsed ? (             
            <img src={logoImage} className="rounded-full w-10 h-10 border border-gray-500" alt="Logo" />          
          ) : (             
            <h1 className="text-base text-white font-bold tracking-widest">BGT Dashboard</h1>           
          )}         
        </div>          

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
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.subItems ? (
                    <>
                      <button
                        className={`w-full flex items-center px-4 py-3 text-[rgb(255,255,255)] hover:bg-blue-600 hover:text-[rgb(255,255,255)] transition-all font-medium ${
                          isCollapsed ? 'justify-center' : 'justify-start'
                        }`}
                        onClick={() => handleDropdownToggle(item.label)}
                      >
                        <item.icon className="w-5 h-5" />
                        {!isCollapsed && (
                          <div className="flex justify-between items-center w-full ml-3">
                            <span className="group-hover:text-blue-300">{item.label}</span>
                            <div className="text-xs">
                              {openDropdown === item.label ? <ChevronUp /> : <ChevronDown />}
                            </div>
                          </div>
                        )}
                      </button>
                      {item.subItems && openDropdown === item.label && (
                        <div 
                          className={`transition-all duration-300 
                            ${isCollapsed 
                              ? 'absolute left-full top-0 ml-2 w-48 bg-blue-700 rounded-md shadow-lg z-50 py-2' 
                              : 'pl-8 mt-2'
                            }
                          `}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.route}
                              to={subItem.route}
                              className={`w-full flex items-center px-4 py-3 text-[rgb(255,255,255)] 
                                hover:bg-blue-600 hover:text-[rgb(255,255,255)] 
                                transition-all font-light
                                ${isCollapsed ? 'rounded-md' : ''}
                              `}
                              onClick={handleLinkClick}
                            >
                              {subItem.icon && <subItem.icon className="w-5 h-5 mr-2" />}
                              <span>{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="relative group">
                      <Link
                        to={item.route}
                        className={`w-full flex items-center px-4 py-3 text-[rgb(255,255,255)] hover:bg-blue-600 hover:text-[rgb(255,255,255)] transition-all font-medium ${
                          isCollapsed ? 'justify-center' : 'justify-start'
                        }`}
                        onClick={handleLinkClick}
                      >
                        <item.icon className="w-5 h-5" />
                        {!isCollapsed && (
                          <span className="ml-3 group-hover:text-blue-300">{item.label}</span>
                        )}
                      </Link>
                      {/* Show pop label when hovering in collapsed state */}
                      {isCollapsed && hoveredLabel === item.label && (
                        <div
                          className="absolute left-full ml-2 bg-blue-700 text-white text-sm py-2 px-4 rounded-md shadow-lg z-50"
                          style={{ top: '50%', transform: 'translateY(-50%)' }}
                        >
                          {item.label}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))} 
            </div>
          ))}
        </nav>
      </div>

      <div className={`flex-1 ml-${isCollapsed ? '24' : '56'} transition-all duration-300`}> {/* Adjusted margin-left values */}
        <div className="p-0">{children}</div>       
      </div>     
    </div>   
  ); 
};


export default Sidebar;
