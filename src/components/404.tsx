import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../styles/themeContexts';

export const NotFound = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { theme } = useTheme();

  const getCardShadow = () => {
    return theme === 'dark'
      ? `32px 32px 64px #151515,
         -32px -32px 64px #353535,
         0 0 30px rgba(21, 21, 21, 0.7)`
      : `32px 32px 64px #d1d1d1,
         -32px -32px 64px #ffffff,
         0 0 30px rgba(209, 209, 209, 0.7)`;
  };

  const getButtonShadow = () => {
    if (isButtonPressed) {
      return theme === 'dark' 
        ? 'inset 8px 8px 16px #151515, inset -8px -8px 16px #353535'
        : 'inset 8px 8px 16px #d1d1d1, inset -8px -8px 16px #ffffff';
    }
    return theme === 'dark' 
      ? '8px 8px 16px #151515, -8px -8px 16px #353535'
      : '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff';
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-dark transition-colors duration-200">
      <div 
        className="p-16 md:p-24 rounded-[50px] bg-gray-100 dark:bg-dark text-center m-4 transition-all duration-1000 cursor-pointer"
        style={{
          boxShadow: getCardShadow(),
          transitionProperty: 'transform, opacity',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <h1 className="text-8xl md:text-9xl m-0 text-gray-800 dark:text-gray-100 transition-colors duration-200">
          404
        </h1>
        <p className="text-xl md:text-2xl my-4 md:my-8 text-gray-600 dark:text-gray-300 transition-colors duration-200">
          Lost in the shadows? Let's get you back home.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 rounded-2xl bg-gray-100 dark:bg-dark 
                     text-gray-600 dark:text-gray-300 
                     no-underline font-medium transition-all duration-200"
          style={{
            boxShadow: getButtonShadow()
          }}
          onMouseDown={() => setIsButtonPressed(true)}
          onMouseUp={() => setIsButtonPressed(false)}
          onMouseLeave={() => setIsButtonPressed(false)}
          onTouchStart={() => setIsButtonPressed(true)}
          onTouchEnd={() => setIsButtonPressed(false)}
        >
          Illuminate My Path
        </Link>
      </div>
    </div>
  );
};