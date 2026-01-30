import { useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './Hero';
import { Story } from './Story';
import { Projects } from './Projects';
import { HowIWork } from './HowIWork';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export const PortfolioHome = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize Lenis
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      // Synchronize Lenis and ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      const update = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(update);
        lenis.destroy();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="portfolio-wrapper min-h-screen">
      <Hero />
      <Story />
      <Projects />
      <HowIWork />
    </div>
  );
};
