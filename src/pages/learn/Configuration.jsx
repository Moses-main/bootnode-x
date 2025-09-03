import React from 'react';
import CodeBlock from '../../components/Documentation/CodeBlock';

const Configuration = () => {
  const envExample = `# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/mydb

# JWT Configuration (for authentication)
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30`;

  const dbConfig = `// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log(\`MongoDB Connected: ${'conn.connection.host'}\`);
  } catch (error) {
    console.error(\`Error: ${'error.message'}\`);
    process.exit(1);
  }
};

module.exports = connectDB;`;

  const serverConfig = `// server.js
const express = require('express');
const connectDB = require('./config/db');

// Load environment variables
require('dotenv').config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Define routes
app.use('/api/users', require('./routes/users'));
// Add other routes here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
  console.log(\`Server running in ${'process.env.NODE_ENV'} mode on port ${'PORT'}\`)
);`;

  const middlewareExample = `// Middleware to set CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});`;

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Configuration Guide</h1>
        <p className="text-gray-600">
          Learn how to configure your Bootnode application with environment variables and custom settings.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Environment Variables</h2>
          <p className="text-gray-700">
            Create a <code className="bg-gray-100 px-1.5 py-0.5 rounded">.env</code> file in your project root with the following variables:
          </p>
          <CodeBlock 
            code={envExample} 
            language="env" 
            title=".env"
          />
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Never commit your <code className="bg-yellow-100 px-1 py-0.5 rounded">.env</code> file to version control. Make sure it's included in your <code className="bg-yellow-100 px-1 py-0.5 rounded">.gitignore</code> file.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Database Configuration</h2>
          <p className="text-gray-700">
            Set up your MongoDB connection in <code className="bg-gray-100 px-1.5 py-0.5 rounded">config/db.js</code>:
          </p>
          <CodeBlock 
            code={dbConfig} 
            language="javascript"
            title="config/db.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Server Configuration</h2>
          <p className="text-gray-700">
            Your main server file should be set up like this:
          </p>
          <CodeBlock 
            code={serverConfig} 
            language="javascript"
            title="server.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Common Middleware</h2>
          <p className="text-gray-700">
            Here's an example of common middleware you might want to add to your Express app:
          </p>
          <CodeBlock 
            code={middlewareExample} 
            language="javascript"
            title="Middleware Example"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Configuration Best Practices</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Always store sensitive information (API keys, database URIs) in environment variables</li>
            <li>Create a <code className="bg-gray-100 px-1.5 py-0.5 rounded">.env.example</code> file with placeholder values to document required environment variables</li>
            <li>Use different <code className="bg-gray-100 px-1.5 py-0.5 rounded">.env</code> files for different environments (development, production, testing)</li>
            <li>Validate environment variables on application startup</li>
            <li>Keep configuration separate from application logic</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Environment-Specific Configuration</h2>
          <p className="text-gray-700">
            You can create environment-specific configuration files (e.g., <code>config/development.js</code>, <code>config/production.js</code>) and load them based on the <code>NODE_ENV</code> environment variable.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Configuration;
