import { motion, useIsPresent } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { useContext, useEffect, useRef } from 'react';
import PageTransitionContext from '../context/PageTransitionContext';

gsap.registerPlugin(ScrollTrigger);
const animationConfiguration = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};

const PageTransition = ({ children }) => {
  const { PageTransitionOff, PageTransitionOn } = useContext(
    PageTransitionContext
  );

  const isPresent = useIsPresent();

  const onenter = useRef(true);
  useEffect(() => {
    if (onenter.current === true) {
      PageTransitionOff();
      // console.log('enter');
    } else {
      PageTransitionOn();
      // console.log('exit');
    }
    onenter.current = !onenter.current;
    // eslint-disable-next-line
  }, [isPresent]);

  return (
    <motion.div
      variants={animationConfiguration}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 1.6 }}
      className='h-100 w-100'
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
