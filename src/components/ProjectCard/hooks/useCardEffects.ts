import { useState, useRef, useCallback, useEffect } from 'react';
import { ProjectCardProps } from '../types';

export const useCardEffects = ({
  isVisible,
  image,
  theme,
}: ProjectCardProps & { theme: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [, setScrollProgress] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
  const cardRef = useRef<HTMLDivElement>(null);

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

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      const nextIndex = (currentImageIndex + 1) % image.length;
      setCurrentImageIndex(nextIndex);

      const nextNextIndex = (nextIndex + 1) % image.length;
      const nextImagePath = getImagePath(image[nextNextIndex]);
      if (nextImagePath && !preloadedImages.has(nextImagePath)) {
        const img = new Image();
        img.src = nextImagePath;
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, nextImagePath]));
        };
      }
    },
    [currentImageIndex, image, getImagePath, preloadedImages]
  );

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      const prevIndex = (currentImageIndex - 1 + image.length) % image.length;
      setCurrentImageIndex(prevIndex);

      const prevPrevIndex = (prevIndex - 1 + image.length) % image.length;
      const prevImagePath = getImagePath(image[prevPrevIndex]);
      if (prevImagePath && !preloadedImages.has(prevImagePath)) {
        const img = new Image();
        img.src = prevImagePath;
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, prevImagePath]));
        };
      }
    },
    [currentImageIndex, image, getImagePath, preloadedImages]
  );

  const getCardStyle = useCallback(() => {
    return {
      transform: `
        scale(${cardVisible ? (isHovered ? 1.02 : 1) : 0.95})
        translateY(${isHovered ? -8 : 0}px)
      `,
      opacity: cardVisible ? 1 : 0,
      transition: isTransitioning 
        ? 'transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
        : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
    };
  }, [cardVisible, isHovered, isTransitioning]);

  // Efek untuk preload gambar
  useEffect(() => {
    if (isVisible) {
      const currentMedia = image[currentImageIndex];
      const currentPath = getImagePath(currentMedia);
      if (currentPath && !preloadedImages.has(currentPath)) {
        const img = new Image();
        img.src = currentPath;
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, currentPath]));
        };
      }

      const nextIndex = (currentImageIndex + 1) % image.length;
      const prevIndex = (currentImageIndex - 1 + image.length) % image.length;

      [nextIndex, prevIndex].forEach(index => {
        const mediaPath = getImagePath(image[index]);
        if (mediaPath && !preloadedImages.has(mediaPath)) {
          const img = new Image();
          img.src = mediaPath;
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, mediaPath]));
          };
        }
      });

      const preloadRemaining = async () => {
        const imagesToPreload = image
          .map(img => getImagePath(img))
          .filter(path => path && !preloadedImages.has(path)) as string[];

        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => {
            imagesToPreload.forEach(path => {
              const img = new Image();
              img.src = path;
              img.onload = () => {
                setPreloadedImages(prev => new Set([...prev, path]));
              };
            });
          });
        } else {
          setTimeout(() => {
            imagesToPreload.forEach(path => {
              const img = new Image();
              img.src = path;
              img.onload = () => {
                setPreloadedImages(prev => new Set([...prev, path]));
              };
            });
          }, 1000);
        }
      };

      preloadRemaining();
    }
  }, [isVisible, currentImageIndex, image, getImagePath, preloadedImages]);

  // Efek untuk animasi masuk awal
  useEffect(() => {
    if (isVisible) {
      setCardVisible(true);
      setIsEntering(true);
      const timer = setTimeout(() => {
        setIsEntering(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Efek untuk transisi tema
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    },); 
    return () => clearTimeout(timer);
  }, [theme]);

  // Efek untuk scroll progress
  useEffect(() => {
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

  // Mengembalikan semua yang diperlukan oleh komponen
  return {
    cardRef,
    cardStyle: getCardStyle(),
    cardVisible,
    isHovered,
    isFullscreen,
    setIsFullscreen,
    handleNext,
    handlePrev,
    currentImageIndex,
    setIsHovered,
    setCurrentImageIndex,
    isEntering,
    isTransitioning,
    getBannerImage,
    preloadedImages,
  };
};