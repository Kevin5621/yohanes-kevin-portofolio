import { useState, useEffect } from "react";
import { Typewriter } from "../../hook/Animated_typeWritter";
import { useTheme } from "../../../styles/themeContexts";

export interface AnimatedButtonProps {
  text: string;
  delay: number;
  buttonVisible: boolean;
  onClick?: () => void;
  icon?: React.ReactNode | null;
  parentRef?: React.RefObject<HTMLElement>;
  variant?: 'default' | 'subtle';
  width?: 'auto' | 'full' | 'default';
  type?: 'button' | 'submit';
  isSubmitting?: boolean;
}

export const AnimatedButton = ({ 
  text, 
  delay, 
  buttonVisible, 
  onClick, 
  icon = null,
  parentRef,
  variant = 'default',
  width = 'default',
  type = 'button',
  isSubmitting = false
}: AnimatedButtonProps) => {
  const { theme } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (buttonVisible) {
      const timer = setTimeout(() => {
        setContentVisible(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setContentVisible(false);
    }
  }, [buttonVisible]);

  // Handle theme changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef?.current) {
        const rect = parentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
        const maxDistance = windowHeight * 0.3;
        const progress = Math.min(Math.max(distanceFromCenter / maxDistance, 0), 1);
        
        if (distanceFromCenter < 100) {
          setScrollProgress(0);
        } else {
          setScrollProgress(progress);
        }
      } else {
        const scrolled = Math.min(
          Math.max(window.scrollY / (window.innerHeight * 0.3), 0),
          1
        );
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parentRef]);

  const getButtonStyles = () => {
    const baseIntensity = variant === 'subtle' ? 0.5 : 1;
    const scrollEffect = variant === 'subtle' ? 0 : scrollProgress * 0.6;
    const shadowIntensity = Math.max(baseIntensity - scrollEffect, 0);
    const subtleFactor = variant === 'subtle' ? 0.5 : 1;

    return {
      transform: `scale(${buttonVisible ? (isPressed ? 0.98 : 1) : 0.95})`,
      boxShadow: buttonVisible ? getThemeShadow(shadowIntensity, subtleFactor) : 'none',
      transition: isTransitioning 
        ? 'transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
        : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: isSubmitting ? 0.7 : 1,
      cursor: isSubmitting ? 'not-allowed' : 'pointer',
    };
  };

  const getThemeShadow = (shadowIntensity: number, subtleFactor: number) => {
    if (isPressed) {
      return theme === 'dark'
        ? `inset ${12 * subtleFactor}px ${12 * subtleFactor}px ${24 * subtleFactor}px #151515,
          inset ${-12 * subtleFactor}px ${-12 * subtleFactor}px ${24 * subtleFactor}px #353535,
          inset 0 0 ${15 * subtleFactor}px rgba(21, 21, 21, ${variant === 'subtle' ? '0.4' : '0.7'})`
        : `inset ${12 * subtleFactor}px ${12 * subtleFactor}px ${24 * subtleFactor}px #d1d1d1,
          inset ${-12 * subtleFactor}px ${-12 * subtleFactor}px ${24 * subtleFactor}px #ffffff,
          inset 0 0 ${15 * subtleFactor}px rgba(209, 209, 209, ${variant === 'subtle' ? '0.4' : '0.7'})`;
    }

    return theme === 'dark'
      ? `${16 * shadowIntensity * subtleFactor}px ${16 * shadowIntensity * subtleFactor}px ${32 * shadowIntensity}px #151515,
        ${-16 * shadowIntensity * subtleFactor}px ${-16 * shadowIntensity * subtleFactor}px ${32 * shadowIntensity}px #353535,
        0 0 ${15 * shadowIntensity}px rgba(21, 21, 21, ${variant === 'subtle' ? '0.4' : '0.7'})`
      : `${16 * shadowIntensity * subtleFactor}px ${16 * shadowIntensity * subtleFactor}px ${32 * shadowIntensity}px #d1d1d1,
        ${-16 * shadowIntensity * subtleFactor}px ${-16 * shadowIntensity * subtleFactor}px ${32 * shadowIntensity}px #ffffff,
        0 0 ${15 * shadowIntensity}px rgba(209, 209, 209, ${variant === 'subtle' ? '0.4' : '0.7'})`;
  };

  const widthClasses = {
    default: 'w-[180px]',
    auto: 'w-auto',
    full: 'w-full'
  }[width];

  return (
    <div
      className={`${widthClasses} h-[50px] rounded-lg overflow-hidden`}
      style={getButtonStyles()}
      onMouseDown={() => !isSubmitting && setIsPressed(true)}
      onMouseUp={() => !isSubmitting && setIsPressed(false)}
      onMouseLeave={() => !isSubmitting && setIsPressed(false)}
      onTouchStart={() => !isSubmitting && setIsPressed(true)}
      onTouchEnd={() => !isSubmitting && setIsPressed(false)}
    >
      <button 
        type={type}
        disabled={isSubmitting}
        className={`w-full h-full bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 
          hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover 
          active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset 
          rounded-lg flex items-center justify-center gap-2
          transition-opacity duration-300
          ${variant === 'subtle' ? 'bg-opacity-90' : ''}
          ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''}`}
        onClick={onClick}
      >
        {buttonVisible && (
          <div className={`flex items-center gap-2 transition-opacity duration-500
            ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            {icon}
            <Typewriter
              text={text}
              delay={delay}
              className="block text-lg text-gray-600 dark:text-gray-300" 
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default AnimatedButton;