export const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Create a Project",
      description: "Start a new project with a single command or connect an existing one."
    },
    {
      step: "2",
      title: "Define Your Schema",
      description: "Use our intuitive dashboard or CLI to define your data model."
    },
    {
      step: "3",
      title: "Integrate with Your App",
      description: "Use our client libraries to connect your frontend and start building."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Bootnode in minutes, not days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                {item.step}
              </div>
              <div className="pl-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
