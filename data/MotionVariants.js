// Motion Transition Property
// "default" => transition: {type: "spring", stifness: 120}
// "spring" => transition: {stifness: ✔️, duration: ❌}
// "tween" => transition: {stifness: ❌, duration: ✔️}
// *type => "spring (default)", "tween", ...
// *stifness => Higher value, More like spring
// *mass => Higher mass, more slower speed
// *damping = > Higher spring force, faster stop
// *yoyo => Set the number of time of animation playing, or "Infinity"

export const containerVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const liVariants = {
  hover: {
    scale: 1.3,
    color: "#f8e112",
    originX: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const btnVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      mass: 0.4,
      // damping: 5,
      yoyo: Infinity,
    },
  },
};

export const nextBtnVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, mass: 0.5, damping: 9 },
  },
};

// Logo
export const svgVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};

export const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

// Modal
export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
  },
};

// Loader
export const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        yoyo: Infinity,
      },
      y: {
        duration: 0.25,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
  },

  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
