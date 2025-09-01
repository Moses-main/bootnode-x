import { FiDatabase, FiLock, FiServer, FiGlobe, FiGitBranch, FiZap } from 'react-icons/fi';

export const Features = () => {
  const features = [
    {
      icon: <FiDatabase className="w-8 h-8 text-indigo-600" />,
      title: "Database",
      description: "Fully managed PostgreSQL database with real-time subscriptions and automatic backups."
    },
    {
      icon: <FiLock className="w-8 h-8 text-indigo-600" />,
      title: "Authentication",
      description: "Built-in user management with email/password, OAuth, and social logins."
    },
    {
      icon: <FiServer className="w-8 h-8 text-indigo-600" />,
      title: "Edge Functions",
      description: "Run serverless functions at the edge for maximum performance and low latency."
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-indigo-600" />,
      title: "Global CDN",
      description: "Serve your assets from a global CDN with automatic invalidation."
    },
    {
      icon: <FiGitBranch className="w-8 h-8 text-indigo-600" />,
      title: "Git Integration",
      description: "Automatic deployments from your Git repository with preview environments."
    },
    {
      icon: <FiZap className="w-8 h-8 text-indigo-600" />,
      title: "Real-time",
      description: "Subscribe to database changes in real-time with just a few lines of code."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Build Fast</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bootnode comes with all the features you need to build production-ready applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
