import { useState } from "react";

export function cardClick(isPressed: boolean, cardVisible: boolean, scrollProgress: number) {
    return () => {
      const scale = isPressed
        ? 0.98
        : cardVisible
          ? 1 - scrollProgress * 0.02
          : 0.95;
  
      // shadow intensity calculation with faster falloff
      const baseIntensity = 1;
      const scrollEffect = scrollProgress * 1.2;
      const shadowIntensity = Math.max(baseIntensity - scrollEffect, 0);
  
      // Light theme shadows
      const lightOuterShadow = `
        ${32 * shadowIntensity}px ${32 * shadowIntensity}px ${64 * shadowIntensity}px #d1d1d1,
        ${-32 * shadowIntensity}px ${-32 * shadowIntensity}px ${64 * shadowIntensity}px #ffffff,
        0 0 ${30 * shadowIntensity}px rgba(209, 209, 209, 0.7)
      `;
  
      const lightInsetShadow = `
        inset 24px 24px 48px #d1d1d1,
        inset -24px -24px 48px #ffffff,
        inset 0 0 30px rgba(209, 209, 209, 0.7)
      `;
  
      // Dark theme shadows
      const darkOuterShadow = `
        ${32 * shadowIntensity}px ${32 * shadowIntensity}px ${64 * shadowIntensity}px #151515,
        ${-32 * shadowIntensity}px ${-32 * shadowIntensity}px ${64 * shadowIntensity}px #353535,
        0 0 ${30 * shadowIntensity}px rgba(21, 21, 21, 0.7)
      `;
  
      const darkInsetShadow = `
        inset 24px 24px 48px #151515,
        inset -24px -24px 48px #353535,
        inset 0 0 30px rgba(21, 21, 21, 0.7)
      `;
  
      const isDark = window.document.documentElement.classList.contains('dark');
      const shadow = isPressed
        ? (isDark ? darkInsetShadow : lightInsetShadow)
        : (isDark ? darkOuterShadow : lightOuterShadow);
  
      return {
        transform: `scale(${scale})`,
        boxShadow: shadow,
        transitionProperty: 'transform, box-shadow, opacity',
        transitionDuration: '1000ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      };
    };
  }
  
export function cardHover(cardVisible: boolean, scrollProgress: number, isHovered: boolean) {
    return () => {
        const scale = cardVisible
        ? isHovered 
            ? 1.02  
            : 1     
        : cardVisible
            ? 1 - scrollProgress * 0.02
            : 0.95;   

        const baseIntensity = isHovered ? 0.8 : 0.6;
        const scrollEffect = scrollProgress * 1.2;
        const shadowIntensity = Math.max(baseIntensity - scrollEffect, 0);
        const [isExpanded] = useState(false);

        const lightOuterShadow = `
        ${16 * shadowIntensity}px ${16 * shadowIntensity}px ${32 * shadowIntensity}px #d1d1d1,
        ${-16 * shadowIntensity}px ${-16 * shadowIntensity}px ${32 * shadowIntensity}px #ffffff,
        0 0 ${20 * shadowIntensity}px rgba(209, 209, 209, 0.5)
        `;

        const darkOuterShadow = `
        ${16 * shadowIntensity}px ${16 * shadowIntensity}px ${32 * shadowIntensity}px #151515,
        ${-16 * shadowIntensity}px ${-16 * shadowIntensity}px ${32 * shadowIntensity}px #353535,
        0 0 ${20 * shadowIntensity}px rgba(21, 21, 21, 0.5)
        `;

        const isDark = window.document.documentElement.classList.contains('dark');
        const shadow = isDark ? darkOuterShadow : lightOuterShadow;

        return {
        transform: `scale(${scale})`,
        boxShadow: shadow,
        transitionProperty: 'transform, box-shadow, opacity',
        transitionDuration: '800ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        height: isExpanded ? 'auto' : 'auto',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        };
    };
}