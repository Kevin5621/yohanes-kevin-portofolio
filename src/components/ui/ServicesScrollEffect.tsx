import { useEffect, useRef } from 'react';

interface Category {
  title: string;
  features: string[];
}

interface ServicesScrollEffectProps {
  categories: Category[];
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function ServicesScrollEffect({
  categories,
  eyebrow,
  title,
  subtitle,
}: ServicesScrollEffectProps) {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Kumpulkan semua paragraph dari semua section
    const allParagraphs: HTMLElement[] = [];
    contentRefs.current.forEach((content) => {
      if (!content) return;
      const paragraphs = content.querySelectorAll('p');
      paragraphs.forEach((p) => {
        allParagraphs.push(p as HTMLElement);
        // Set initial state
        p.style.opacity = '0.2';
        p.style.filter = 'blur(10px)';
        p.style.transform = 'translateX(0px)';
        p.style.transition = 'all 0.1s ease-out';
      });
    });

    if (allParagraphs.length === 0) return;

    // Helper function untuk menghitung progress
    const calculateProgress = (element: HTMLElement): number => {
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = Math.abs(elementCenter - viewportCenter);
      const maxDistance = 400;
      let progress = 1 - Math.min(distance / maxDistance, 1);
      return Math.max(0, Math.min(1, progress));
    };

    // Helper function untuk interpolasi nilai
    const interpolateValues = (progress: number) => {
      let blur: number;
      let translateX: number;
      let opacity: number;

      if (progress <= 0.5) {
        const t = progress / 0.5;
        blur = 10 + (3.8327 - 10) * t;
        translateX = 0 + (20 - 0) * t;
        opacity = 0.2 + (0.6934 - 0.2) * t;
      } else {
        const t = (progress - 0.5) / 0.5;
        blur = 3.8327 + (0.0125 - 3.8327) * t;
        translateX = 20 + (30 - 20) * t;
        opacity = 0.6934 + (0.999 - 0.6934) * t;
      }

      return { blur, translateX, opacity };
    };

    // Function untuk update semua paragraph
    const updateAllParagraphs = () => {
      allParagraphs.forEach((element) => {
        const progress = calculateProgress(element);
        const { blur, translateX, opacity } = interpolateValues(progress);

        element.style.opacity = opacity.toString();
        element.style.filter = `blur(${blur}px)`;
        element.style.transform = `translateX(${translateX}px)`;
      });
    };

    // Update on scroll dengan throttling
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateAllParagraphs();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', updateAllParagraphs, { passive: true });

    // Initial update
    updateAllParagraphs();

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', updateAllParagraphs);
    };
  }, []);

  return (
    <section
      id="services-ai-addons"
      className="relative bg-background px-6 z-10"
    >
      {/* AI gradient background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        ></div>
      </div>

      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Section Header */}
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mb-24 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand text-sm font-medium mb-6">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="uppercase tracking-[0.15em]">{eyebrow}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
            style={{
              background:
                'linear-gradient(135deg, hsl(221 83% 53%) 0%, #818cf8 50%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Container dengan height yang cukup untuk sticky effect */}
      <div className="min-h-[180vh] py-16">
        <div className="mx-auto px-8">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-16 min-h-[60vh]"
              >
                {/* Sticky Title */}
                <div className="lg:w-1/4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground lg:sticky lg:top-1/2 lg:-translate-y-1/2">
                    {category.title}
                  </h3>
                </div>

                {/* Features List */}
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="lg:w-3/4"
                >
                  <div>
                    {category.features.map((feature, featureIndex) => (
                      <p
                        key={featureIndex}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground font-bold"
                      >
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
