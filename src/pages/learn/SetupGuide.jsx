import React from 'react';
import CodeBlock from '../../components/Documentation/CodeBlock';

const SetupGuide = () => {
  const envExample = `# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/bootnode

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30

# Email (optional)
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_EMAIL=your_email
SMTP_PASSWORD=your_password
FROM_EMAIL=noreply@bootnode.com
FROM_NAME=Bootnode`;

  const packageJson = `{
  "name": "bootnode",
  "version": "1.0.0",
  "description": "Bootnode application",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.3",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.1",
    "slugify": "^1.6.5",
    "validator": "^13.7.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}`;

  const serverJs = `// Import the Express app configuration from app.js
import app from "./src/app.js";

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the Express server
app.listen(PORT, () => {
  console.log(\`🚀 Server running on http://localhost:${PORT}\`);
});`;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Setup Guide</h1>
        <p className="text-gray-600">
          Follow this guide to set up and run the Bootnode application on your local machine.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Prerequisites</h2>
          <div className="space-y-4 text-gray-700">
            <p>Before you begin, make sure you have the following installed on your system:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Node.js (v14 or later)</li>
              <li>npm (v6 or later) or yarn</li>
              <li>MongoDB (v4.4 or later)</li>
              <li>Git (for version control)</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Clone the Repository</h2>
          <div className="space-y-4">
            <p className="text-gray-700">Start by cloning the repository to your local machine:</p>
            <CodeBlock
              code="git clone https://github.com/yourusername/bootnode.git
cd bootnode"
              language="bash"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Install Dependencies</h2>
          <div className="space-y-4">
            <p className="text-gray-700">Navigate to the project directory and install the required dependencies:</p>
            <CodeBlock
              code="npm install"
              language="bash"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Environment Configuration</h2>
          <div className="space-y-4">
            <p className="text-gray-700">Create a <code>.env</code> file in the root directory and configure your environment variables:</p>
            <CodeBlock
              code={envExample}
              language="env"
              title=".env"
            />
            <p className="text-gray-700">Make sure to replace the placeholder values with your actual configuration.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Database Setup</h2>
          <div className="space-y-4">
            <p className="text-gray-700">Make sure MongoDB is running on your system. You can start MongoDB with:</p>
            <CodeBlock
              code="mongod"
              language="bash"
            />
            <p className="text-gray-700">The application will automatically create the database specified in your <code>MONGO_URI</code> when you first run the server.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Start the Development Server</h2>
          <div className="space-y-4">
            <p className="text-gray-700">Start the development server with hot-reload:</p>
            <CodeBlock
              code="npm run dev"
              language="bash"
            />
            <p className="text-gray-700">The server should now be running at <code>http://localhost:5000</code>.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">6. Project Structure</h2>
          <div className="space-y-4">
            <p className="text-gray-700">Here's an overview of the project structure:</p>
            <CodeBlock
              code={`bootnode/
├── src/
│   ├── config/      # Configuration files
│   ├── controllers/ # Route controllers
│   ├── models/      # Database models
│   ├── routes/      # Route definitions
│   ├── utils/       # Utility classes and functions
│   ├── app.js       # Express application setup
├── .env             # Environment variables
├── .gitignore       # Git ignore file
├── package.json     # Project dependencies
└── server.js        # Application entry point`}
              language="text"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">7. Available Scripts</h2>
          <div className="space-y-4">
            <p className="text-gray-700">The following scripts are available in the project:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><code>npm start</code> - Start the production server</li>
              <li><code>npm run dev</code> - Start the development server with nodemon</li>
              <li><code>npm test</code> - Run tests (not implemented by default)</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">8. Next Steps</h2>
          <div className="space-y-4">
            <p className="text-gray-700">Now that you have the application running, you can:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Explore the API documentation at <code>/api-docs</code> (if enabled)</li>
              <li>Set up authentication for your application</li>
              <li>Create your first API endpoints</li>
              <li>Connect to a frontend application</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SetupGuide;
