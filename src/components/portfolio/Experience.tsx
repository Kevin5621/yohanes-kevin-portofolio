
export const Experience = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-[#d2d2d7]">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-16">
        Experience
      </h2>
      
      <div className="space-y-4">
        <h3 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f]">
          Founder / Web Developer <span className="text-[#86868b]"> — Gilabs</span>
        </h3>
        
        <ul className="space-y-6 mt-12 max-w-3xl">
          <li className="text-2xl font-medium text-[#1d1d1f] leading-relaxed">
            Worked directly on frontend development for ERP and internal tools.
          </li>
          <li className="text-2xl font-medium text-[#1d1d1f] leading-relaxed">
             Built authentication flows, dashboards, and data-driven UI.
          </li>
          <li className="text-2xl font-medium text-[#1d1d1f] leading-relaxed">
             Collaborated with backend developers and stakeholders.
          </li>
          <li className="text-2xl font-medium text-[#1d1d1f] leading-relaxed">
             Maintained and iterated existing systems based on real user feedback.
          </li>
        </ul>
      </div>
    </section>
  );
};
