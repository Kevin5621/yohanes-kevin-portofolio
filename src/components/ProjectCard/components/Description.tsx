import React from 'react';
import { Typewriter } from '../../hook/Animated_typeWritter';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';

interface DescriptionProps {
  description: string;
  isExpanded: boolean;
  showDescription: boolean;
  showReadMore: boolean;
  isVisible: boolean;
  titleFinished: boolean;
  descriptionFinished: boolean;
  onDescriptionComplete: () => void;
  onReadMoreComplete: () => void;
  onToggleExpand: () => void;
  hasExpandableContent: boolean;
}

const truncateDescription = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + ' ...';
};

export const Description: React.FC<DescriptionProps> = ({
  description,
  isExpanded,
  showDescription,
  showReadMore,
  isVisible,
  titleFinished,
  descriptionFinished,
  onDescriptionComplete,
  onReadMoreComplete,
  onToggleExpand,
  hasExpandableContent
}) => {
  return (
    <>
      <div className={`transition-all duration-500 ${showDescription ? 'opacity-100' : 'opacity-0'}`}>
        {isVisible && titleFinished && (
          <Typewriter
            text={isExpanded ? description : truncateDescription(description, 300)}
            delay={0}
            speed={10}
            className="text-gray-600 dark:text-gray-300"
            onComplete={onDescriptionComplete}
          />
        )}
      </div>

      {hasExpandableContent && (
        <div className="h-[40px] flex items-center">
          <div className={`transition-all duration-500 ${showReadMore ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={onToggleExpand}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 
                       dark:hover:text-gray-200 flex items-center gap-1"
            >
              {isVisible && descriptionFinished && (
                <Typewriter
                  text={isExpanded ? "Show less" : "Read more"}
                  delay={0}
                  speed={30}
                  className="flex items-center gap-1"
                  onComplete={onReadMoreComplete}
                />
              )}
              {isExpanded ? (
                <ChevronUpIcon className="transform transition-transform duration-500" size={16} />
              ) : (
                <ChevronDownIcon className="transform transition-transform duration-500" size={16} />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};