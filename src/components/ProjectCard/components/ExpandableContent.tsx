import React from 'react';
import { ProjectFeatures } from '../types';
import { cardAnimations } from '../styles/animations';

interface ExpandableContentProps {
  features: ProjectFeatures;
  isExpanded: boolean;
  contentRef: React.RefObject<HTMLDivElement>;
  contentHeight: string;
}

export const ExpandableContent: React.FC<ExpandableContentProps> = ({
  features,
  isExpanded,
  contentRef,
  contentHeight
}) => {
  return (
    <div
      ref={contentRef}
      style={cardAnimations.contentExpand.maxHeight(contentHeight)}
      className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="grid grid-cols-1 gap-2 py-2">
        {features.sections.map((section, idx) => (
          <div 
            key={idx} 
            className="space-y-1"
            style={cardAnimations.section(isExpanded, idx)}
          >
            <h4 className="font-medium text-gray-700 dark:text-gray-200">
              {section.title}
            </h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
              {section.items.map((item, itemIdx) => (
                <li 
                  key={itemIdx}
                  style={cardAnimations.item(isExpanded, idx, itemIdx)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};