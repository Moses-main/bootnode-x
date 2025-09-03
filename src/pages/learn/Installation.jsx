import React from "react";
import CodeBlock from "../../components/Documentation/CodeBlock";

const Installation = () => {
  const installCommand = `# Using npm
npm install bootnode

# Or using yarn
yarn add bootnode`;

  const setupCommand = `// In your main server file (e.g., server.js)
import express from 'express';
import bootnode from 'bootnode';

const app = express();

// Initialize Bootnode with your configuration
bootnode.init({
  // Your configuration options here
});

// Your other Express middleware and routes
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port ${"PORT"}\`);
});`;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Installation</h1>
        <p className="text-gray-600">
          Get started with Bootnode by following these simple installation
          steps.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Prerequisites
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Node.js 14.x or later</li>
            <li>npm 6.x or later or yarn</li>
            <li>MongoDB 4.4 or later (for database operations)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Installation</h2>
          <p className="text-gray-700">Install Bootnode using npm or yarn:</p>
          <CodeBlock code={installCommand} language="bash" title="Terminal" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Setup</h2>
          <p className="text-gray-700">
            After installation, you can set up a basic Express server with
            Bootnode:
          </p>
          <CodeBlock
            code={setupCommand}
            language="javascript"
            title="server.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Verification</h2>
          <p className="text-gray-700">
            To verify your installation, run your server and check the console
            output:
          </p>
          <CodeBlock code="node server.js" language="bash" title="Terminal" />
          <p className="text-gray-700">
            You should see a message indicating that the server is running on
            the specified port.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Installation;
