import { ChevronDownIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-8 rounded-2xl shadow-neumorph">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Yohanes Kevin
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I craft elegant solutions to complex problems, specializing in React, Node.js, and cloud technologies.
            Let's build something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="px-8 py-3 rounded-lg bg-gray-100 text-gray-700 shadow-neumorph hover:shadow-neumorph-hover active:shadow-neumorph-inset transition-shadow">
              View Projects
            </button>
            <button className="px-8 py-3 rounded-lg bg-gray-100 text-gray-700 shadow-neumorph hover:shadow-neumorph-hover active:shadow-neumorph-inset transition-shadow">
              Contact Me
            </button>
          </div>
        </div>
        <a href="#about" className="block mt-16 animate-bounce">
          <ChevronDownIcon size={32} className="mx-auto text-gray-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;