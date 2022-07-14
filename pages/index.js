// ####################################
// React && Plugins
// ####################################
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// ####################################

// ####################################
// Components
// ####################################
import Loader from "../components/Loader";
// ####################################

// ####################################
// Data
// ####################################
import { containerVariants, btnVariants } from "../data/MotionVariants";
// ####################################

export default function Home() {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link href="/base">
        <motion.button variants={btnVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>

      <Loader />
    </motion.div>
  );
}
