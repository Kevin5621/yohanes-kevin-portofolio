import React from 'react';
import { GithubIcon } from 'lucide-react';
import { AnimatedButton } from '../../hook/AnimatedButton';

interface GitHubButtonProps {
  url: string;
  isVisible: boolean;
  technologiesFinished: boolean;
  buttonsVisible: boolean;
  cardRef: React.RefObject<HTMLDivElement>;
}

export const GitHubButton: React.FC<GitHubButtonProps> = ({
  url,
  isVisible,
  technologiesFinished,
  buttonsVisible,
  cardRef
}) => {
  return (
    <div className="h-[40px] flex items-center">
      <div className="w-48 sm:w-auto">
        {isVisible && technologiesFinished && (
          <AnimatedButton
            text="View on GitHub"
            delay={1000}
            buttonVisible={buttonsVisible}
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
            icon={<GithubIcon size={16} />}
            parentRef={cardRef}
            variant="subtle"
          />
        )}
      </div>
    </div>
  );
};