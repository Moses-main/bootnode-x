import React from 'react';

const SetupGuide = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Setup Guide</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Testing Setup Guide</h2>
        <p className="text-gray-700 mb-4">
          If you can see this message, the routing is working correctly!
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Verify the URL in the address bar is correct</li>
          <li>Try refreshing the page</li>
        </ul>
      </div>
    </div>
  );
};

export default SetupGuide;
