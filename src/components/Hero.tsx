import { useEffect, useState, useRef } from "react";
import { Typewriter } from "./hook/Animated_typeWritter";
import { AnimatedButton } from "./hook/AnimatedButton";

const Hero = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cardTimer = setTimeout(() => setCardVisible(true), 500);
    const contentTimer = setTimeout(() => setContentVisible(true), 1500);
    const buttonTimer = setTimeout(() => setButtonsVisible(true), 6300);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrolled = Math.min(
              Math.max((1 - entry.intersectionRatio) * 1.5, 0),
              1
            );
            setScrollProgress(scrolled);
          }
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        rootMargin: "-25% 0px -15% 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(cardTimer);
      clearTimeout(contentTimer);
      clearTimeout(buttonTimer);
      observer.disconnect();
    };
  }, []);

  // Calculate dynamic styles based on scroll progress and pressed state
  const getCardStyles = () => {
    const scale = isPressed
      ? 0.98
      : cardVisible
      ? 1 - scrollProgress * 0.02
      : 0.95;

    const shadowIntensity = Math.max(1 - scrollProgress * 1.2, 0);
    
    // Light theme shadows with increased intensity
    const lightOuterShadow = `
      ${12 * shadowIntensity}px ${12 * shadowIntensity}px ${24 * shadowIntensity}px #d1d1d1,
      ${-12 * shadowIntensity}px ${-12 * shadowIntensity}px ${24 * shadowIntensity}px #ffffff
    `;
    
    const lightInsetShadow = `
      inset 8px 8px 16px #d1d1d1,
      inset -8px -8px 16px #ffffff
    `;

    // Dark theme shadows with increased intensity
    const darkOuterShadow = `
      ${12 * shadowIntensity}px ${12 * shadowIntensity}px ${24 * shadowIntensity}px #151515,
      ${-12 * shadowIntensity}px ${-12 * shadowIntensity}px ${24 * shadowIntensity}px #353535
    `;
    
    const darkInsetShadow = `
      inset 8px 8px 16px #151515,
      inset -8px -8px 16px #353535
    `;

    const isDark = window.document.documentElement.classList.contains('dark');
    const shadow = isPressed 
      ? (isDark ? darkInsetShadow : lightInsetShadow)
      : (isDark ? darkOuterShadow : lightOuterShadow);

    return {
      transform: `scale(${scale})`,
      boxShadow: `var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`,
      '--tw-shadow': shadow,
      '--tw-shadow-colored': shadow,
      transitionProperty: 'transform, box-shadow, opacity',
      transitionDuration: '1000ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark transition-colors duration-200"
    >
      <div className="w-full max-w-4xl mx-auto text-center pt-16 sm:pt-15 px-4 sm:px-6 flex items-center min-h-screen">
        <div 
          className={`
            w-full min-h-[520px] sm:min-h-[460px] p-6 sm:p-8 rounded-2xl 
            transition-all duration-1000 ease-out my-auto
            ${cardVisible ? 'opacity-100' : 'opacity-0'}
            cursor-pointer relative bg-gray-100 dark:bg-dark
          `}
          style={getCardStyles()}
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