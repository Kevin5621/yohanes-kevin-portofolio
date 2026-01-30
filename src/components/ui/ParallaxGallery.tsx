'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import LightRays from './LightRays';

// Responsive dimensions
const getDimensions = (isMobile: boolean) => ({
  columnWidth: isMobile ? 160 : 500,
  imageHeight: isMobile ? 100 : 312,
  gap: isMobile ? 12 : 20,
  columns: isMobile ? 2 : 4,
  containerHeight: isMobile ? '100vh' : '175vh',
});

interface ParallaxGalleryProps {
  images: string[];
  lang?: string;
}

const ParallaxGallery = ({ images, lang = 'en' }: ParallaxGalleryProps) => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const dimensions = getDimensions(isMobile);
  
  // Adjust parallax speeds
  const y = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.3 : 0.5)]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.6 : 1.0)]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.25 : 0.4)]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.45 : 0.8)]);

  // Scale transform:
  const scale = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? [1.05, 1] : [1.15, 1]
  );

  useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;

    // Expose Lenis instance to window for drawer to access
    (globalThis as any).lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimension({ width, height });
      setIsMobile(width < 768); // Mobile breakpoint at 768px
    };

    // Check if drawer is open and prevent Lenis from handling wheel events
    const checkDrawerAndHandleWheel = (e: WheelEvent) => {
      const drawer = document.querySelector('[data-vaul-drawer][data-state="open"]');
      const target = e.target as HTMLElement;
      
      // If drawer is open and wheel event is inside drawer, prevent Lenis from handling it
      // but allow native browser scrolling to work
      if (drawer && (drawer.contains(target) || target.closest('[data-vaul-drawer]'))) {
        e.stopPropagation();
        // Don't preventDefault - allow native scroll to work
      }
    };

    // Listen for wheel events in capture phase to intercept before Lenis
    window.addEventListener('wheel', checkDrawerAndHandleWheel, { capture: true, passive: false });

    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('wheel', checkDrawerAndHandleWheel, { capture: true } as any);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // Clean up global reference
      if ((globalThis as any).lenis === lenis) {
        delete (globalThis as any).lenis;
      }
    };
  }, []);

  // Filter out empty or invalid images - memoized
  const validImages = useMemo(
    () => images.filter(img => img && img.trim() !== ''),
    [images]
  );
  
  // Distribute images evenly across columns WITHOUT duplication
  // Each image appears only once in the gallery
  const columnImages = useMemo(() => {
    const numColumns = isMobile ? 2 : 4;
    const columns: string[][] = Array.from({ length: numColumns }, () => []);
    
    // Distribute images across columns (round-robin)
    validImages.forEach((img, index) => {
      columns[index % numColumns].push(img);
    });
    
    return columns;
  }, [validImages, isMobile]);

  const buttonText = lang === 'id' ? 'Lihat Semua Proyek' : 'View All Projects';
  const workResultsUrl = lang === 'id' ? '/id/work-results' : '/en/work-results';

  const yTransforms = [y, y2, y3, y4];

  return (
    <div className="relative w-full bg-background text-foreground overflow-visible">
      {/* Parallax Gallery Content */}
      <motion.div
        ref={gallery}
        className="relative box-border flex overflow-hidden bg-background z-10 w-full justify-center"
        style={{ 
          scale, 
          gap: dimensions.gap, 
          padding: dimensions.gap,
          height: dimensions.containerHeight,
          willChange: 'transform',
        }}
      >
        {columnImages.map((images, colIndex) => (
          <Column 
            key={colIndex}
            images={images} 
            y={yTransforms[colIndex]} 
            dimensions={dimensions}
            columnIndex={colIndex}
          />
        ))}
      </motion.div>

      {/* LightRays Overlay - synced with Layout's LightRays */}
      <div className="absolute inset-0 z-15 pointer-events-none opacity-50">
        <LightRays 
          raysColor="#FBFBFB" 
          raysSpeed={0.5} 
          lightSpread={0.5}
          rayLength={1.5}
          raysOrigin="top-center"
          followMouse={false}
        />
      </div>

      {/* Background gradient overlay for depth effect */}
      <div className="absolute inset-0 z-16 pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-background/30" />

      {/* Centered View All Projects Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <motion.a
          href={workResultsUrl}
          className="pointer-events-auto inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold text-white bg-brand rounded-full shadow-2xl shadow-brand/30 hover:bg-brand/90 hover:shadow-brand/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          {buttonText}
        </motion.a>
      </div>
    </div>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  dimensions: ReturnType<typeof getDimensions>;
  columnIndex: number;
};

// Simple image component - no complex loading states, just render the image
const BlurImage = memo(({ src, dimensions }: { 
  src: string; 
  dimensions: ReturnType<typeof getDimensions>;
}) => {
  return (
    <div 
      className="relative overflow-hidden rounded-lg shrink-0 bg-muted"
      style={{ 
        width: dimensions.columnWidth,
        height: dimensions.imageHeight,
      }}
    >
      <img
        loading="eager"
        decoding="async"
        src={encodeURI(src)}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
});

BlurImage.displayName = 'BlurImage';

// Column offsets for visual variety - creates staggered effect
const COLUMN_OFFSETS = ['-5%', '-15%', '0%', '-8%'];

const Column = memo(({ images, y, dimensions, columnIndex }: ColumnProps) => {
  return (
    <motion.div
      className="relative flex flex-col"
      style={{ 
        y,
        top: COLUMN_OFFSETS[columnIndex] ?? '0%',
        width: dimensions.columnWidth,
        minWidth: dimensions.columnWidth,
        maxWidth: dimensions.columnWidth,
        gap: dimensions.gap,
        willChange: 'transform',
      }}
    >
      {images.map((src) => (
        <BlurImage 
          key={src}
          src={src}
          dimensions={dimensions}
        />
      ))}
    </motion.div>
  );
});

Column.displayName = 'Column';

export default ParallaxGallery;
