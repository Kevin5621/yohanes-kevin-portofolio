import React from 'react';
import { ProjectCardProps } from './types';
import { useTheme } from '../../styles/themeContexts';
import { TitleSection } from './TitleSection';
import { ReadMoreSection } from './ReadMoreSection';
import { TechnologiesSection } from './TechnologiesSection';
import { MediaSection } from './MediaSection';
import { GitHubButton } from './GitHubButton';
import { useCardEffects } from './hooks/useCardEffects';
import { ImageViewer } from '../helper/ImageViewer';

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { theme } = useTheme();
  const {
    cardRef,
    cardStyle,
    cardVisible,
    isHovered,
    isFullscreen,
    setIsFullscreen,
    handleNext,
    handlePrev,
    currentImageIndex,
    setIsHovered,
    isEntering,
    isTransitioning,
  } = useCardEffects({ ...props, theme }); 

  return (
    <>
      {isFullscreen && (
        <ImageViewer
          media={props.image}
          currentIndex={currentImageIndex}
          onClose={() => setIsFullscreen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      
      <div ref={cardRef} className="transform-gpu">
        <div 
          className={`
            card rounded-2xl bg-gray-100 dark:bg-dark p-4 
            relative overflow-hidden h-full
            ${cardVisible 
              ? (isHovered 
                ? 'shadow-neumorph-hover dark:shadow-neumorph-dark-hover' 
                : 'shadow-neumorph dark:shadow-neumorph-dark')
              : 'shadow-none'
            }
            ${isEntering || isTransitioning ? 'card-entrance' : 'card-hover'}
          `}
          style={cardStyle}
          onMouseEnter={() => !isEntering && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col h-full">
            <TitleSection {...props} />
            <ReadMoreSection {...props} />
            <TechnologiesSection {...props} />
            <MediaSection 
              {...props} 
              currentImageIndex={currentImageIndex} 
              handleNext={handleNext} 
              handlePrev={handlePrev}
              setIsFullscreen={setIsFullscreen} 
            />
            <GitHubButton {...props} />
          </div>
        </div>
      </div>
    </>
  );
};