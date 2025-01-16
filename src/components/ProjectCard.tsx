import React, { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, GithubIcon, XIcon, ZoomInIcon } from 'lucide-react';

interface Screenshot {
  title: string;
  image: string;
}

const ImageViewer: React.FC<{
  image: Screenshot[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ image, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
      >
        <XIcon size={24} />
      </button>
      
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
      >
        <ChevronLeftIcon size={24} />
      </button>

      <img
        src={image[currentIndex].image}
        alt={image[currentIndex].title}
        className="max-w-[90vw] max-h-[90vh] object-contain"
      />

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
      >
        <ChevronRightIcon size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/50 px-4 py-2 rounded-full text-white">
        {image[currentIndex].title} ({currentIndex + 1}/{image.length})
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: Screenshot[];
  technologies: string[];
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [, setSlideDirection] = useState<'left' | 'right'>('right');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (image) {
      setSlideDirection('right');
      setCurrentImageIndex((prev) => (prev + 1) % image.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (image) {
      setSlideDirection('left');
      setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length);
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(true);
  };

  return (
    <>
      {/* Fullscreen Image Viewer */}
      {isFullscreen && image && (
        <ImageViewer
          image={image}
          currentIndex={currentImageIndex}
          onClose={() => setIsFullscreen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ease-in-out ${
          isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsExpanded(false)}
      />

      {/* Card */}
      <div
        ref={cardRef}
        onClick={() => setIsExpanded(true)}
        className={`
          group rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer
          ${isExpanded
            ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl z-50 bg-gray-100 dark:bg-dark p-6 shadow-2xl'
            : 'shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover bg-gray-100 dark:bg-dark p-6'
          }
          ${isExpanded ? 'scale-100' : 'hover:scale-[1.02]'}
        `}
      >
        <div className="relative">
          {isExpanded && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="absolute -top-2 -right-2 p-2 rounded-full shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-dark transition-transform duration-200 hover:scale-110 z-10"
            >
              <XIcon size={20} />
            </button>
          )}
          
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full shadow-neumorph-inset dark:shadow-neumorph-dark-inset text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-dark"
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
                  style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
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
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover bg-gray-100 dark:bg-dark text-gray-600 dark:text-gray-300 transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeftIcon size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover bg-gray-100 dark:bg-dark text-gray-600 dark:text-gray-300 transition-all duration-200 hover:scale-110"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset transition-all duration-200 text-gray-600 dark:text-gray-300 hover:scale-105"
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

export default ProjectCard;