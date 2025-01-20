import { useEffect, useState } from "react";
import { Typewriter } from "./hook/Animated_typeWritter";

const Hero = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-dark px-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          className={`p-8 rounded-2xl transform transition-all duration-1000 ease-out
            ${isPressed ? 'scale-[0.98] shadow-neumorph-inset dark:shadow-neumorph-dark-inset' : 
              isVisible ? 'scale-100 opacity-100 shadow-neumorph dark:shadow-neumorph-dark' : 'scale-95 opacity-0'}
            cursor-pointer`}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
        >
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Typewriter 
              text="Yohanes Kevin Gilang Pratama"
              delay={500}
              className="block text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6"
            />
          </div>

          <div className={`transition-opacity duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Typewriter 
              text="Smart Contract Developer"
              delay={1760}
              className="block text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
            />
          </div>

          <div className="mb-12 max-w-2xl mx-auto">
            <Typewriter 
              text="I craft elegant solutions to complex problems, specializing in React, Dart, and BlockChain Technology. Let's build something amazing together."
              delay={2900}
              speed={20}
              className="block text-lg text-gray-600 dark:text-gray-300"
            />
          </div>

          <div className={`flex justify-center space-x-6 transition-opacity duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 
                             shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                             dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset 
                             dark:active:shadow-neumorph-dark-inset transition-shadow">
              <Typewriter 
                text="View Projects"
                delay={5700}
                speed={40}
                className="block text-lg text-gray-600 dark:text-gray-300"
              />
            </button>
            <button className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 
                             shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                             dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset 
                             dark:active:shadow-neumorph-dark-inset transition-shadow">
              <Typewriter 
                text="Contact Me"
                delay={5700}
                className="block text-lg text-gray-600 dark:text-gray-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;