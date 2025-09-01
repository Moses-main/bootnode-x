import { useEffect } from 'react';

const Documentation = () => {
  useEffect(() => {
    document.title = 'Documentation | Bootnode';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Documentation</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Getting Started</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Bootnode's documentation. This guide will help you get started with setting up and using Bootnode for your projects.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Installation</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>npx bootnode my-backend</code>
          </pre>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Project Structure</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`src/
├── config/         # Database connection setup
├── controllers/    # Business logic for routes
├── models/         # MongoDB models (Mongoose schemas)
├── routes/         # API routes
├── app.js          # Express app configuration
└── server.js       # Application entry point`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Environment Variables</h3>
          <p>Create a <code>.env</code> file in your project root with the following variables:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`PORT=5000
MONGO_URI=mongodb://localhost:27017/mydb
JWT_SECRET=your_jwt_secret_here`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Available Scripts</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><code>npm run dev</code> - Start the development server</li>
            <li><code>npm start</code> - Start the production server</li>
            <li><code>npm test</code> - Run tests</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
