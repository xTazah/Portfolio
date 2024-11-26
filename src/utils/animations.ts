export const bobbingAnimation = () => {
  return {
    hidden: { y: 0, rotateZ: 0 },
    show: {
      y: [0, -0.3, 0, -0.2, 0],
      rotateZ: [0, 0.03, -0.03, 0],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
};

export const textEntry = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const wavingAnimation = () => {
  return {
    hidden: { rotate: 0 },
    show: {
      rotate: [0, 20, -10, 10, -5, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
    hover: {
      rotate: 15,
      scale: 1.2,
    },
  };
};
