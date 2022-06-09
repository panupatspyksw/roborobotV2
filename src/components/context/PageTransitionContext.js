import React, { createContext, useContext, useRef } from 'react';
import gsap from 'gsap';
import HeaderContext from './HeaderContext';
const PageTransitionContext = createContext();

export const PageTransitionProvider = ({ children }) => {
  const { menulinks } = useContext(HeaderContext);

  const Path = useRef();
  const tl = useRef(gsap.timeline());

  const PageTransitionOn = () => {
    let $path = Path.current;
    const start = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
    const end = 'M 0 100 V 0 Q 50 0 100 0 V 100 z';
    tl.current
      .to($path, 0.8, {
        attr: { d: start },
        ease: 'Power1.easeIn',
        onStart: () => {
          Path.current.parentElement.style.pointerEvents = 'fill';
        },
      })
      .to($path, 0.5, {
        attr: { d: end },
        ease: 'Power2.easeOut',
        onComplete: () => {
          menulinks.current.classList.remove('active');
        },
      });
  };

  const PageTransitionOff = () => {
    let $path = Path.current;
    const start = 'M 0 100 V 30 Q 50 70 100 30 V 100 z';
    const end = 'M 0 100 V 100 Q 50 100 100 100 V 100 z';
    // const end = 'M 0 100 V 100 Q 50 100 100 100 V 100 z';

    // const end = 'M 0 100 V 100 Q 50 100 100 100 V 100 z';
    tl.current
      .to($path, 0.8, {
        attr: { d: start },
        ease: 'Power1.easeIn',
        onStart: () => {
          Path.current.parentElement.style.pointerEvents = 'fill';
        },
      })
      .to($path, 0.5, {
        attr: { d: end },
        ease: 'Power2.easeOut',
        onStart: () => {
          Path.current.parentElement.style.pointerEvents = 'none';
        },
      });
  };

  return (
    <PageTransitionContext.Provider
      value={{ Path, PageTransitionOn, PageTransitionOff, tl: tl.current }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};

export default PageTransitionContext;
