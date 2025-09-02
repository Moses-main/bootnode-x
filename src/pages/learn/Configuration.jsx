import React from 'react';
import CodeBlock from '../../components/Documentation/CodeBlock';

const Configuration = () => {
  const envExample = `# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/your_database_name

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30

# Email Configuration (if using email features)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_EMAIL=your_email@example.com
SMTP_PASSWORD=your_email_password
SMTP_FROM_NAME=Bootnode <noreply@example.com>`;

  const configExample = `// config/config.js
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  // Server configuration
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Database configuration
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/your_database_name',
  
  // JWT configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret_key',
    expiresIn: process.env.JWT_EXPIRE || '30d',
    cookieExpire: process.env.JWT_COOKIE_EXPIRE || 30
  },
  
  // Email configuration
  email: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    email: process.env.SMTP_EMAIL,
    password: process.env.SMTP_PASSWORD,
    from: process.env.SMTP_FROM_NAME || 'Bootnode <noreply@example.com>'
  }
};`;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Configuration</h1>
        <p className="text-gray-600">
          Learn how to configure your Bootnode application with environment variables and custom settings.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Environment Variables</h2>
          <p className="text-gray-700">
            Bootnode uses environment variables for configuration. Create a <code>.env</code> file in your project root:
          </p>
          <CodeBlock 
            code={envExample} 
            language="env" 
            title=".env"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Configuration File</h2>
          <p className="text-gray-700">
            You can also create a configuration file to manage your settings in a more structured way:
          </p>
          <CodeBlock 
            code={configExample} 
            language="javascript"
            title="config/config.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Using Configuration</h2>
          <p className="text-gray-700">
            Import and use your configuration throughout your application:
          </p>
          <CodeBlock 
            code={"const config = require('./config/config');\n\n// Example usage\nconst port = config.port;\nconst dbUri = config.mongoUri;"} 
            language="javascript"
            title="Example Usage"
          />
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
