import React from 'react';
import { Typewriter } from '../../hook/Animated_typeWritter';

interface TitleProps {
  title: string;
  showTitle: boolean;
  isVisible: boolean;
  onComplete: () => void;
}

export const Title: React.FC<TitleProps> = ({
  title,
  showTitle,
  isVisible,
  onComplete
}) => {
  return (
    <h3 className={`text-xl font-semibold text-gray-800 dark:text-gray-100 h-7 mb-3 
      transition-opacity duration-500 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
      {isVisible && (
        <Typewriter 
          text={title}
          delay={0}
          speed={100}
          className="inline"
          onComplete={onComplete}
        />
      )}
    </h3>
  );
};