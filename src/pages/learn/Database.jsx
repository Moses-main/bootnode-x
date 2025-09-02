import React from 'react';
import CodeBlock from '../../components/Documentation/CodeBlock';

const Database = () => {
  const dbConfigCode = `// src/config/db.js
import mongoose from "mongoose";

/**
 * Establishes a connection to MongoDB using the connection string from environment variables
 * @throws {Error} If connection to MongoDB fails
 */
export const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    // Log error and exit the application if connection fails
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};`;

  const userModelCode = `// src/models/user.model.js
import mongoose from "mongoose";

/**
 * User Schema Definition
 * Defines the structure of user documents in the MongoDB collection
 */
const userSchema = new mongoose.Schema(
  {
    // User's full name
    name: { 
      type: String, 
      required: [true, 'Name is required']
    },
    
    // User's email address (must be unique)
    email: { 
      type: String, 
      required: [true, 'Email is required'],
      unique: true,  // Ensures no duplicate emails in the database
      lowercase: true, // Convert email to lowercase
      trim: true     // Remove any whitespace
    },
  },
  { 
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true 
  }
);

// Create and export the User model based on the schema
export default mongoose.model("User", userSchema);`;

  const envExample = `# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/your_database_name

# Optional: Set to 'production' in production
NODE_ENV=development`;

  const appJsSnippet = `// src/app.js
import express from 'express';
import { connectDB } from './config/db.js';

// Connect to database
connectDB();

const app = express();

// Your other middleware and routes here

export default app;`;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Database Setup</h1>
        <p className="text-gray-600">
          Learn how to set up and use MongoDB with Mongoose in your Bootnode application.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Configuration</h2>
          <p className="text-gray-700">
            First, set up your MongoDB connection in the <code>.env</code> file:
          </p>
          <CodeBlock 
            code={envExample}
            language="env"
            title=".env"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Database Connection</h2>
          <p className="text-gray-700">
            The database connection is handled in <code>src/config/db.js</code>:
          </p>
          <CodeBlock 
            code={dbConfigCode}
            language="javascript"
            title="src/config/db.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Database Integration in App</h2>
          <p className="text-gray-700">
            Initialize the database connection in your main application file:
          </p>
          <CodeBlock 
            code={appJsSnippet}
            language="javascript"
            title="src/app.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Creating Models</h2>
          <p className="text-gray-700">
            Define your database models in the <code>src/models</code> directory. Here's an example User model:
          </p>
          <CodeBlock 
            code={userModelCode}
            language="javascript"
            title="src/models/user.model.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Using Models in Your Application</h2>
          <p className="text-gray-700">
            Once you've defined your models, you can use them in your routes and controllers:
          </p>
          <CodeBlock 
            code={`// Example of using the User model in a controller
import User from '../models/user.model.js';

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};`}
            language="javascript"
            title="Example Controller Usage"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">6. Best Practices</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Always use environment variables for sensitive information like database URIs</li>
            <li>Define proper validation in your schemas</li>
            <li>Use middleware for common operations like hashing passwords</li>
            <li>Implement proper error handling for database operations</li>
            <li>Use indexes for frequently queried fields</li>
            <li>Consider using transactions for operations that require multiple database operations to complete successfully</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Database;
