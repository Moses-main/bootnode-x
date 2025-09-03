import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiHome,
} from "react-icons/fi";

const DocumentationLayout = ({ menuItems, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const location = useLocation();

  // Initialize expanded sections based on current path
  useEffect(() => {
    const initialExpanded = {};
    menuItems.forEach((section) => {
      // Check if any item in the section matches the current path
      const isActive = section.items.some(item => 
        location.pathname === item.path
      );
      initialExpanded[section.id] = isActive;
    });
    setExpandedSections(initialExpanded);
  }, [location.pathname, menuItems]);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
      >
        <FiMenu className="w-6 h-6 text-gray-700" />
      </button>

      <div className="flex h-full">
        {/* Sidebar */}
        <div
          className={`
            fixed inset-y-0 mt-20 left-0 transform 
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 transition-transform duration-300 ease-in-out
            w-64 bg-white shadow-lg z-40 overflow-y-auto`}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-800 hover:text-indigo-600"
              >
                <FiHome className="w-5 h-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
          </div>

          <nav className="p-4">
            {menuItems.map((section) => (
              <div key={section.id} className="mb-4">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-indigo-600 font-medium py-2"
                >
                  <span>{section.title}</span>
                  {expandedSections[section.id] ? (
                    <FiChevronDown className="w-4 h-4" />
                  ) : (
                    <FiChevronRight className="w-4 h-4" />
                  )}
                </button>

                {expandedSections[section.id] && (
                  <div className="ml-4 mt-2 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block py-1.5 px-2 text-sm rounded-md ${
                          location.pathname === item.path
                            ? 'bg-indigo-50 text-indigo-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 md:ml-64 pt-20">
          <div className="max-w-4xl mx-auto p-6">
            {children || <Outlet />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;
