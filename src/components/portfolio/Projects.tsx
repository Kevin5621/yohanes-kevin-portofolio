
import { useState } from 'react';

const PROJECTS = [
  {
    title: "SalesView",
    category: "Next.js / TS",
    description: "Comprehensive CRM platform for healthcare. Features lead management, route optimization, and advanced analytics.",
    image: "/work/salesview/Screenshot 2026-01-30 at 12-34-39 CRM Healthcare Platform.webp"
  },
  {
    title: "CRM Pharmaceutical",
    category: "Go / Next.js",
    description: "Enterprise-grade CRM with AI-powered insights, real-time notifications, and 20+ backend modules.",
    image: "/work/CRMFarmasi/dashboardLight.png"
  },
  {
    title: "Evalique",
    category: "AI / EdTech",
    description: "AI-powered assessment platform with automatic question generation and Google Sheets sync.",
    image: "/work/evalique/Screenshot from 2026-01-27 20-08-53.webp"
  },
  {
    title: "Fiber Monitoring",
    category: "Turborepo",
    description: "End-to-end management solution for fiber optic installations with admin & field worker apps.",
    image: "/work/FiberMonitoringImages/adminDashboard.png"
  },
  {
    title: "Internal ERP",
    category: "Operations",
    description: "Replaced manual processes with a streamlined ERP handling auth, roles, and complex data flows.",
    image: "/work/erp/Screenshot 2026-01-29 at 19-35-08 ERP System.webp"
  },
  {
    title: "Sitama",
    category: "Education",
    description: "Internship management platform featuring a dual-role system for students and lecturers.",
    image: "/work/sitama/converted.webp"
  },
  {
    title: "Digital Marketer Portfolio",
    category: "Creative",
    description: "Interactive creative showcase with smooth animations and responsive design.",
    image: "/work/PortofolioMarketerImages/2.png"
  }
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-[#d2d2d7]">
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
              {/* Mobile Only Image */}
              <div className="lg:hidden mb-6 rounded-2xl overflow-hidden aspect-video relative bg-[#f5f5f7]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
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
                 <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide">{project.category}</span>
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
            <div className="rounded-2xl overflow-hidden aspect-video relative bg-[#f5f5f7] shadow-sm">
               <img 
                 key={activeProject} // Triggers animation on change
                 src={PROJECTS[activeProject].image} 
                 alt={PROJECTS[activeProject].title}
                 className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
               />
            </div>
            
            <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500" key={`desc-${activeProject}`}>
              <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide">
                {PROJECTS[activeProject].category}
              </span>
              <p className="text-xl text-[#1d1d1f] font-medium leading-relaxed max-w-xl">
                {PROJECTS[activeProject].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
