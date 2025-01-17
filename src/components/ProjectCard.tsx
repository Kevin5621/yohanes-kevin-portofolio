// ProjectCard.tsx
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ChevronLeftIcon, ChevronRightIcon, GithubIcon, XIcon, ZoomInIcon } from 'lucide-react';
import { ImageViewer } from './ImageViewer';

interface ProjectImage {
  image: string;
  title: string;
}

interface Project {
  title: string;
  description: string;
  image: ProjectImage[];
  technologies: string[];
  githubUrl: string;
}

interface ProjectCardProps extends Project {
  index: number;
  isAnyCardExpanded: boolean;
  onExpand: (index: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  index,
  isAnyCardExpanded,
  onExpand,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current && !isExpanded) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setInitialPosition({
        x: rect.left - centerX + rect.width / 2,
        y: rect.top - centerY + rect.height / 2,
      });
    }
  }, [isExpanded]);

  const handleExpand = useCallback(() => {
    if (!isExpanded) {
      onExpand(index);
      setIsExpanded(true);
    }
  }, [index, isExpanded, onExpand]);

  const handleCollapse = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
    onExpand(-1);
  }, [onExpand]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % image.length);
  }, [image.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length);
  }, [image.length]);

  const handleImageClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(true);
  }, []);

  return (
    <>
      {isFullscreen && (
        <ImageViewer
          images={image}
          currentIndex={currentImageIndex}
          onClose={() => setIsFullscreen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      <CSSTransition
        in={isExpanded}
        timeout={300}
        classNames="overlay"
        unmountOnExit
      >
        <div 
          className="fixed inset-0 bg-black/50 z-40" 
          onClick={handleCollapse}
        />
      </CSSTransition>

      <div
        ref={cardRef}
        onClick={handleExpand}
        style={
          isExpanded
            ? {
                transform: 'translate(-50%, -50%)',
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }
            : {
                '--initial-x': `${initialPosition.x}px`,
                '--initial-y': `${initialPosition.y}px`,
              } as React.CSSProperties
        }
        className={`
          group rounded-2xl transition-all duration-300 ease-out origin-center
          ${
            isExpanded
              ? 'fixed top-1/2 left-1/2 w-[90vw] max-w-4xl z-50 bg-gray-100 dark:bg-dark p-6 shadow-2xl card-expanded'
              : `relative shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                 dark:hover:shadow-neumorph-dark-hover bg-gray-100 dark:bg-dark p-6 
                 transition-transform duration-300 ${
                   isAnyCardExpanded ? 'scale-95 opacity-50' : 'hover:scale-[1.02]'
                 }`
          }
        `}
      >
        <div className="relative">
          {isExpanded && (
            <button
              onClick={handleCollapse}
              className="absolute -top-2 -right-2 p-2 rounded-full shadow-neumorph dark:shadow-neumorph-dark 
                       hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover text-gray-600 
                       dark:text-gray-300 bg-gray-100 dark:bg-dark transition-transform duration-200 
                       hover:scale-110 z-10"
            >
              <XIcon size={20} />
            </button>
          )}
          
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full shadow-neumorph-inset dark:shadow-neumorph-dark-inset 
                         text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-dark"
              >
                {tech}
              </span>
            ))}
          </div>

          {image && image.length > 0 && (
            <div className="relative mt-4 mb-6">
              <div className="rounded-lg shadow-neumorph dark:shadow-neumorph-dark">
                <div 
                  className="relative overflow-hidden"
                  style={{ paddingBottom: '56.25%' }}
                >
                  <img
                    src={image[currentImageIndex].image}
                    alt={image[currentImageIndex].title}
                    className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
                    onClick={handleImageClick}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
                    <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                      <p className="text-white text-sm">
                        {image[currentImageIndex].title}
                      </p>
                      <button
                        onClick={handleImageClick}
                        className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        <ZoomInIcon size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {image.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full 
                             shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                             dark:hover:shadow-neumorph-dark-hover bg-gray-100 dark:bg-dark 
                             text-gray-600 dark:text-gray-300 transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeftIcon size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full 
                             shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                             dark:hover:shadow-neumorph-dark-hover bg-gray-100 dark:bg-dark 
                             text-gray-600 dark:text-gray-300 transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRightIcon size={24} />
                  </button>
                </>
              )}
            </div>
          )}

          <div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-neumorph 
                       dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                       dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset 
                       dark:active:shadow-neumorph-dark-inset transition-all duration-200 
                       text-gray-600 dark:text-gray-300 hover:scale-105"
            >
              <GithubIcon size={16} />
              {isExpanded ? 'View on GitHub' : 'Code'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};