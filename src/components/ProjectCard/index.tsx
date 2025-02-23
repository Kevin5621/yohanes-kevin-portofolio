import React, { useRef, useState } from 'react';
import { ImageViewer } from '../helper/ImageViewer';
import { ProjectCardProps } from './types';
import { useTheme } from '../../styles/themeContexts';
import { useCardAnimation } from './hooks/useCardAnimation';
import { useMediaNavigation } from './hooks/useMediaNavigation';
import { useExpandable } from './hooks/useExpandable';
import { getCardStyle } from './styles/card';
import { getImagePath, getBannerImage } from './utils';
import { Title } from './components/Title';
import { Description } from './components/Description';
import { Technologies } from './components/Technologies';
import { MediaViewer } from './components/MediaViewer';
import { ExpandableContent } from './components/ExpandableContent';
import { GitHubButton } from './components/GitHubButton';

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    technologies,
    githubUrl,
    features,
    isVisible,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimatedTech = useRef(false);
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTechIndex,] = useState(-1);

  const {
    isExpanded,
    setIsExpanded,
    contentHeight,
    contentRef,
  } = useExpandable();

  const getImagePathWithTheme = (mediaItem: typeof image[0]) => getImagePath(mediaItem, theme);
  const getBannerImageCurrent = () => getBannerImage(image[mediaState.currentImageIndex], theme);

  const {
    state: mediaState,
    setState: setMediaState,
    handleNext,
    handlePrev
  } = useMediaNavigation(image, getImagePathWithTheme);

  const {
    state: animationState,
    setState: setAnimationState
  } = useCardAnimation(isVisible, title, description, technologies, hasAnimatedTech);

  React.useEffect(() => {
    if (isVisible) {
      setIsEntering(true);
      const timer = setTimeout(() => {
        setIsEntering(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  React.useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [theme]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const scrolled = Math.min(
          Math.max(window.scrollY / (window.innerHeight * 0.3), 0),
          1
        );
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMediaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentMedia = image[mediaState.currentImageIndex];
    if (currentMedia.video) {
      setMediaState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
    } else {
      setMediaState(prev => ({ ...prev, isFullscreen: true }));
    }
  };

  return (
    <>
      {mediaState.isFullscreen && (
        <ImageViewer
          media={image}
          currentIndex={mediaState.currentImageIndex}
          onClose={() => setMediaState(prev => ({ ...prev, isFullscreen: false }))}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      
      <div 
        ref={cardRef}
        className="transform-gpu"
      >
        <div 
          className={`
            card 
            rounded-2xl 
            bg-gray-100 
            dark:bg-dark 
            p-4 
            relative 
            overflow-hidden 
            h-full
            ${isEntering || isTransitioning ? 'card-entrance' : 'card-hover'}
          `}
          style={getCardStyle(animationState.cardVisible, isHovered, isTransitioning, theme, scrollProgress)}
          onMouseEnter={() => !isEntering && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col h-full">
            <div className="min-h-[120px]">
              <Title
                title={title}
                showTitle={animationState.showTitle}
                isVisible={isVisible}
                onComplete={() => setAnimationState(prev => ({ ...prev, titleFinished: true }))}
              />

              <Description
                description={description}
                isExpanded={isExpanded}
                showDescription={animationState.showDescription}
                showReadMore={animationState.showReadMore}
                isVisible={isVisible}
                titleFinished={animationState.titleFinished}
                descriptionFinished={animationState.descriptionFinished}
                onDescriptionComplete={() => setAnimationState(prev => ({ ...prev, descriptionFinished: true }))}
                onReadMoreComplete={() => setAnimationState(prev => ({ ...prev, readMoreFinished: true }))}
                onToggleExpand={() => setIsExpanded(!isExpanded)}
                hasExpandableContent={description.length > 150 || !!features}
              />
            </div>

            {features && (
              <ExpandableContent
                features={features}
                isExpanded={isExpanded}
                contentRef={contentRef}
                contentHeight={contentHeight}
              />
            )}

            <Technologies
              technologies={technologies}
              showTechnologies={animationState.showTechnologies}
              isVisible={isVisible}
              readMoreFinished={animationState.readMoreFinished}
              currentTechIndex={currentTechIndex}
            />

            <div className="mt-auto">
              <div className="h-[300px] mb-4">
                {image && image.length > 0 && isVisible && animationState.technologiesFinished && (
                  <MediaViewer
                    media={image}
                    currentIndex={mediaState.currentImageIndex}
                    isPlaying={mediaState.isPlaying}
                    showImage={animationState.showImage}
                    showContent={animationState.showContent}
                    showNavButtons={animationState.showNavButtons}
                    preloadedImages={mediaState.preloadedImages}
                    getBannerImage={getBannerImageCurrent}
                    onMediaClick={handleMediaClick}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    onVideoEnd={() => setMediaState(prev => ({ ...prev, isPlaying: false }))}
                  />
                )}
              </div>

              <GitHubButton
                url={githubUrl}
                isVisible={isVisible}
                technologiesFinished={animationState.technologiesFinished}
                buttonsVisible={animationState.buttonsVisible}
                cardRef={cardRef}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;