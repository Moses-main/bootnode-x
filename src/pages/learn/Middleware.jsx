import React from "react";
import CodeBlock from "../../components/Documentation/CodeBlock";

const Middleware = () => {
  const errorHandler = `// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Default error status and message
  let error = { ...err };
  error.message = err.message;

  // Log to console for development
  console.error(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};`;

  const asyncHandler = `// Async handler to wrap async/await route handlers
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage in route handlers
const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
});`;

  const logger = `// Request logging middleware
const logger = (req, res, next) => {
  console.log(
    \`\${req.method} \${req.protocol}://\${req.get('host')}\${req.originalUrl}\`
  );
  next();
};`;

  // Usage in app.js
  `app.use(logger)`;
  `;

  const notFound = `; // 404 Not Found middleware
  const notFound = (req, res, next) => {
    res.status(404).json({
      success: false,
      error: "Not Found",
    });
  };

  // Should be placed after all other routes
  `app.use(notFound)`;
  `;

  const auth = `; // Authentication middleware
  const protect = async (req, res, next) => {
    let token;

    // Check for token in headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // Check for token in cookies
    // token = req.cookies.token;

    // Make sure token exists
    if (!token) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401)
      );
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (err) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401)
      );
    }
  };

  // Role-based authorization
  const authorize = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new ErrorResponse(
            `User role ${req.user.role} is not authorized to access this route`,
            403
          )
        );
      }
      next();
    };
  };
  `;

  const sanitize = `; // Sanitize input data
  const sanitizeData = (req, res, next) => {
    // Remove any keys that start with $ (prevent NoSQL injection)
    Object.keys(req.body).forEach((key) => {
      if (key.startsWith("$")) {
        delete req.body[key];
      }
    });

    // Sanitize strings
    if (req.body.name) {
      req.body.name = req.body.name.trim();
    }

    // Sanitize email
    if (req.body.email) {
      req.body.email = req.body.email.toLowerCase().trim();
    }

    next();
  };
  `;

  const rateLimit = `; // Rate limiting middleware
  const rateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message:
      "Too many requests from this IP, please try again after 10 minutes",
  });

  // Apply to all requests
  app.use(rateLimiter);

  // Or apply to specific routes
  app.use("/api/auth/", rateLimiter);
  `;

  const corsConfig = `; // CORS configuration
  const corsOptions = {
    origin: ["http://localhost:3000", "http://your-frontend-domain.com"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Middleware</h1>
        <p className="text-gray-600">
          Learn how to use middleware in your Bootnode application to handle
          requests, responses, and errors.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            1. What is Middleware?
          </h2>
          <p className="text-gray-700">
            Middleware functions are functions that have access to the request
            object (req), the response object (res), and the next middleware
            function in the application's request-response cycle.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            2. Error Handling Middleware
          </h2>
          <p className="text-gray-700">
            Handle errors consistently across your application:
          </p>
          <CodeBlock
            code={errorHandler}
            language="javascript"
            title="middleware/error.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            3. Async Handler
          </h2>
          <p className="text-gray-700">
            A utility to handle async/await in route handlers:
          </p>
          <CodeBlock
            code={asyncHandler}
            language="javascript"
            title="middleware/async.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            4. Authentication Middleware
          </h2>
          <p className="text-gray-700">
            Protect routes with JWT authentication and role-based authorization:
          </p>
          <CodeBlock
            code={auth}
            language="javascript"
            title="middleware/auth.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            5. Request Logging
          </h2>
          <p className="text-gray-700">
            Log all incoming requests for debugging and monitoring:
          </p>
          <CodeBlock
            code={logger}
            language="javascript"
            title="middleware/logger.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            6. Input Sanitization
          </h2>
          <p className="text-gray-700">
            Clean and validate user input to prevent security vulnerabilities:
          </p>
          <CodeBlock
            code={sanitize}
            language="javascript"
            title="middleware/sanitize.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            7. Rate Limiting
          </h2>
          <p className="text-gray-700">
            Prevent abuse by limiting the number of requests from a single IP:
          </p>
          <CodeBlock
            code={rateLimit}
            language="javascript"
            title="middleware/rateLimit.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            8. CORS Configuration
          </h2>
          <p className="text-gray-700">
            Configure Cross-Origin Resource Sharing (CORS) for your API:
          </p>
          <CodeBlock
            code={corsConfig}
            language="javascript"
            title="config/cors.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            9. 404 Not Found Handler
          </h2>
          <p className="text-gray-700">
            Handle undefined routes with a proper 404 response:
          </p>
          <CodeBlock
            code={notFound}
            language="javascript"
            title="middleware/notFound.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            10. Best Practices
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Always place error-handling middleware last, after other app.use()
              calls
            </li>
            <li>Use next() to pass control to the next middleware function</li>
            <li>Return responses to prevent multiple response errors</li>
            <li>
              Use async/await with try/catch or a wrapper like asyncHandler
            </li>
            <li>Keep middleware focused on a single responsibility</li>
            <li>Document your middleware with JSDoc comments</li>
            <li>Test middleware in isolation</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Middleware;
