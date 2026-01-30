
export const Projects = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-[#d2d2d7]">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-16">
        Selected Projects
      </h2>

      <div className="grid gap-32">
        {/* Project 1: SalesView */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 group">
          <div className="md:col-span-12">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50">
              <img 
                src="/work/salesview/Screenshot 2026-01-30 at 12-34-39 CRM Healthcare Platform.webp" 
                alt="SalesView CRM"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-[#1d1d1f]">SalesView</h3>
            <p className="text-xl text-[#86868b] font-medium">Comprehensive Customer Relationship Management (CRM) platform designed specifically for the healthcare industry.</p>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Tech</h4>
              <p className="text-base text-[#1d1d1f] font-medium">Next.js / TypeScript / TanStack Query / Tailwind CSS</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Key Features</h4>
              <ul className="space-y-1">
                 <li className="text-base text-[#1d1d1f]">Lead & Pipeline Management</li>
                 <li className="text-base text-[#1d1d1f]">Advanced Data Visualization</li>
                 <li className="text-base text-[#1d1d1f]">Route Optimization</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
             <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Context</h4>
              <p className="text-lg text-[#1d1d1f] leading-relaxed">
                This application helps sales teams and management in managing leads, monitoring sales performance, scheduling visits, and visualizing geographic data in real-time. Built with modern architecture based on Next.js 16.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2: CRM Pharmaceutical */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 group">
          <div className="md:col-span-12">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50">
              <img 
                src="/work/CRMFarmasi/dashboardLight.png" 
                alt="CRM Pharmaceutical"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-[#1d1d1f]">CRM Pharmaceutical</h3>
            <p className="text-xl text-[#86868b] font-medium">Intelligent Healthcare CRM with AI-Powered Insights.</p>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Tech</h4>
              <p className="text-base text-[#1d1d1f] font-medium">Go / Next.js / TypeScript / PostgreSQL / Cerebras AI</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Key Features</h4>
              <ul className="space-y-1">
                 <li className="text-base text-[#1d1d1f]">AI Chatbot Integration</li>
                 <li className="text-base text-[#1d1d1f]">20+ Backend Modules</li>
                 <li className="text-base text-[#1d1d1f]">Real-time Notifications</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
             <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Context</h4>
              <p className="text-lg text-[#1d1d1f] leading-relaxed">
                 A comprehensive, enterprise-grade CRM platform designed specifically for pharmaceutical and healthcare companies. Features advanced analytics for managing accounts, leads, deals, visit reports, and sales pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3: Evalique */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 group">
          <div className="md:col-span-12">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50">
              <img 
                src="/work/evalique/Screenshot from 2026-01-27 20-08-53.webp" 
                alt="Evalique Assessment Platform"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-[#1d1d1f]">Evalique Assessment Platform</h3>
            <p className="text-xl text-[#86868b] font-medium">AI-powered assessment and training evaluation platform.</p>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Tech</h4>
              <p className="text-base text-[#1d1d1f] font-medium">Next.js / TypeScript / Go / PostgreSQL / Cerebras AI</p>
            </div>
             <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Key Features</h4>
              <ul className="space-y-1">
                 <li className="text-base text-[#1d1d1f]">AI Question Generator</li>
                 <li className="text-base text-[#1d1d1f]">Google Sheets Sync</li>
                 <li className="text-base text-[#1d1d1f]">Comprehensive Analytics</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
             <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Context</h4>
              <p className="text-lg text-[#1d1d1f] leading-relaxed">
                 Designed to help organizations create, manage, and analyze training assessment results comprehensively. Includes automatic question generation using AI and real-time syncing.
              </p>
            </div>
          </div>
        </div>

        {/* Project 4: Fiber Monitoring */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 group">
          <div className="md:col-span-12">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50">
              <img 
                src="/work/FiberMonitoringImages/adminDashboard.png" 
                alt="Fiber Monitoring Project"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-[#1d1d1f]">Fiber Monitoring Project</h3>
            <p className="text-xl text-[#86868b] font-medium">End-to-end solution for managing fiber optic installations.</p>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Tech</h4>
              <p className="text-base text-[#1d1d1f] font-medium">Next.js / TypeScript / Supabase / Turborepo</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
             <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Context</h4>
              <p className="text-lg text-[#1d1d1f] leading-relaxed">
                A monorepo solution with two main applications: Admin dashboard for management and Waspang interface for field workers to submit reports and track milestones.
              </p>
            </div>
          </div>
        </div>

        {/* Project 5: Internal ERP (Existing) */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 group">
          <div className="md:col-span-12">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50">
              <img 
                src="/work/erp/Screenshot 2026-01-29 at 19-35-08 ERP System.webp" 
                alt="Internal ERP System"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-[#1d1d1f]">Internal ERP System</h3>
            <p className="text-xl text-[#86868b] font-medium">Internal ERP system for operational workflows.</p>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Tech</h4>
              <p className="text-base text-[#1d1d1f] font-medium">React / Next.js / REST API / Tailwind</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">My Role</h4>
              <p className="text-base text-[#1d1d1f] font-medium">Frontend Developer</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
             <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Context</h4>
              <p className="text-lg text-[#1d1d1f] leading-relaxed">Built to replace manual processes and spreadsheets used daily by internal teams. Handled authentication, role-based access, and complex data forms.</p>
            </div>
          </div>
        </div>

        {/* Project 6: Sitama */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 group">
          <div className="md:col-span-12">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50">
              <img 
                src="/work/sitama/converted.webp" 
                alt="Sitama Education Platform"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-[#1d1d1f]">Sitama</h3>
            <p className="text-xl text-[#86868b] font-medium">Internship management platform for Politeknik Negeri Semarang.</p>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Tech</h4>
              <p className="text-base text-[#1d1d1f] font-medium">Dart / Laravel / SQL / Firebase</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
             <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Context</h4>
              <p className="text-lg text-[#1d1d1f] leading-relaxed">
                 Features a dual-role system for students and lecturers. Allows tracking internship progress, digital logbooks, and guidance scheduling.
              </p>
            </div>
          </div>
        </div>

        {/* Project 7: Portfolio Digital Marketer */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 group">
          <div className="md:col-span-12">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-sm border border-[#d2d2d7]/50">
              <img 
                src="/work/PortofolioMarketerImages/2.png" 
                alt="Portfolio Website Digital Marketer"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-[#1d1d1f]">Digital Marketer Portfolio</h3>
            <p className="text-xl text-[#86868b] font-medium">Modern portfolio website for creative professionals.</p>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Tech</h4>
              <p className="text-base text-[#1d1d1f] font-medium">Next.js / React / Framer Motion</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
             <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Context</h4>
              <p className="text-lg text-[#1d1d1f] leading-relaxed">
                 Features animated project galleries, interactive reveal effects, and a responsive design to showcase creative work and skills effectively.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
