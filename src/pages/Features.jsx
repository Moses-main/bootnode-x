import { useEffect } from 'react';
import { FiCheckCircle, FiServer, FiLock, FiZap, FiCode, FiDatabase } from 'react-icons/fi';

const features = [
  {
    icon: <FiServer className="h-8 w-8 text-indigo-600" />,
    title: 'RESTful API',
    description: 'Built-in RESTful API structure with best practices and proper HTTP methods.'
  },
  {
    icon: <FiLock className="h-8 w-8 text-indigo-600" />,
    title: 'Authentication',
    description: 'JWT-based authentication system ready to use out of the box.'
  },
  {
    icon: <FiDatabase className="h-8 w-8 text-indigo-600" />,
    title: 'MongoDB Integration',
    description: 'Seamless integration with MongoDB using Mongoose ODM.'
  },
  {
    icon: <FiZap className="h-8 w-8 text-indigo-600" />,
    title: 'High Performance',
    description: 'Optimized for performance with proper middleware and error handling.'
  },
  {
    icon: <FiCode className="h-8 w-8 text-indigo-600" />,
    title: 'Modular Structure',
    description: 'Clean and organized codebase following best practices.'
  }
];

const Features = () => {
  useEffect(() => {
    document.title = 'Features | Bootnode';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Powerful Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build modern, scalable applications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Bootnode?</h2>
          <ul className="space-y-4">
            {[
              'Rapid development with pre-configured setup',
              'Secure by default with JWT authentication',
              'Scalable architecture for growing applications',
              'Comprehensive documentation and examples',
              'Active community and support'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
