export const bobbingAnimation = () =>
  {
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
    }
  };