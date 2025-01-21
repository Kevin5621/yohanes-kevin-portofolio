import { useEffect, useState } from "react";
import { Typewriter } from "./hook/Animated_typeWritter";
import { AnimatedButton } from "./hook/AnimatedButton";

const Hero = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const cardTimer = setTimeout(() => {
      setCardVisible(true);
    }, 500);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 1500);

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark px-4 sm:px-6 transition-colors duration-200">
      <div className="w-full max-w-4xl mx-auto text-center">
        <div 
          className={`w-full min-h-[520px] sm:min-h-[460px] p-6 sm:p-8 rounded-2xl transform transition-all duration-1000 ease-out
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
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
        >
          {contentVisible && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
              <div className="w-full">
                <Typewriter 
                  text="Yohanes Kevin Gilang Pratama"
                  delay={0}
                  className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4"
                />
              </div>

              <div className="w-full">
                <Typewriter 
                  text="Smart Contract Developer"
                  delay={1900}
                  className="block text-lg sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
                />
              </div>

              <div className="mb-10 w-full max-w-2xl mx-auto">
                <Typewriter 
                  text="I craft elegant solutions to complex problems, specializing in React, Dart, and BlockChain Technology. Let's build something amazing together."
                  delay={2900}
                  speed={13}
                  className="block text-sm sm:text-lg text-gray-600 dark:text-gray-300"
                />
              </div>

              <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 sm:gap-6 w-full">
                <div className="w-48 sm:w-auto">
                  <AnimatedButton 
                    text="View Projects" 
                    delay={1000}
                    buttonVisible={buttonsVisible}
                  />
                </div>
                <div className="w-48 sm:w-auto">
                  <AnimatedButton 
                    text="Contact Me" 
                    delay={1000}
                    buttonVisible={buttonsVisible}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;