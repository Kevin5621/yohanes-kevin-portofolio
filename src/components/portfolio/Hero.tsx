import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        skewY: 2,
      })
      .from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
      }, "-=1.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      <div className="max-w-4xl">
        <h1 ref={titleRef} className="text-[4rem] md:text-[6rem] font-semibold tracking-tighter leading-[0.95] mb-4 text-[#1d1d1f]">
          Hi, I’m Kevin.
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 ml-1">
          <p className="text-xl md:text-2xl font-medium text-[#86868b]">Web Developer</p>
          <div className="hidden md:block w-px h-6 bg-[#d2d2d7]"></div>
          
          <div className="flex flex-wrap gap-6 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { src: "/logo/go-svgrepo-com.svg", alt: "Go Logo" },
              { src: "/logo/tailwind-svgrepo-com.svg", alt: "Tailwind CSS Logo" },
              { src: "/logo/astro-svgrepo-com.svg", alt: "Astro Logo" },
              { src: "/logo/nextjs-icon-svgrepo-com.svg", alt: "Next.js Logo" },
              { src: "/logo/typescript-svgrepo-com.svg", alt: "TypeScript Logo" },
              { src: "/logo/supabase-logo-icon.svg", alt: "Supabase Logo" }
            ].map((logo, index) => (
              <img 
                key={index} 
                src={logo.src} 
                alt={logo.alt} 
                className="h-5 md:h-6 w-auto object-contain hover:scale-110 transition-transform duration-300" 
              />
            ))}
          </div>
        </div>
        
        <p ref={textRef} className="text-xl md:text-2xl font-medium leading-relaxed text-[#1d1d1f] max-w-2xl opacity-0">
          I’m a web developer who started by building personal projects, then ended up working with real clients through a small software studio.
        </p>
      </div>
    </section>
  );
};
