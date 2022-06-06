import { useContext } from 'react';
import PageTransitionContext from '../context/PageTransitionContext';

function PageTransition() {
  const { Path } = useContext(PageTransitionContext);

  return (
    <svg
      className='min-vh-100 min-vw-100 position-fixed top-0 left-0'
      style={{ zIndex: '100000' }}
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      <path
        ref={Path}
        style={{ zIndex: '1000000' }}
        stroke='#fff'
        fill='#7B91E2'
        strokeWidth='0'
        dur='10s'
        vectorEffect='non-scaling-stroke'
        // d='M 0 100 V 100 Q 50 100 100 100 V 100 z'
        d='M 0 100 V 0 Q 50 0 100 0 V 100 z'
      />
    </svg>
  );
}

export default PageTransition;
