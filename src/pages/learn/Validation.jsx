import React from 'react';
import CodeBlock from '../../components/Documentation/CodeBlock';

const Validation = () => {
  const mongooseValidation = `// Example of Mongoose Schema Validation
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // Required field with custom error message
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  
  // Email validation with regex pattern
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please provide a valid email address'
    ]
  },
  
  // Enum validation for role
  role: {
    type: String,
    enum: {
      values: ['user', 'publisher', 'admin'],
      message: 'Role is either: user, publisher, or admin'
    },
    default: 'user'
  },
  
  // Custom validation using validate property
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false, // Don't return password in query results
    validate: {
      validator: function(value) {
        // At least one number and one letter, min 8 chars
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
      },
      message: 'Password must contain at least one letter, one number, and be at least 8 characters long'
    }
  },
  
  // Date validation
  birthDate: {
    type: Date,
    validate: {
      validator: function(value) {
        // Must be at least 13 years old
        const minAgeDate = new Date();
        minAgeDate.setFullYear(minAgeDate.getFullYear() - 13);
        return value <= minAgeDate;
      },
      message: 'You must be at least 13 years old to register'
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});`;

  const middlewareValidation = `// Example of Express middleware validation
import { validationResult } from 'express-validator';
import { body } from 'express-validator';

// Validation rules
const userValidationRules = [
  // Validate name
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters')
    .isLength({ max: 50 }).withMessage('Name cannot exceed 50 characters'),
    
  // Validate email
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
    
  // Validate password
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/[0-9]/).withMessage('Password must contain at least one number')
    .matches(/[a-zA-Z]/).withMessage('Password must contain at least one letter'),
    
  // Custom validation
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }
    return true;
  })
];

// Middleware to handle validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  
  // Extract error messages
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
  
  return res.status(422).json({
    success: false,
    errors: extractedErrors
  });
};

// In your route
router.post('/register', userValidationRules, validate, userController.register);`;

  const errorHandling = `// Example of error handling in Express
app.use((err, req, res, next) => {
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
});`;

  const customValidators = `// Custom validators utility
const validators = {
  // Check if string is a valid URL
  isURL: (value) => {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return urlPattern.test(value);
  },
  
  // Check if string is a valid phone number
  isPhoneNumber: (value) => {
    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{4,10}$/;
    return phonePattern.test(value);
  },
  
  // Check if string contains at least one number and one letter
  isAlphanumeric: (value) => {
    return /[a-zA-Z]/.test(value) && /[0-9]/.test(value);
  },
  
  // Check if date is in the future
  isFutureDate: (value) => {
    return new Date(value) > new Date();
  }
};

// Usage in schema
const eventSchema = new mongoose.Schema({
  title: String,
  url: {
    type: String,
    validate: {
      validator: validators.isURL,
      message: 'Please provide a valid URL'
    }
  },
  phone: {
    type: String,
    validate: {
      validator: validators.isPhoneNumber,
      message: 'Please provide a valid phone number'
    }
  }
});`;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Data Validation</h1>
        <p className="text-gray-600">
          Learn how to implement robust data validation in your Bootnode application.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Mongoose Schema Validation</h2>
          <p className="text-gray-700">
            Mongoose provides built-in validation for schema types. Here's an example of a user schema with various validations:
          </p>
          <CodeBlock 
            code={mongooseValidation}
            language="javascript"
            title="models/User.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Express Middleware Validation</h2>
          <p className="text-gray-700">
            For more complex validation, you can use express-validator middleware:
          </p>
          <CodeBlock 
            code={middlewareValidation}
            language="javascript"
            title="middleware/validation.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Custom Validators</h2>
          <p className="text-gray-700">
            Create reusable validator functions for common validation patterns:
          </p>
          <CodeBlock 
            code={customValidators}
            language="javascript"
            title="utils/validators.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Error Handling</h2>
          <p className="text-gray-700">
            Proper error handling for validation errors:
          </p>
          <CodeBlock 
            code={errorHandling}
            language="javascript"
            title="middleware/error.js"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Best Practices</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Always validate on both client and server sides</li>
            <li>Use descriptive error messages that help users correct their input</li>
            <li>Sanitize all user input to prevent XSS attacks</li>
            <li>Use whitelist validation (only allow known good input) instead of blacklist</li>
            <li>Implement rate limiting to prevent brute force attacks</li>
            <li>Log validation errors for debugging but don't expose sensitive information</li>
            <li>Use HTTP status codes appropriately (400 for client errors, 422 for validation errors)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Validation;
