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
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden"
    >
      <div className="max-w-4xl pt-20">
        <h1 ref={titleRef} className="text-[5rem] md:text-[8rem] font-semibold tracking-tighter leading-[0.9] mb-12 text-[#1d1d1f]">
          Hi, I’m Kevin.
        </h1>
        <p ref={textRef} className="text-2xl md:text-3xl font-medium leading-normal text-[#1d1d1f] max-w-2xl opacity-0">
          I’m a web developer who started by building personal projects, then ended up working with real clients through a small software studio.
        </p>
      </div>
    </section>
  );
};
