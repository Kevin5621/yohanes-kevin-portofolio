import { useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Hero } from './Hero';
import { Story } from './Story';
import { Projects } from './Projects';
import { HowIWork } from './HowIWork';
import 'lenis/dist/lenis.css';

export const PortfolioHome = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
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
