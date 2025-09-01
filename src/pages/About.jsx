import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About | Bootnode';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Bootnode</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering developers to build better backend applications, faster.
          </p>
        </div>

        <div className="prose max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p>
            At Bootnode, we believe that setting up a robust backend shouldn't be a roadblock to building great applications. 
            Our mission is to provide developers with a solid foundation that accelerates development while maintaining 
            best practices and security standards.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">The Story Behind Bootnode</h2>
          <p>
            Bootnode was born out of frustration with the repetitive setup required for new backend projects. 
            After building numerous applications, we realized we were spending too much time on the same initial setup 
            instead of focusing on the unique aspects of each project.
          </p>
          <p>
            We created Bootnode to solve this problem - a comprehensive backend starter kit that includes everything 
            you need to hit the ground running, so you can focus on what makes your application unique.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">Why Choose Bootnode?</h2>
          <ul>
            <li><strong>Time-Saving:</strong> Skip the repetitive setup and start building features immediately</li>
            <li><strong>Best Practices:</strong> Built with security, performance, and scalability in mind</li>
            <li><strong>Modular:</strong> Flexible architecture that grows with your application</li>
            <li><strong>Open Source:</strong> Free to use, modify, and contribute to</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Simplicity</h3>
              <p className="text-gray-700">We believe in making complex things simple and approachable for developers of all levels.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Quality</h3>
              <p className="text-gray-700">We're committed to maintaining high standards in code quality and documentation.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-700">We value our community and believe in building tools that solve real problems.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">We're constantly improving and evolving with the JavaScript ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
