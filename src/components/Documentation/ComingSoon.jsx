import React from 'react';

const ComingSoon = ({ featureName = 'This feature' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
            {featureName} Coming Soon!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We're working hard to bring you this feature. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
