import React, { createContext, useContext, useRef } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeaderContext from './HeaderContext';
const ScrollContext = createContext();
gsap.registerPlugin(ScrollTrigger);

export function ScrollToTop() {
  const { RestartScroll } = useContext(ScrollContext);
  const { pathname } = useLocation();
  useEffect(() => {
    RestartScroll();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname]);

  return null;
}

export const ScrollProvider = ({ children }) => {
  const { dispatch } = useContext(HeaderContext);

  const locoScroll = useRef();
  const scrollRef = React.createRef();

  function RestartScroll() {
    if (document.querySelectorAll('.c-scrollbar').length) {
      document
        .querySelectorAll('.c-scrollbar')
        .forEach(async (element, index) => {
          element.remove();
        });
    }

    var scroll = locoScroll.current;

    scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    scroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.refresh();

    ScrollTrigger.create({
      trigger: scrollRef.current,
      start: '30px top',
      // markers: true,
      invalidateOnRefresh: true,

      end: '30px top',
      scroller: scrollRef.current,
      onEnter: () => {
        dispatch({ type: 'HIDING' });
      },
      onEnterBack: () => {
        dispatch({ type: 'SHOWING' });
      },
    });

    scrollRef.current.querySelectorAll('.bg-white').forEach((ele, key) => {
      ScrollTrigger.create({
        trigger: ele,
        start: '0% 70px',
        end: '100% 70px',
        invalidateOnRefresh: true,

        scroller: scrollRef.current,
        // markers: true,
        onEnter: () => {
          dispatch({ type: 'SwitchNavToLight' });
        },
        onEnterBack: () => {
          dispatch({ type: 'SwitchNavToLight' });
        },
      });
    });
    scrollRef.current.querySelectorAll('.main-bg-color').forEach((ele, key) => {
      ScrollTrigger.create({
        trigger: ele,
        start: '0% 70px',
        // markers: true,
        end: '100% 70px',
        scroller: scrollRef.current,
        onEnter: () => {
          dispatch({ type: 'SwitchNavToDark' });
        },
        onEnterBack: () => {
          dispatch({ type: 'SwitchNavToDark' });
        },
      });
    });
  }

  return (
    <ScrollContext.Provider
      value={{
        scroll: locoScroll.current,
        RestartScroll,
        scrollRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
