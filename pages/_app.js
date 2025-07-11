import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;