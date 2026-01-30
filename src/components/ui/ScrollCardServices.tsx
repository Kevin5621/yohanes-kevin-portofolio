"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LottieIcon } from "./LottieIcon";

interface ServiceItem {
  title: string;
  body: string[];
  tagline: string;
}

interface ScrollCardServicesProps {
  title: string;
  subtitle: string;
  items: ServiceItem[];
  ctaText: string;
  lang: string;
}

// Lottie animation paths for each service
const serviceLottieIcons = [
  "/icon/web-developer.gif",
  "/icon/mobile.gif",
  "/icon/system.gif",
  "/icon/maintenance.gif",
];

// Features for each service
const serviceFeatures: Record<string, { en: string[]; id: string[] }> = {
  "Web Development": {
    en: [
      "Modern Tech Stack",
      "SEO Optimized",
      "Mobile Responsive",
      "Fast Loading",
      "CMS Integration",
    ],
    id: [
      "Tech Stack Modern",
      "SEO Optimized",
      "Mobile Responsive",
      "Loading Cepat",
      "Integrasi CMS",
    ],
  },
  "Mobile App Development": {
    en: [
      "Cross-platform Development",
      "Native Performance",
      "Push Notifications",
      "Offline Capable",
      "App Store Ready",
    ],
    id: [
      "Cross-platform",
      "Performa Native",
      "Push Notifications",
      "Mode Offline",
      "Siap App Store",
    ],
  },
  "System & Integration": {
    en: [
      "Enterprise Architecture",
      "API Development",
      "Database Design",
      "Third-party Integration",
      "Workflow Automation",
    ],
    id: [
      "Arsitektur Enterprise",
      "Pengembangan API",
      "Desain Database",
      "Integrasi Pihak Ketiga",
      "Otomatisasi Workflow",
    ],
  },
  "Maintenance & Support": {
    en: [
      "24/7 Monitoring",
      "Security Updates",
      "Performance Optimization",
      "Bug Fixes",
      "SLA Guarantee",
    ],
    id: [
      "Monitoring 24/7",
      "Update Keamanan",
      "Optimasi Performa",
      "Bug Fixes",
      "Jaminan SLA",
    ],
  },
};

// Background colors for image area
const cardBgColors = [
  "bg-amber-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-rose-400",
];

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
  lang: string;
}

function ServiceCard({ item, index, lang }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 0.3"],
  });

  const springConfig = { stiffness: 80, damping: 25, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const y = useTransform(smoothProgress, [0, 1], [80, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.9, 1]);

  const features = serviceFeatures[item.title]?.[lang as "en" | "id"] || serviceFeatures[item.title]?.en || [];

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="sticky top-16 md:top-20 mb-6 md:mb-8"
    >
      <div
        className="
          relative overflow-hidden rounded-2xl md:rounded-3xl
          bg-card
          border border-border
          shadow-lg
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] md:min-h-[450px]">
          {/* Left Content */}
          <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight mb-6">
              {item.title}
            </h3>

            {/* Description */}
            <div className="space-y-3 mb-8">
              {item.body.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Feature List */}
            <div className="space-y-2.5">
              {features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center gap-3 text-sm md:text-base text-foreground">
                  <svg className="w-4 h-4 text-brand shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Illustration Area */}
          <div className={`${cardBgColors[index % cardBgColors.length]} relative flex items-center justify-center p-8 md:p-12 min-h-[250px] lg:min-h-0`}>
            {/* Lottie Animation */}
            <div className="relative z-10">
              <LottieIcon
                src={serviceLottieIcons[index % serviceLottieIcons.length]}
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/30 blur-2xl" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Loading skeleton
function LoadingSkeleton() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-block w-28 h-7 bg-muted rounded-full animate-pulse mb-5" />
          <div className="h-14 md:h-18 bg-muted rounded-lg animate-pulse mb-4" />
          <div className="h-16 bg-muted rounded-lg animate-pulse max-w-2xl mx-auto" />
        </div>
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[400px] md:h-[450px] bg-muted rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ScrollCardServices({
  title,
  subtitle,
  items,
  ctaText,
  lang,
}: ScrollCardServicesProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <LoadingSkeleton />;
  }

  return (
    <section id="services" className="bg-background">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brand/10 text-brand text-xs font-medium uppercase tracking-wider">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span>{lang === "en" ? "Our Services" : "Layanan Kami"}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-5 leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto px-4 md:px-6 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          {items.map((item, index) => (
            <ServiceCard
              key={index}
              item={item}
              index={index}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



