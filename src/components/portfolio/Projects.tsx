
import { useState, useEffect } from 'react';
import { workResultsProjects } from '../../data/workResults';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PROJECTS = workResultsProjects['en'];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset image index when active project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeProject]);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const images = PROJECTS[activeProject].image;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const images = PROJECTS[activeProject].image;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentProject = PROJECTS[activeProject];
  const currentImage = currentProject.image[activeImageIndex];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-[#d2d2d7]">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-16">
        Selected Projects
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* List Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-8 lg:gap-y-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              onMouseEnter={() => setActiveProject(index)}
              className="group cursor-pointer"
            >
              {/* Mobile Only Image - Just show the banner (first image) */}
              <div className="lg:hidden mb-6 rounded-2xl overflow-hidden aspect-video relative bg-[#f5f5f7]">
                <img 
                  src={project.image[0].image} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 
                className={`text-3xl md:text-5xl font-semibold transition-all duration-300 ${
                  activeProject === index ? 'text-[#1d1d1f] translate-x-4' : 'text-[#86868b] opacity-40 hover:opacity-100'
                }`}
              >
                {project.title}
              </h3>
              
              {/* Mobile Only Details */}
              <div className="lg:hidden mt-4 space-y-2">
                 <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide">
                   {project.technologies.join(" / ")}
                 </span>
                 <p className="text-lg text-[#86868b] font-medium leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Preview Section - Sticky */}
        <div className="hidden lg:block w-1/2 h-fit sticky top-32">
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden aspect-video relative bg-[#f5f5f7] shadow-sm group/image flex items-center justify-center">
               <img 
                 key={`${activeProject}-${activeImageIndex}`} // Triggers animation on change
                 src={currentImage.image} 
                 alt={currentImage.title}
                 className="w-full h-full object-contain animate-in fade-in zoom-in-95 duration-500"
               />
               
               {/* Carousel Controls */}
               {currentProject.image.length > 1 && (
                 <>
                   <button 
                     onClick={handlePrevImage}
                     className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 hover:bg-white"
                     aria-label="Previous image"
                   >
                     <ChevronLeft className="w-6 h-6 text-[#1d1d1f]" />
                   </button>
                   <button 
                     onClick={handleNextImage}
                     className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 hover:bg-white"
                     aria-label="Next image"
                   >
                     <ChevronRight className="w-6 h-6 text-[#1d1d1f]" />
                   </button>
                   
                   {/* Image Dots/Indicator */}
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                     {currentProject.image.map((_, idx) => (
                       <div 
                         key={idx}
                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
                           idx === activeImageIndex ? 'bg-white w-4' : 'bg-white/50'
                         }`}
                       />
                     ))}
                   </div>
                 </>
               )}
            </div>
            
            <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500" key={`desc-${activeProject}`}>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide">
                  {currentProject.technologies.slice(0, 3).join(" / ")}
                </span>
                {currentProject.image.length > 1 && (
                  <span className="text-xs font-medium text-[#86868b]">
                    {activeImageIndex + 1} / {currentProject.image.length}
                  </span>
                )}
              </div>
              <p className="text-xl text-[#1d1d1f] font-medium leading-relaxed max-w-xl">
                {currentProject.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
