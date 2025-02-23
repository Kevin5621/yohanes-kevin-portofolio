import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from 'lucide-react';
import { ProjectCardProps } from './types';
import { useAnimationSequence } from './hooks/useAnimationSequence';
import { useImagePreload } from './hooks/useImagePreload';

export const MediaSection: React.FC<ProjectCardProps & { 
  currentImageIndex: number;
  handleNext: (e?: React.MouseEvent) => void;
  handlePrev: (e?: React.MouseEvent) => void;
  setIsFullscreen: (value: boolean) => void;
}> = ({
  image,
  isVisible,
  currentImageIndex,
  handleNext,
  handlePrev,
  setIsFullscreen,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const { showImage, showContent, showNavButtons, technologiesFinished } = useAnimationSequence({
    isVisible,
    title: '',
    description: '',
    technologiesLength: 0,
  });
  const { getBannerImage, preloadedImages } = useImagePreload({ image, currentImageIndex });

  const handleMediaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentMedia = image[currentImageIndex];
    if (currentMedia.video && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setIsFullscreen(true);
    }
  };

  const renderMedia = () => {
    const currentMedia = image[currentImageIndex];
    const currentImagePath = getBannerImage();
    const isPreloaded = currentImagePath ? preloadedImages.has(currentImagePath) : true;

    if (currentMedia.video) {
      return (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={currentMedia.video}
            className="w-full h-full object-contain"
            onClick={handleMediaClick}
            onEnded={() => setIsPlaying(false)}
            preload="metadata"
          />
          <button
            onClick={handleMediaClick}
            className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
          >
            {isPlaying ? (
              <PauseIcon size={48} className="text-white" />
            ) : (
              <PlayIcon size={48} className="text-white" />
            )}
          </button>
        </div>
      );
    }

    return (
      <>
        <div
          className={`absolute inset-0 bg-gray-200 dark:bg-gray-800 transition-opacity duration-300 ${
            isPreloaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={getBannerImage()}
          alt={currentMedia.title}
          className={`w-full h-full object-contain absolute inset-0 z-30 transition-all duration-500 ease-in-out ${
            showImage && isPreloaded ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-95 blur-sm'
          }`}
          style={{ willChange: 'transform, opacity, filter' }}
          loading="eager"
        />
      </>
    );
  };

  return (
    <div className="mt-auto">
      <div className="h-[300px] mb-4">
        {image && image.length > 0 && isVisible && technologiesFinished && (
          <div
            className={`rounded-lg bg-gray-100 dark:bg-dark p-2 h-full transition-all duration-1000 ease-in-out relative overflow-hidden ${
              showImage ? 'shadow-neumorph-inset dark:shadow-neumorph-dark-inset' : 'shadow-none'
            }`}
          >
            <div
              className={`absolute inset-0 z-10 transition-all duration-1000 ease-in-out ${
                showImage ? 'bg-white/10 dark:bg-black/10 opacity-100' : 'bg-transparent opacity-0'
              }`}
            />
            <div
              className={`relative h-full rounded-lg overflow-hidden cursor-pointer transition-all duration-1000 ease-in-out ${
                showContent ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={handleMediaClick}
            >
              <div
                className={`absolute inset-0 z-20 bg-gray-200 dark:bg-gray-800 transition-all duration-1000 ease-in-out ${
                  showImage ? 'opacity-0 scale-110 rotate-[2deg]' : 'opacity-100 scale-100 rotate-0'
                }`}
              />
              {renderMedia()}
              <p
                className={`absolute bottom-2 left-2 text-sm text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-black/80 px-2 py-1 rounded z-40 transition-all duration-1000 ease-in-out ${
                  showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                {image[currentImageIndex].title} ({currentImageIndex + 1}/{image.length})
              </p>
            </div>
            {image.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className={`absolute left-0 top-0 h-full w-24 flex items-center justify-start transition-opacity duration-300 ease-in-out z-40 ${
                    showNavButtons ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center ml-2 group">
                    <ChevronLeftIcon
                      size={24}
                      className="text-white/70 group-hover:text-white transition-all duration-300 ease-in-out drop-shadow-lg"
                    />
                  </div>
                </button>
                <button
                  onClick={handleNext}
                  className={`absolute right-0 top-0 h-full w-24 flex items-center justify-end transition-opacity duration-300 ease-in-out z-40 ${
                    showNavButtons ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center mr-2 group">
                    <ChevronRightIcon
                      size={24}
                      className="text-white/70 group-hover:text-white transition-all duration-300 ease-in-out drop-shadow-lg"
                    />
                  </div>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};