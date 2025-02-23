import React, { useRef } from 'react';
import { GithubIcon } from 'lucide-react';
import { ProjectCardProps } from './types';
import { AnimatedButton } from './hooks/AnimatedButton';
import { useAnimationSequence } from './hooks/useAnimationSequence';

export const GitHubButton: React.FC<ProjectCardProps> = ({
  githubUrl,
  isVisible,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { buttonsVisible, technologiesFinished } = useAnimationSequence({
    isVisible,
    title: '',
    description: '',
    technologiesLength: 0,
  });

  return (
    <div className="h-[40px] flex items-center">
      <div className="w-48 sm:w-auto" ref={cardRef}>
        {isVisible && technologiesFinished && (
          <AnimatedButton
            text="View on GitHub"
            delay={1000}
            buttonVisible={buttonsVisible}
            variant="subtle"
            parentRef={cardRef}
            onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
            icon={<GithubIcon size={16} />}
          />
        )}
      </div>
    </div>
  );
};