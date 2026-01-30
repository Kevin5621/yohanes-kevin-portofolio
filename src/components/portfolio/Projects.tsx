
export const Projects = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-[#d2d2d7]">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-16">
        Selected Projects
      </h2>

      <div className="grid gap-24">
        {/* Project 1 */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 group">
          <div className="md:col-span-12">
            <h3 className="text-3xl font-semibold mb-2 text-[#1d1d1f]">Internal ERP System</h3>
            <p className="text-xl text-[#86868b] font-medium">Internal ERP system for operational workflows.</p>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">My Role</h4>
              <p className="text-base text-[#1d1d1f] font-medium">Frontend developer responsible for UI, state management, and integration with APIs.</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Tech</h4>
              <p className="text-base text-[#1d1d1f] font-medium">React / Next.js / REST API / Tailwind</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
             <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-2 tracking-wide">Context</h4>
              <p className="text-lg text-[#1d1d1f] leading-relaxed">Built to replace manual processes and spreadsheets used daily by internal teams.</p>
            </div>
            
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#86868b] mb-3 tracking-wide">What I worked on</h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-center text-[#1d1d1f] text-base">
                  <span className="mr-3 h-1 w-1 rounded-full bg-[#1d1d1f] shrink-0" />
                  Authentication & role-based access
                </li>
                <li className="flex items-center text-[#1d1d1f] text-base">
                  <span className="mr-3 h-1 w-1 rounded-full bg-[#1d1d1f] shrink-0" />
                  Data tables and forms
                </li>
                <li className="flex items-center text-[#1d1d1f] text-base">
                  <span className="mr-3 h-1 w-1 rounded-full bg-[#1d1d1f] shrink-0" />
                  Error handling & loading states
                </li>
                <li className="flex items-center text-[#1d1d1f] text-base">
                  <span className="mr-3 h-1 w-1 rounded-full bg-[#1d1d1f] shrink-0" />
                  Performance and UX improvements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
