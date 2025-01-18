import { useState } from 'react';

const Hero = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-dark px-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          className={`p-8 rounded-2xl shadow-neumorph dark:shadow-neumorph-dark text-center
            ${isPressed ? 'scale-[0.98] shadow-neumorph-inset dark:shadow-neumorph-dark-inset' : 'scale-100'}
            transition-all duration-200 cursor-pointer`}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Yohanes Kevin Gilang Pratama
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Smart Contract Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I craft elegant solutions to complex problems, specializing in React, Dart, and BlockChain Technology.
            Let's build something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset transition-shadow">
              View Projects
            </button>
            <button className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset transition-shadow">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;