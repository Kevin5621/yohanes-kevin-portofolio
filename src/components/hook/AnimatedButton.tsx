import { AnimatedButtonProps } from "../Hero";
import { Typewriter } from "./Animated_typeWritter";
import { useState, useEffect } from "react";

export const AnimatedButton = ({ text, delay, buttonVisible }: AnimatedButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = Math.min(
        Math.max(window.scrollY / (window.innerHeight * 0.3), 0),
        1
      );
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getButtonStyles = () => {
    const baseIntensity = 1;
    const scrollEffect = scrollProgress * 1.2;
    const shadowIntensity = Math.max(baseIntensity - scrollEffect, 0);

    // Light theme shadows
    const lightOuterShadow = `
      ${16 * shadowIntensity}px ${16 * shadowIntensity}px ${32 * shadowIntensity}px #d1d1d1,
      ${-16 * shadowIntensity}px ${-16 * shadowIntensity}px ${32 * shadowIntensity}px #ffffff,
      0 0 ${15 * shadowIntensity}px rgba(209, 209, 209, 0.7)
    `;
    
    const lightInsetShadow = `
      inset 12px 12px 24px #d1d1d1,
      inset -12px -12px 24px #ffffff,
      inset 0 0 15px rgba(209, 209, 209, 0.7)
    `;

    // Dark theme shadows
    const darkOuterShadow = `
      ${16 * shadowIntensity}px ${16 * shadowIntensity}px ${32 * shadowIntensity}px #151515,
      ${-16 * shadowIntensity}px ${-16 * shadowIntensity}px ${32 * shadowIntensity}px #353535,
      0 0 ${15 * shadowIntensity}px rgba(21, 21, 21, 0.7)
    `;
    
    const darkInsetShadow = `
      inset 12px 12px 24px #151515,
      inset -12px -12px 24px #353535,
      inset 0 0 15px rgba(21, 21, 21, 0.7)
    `;

    const isDark = window.document.documentElement.classList.contains('dark');
    const shadow = isPressed 
      ? (isDark ? darkInsetShadow : lightInsetShadow)
      : (isDark ? darkOuterShadow : lightOuterShadow);

    return {
      transform: `scale(${buttonVisible ? (isPressed ? 0.98 : 1) : 0.95})`,
      boxShadow: buttonVisible ? shadow : 'none',
      transitionProperty: 'transform, box-shadow',
      transitionDuration: '1000ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <div
    className={`w-[180px] h-[50px] rounded-lg transform transition-all duration-1000 ease-out overflow-hidden
      ${buttonVisible ? 'scale-100 shadow-neumorph dark:shadow-neumorph-dark' : 'scale-95 shadow-none'}`}
      style={getButtonStyles()}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <button className="w-full h-full bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 
                       hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover 
                       active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset 
                       transition-shadow rounded-lg"
      >
        {buttonVisible && (
          <Typewriter
            text={text}
            delay={delay}
            className="block text-lg text-gray-600 dark:text-gray-300" 
          />
        )}
      </button>
    </div>
  );
};