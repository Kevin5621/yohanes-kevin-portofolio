"use client";

import { useEffect, useRef, useState } from "react";

interface LottieIconProps {
  src: string;
  className?: string;
}

declare global {
  interface Window {
    lottie: unknown;
  }
}

// Type helper for lottie animation
interface LottieAnimation {
  destroy: () => void;
}

interface LottiePlayer {
  loadAnimation: (config: {
    container: HTMLElement;
    renderer: string;
    loop: boolean;
    autoplay: boolean;
    path: string;
  }) => LottieAnimation;
}

export function LottieIcon({ src, className = "" }: LottieIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<LottieAnimation | null>(null);
  const [lottieLoaded, setLottieLoaded] = useState(false);

  // Detect if source is a GIF
  const isGif = src.toLowerCase().endsWith(".gif");

  useEffect(() => {
    // Skip lottie loading if it's a GIF
    if (isGif) return;
    if (!containerRef.current) return;

    // Check if lottie is already loaded
    if (window.lottie) {
      setLottieLoaded(true);
      return;
    }

    // Load lottie-web from CDN only once
    const existingScript = document.querySelector('script[src*="lottie"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => setLottieLoaded(true));
      if (window.lottie) {
        setLottieLoaded(true);
      }
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
    script.async = true;
    script.onload = () => {
      setLottieLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [isGif]);

  useEffect(() => {
    // Skip for GIF files
    if (isGif) return;
    if (!lottieLoaded || !containerRef.current || !window.lottie) return;

    // Destroy existing animation if any
    if (animationRef.current) {
      animationRef.current.destroy();
    }

    const lottiePlayer = window.lottie as LottiePlayer;
    animationRef.current = lottiePlayer.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: src,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [src, lottieLoaded, isGif]);

  // Render GIF using img tag
  if (isGif) {
    return (
      <img
        src={src}
        alt=""
        className={className}
        style={{ objectFit: "contain" }}
      />
    );
  }

  // Render Lottie using div container
  return <div ref={containerRef} className={className} />;
}

