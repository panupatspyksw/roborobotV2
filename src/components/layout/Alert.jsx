import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Alert({ show }) {
  const modal = useRef();
  useEffect(() => {
    if (show) {
      FadeIn();
    }
  }, [show]);

  const FadeIn = () => {
    gsap.to(modal.current, {
      opacity: 1,
      duration: 0.3,
      pointerEvents: 'fill',
      onComplete: () => {
        setTimeout(() => {
          //   FadeOut();
        }, 2000);
      },
    });
  };

  const FadeOut = () => {
    gsap.to(modal.current, {
      opacity: 0,
      duration: 0.3,
      pointerEvents: 'none',
    });
  };

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
      <div className='p-5 bg-white' style={{ borderRadius: '30px' }}>
        <div className='p-5'>
          <div className='text-xl fw-md'>ชำระเงินเสร็จสิ้น</div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
