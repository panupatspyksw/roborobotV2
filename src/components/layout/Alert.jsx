import { useEffect, useRef } from 'react';
import Success from '../../assets/lottie/Success.json';
import lottie from 'lottie-web';
import { useContext } from 'react';
import SessionContext from '../context/SessionContext';
import gsap from 'gsap';

function Alert({ show }) {
  const { clearItemsInCart } = useContext(SessionContext);
  const modal = useRef();
  var AnimLottie = useRef();
  var AnimTarget = useRef();
  useEffect(() => {
    var Anim = {
      container: AnimTarget.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: Success,
    };

    lottie.loadAnimation(Anim).goToAndPlay(0);
  }, []);
  useEffect(() => {
    if (show) {
      FadeIn();
    }
    // eslint-disable-next-line
  }, [show]);

  const FadeIn = () => {
    gsap.to(modal.current, {
      opacity: 1,
      duration: 0.3,
      pointerEvents: 'fill',
      onStart: () => {
        setTimeout(() => {
          AnimLottie.current?.play();
        }, 2000);
      },
      onComplete: () => {
        setTimeout(() => {
          window.location.pathname = '/mycourses';
          clearItemsInCart();
          //   FadeOut();
        }, 1000);
      },
    });
  };
  //   const FadeOut = () => {
  //     gsap.to(modal.current, {
  //       opacity: 0,
  //       duration: 0.3,
  //       pointerEvents: 'none',
  //     });
  //   };

  return (
    <div
      className='position-fixed min-vw-100 min-vh-100 d-flex align-items-center justify-content-center'
      style={{
        zIndex: '500000',
        opacity: 0,
        pointerEvents: 'none',
        background: 'rgba(0, 0, 0, 0.700)',
      }}
      ref={modal}
    >
      <div className='p-5 bg-white col-5' style={{ borderRadius: '30px' }}>
        <div className='px-5 text-center'>
          <div className='position-relative back col-12' ref={AnimTarget}></div>
          <h1 className='fw-md pt-4'>ชำระเงินเสร็จสิ้น</h1>
        </div>
      </div>
    </div>
  );
}

export default Alert;
