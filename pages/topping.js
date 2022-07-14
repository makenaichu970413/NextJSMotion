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
  containerVariants,
  btnVariants,
  liVariants,
  nextBtnVariants,
} from "../data/MotionVariants";
// ####################################

let toppings = [
  "mushrooms",
  "peppers",
  "onions",
  "olives",
  "extra cheese",
  "tomatoes",
];

export default function Toppings(props) {
  const [{ pizza }, dispatch] = useStateValue();

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    dispatch({ type: "SET_PIZZA", pizza: { ...pizza, toppings: newToppings } });
  };

  const list = () => {
    return toppings.map((item) => {
      let spanClass = pizza.toppings.includes(item) ? "active" : "";
      return (
        <motion.li
          key={item}
          onClick={() => addTopping(item)}
          variants={liVariants}
          whileHover="hover"
        >
          <span className={spanClass}>{item}</span>
        </motion.li>
      );
    });
  };

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul className="list">{list()}</ul>

      {pizza.toppings.length > 0 && (
        <motion.div variants={nextBtnVariants}>
          <Link href="/order">
            <motion.button variants={btnVariants} whileHover="hover">
              Order
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
