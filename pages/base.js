// ####################################
// React && Plugins
// ####################################
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// ####################################

// ####################################
// REDUX
// ####################################
import { useStateValue } from "../redux/StateProvider";
// ####################################

// ####################################
// Data
// ####################################
import {
  btnVariants,
  containerVariants,
  liVariants,
  nextBtnVariants,
} from "../data/MotionVariants";
// ####################################

export default function Base(props) {
  const [{ pizza }, dispatch] = useStateValue();
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const addBase = (base) => {
    dispatch({ type: "SET_PIZZA", pizza: { ...pizza, base } });
  };

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul className="list">
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={liVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextBtnVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href="/topping">
            <motion.button variants={btnVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
