import React, { useState, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, GithubIcon, ZoomInIcon } from 'lucide-react';
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
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

      <div className="card rounded-2xl bg-gray-100 dark:bg-dark p-6 relative shadow-neumorph 
                    dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                    dark:hover:shadow-neumorph-dark-hover transition-transform duration-300 
                    hover:scale-[1.02]">
        <div className="relative">
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
                className="px-3 py-1 text-sm rounded-full shadow-neumorph-inset 
                         dark:shadow-neumorph-dark-inset text-gray-600 dark:text-gray-300 
                         bg-gray-100 dark:bg-dark"
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
                             text-gray-600 dark:text-gray-300 transition-all duration-200 
                             hover:scale-110"
                  >
                    <ChevronLeftIcon size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full 
                             shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                             dark:hover:shadow-neumorph-dark-hover bg-gray-100 dark:bg-dark 
                             text-gray-600 dark:text-gray-300 transition-all duration-200 
                             hover:scale-110"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-neumorph 
                       dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                       dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset 
                       dark:active:shadow-neumorph-dark-inset transition-all duration-200 
                       text-gray-600 dark:text-gray-300 hover:scale-105"
            >
              <GithubIcon size={16} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};