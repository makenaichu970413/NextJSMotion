// ####################################
// React && Plugins
// ####################################
import Head from "next/head";
import { Fragment } from "react";
import { StateProvider } from "../redux/StateProvider";
import reducer, { initialState } from "../redux/Reducer";
import { AnimatePresence } from "framer-motion";
// ####################################

// ####################################
// CSS
// ####################################
import "../styles/style.css";
// ####################################

// ####################################
// Components
// ####################################
import Header from "../components/Header";
import Modal from "../components/Modal";
// ####################################

// ####################################
// REDUX
// ####################################
import { useStateValue } from "../redux/StateProvider";
// ####################################

function MyApp({ Component, pageProps, router }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Fragment>
        <Head>
          <title>NextJS Motion</title>
          <meta
            name="description"
            content="Interact NextJS Web App with Framer Motion"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Modal />

        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Fragment>
    </StateProvider>
  );
}

export default MyApp;