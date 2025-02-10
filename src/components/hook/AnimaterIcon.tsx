import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../../styles/themeContexts";

interface AnimatedNeumorphicIconProps {
  Icon: LucideIcon;
  delay?: number;
  className?: string;
  isVisible?: boolean;
  href: string;
}

const AnimatedNeumorphicIcon: React.FC<AnimatedNeumorphicIconProps> = ({ 
  Icon, 
  delay = 0, 
  className = "",
  isVisible = false,
  href
}) => {
  const { theme } = useTheme();
  const [isAnimated, setIsAnimated] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isVisible]);

  // Handle theme changes
  useEffect(() => {
    setIsThemeTransitioning(true);
    const timer = setTimeout(() => {
      setIsThemeTransitioning(false);
    }, 700); // Match the duration in the transition class

    return () => clearTimeout(timer);
  }, [theme]);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleClick = () => {
    window.open(href, '_blank');
  };

  const getTransitionStyles = () => {
    if (isThemeTransitioning) {
      return {
        transformOrigin: 'center',
        transition: `
          transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
          opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
          padding 300ms cubic-bezier(0.4, 0, 0.2, 1)
        `
      };
    }

    return {
      transformOrigin: 'center',
      transition: `
        all 700ms cubic-bezier(0.4, 0, 0.2, 1)
      `
    };
  };

  return (
    <div 
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        cursor-pointer 
        ${className} 
        ${isAnimated 
          ? "p-4 rounded-lg" 
          : "p-2 rounded-lg opacity-50 scale-90 bg-gray-200/30 dark:bg-dark/30"
        }
        ${isPressed 
          ? "shadow-neumorph-inset dark:shadow-neumorph-dark-inset" 
          : "shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover"
        }
      `}
      style={getTransitionStyles()}
    >
      <Icon 
        className={`${
          isAnimated 
            ? "text-gray-600 dark:text-gray-300" 
            : "text-gray-400 dark:text-gray-600 opacity-70"
        }`}
        style={{
          transition: isThemeTransitioning
            ? 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)'
            : 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        size={24}
      />
    </div>
  );
};

export default AnimatedNeumorphicIcon;