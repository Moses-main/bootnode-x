import React from 'react';
import { FiCopy } from 'react-icons/fi';

const CodeBlock = ({ code, language = 'javascript', title = null, className = '' }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={`relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 ${className}`}>
      {title && (
        <div className="px-4 py-2 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <button
            onClick={copyToClipboard}
            className="text-gray-500 hover:text-indigo-600 transition-colors"
            title="Copy to clipboard"
          >
            <FiCopy className="w-4 h-4" />
          </button>
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code className={`language-${language} font-mono`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
