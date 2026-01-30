export const HowIWork = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-[#d2d2d7]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-8">
            How I Work
          </h2>
          <p className="text-[2rem] md:text-[2.5rem] font-semibold leading-tight tracking-tight text-[#1d1d1f]">
            I prefer keeping things simple. I like understanding the problem first, then choosing tools that make sense for the context. I value readable code, clear communication, and steady progress.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-8">
            Contact
          </h2>
          <div className="flex flex-col gap-4">
            <a 
              href="https://wa.me/62087810211352"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-medium text-[#1d1d1f] hover:text-[#0066cc] transition-colors w-fit"
            >
              WhatsApp
            </a>
            <a 
              href="mailto:yohanes123kevin123@gmail.com"
              className="text-xl md:text-2xl font-medium text-[#1d1d1f] hover:text-[#0066cc] transition-colors w-fit"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/yohaneskevingilangpratama/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-medium text-[#1d1d1f] hover:text-[#0066cc] transition-colors w-fit"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Kevin5621"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-medium text-[#1d1d1f] hover:text-[#0066cc] transition-colors w-fit"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
