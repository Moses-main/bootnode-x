import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';

const Learn = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    authentication: true,
    models: false,
    routes: false,
    controllers: false,
    config: false
  });
  const location = useLocation();

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuItems = [
    {
      title: 'Authentication',
      id: 'authentication',
      items: [
        { name: 'User Registration', path: '/learn/authentication/registration' },
        { name: 'User Login', path: '/learn/authentication/login' },
        { name: 'Protected Routes', path: '/learn/authentication/protected-routes' },
      ]
    },
    {
      title: 'Models',
      id: 'models',
      items: [
        { name: 'User Model', path: '/learn/models/user' },
        { name: 'Schema Definition', path: '/learn/models/schema' },
      ]
    },
    {
      title: 'Routes',
      id: 'routes',
      items: [
        { name: 'API Routes', path: '/learn/routes/api' },
        { name: 'Route Protection', path: '/learn/routes/protection' },
      ]
    },
    {
      title: 'Controllers',
      id: 'controllers',
      items: [
        { name: 'User Controller', path: '/learn/controllers/user' },
        { name: 'Error Handling', path: '/learn/controllers/errors' },
      ]
    },
    {
      title: 'Configuration',
      id: 'config',
      items: [
        { name: 'Database Setup', path: '/learn/config/database' },
        { name: 'Environment Variables', path: '/learn/config/environment' },
      ]
    },
  ];

  const content = {
    'authentication': {
      title: 'Authentication System',
      description: 'Bootnode comes with a complete authentication system built with JWT (JSON Web Tokens). The system includes user registration, login, and protected route handling.',
      features: [
        'User registration with email and password',
        'Secure password hashing with bcrypt',
        'JWT-based authentication',
        'Protected routes middleware',
        'Token refresh mechanism'
      ],
      codeExample: `// Example of protected route
router.get('/profile', authenticateToken, (req, res) => {
  // Access user data using req.user
  res.json({ user: req.user });
});`
    }
    // Add more content sections as needed
  };

  const currentContent = content['authentication'] || {};

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
        <div className={`
          fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition-transform duration-300 ease-in-out
          w-64 bg-white shadow-lg z-40 overflow-y-auto`}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Bootnode Docs</h2>
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
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  <span>{section.title}</span>
                  {expandedSections[section.id] ? 
                    <FiChevronDown className="w-4 h-4" /> : 
                    <FiChevronRight className="w-4 h-4" />
                  }
                </button>
                
                {expandedSections[section.id] && (
                  <div className="ml-4 mt-2 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block py-1.5 px-2 text-sm rounded-md ${location.pathname === item.path 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100'}`}
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
        <div className="flex-1 md:pl-64">
          <div className="max-w-4xl mx-auto p-6 md:p-8">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {currentContent.title || 'Bootnode Documentation'}
              </h1>
              
              <p className="text-gray-600 mb-6">
                {currentContent.description || 'Select a topic from the sidebar to learn more about Bootnode features.'}
              </p>

              {currentContent.features && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h2>
                  <ul className="space-y-2">
                    {currentContent.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentContent.codeExample && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Example Code</h2>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{currentContent.codeExample}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
