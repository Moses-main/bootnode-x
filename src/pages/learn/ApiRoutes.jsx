import React from 'react';
import CodeBlock from '../../components/Documentation/CodeBlock';

const ApiRoutes = () => {
  const routesExample = `// routes/users.js
import express from 'express';
const router = express.Router();
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/users.js';

import { protect, authorize } from '../middleware/auth.js';

// All routes below will use these middlewares
router.use(protect);
router.use(authorize('admin'));

router
  .route('/')
  .get(getUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;`;

  const controllerExample = `// controllers/users.js
import User from '../models/User.js';
import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/async.js';

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Private/Admin
export const getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Private/Admin
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    return next(
      new ErrorResponse(\`User not found with id of ${req.params.id}\`, 404)
    );
  }
  
  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc    Create user
// @route   POST /api/v1/users
// @access  Private/Admin
export const createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  
  res.status(201).json({
    success: true,
    data: user
  });
});

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private/Admin
export const updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  
  if (!user) {
    return next(
      new ErrorResponse(\`User not found with id of ${req.params.id}\`, 404)
    );
  }
  
  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Private/Admin
export const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  
  if (!user) {
    return next(
      new ErrorResponse(\`User not found with id of ${req.params.id}\`, 404)
    );
  }
  
  res.status(200).json({
    success: true,
    data: {}
  });
});`;

  const middlewareExample = `// middleware/advancedResults.js
import QueryBuilder from '../utils/queryBuilder.js';

export const advancedResults = (model, populate) => async (req, res, next) => {
  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach(param => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => \`$\${match}\`);

  // Finding resource
  let query = model.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments(JSON.parse(queryStr));

  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  // Executing query
  const results = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results
  };

  next();
};`;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">API Routes</h1>
        <p className="text-gray-600">
          Learn how to create and manage API routes in your Bootnode application.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Route Structure</h2>
          <p className="text-gray-700">
            Organize your API routes with Express Router. Here's an example of a user routes file:
          </p>
          <CodeBlock 
            code={routesExample} 
            language="javascript"
            title="routes/users.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Controller Methods</h2>
          <p className="text-gray-700">
            Implement controller methods to handle route logic. Here's an example of a users controller:
          </p>
          <CodeBlock 
            code={controllerExample} 
            language="javascript"
            title="controllers/users.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Advanced Querying</h2>
          <p className="text-gray-700">
            Use middleware for advanced querying features like filtering, sorting, pagination, and field selection:
          </p>
          <CodeBlock 
            code={middlewareExample} 
            language="javascript"
            title="middleware/advancedResults.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Using the Advanced Results Middleware</h2>
          <p className="text-gray-700">
            Apply the advanced results middleware to your routes:
          </p>
          <CodeBlock 
            code={"// Example usage with the advancedResults middleware\nimport { advancedResults } from '../middleware/advancedResults.js';\nimport User from '../models/User.js';\n\n// Get all users with advanced querying\nrouter.get('/', advancedResults(User), getUsers);"} 
            language="javascript"
            title="routes/users.js"
          />
          <p className="text-gray-700">
            Now you can make requests with query parameters like:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><code>GET /api/v1/users?select=name,email</code> - Select specific fields</li>
            <li><code>GET /api/v1/users?sort=-createdAt</code> - Sort by creation date (newest first)</li>
            <li><code>GET /api/v1/users?page=2&limit=10</code> - Pagination</li>
            <li><code>GET /api/v1/users?role=admin</code> - Filter by role</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ApiRoutes;
