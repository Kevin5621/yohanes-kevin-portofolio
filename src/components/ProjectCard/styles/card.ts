export const getCardStyle = (
    cardVisible: boolean,
    isHovered: boolean,
    isTransitioning: boolean,
    theme: string,
    scrollProgress: number
  ) => {
    const baseIntensity = 1;
    const scrollEffect = scrollProgress * 1.2;
    const shadowIntensity = Math.max(baseIntensity - scrollEffect, 0);

    const getShadow = (isDark: boolean) => {
      const factor = 16 * shadowIntensity;
      return isDark
        ? `${factor}px ${factor}px ${factor * 2}px #151515,
           ${-factor}px ${-factor}px ${factor * 2}px #353535,
           0 0 ${factor}px rgba(21, 21, 21, 0.7)`
        : `${factor}px ${factor}px ${factor * 2}px #d1d1d1,
           ${-factor}px ${-factor}px ${factor * 2}px #ffffff,
           0 0 ${factor}px rgba(209, 209, 209, 0.7)`;
    };

    return {
      transform: `
        scale(${cardVisible ? (isHovered ? 1.02 : 1) : 0.95})
        translateY(${isHovered ? -8 : 0}px)
      `,
      boxShadow: cardVisible ? getShadow(theme === 'dark') : 'none',
      opacity: cardVisible ? 1 : 0,
      transition: isTransitioning 
        ? 'transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
        : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };