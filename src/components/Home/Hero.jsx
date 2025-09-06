import { FiGithub, FiArrowRight } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mt-20">
        {/* <img src="/bootnode_logo.jpg" alt="bootnode-logo" /> */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          The Complete Backend for{" "}
          <span className="text-indigo-600">Modern Apps</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Bootnode provides everything you need to build scalable, secure, and
          performant applications with minimal setup and maximum developer
          experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-indigo-600 text- px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span className="text-white">Get Started</span>
            <FiArrowRight className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://github.com/Moses-main/bootnode"
            className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
          >
            <FiGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-10 blur-3xl -z-10"></div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-1 bg-gray-50 border-b border-gray-100 flex items-center">
            <div className="flex space-x-2 px-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-500 font-mono">
              terminal: ~/projects/my-app
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-mono text-sm md:text-base">
            <div className="mb-4">
              <span className="text-green-400">$</span> npx bootnode my-backend
            </div>
            <div className="mb-4 text-gray-400">
              # Creating a new Bootnode project in ./my-backend...
            </div>
            <div className="mb-4">
              <div className="text-green-400">✔</div>
              <div>Project created successfully</div>
              <div className="text-green-400">✔</div>
              <div>Dependencies installed</div>
            </div>
            <div className="mb-4">
              <div>Navigate to the project directory:</div>
            </div>
            <div className="ml-4 mb-4">
              <div className="mb-2">
                <span className="text-green-400">$</span> cd my-backend
              </div>
            </div>
            <div className="mb-4">
              <div>Start the development server:</div>
            </div>
            <div className="ml-4">
              <div className="mb-2">
                <span className="text-yellow-400">npm run dev</span>
                <span className="ml-2 text-gray-500">
                  # Starts the development server
                </span>
              </div>
            </div>
            <div className="text-gray-400 mt-4">
              <div># The server will be available at http://localhost:5000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
