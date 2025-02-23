import { useState, useEffect, useCallback } from 'react';
import { ProjectCardProps } from '../types';

interface UseImagePreloadProps {
  image: ProjectCardProps['image'];
  currentImageIndex: number;
  theme?: string;
}

export const useImagePreload = ({ image, currentImageIndex, theme }: UseImagePreloadProps) => {
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  const getImagePath = useCallback((mediaItem: typeof image[0]) => {
    if (mediaItem.video) return null;
    if (mediaItem.bannerLight && mediaItem.bannerDark) {
      return theme === 'dark' ? mediaItem.bannerDark : mediaItem.bannerLight;
    }
    return mediaItem.image;
  }, [theme]);

  const getBannerImage = useCallback(() => {
    const currentMedia = image[currentImageIndex];
    if (currentMedia.bannerLight && currentMedia.bannerDark) {
      return theme === 'dark' ? currentMedia.bannerDark : currentMedia.bannerLight;
    }
    return currentMedia.image;
  }, [currentImageIndex, theme, image]);

  useEffect(() => {
    const preloadImages = async () => {
      const currentPath = getImagePath(image[currentImageIndex]);
      if (currentPath && !preloadedImages.has(currentPath)) {
        const img = new Image();
        img.src = currentPath;
        img.onload = () => setPreloadedImages(prev => new Set([...prev, currentPath]));
      }

      const nextIndex = (currentImageIndex + 1) % image.length;
      const prevIndex = (currentImageIndex - 1 + image.length) % image.length;
      [nextIndex, prevIndex].forEach(index => {
        const mediaPath = getImagePath(image[index]);
        if (mediaPath && !preloadedImages.has(mediaPath)) {
          const img = new Image();
          img.src = mediaPath;
          img.onload = () => setPreloadedImages(prev => new Set([...prev, mediaPath]));
        }
      });

      const imagesToPreload = image
        .map(img => getImagePath(img))
        .filter(path => path && !preloadedImages.has(path)) as string[];

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          imagesToPreload.forEach(path => {
            const img = new Image();
            img.src = path;
            img.onload = () => setPreloadedImages(prev => new Set([...prev, path]));
          });
        });
      } else {
        setTimeout(() => {
          imagesToPreload.forEach(path => {
            const img = new Image();
            img.src = path;
            img.onload = () => setPreloadedImages(prev => new Set([...prev, path]));
          });
        }, 1000);
      }
    };

    preloadImages();
  }, [currentImageIndex, image, getImagePath, preloadedImages]);

  return { getImagePath, getBannerImage, preloadedImages };
};