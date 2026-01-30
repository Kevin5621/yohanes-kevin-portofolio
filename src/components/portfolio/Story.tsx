import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WordReveal = ({ children }: { children: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll('.word');
      if (!words) return;

      gsap.fromTo(words, 
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          }
        }
      );

      // Force refresh to ensure positions are correct after layout changes
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <p ref={containerRef} className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-[#1d1d1f] flex flex-wrap gap-x-3 gap-y-1">
      {children.trim().split(/\s+/).map((word, i) => (
        <span key={i} className="word transition-colors duration-200">
          {word}
        </span>
      ))}
    </p>
  );
};

export const Story = () => {
  return (
    <section id="story" className="min-h-screen flex flex-col justify-center pt-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="space-y-64">
        <WordReveal>
          I started by building web projects for learning and personal use. Over time, those projects grew into real client work.
        </WordReveal>
        
        <WordReveal>
          Some of my personal projects were later used as the foundation for client solutions when I started a small software studio. In those projects, I was directly involved in development — from planning and implementation to iteration after feedback.
        </WordReveal>
        
        <WordReveal>
          Today, I’m still hands-on as a developer. I enjoy working close to the code, understanding business requirements, and turning them into maintainable systems.
        </WordReveal>
      </div>
    </section>
  );
};
