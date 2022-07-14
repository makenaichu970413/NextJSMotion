// ####################################
// React && Plugins
// ####################################
import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
// ####################################

// ####################################
// REDUX
// ####################################
import { useStateValue } from "../redux/StateProvider";
// ####################################

// ####################################
// Data
// ####################################
import { overlayVariants, modalVariants } from "../data/MotionVariants";
// ####################################

function Modal() {
  const [{ modal }, dispatch] = useStateValue();
  const router = useRouter();
  const curPath = router.pathname;
  // onExitComplete={handleReset}

  const handleReset = () => {
    dispatch({ type: "SET_MODAL", modal: false });
  };

  const handleResetClick = () => {
    dispatch({ type: "SET_PIZZA", pizza: { base: "", toppings: [] } });
  };

  useEffect(() => {
    handleReset();
  }, [curPath]);

  return (
    <AnimatePresence exitBeforeEnter>
      {modal && (
        <motion.div
          className="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleReset}
        >
          <motion.div className="modal" variants={modalVariants} exit="hidden">
            <p>Want to make another pizza?</p>
            <Link href={"/"}>
              <button onClick={handleResetClick}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
