
export const Projects = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-[#d2d2d7]">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-16">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {/* Project 1: SalesView */}
        <div className="group flex flex-col">
          <div className="mb-6 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50 aspect-video relative bg-[#f5f5f7]">
            <img 
              src="/work/salesview/Screenshot 2026-01-30 at 12-34-39 CRM Healthcare Platform.webp" 
              alt="SalesView CRM"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-[#1d1d1f]">SalesView</h3>
              <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide mt-1">Next.js / TS</span>
            </div>
            <p className="text-lg text-[#86868b] font-medium leading-relaxed">
              Comprehensive CRM platform for healthcare. Features lead management, route optimization, and advanced analytics.
            </p>
          </div>
        </div>

        {/* Project 2: CRM Pharmaceutical */}
        <div className="group flex flex-col">
          <div className="mb-6 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50 aspect-video relative bg-[#f5f5f7]">
            <img 
              src="/work/CRMFarmasi/dashboardLight.png" 
              alt="CRM Pharmaceutical"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
          <div className="space-y-3">
             <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-[#1d1d1f]">CRM Pharmaceutical</h3>
              <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide mt-1">Go / Next.js</span>
            </div>
            <p className="text-lg text-[#86868b] font-medium leading-relaxed">
              Enterprise-grade CRM with AI-powered insights, real-time notifications, and 20+ backend modules.
            </p>
          </div>
        </div>

        {/* Project 3: Evalique */}
        <div className="group flex flex-col">
          <div className="mb-6 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50 aspect-video relative bg-[#f5f5f7]">
            <img 
              src="/work/evalique/Screenshot from 2026-01-27 20-08-53.webp" 
              alt="Evalique Assessment Platform"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-[#1d1d1f]">Evalique</h3>
              <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide mt-1">AI / EdTech</span>
            </div>
            <p className="text-lg text-[#86868b] font-medium leading-relaxed">
              AI-powered assessment platform with automatic question generation and Google Sheets sync.
            </p>
          </div>
        </div>

        {/* Project 4: Fiber Monitoring */}
        <div className="group flex flex-col">
          <div className="mb-6 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50 aspect-video relative bg-[#f5f5f7]">
            <img 
              src="/work/FiberMonitoringImages/adminDashboard.png" 
              alt="Fiber Monitoring Project"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-[#1d1d1f]">Fiber Monitoring</h3>
              <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide mt-1">Turborepo</span>
            </div>
            <p className="text-lg text-[#86868b] font-medium leading-relaxed">
              End-to-end management solution for fiber optic installations with admin & field worker apps.
            </p>
          </div>
        </div>

        {/* Project 5: Internal ERP */}
        <div className="group flex flex-col">
          <div className="mb-6 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50 aspect-video relative bg-[#f5f5f7]">
            <img 
              src="/work/erp/Screenshot 2026-01-29 at 19-35-08 ERP System.webp" 
              alt="Internal ERP System"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-[#1d1d1f]">Internal ERP</h3>
              <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide mt-1">Operations</span>
            </div>
            <p className="text-lg text-[#86868b] font-medium leading-relaxed">
              Replaced manual processes with a streamlined ERP handling auth, roles, and complex data flows.
            </p>
          </div>
        </div>

        {/* Project 6: Sitama */}
        <div className="group flex flex-col">
          <div className="mb-6 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50 aspect-video relative bg-[#f5f5f7]">
            <img 
              src="/work/sitama/converted.webp" 
              alt="Sitama Education Platform"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
           <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-[#1d1d1f]">Sitama</h3>
              <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide mt-1">Education</span>
            </div>
            <p className="text-lg text-[#86868b] font-medium leading-relaxed">
              Internship management platform featuring a dual-role system for students and lecturers.
            </p>
          </div>
        </div>

         {/* Project 7: Digital Marketer Portfolio */}
        <div className="group flex flex-col">
          <div className="mb-6 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50 aspect-video relative bg-[#f5f5f7]">
            <img 
              src="/work/PortofolioMarketerImages/2.png" 
              alt="Digital Marketer Portfolio"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
           <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-[#1d1d1f]">Digital Marketer Portfolio</h3>
              <span className="text-xs font-semibold uppercase text-[#86868b] tracking-wide mt-1">Creative</span>
            </div>
             <p className="text-lg text-[#86868b] font-medium leading-relaxed">
              Interactive creative showcase with smooth animations and responsive design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
