import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { ProjectCardProps } from './types';
import { Typewriter } from '../hooks/Animated_typeWritter';
import { useAnimationSequence } from './hooks/useAnimationSequence';

export const ReadMoreSection: React.FC<ProjectCardProps> = ({
  description,
  features,
  isVisible,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);
  const { showReadMore, descriptionFinished } = useAnimationSequence({
    isVisible,
    title: '',
    description: '',
  });

  useEffect(() => {
    if (contentRef.current) {
      const height = isExpanded ? `${contentRef.current.scrollHeight}px` : '0px';
      setContentHeight(height);
    }
  }, [isExpanded, features]);

  return (
    <>
      <div className="h-[40px] flex items-center">
        {(description.length > 150 || features) && (
          <div className={`transition-all duration-500 ${showReadMore ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1"
            >
              {isVisible && descriptionFinished && (
                <Typewriter
                  text={isExpanded ? "Show less" : "Read more"}
                  delay={0}
                  speed={30}
                  className="flex items-center gap-1"
                  onComplete={() => {}}
                />
              )}
              {isExpanded ? (
                <ChevronUpIcon className="transform transition-transform duration-500" size={16} />
              ) : (
                <ChevronDownIcon className="transform transition-transform duration-500" size={16} />
              )}
            </button>
          </div>
        )}
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: contentHeight,
          transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
        }}
        className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
      >
        {features && (
          <div className="grid grid-cols-1 gap-2 py-2">
            {features.sections.map((section, idx) => (
              <div
                key={idx}
                className="space-y-1"
                style={{
                  transform: `translateY(${isExpanded ? '0' : '10px'})`,
                  opacity: isExpanded ? 1 : 0,
                  transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.1}s`,
                }}
              >
                <h4 className="font-medium text-gray-700 dark:text-gray-200">{section.title}</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      style={{
                        transform: `translateY(${isExpanded ? '0' : '5px'})`,
                        opacity: isExpanded ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(idx * 0.1 + itemIdx * 0.05)}s`,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};