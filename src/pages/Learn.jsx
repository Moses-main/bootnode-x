import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DocumentationLayout from '../components/Documentation/DocumentationLayout';
import SetupGuide from './learn/SetupGuide';
import Installation from './learn/Installation';
import Configuration from './learn/Configuration';
import Authentication from './learn/Authentication';
import ApiRoutes from './learn/ApiRoutes';
import Database from './learn/Database';
import Validation from './learn/Validation';
import Middleware from './learn/Middleware';

// Define menu items for the documentation
const menuItems = [
  {
    title: 'Getting Started',
    id: 'getting-started',
    items: [
      { name: 'Setup Guide', path: '/learn/setup' },
      { name: 'Installation', path: '/learn/installation' },
      { name: 'Configuration', path: '/learn/configuration' },
    ]
  },
  {
    title: 'Core Features',
    id: 'core-features',
    items: [
      { name: 'Authentication', path: '/learn/authentication' },
      { name: 'API Routes', path: '/learn/api-routes' },
      { name: 'Database', path: '/learn/database' },
      { name: 'Validation', path: '/learn/validation' },
    ]
  },
  {
    title: 'Advanced',
    id: 'advanced',
    items: [
      { name: 'Middleware', path: '/learn/middleware' },
      { name: 'Error Handling', path: '/learn/error-handling' },
      { name: 'Testing', path: '/learn/testing' },
      { name: 'Deployment', path: '/learn/deployment' },
    ]
  },
  {
    title: 'Recipes',
    id: 'recipes',
    items: [
      { name: 'User Management', path: '/learn/recipes/user-management' },
      { name: 'File Uploads', path: '/learn/recipes/file-uploads' },
      { name: 'Email Sending', path: '/learn/recipes/email-sending' },
      { name: 'API Documentation', path: '/learn/recipes/api-docs' },
    ]
  },
];

// Component to show when a route is not found
const NotFound = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
    <p className="text-gray-600">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <p className="mt-4">
      <a 
        href="/learn" 
        className="text-blue-600 hover:underline"
      >
        Return to documentation
      </a>
    </p>
  </div>
);

const Learn = () => {
  return (
    <DocumentationLayout menuItems={menuItems}>
      <Routes>
        <Route index element={<Navigate to="setup" replace />} />
        <Route path="setup" element={<SetupGuide />} />
        <Route path="installation" element={<Installation />} />
        <Route path="configuration" element={<Configuration />} />
        <Route path="authentication" element={<Authentication />}>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="api-routes" element={<ApiRoutes />}>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="database" element={<Database />}>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="validation" element={<Validation />}>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="middleware" element={<Middleware />}>
          <Route path="*" element={<NotFound />} />
        </Route>
        
        {/* Add more routes as needed */}
        
        {/* Catch-all route for any undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DocumentationLayout>
  );
};

export default Learn;
