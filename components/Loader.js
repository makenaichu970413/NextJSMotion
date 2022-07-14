// ####################################
// React && Plugins
// ####################################
import React from "react";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";
// ####################################

// ####################################
// Data
// ####################################
import { loaderVariants } from "../data/MotionVariants";
// ####################################

function Loader() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div className="loader-btn" onClick={() => cycleAnimation()}>
        Cycle Loader
      </div>
    </>
  );
}

export default Loader;
