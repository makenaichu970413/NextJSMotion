// ####################################
// React && Plugins
// ####################################
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// ####################################

// ####################################
// Data
// ####################################
import { svgVariants, pathVariants } from "../data/MotionVariants";
// ####################################

// pathVariants

const Header = () => {
  return (
    <header>
      <Link href="/">
        <motion.div
          className="logo"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
        >
          <motion.svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              variants={pathVariants}
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <motion.path
              variants={pathVariants}
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            />
          </motion.svg>
        </motion.div>
      </Link>

      <motion.div
        className="title"
        initial={{ y: -100 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
