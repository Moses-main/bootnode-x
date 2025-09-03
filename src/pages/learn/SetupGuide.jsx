import React from 'react';
import CodeBlock from '../../components/Documentation/CodeBlock';

const SetupGuide = () => {
  const projectStructure = `src/
├── config/         # Database connection setup
│   └── db.js
├── controllers/    # Business logic for each route
│   └── user.controller.js
├── models/         # MongoDB models (Mongoose schemas)
│   └── user.model.js
├── routes/         # API routes
│   └── user.routes.js
├── app.js          # Express app configuration
└── server.js       # Application entry point`;

  const envExample = `PORT=5000
MONGO_URI=mongodb://localhost:27017/mydb`;

  const apiExample = `// Example: Get all users
GET /api/users

// Example: Create a user
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}`;

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Project Setup Guide</h1>
        <p className="text-gray-600">
          Welcome to Bootnode! This guide will help you set up and understand your new Express + MongoDB backend project.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">📂 Project Structure</h2>
          <p className="text-gray-700">
            Your project follows a clean, modular structure designed for scalability:
          </p>
          <CodeBlock 
            code={projectStructure} 
            language="bash" 
            title="Project Structure"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">🚀 Getting Started</h2>
          
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-gray-800">1. Install dependencies</h3>
            <CodeBlock 
              code="npm install" 
              language="bash" 
              title="Terminal"
            />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-gray-800">2. Setup environment variables</h3>
            <p className="text-gray-700">Create a <code>.env</code> file in your project root with the following variables:</p>
            <CodeBlock 
              code={envExample} 
              language="env" 
              title=".env"
            />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-gray-800">3. Start the development server</h3>
            <CodeBlock 
              code="npm run dev" 
              language="bash" 
              title="Terminal"
            />
            <p className="text-gray-700">The server will be available at <a href="http://localhost:5000" className="text-blue-600 hover:underline">http://localhost:5000</a></p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">📌 Example API Endpoints</h2>
          <p className="text-gray-700">Here are some example endpoints you can use to test your setup:</p>
          <CodeBlock 
            code={apiExample} 
            language="http" 
            title="API Examples"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">🛠 Available Scripts</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">npm run dev</code> - Run the server in development mode with hot-reload</li>
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">npm start</code> - Run the server in production mode</li>
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">npm test</code> - Run tests (if configured)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SetupGuide;
