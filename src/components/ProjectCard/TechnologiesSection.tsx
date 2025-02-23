import React from 'react';
import { ProjectCardProps } from './types';
import { Typewriter } from '../hooks/Animated_typeWritter';
import { useAnimationSequence } from './hooks/useAnimationSequence';

export const TechnologiesSection: React.FC<ProjectCardProps> = ({
  technologies,
  isVisible,
}) => {
  const { showTechnologies, currentTechIndex } = useAnimationSequence({
    isVisible,
    title: '',
    description: '',
    technologies,
  });

  return (
    <div className="h-[60px] flex items-center">
      <div className={`w-full transition-all duration-500 ${showTechnologies ? 'opacity-100' : 'opacity-0'}`}>
        {isVisible && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, idx) => (
              <div
                key={tech}
                className={`px-3 py-1 text-sm rounded-full text-gray-600 dark:text-gray-300 
                  bg-gray-100 dark:bg-dark transition-all duration-500
                  ${idx <= currentTechIndex ? 'shadow-neumorph-inset dark:shadow-neumorph-dark-inset' : ''}`}
                style={{ transitionDelay: `${idx * 0}ms` }}
              >
                {idx <= currentTechIndex && (
                  <Typewriter text={tech} delay={300} speed={45} className="inline" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};