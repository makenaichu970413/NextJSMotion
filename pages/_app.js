// ####################################
// React && Plugins
// ####################################
import Head from "next/head";
import { Fragment } from "react";
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
import { StateProvider } from "../redux/StateProvider";
import reducer, { initialState } from "../redux/Reducer";
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
          <link rel="icon" href="/logo.svg" />
        </Head>

        <main>
          <Header />

          <Modal />

          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </main>
      </Fragment>
    </StateProvider>
  );
}

export default MyApp;
