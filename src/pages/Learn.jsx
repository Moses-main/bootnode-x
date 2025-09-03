import React from 'react';
import { Outlet } from 'react-router-dom';
import DocumentationLayout from '../components/Documentation/DocumentationLayout';

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

const Learn = () => {
  console.log('Learn component rendered');
  
  return (
    <DocumentationLayout menuItems={menuItems}>
      <Outlet />
    </DocumentationLayout>
  );
};

export default Learn;
