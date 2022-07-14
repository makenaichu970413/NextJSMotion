// ####################################
// React && Plugins
// ####################################
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// ####################################

// ####################################
// REDUX
// ####################################
import { useStateValue } from "../redux/StateProvider";
// ####################################

// ####################################
// Data
// ####################################
import { containerVariants, childVariants } from "../data/MotionVariants";
// ####################################

export default function Order(props) {
  const [{ pizza, modal }, dispatch] = useStateValue();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SET_MODAL", modal: true });
    }, 4000);
  }, []);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a <span>{pizza.base}</span> pizza with:
      </motion.p>
      <motion.div className="list" variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
}
