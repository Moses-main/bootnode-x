import React from "react";
import CodeBlock from "../../components/Documentation/CodeBlock";

const Installation = () => {
  const quickStart = `# Using npx
npx bootnode my-backend

# Or install globally
npm install -g bootnode
bootnode my-backend`;

  const projectStructure = `my-backend/
├── src/
│   ├── config/     # Configuration files
│   ├── controllers/# Route controllers
│   ├── models/     # Database models
│   └── routes/     # API route definitions
├── .env           # Environment variables
└── package.json   # Project configuration`;

  const availableScripts = `# Development server with hot-reload
npm run dev

# Production server
npm start

# Run tests (coming soon)
npm test

# Lint your code
npm run lint`;

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Quick Start</h1>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Node.js 14.x or later</li>
            <li>npm 6.x or later</li>
            <li>MongoDB (local or cloud instance)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Installation</h2>
          <p className="text-gray-700">
            You can use bootnode directly with npx:
          </p>
          <CodeBlock 
            code={quickStart} 
            language="bash" 
            title="Terminal"
          />
          <p className="text-gray-700">
            This will create a new directory called <code className="bg-gray-100 px-1.5 py-0.5 rounded">my-backend</code> with a complete backend structure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Getting Started</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li className="space-y-2">
              <p>Navigate to your project directory:</p>
              <CodeBlock 
                code="cd my-backend" 
                language="bash" 
                title="Terminal"
              />
            </li>
            <li className="space-y-2">
              <p>Copy the example environment file and update with your configuration:</p>
              <CodeBlock 
                code="cp .env.example .env" 
                language="bash" 
                title="Terminal"
              />
            </li>
            <li className="space-y-2">
              <p>Install dependencies:</p>
              <CodeBlock 
                code="npm install" 
                language="bash" 
                title="Terminal"
              />
            </li>
            <li className="space-y-2">
              <p>Start the development server:</p>
              <CodeBlock 
                code="npm run dev" 
                language="bash" 
                title="Terminal"
              />
              <p className="text-gray-700">
                The server will start at <code className="bg-gray-100 px-1.5 py-0.5 rounded">http://localhost:3000</code> by default.
              </p>
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Available Scripts</h2>
          <CodeBlock 
            code={availableScripts} 
            language="bash" 
            title="package.json scripts"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Project Structure</h2>
          <CodeBlock 
            code={projectStructure} 
            language="bash" 
            title="Project Structure"
          />
        </section>
      </div>
    </div>
  );
};

export default Installation;
