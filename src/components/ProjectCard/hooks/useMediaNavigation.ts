import { useState, useCallback, useEffect } from 'react';
import { MediaState, ProjectMedia } from '../types';

export const useMediaNavigation = (
  image: ProjectMedia[],
  getImagePath: (mediaItem: ProjectMedia) => string | null
) => {
  const [state, setState] = useState<MediaState>({
    currentImageIndex: 0,
    isFullscreen: false,
    isPlaying: false,
    preloadedImages: new Set<string>(),
  });

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIndex = (state.currentImageIndex + 1) % image.length;
    setState(prev => ({ ...prev, currentImageIndex: nextIndex }));
    
    const nextNextIndex = (nextIndex + 1) % image.length;
    const nextImagePath = getImagePath(image[nextNextIndex]);
    if (nextImagePath && !state.preloadedImages.has(nextImagePath)) {
      const img = new Image();
      img.src = nextImagePath;
      img.onload = () => {
        setState(prev => ({
          ...prev,
          preloadedImages: new Set([...prev.preloadedImages, nextImagePath])
        }));
      };
    }
  }, [state.currentImageIndex, state.preloadedImages, image, getImagePath]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIndex = (state.currentImageIndex - 1 + image.length) % image.length;
    setState(prev => ({ ...prev, currentImageIndex: prevIndex }));
    
    const prevPrevIndex = (prevIndex - 1 + image.length) % image.length;
    const prevImagePath = getImagePath(image[prevPrevIndex]);
    if (prevImagePath && !state.preloadedImages.has(prevImagePath)) {
      const img = new Image();
      img.src = prevImagePath;
      img.onload = () => {
        setState(prev => ({
          ...prev,
          preloadedImages: new Set([...prev.preloadedImages, prevImagePath])
        }));
      };
    }
  }, [state.currentImageIndex, state.preloadedImages, image, getImagePath]);

  useEffect(() => {
    const preloadImages = async () => {
      const currentMedia = image[state.currentImageIndex];
      const currentPath = getImagePath(currentMedia);
      
      if (currentPath && !state.preloadedImages.has(currentPath)) {
        const img = new Image();
        img.src = currentPath;
        img.onload = () => {
          setState(prev => ({
            ...prev,
            preloadedImages: new Set([...prev.preloadedImages, currentPath])
          }));
        };
      }

      const nextIndex = (state.currentImageIndex + 1) % image.length;
      const prevIndex = (state.currentImageIndex - 1 + image.length) % image.length;
      
      [nextIndex, prevIndex].forEach(index => {
        const mediaPath = getImagePath(image[index]);
        if (mediaPath && !state.preloadedImages.has(mediaPath)) {
          const img = new Image();
          img.src = mediaPath;
          img.onload = () => {
            setState(prev => ({
              ...prev,
              preloadedImages: new Set([...prev.preloadedImages, mediaPath])
            }));
          };
        }
      });
    };

    preloadImages();
  }, [state.currentImageIndex, state.preloadedImages, image, getImagePath]);

  return {
    state,
    setState,
    handleNext,
    handlePrev
  };
};