import React, { useState } from 'react';
import { ProjectCardProps } from './types';
import { Typewriter } from '../hook/Animated_typeWritter';
import { useAnimationSequence } from './hooks/useAnimationSequence';

export const TitleSection: React.FC<ProjectCardProps> = ({
  title,
  description,
  isVisible,
}) => {
  const [isExpanded] = useState(false);
  const { showTitle, showDescription, titleFinished } = useAnimationSequence({
    isVisible,
    title,
    description,
  });

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + ' ...';
  };

  return (
    <div className="min-h-[120px]">
      <h3 className={`text-xl font-semibold text-gray-800 dark:text-gray-100 h-7 mb-3 transition-opacity duration-500 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
        {isVisible && (
          <Typewriter 
            text={title}
            delay={0}
            speed={100}
            className="inline"
          />
        )}
      </h3>
      <div className={`transition-all duration-500 ${showDescription ? 'opacity-100' : 'opacity-0'}`}>
        {isVisible && titleFinished && (
          <Typewriter
            text={isExpanded ? description : truncateDescription(description, 300)}
            delay={0}
            speed={10}
            className="text-gray-600 dark:text-gray-300"
          />
        )}
      </div>
    </div>
  );
};