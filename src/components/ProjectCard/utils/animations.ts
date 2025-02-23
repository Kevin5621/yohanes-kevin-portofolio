export const fadeInUp = {
    initial: {
      y: 20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  };
  
  export const staggerChildren = (staggerTime = 0.1) => ({
    animate: {
      transition: {
        staggerChildren: staggerTime
      }
    }
  });