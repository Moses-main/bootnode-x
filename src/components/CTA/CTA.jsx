import { FiArrowRight } from "react-icons/fi";

export const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to get started?
        </h2>
        <p className="text-xl mb-10 text-indigo-100">
          Join thousands of developers building with Bootnode today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Get Started for Free</span>
            <FiArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};
