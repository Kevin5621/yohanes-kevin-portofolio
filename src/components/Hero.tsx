import { useEffect, useState } from "react";
import { Typewriter } from "./hook/Animated_typeWritter";
import { AnimatedButton } from "./hook/AnimatedButton";
export interface AnimatedButtonProps {
  text: string;
  delay: number;
  buttonVisible: boolean;
}

const Hero = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    // Start card emergence animation after a brief delay
    const cardTimer = setTimeout(() => {
      setCardVisible(true);
    }, 500);

    // Start content/typewriter animations after card emergence
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 1500);

    // Start button emergence animations after content
    const buttonTimer = setTimeout(() => {
      setButtonsVisible(true);
    }, 6300);

    return () => {
      clearTimeout(cardTimer);
      clearTimeout(contentTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-dark px-6 transition-colors duration-200">
      <div className="w-full max-w-4xl mx-auto text-center">
        <div 
          className={`w-full h-[500px] md:h-[460px] p-8 rounded-2xl transform transition-all duration-1000 ease-out
            ${isPressed ? 'scale-[0.98] shadow-neumorph-inset dark:shadow-neumorph-dark-inset' : 
              cardVisible ? 'scale-100 opacity-100 shadow-neumorph dark:shadow-neumorph-dark' : 'scale-95 opacity-0 shadow-none'}
            cursor-pointer relative bg-gray-100 dark:bg-dark`}
          style={{
            transitionProperty: 'transform, box-shadow',
            transitionDuration: '1000ms'
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
        >
          {contentVisible && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div>
                <Typewriter 
                  text="Yohanes Kevin Gilang Pratama"
                  delay={0}
                  className="block text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6"
                />
              </div>

              <div>
                <Typewriter 
                  text="Smart Contract Developer"
                  delay={1900}
                  className="block text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
                />
              </div>

              <div className="mb-12 w-full max-w-2xl mx-auto">
                <Typewriter 
                  text="I craft elegant solutions to complex problems, specializing in React, Dart, and BlockChain Technology. Let's build something amazing together."
                  delay={2900}
                  speed={13}
                  className="block text-lg text-gray-600 dark:text-gray-300"
                />
              </div>

              <div className="flex justify-center space-x-6">
                <AnimatedButton 
                  text="View Projects" 
                  delay={1000}
                  buttonVisible={buttonsVisible}
                />
                <AnimatedButton 
                  text="Contact Me" 
                  delay={1000}
                  buttonVisible={buttonsVisible}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;